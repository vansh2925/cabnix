import { NextResponse } from "next/server";
import { deliverEnquiry, enquiryContent, enquiryInbox } from "@/lib/send-enquiry";

const requiredFields = ["firstName", "lastName", "email", "phone", "subject", "message"] as const;

function digitCount(value: string) {
  return value.replace(/\D/g, "").length;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return NextResponse.json({ received: true }, { status: 202 });
  }

  for (const field of requiredFields) {
    const value = formData.get(field);
    if (typeof value !== "string" || value.trim().length < 2) {
      return NextResponse.json({ error: `${field} is required.` }, { status: 400 });
    }
  }

  const email = String(formData.get("email")).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  const phone = String(formData.get("phone")).trim();
  if (digitCount(phone) < 8) {
    return NextResponse.json({ error: "A valid phone number is required." }, { status: 400 });
  }

  const payload = Object.fromEntries(
    requiredFields.map((field) => [field, String(formData.get(field) || "").trim()]),
  );
  const content = enquiryContent({
    "First name": payload.firstName,
    "Last name": payload.lastName,
    Email: payload.email,
    Phone: payload.phone,
    Subject: payload.subject,
    Message: payload.message,
  });

  try {
    await deliverEnquiry({
      email: {
        subject: `CABNIX website message: ${payload.subject}`,
        replyTo: payload.email,
        text: `A contact form message was submitted for ${enquiryInbox}.\n\n${content.text}`,
        html: `<p>A contact form message was submitted for ${enquiryInbox}.</p>${content.html}`,
      },
      webhookUrl: process.env.CONTACT_WEBHOOK_URL,
      webhookPayload: payload,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "The message could not be sent.";
    const status = message.includes("not configured") ? 503 : 502;
    return NextResponse.json({ error: message }, { status });
  }

  return NextResponse.json({ received: true }, { status: 202 });
}

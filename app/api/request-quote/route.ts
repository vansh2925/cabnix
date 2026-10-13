import { NextResponse } from "next/server";
import { deliverEnquiry, enquiryContent, enquiryInbox, fileToAttachment } from "@/lib/send-enquiry";

const maxAttachmentSize = 10 * 1024 * 1024;
const requiredFields = ["name", "company", "country", "email"] as const;

export async function POST(request: Request) {
  const formData = await request.formData();

  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return NextResponse.json({ received: true }, { status: 202 });
  }

  for (const field of requiredFields) {
    const value = formData.get(field);

    if (typeof value !== "string" || value.trim().length < 2) {
      return NextResponse.json(
        { error: `${field} is required.` },
        { status: 400 },
      );
    }
  }

  const email = String(formData.get("email"));
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid business email is required." }, { status: 400 });
  }

  const quantity = formData.get("quantity");
  if (quantity && (!/^\d+$/.test(String(quantity)) || Number(quantity) < 1)) {
    return NextResponse.json({ error: "Quantity must be a positive whole number." }, { status: 400 });
  }

  const attachment = formData.get("attachment");
  if (attachment instanceof File && attachment.size > maxAttachmentSize) {
    return NextResponse.json({ error: "Attachment exceeds the 10 MB limit." }, { status: 400 });
  }

  const file = attachment instanceof File ? attachment : null;
  const mailAttachment = await fileToAttachment(file && file.size > 0 ? file : null);
  const payload = Object.fromEntries(
    [
      "name",
      "company",
      "country",
      "email",
      "phone",
      "product",
      "productCode",
      "quantity",
      "application",
      "standard",
      "message",
    ].map((field) => [field, String(formData.get(field) || "")]),
  );
  const content = enquiryContent({
    Name: payload.name,
    Company: payload.company,
    Country: payload.country,
    Email: payload.email,
    Phone: payload.phone,
    Product: payload.product,
    "Product code": payload.productCode,
    Quantity: payload.quantity,
    Application: payload.application,
    Standard: payload.standard,
    Message: payload.message,
    Attachment: mailAttachment ? mailAttachment.filename : "",
  });

  try {
    await deliverEnquiry({
      email: {
        subject: `CABNIX quote enquiry${payload.product ? `: ${payload.product}` : ""}`,
        replyTo: payload.email,
        text: `A quote enquiry was submitted for ${enquiryInbox}.\n\n${content.text}`,
        html: `<p>A quote enquiry was submitted for ${enquiryInbox}.</p>${content.html}`,
        attachment: mailAttachment,
      },
      webhookUrl: process.env.RFQ_WEBHOOK_URL,
      webhookPayload: {
        ...payload,
        attachment: mailAttachment
          ? { name: mailAttachment.filename, type: mailAttachment.contentType, size: file?.size ?? 0 }
          : null,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "The enquiry could not be submitted.";
    const status = message.includes("not configured") ? 503 : 502;
    return NextResponse.json({ error: message }, { status });
  }

  return NextResponse.json({ received: true }, { status: 202 });
}

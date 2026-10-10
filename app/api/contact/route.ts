import { NextResponse } from "next/server";

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

  if (!process.env.CONTACT_WEBHOOK_URL) {
    return NextResponse.json({ error: "Contact delivery is not configured yet." }, { status: 503 });
  }

  const payload = Object.fromEntries(
    requiredFields.map((field) => [field, String(formData.get(field) || "").trim()]),
  );

  const deliveryResponse = await fetch(process.env.CONTACT_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!deliveryResponse.ok) {
    return NextResponse.json(
      { error: "The contact delivery service rejected the request." },
      { status: 502 },
    );
  }

  return NextResponse.json({ received: true }, { status: 202 });
}

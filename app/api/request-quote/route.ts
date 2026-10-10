import { NextResponse } from "next/server";

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

  if (!process.env.RFQ_WEBHOOK_URL) {
    return NextResponse.json(
      { error: "RFQ delivery is not configured yet." },
      { status: 503 },
    );
  }

  const attachmentDetails = attachment instanceof File && attachment.size > 0
    ? { name: attachment.name, type: attachment.type, size: attachment.size }
    : null;
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

  const deliveryResponse = await fetch(process.env.RFQ_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, attachment: attachmentDetails }),
  });

  if (!deliveryResponse.ok) {
    return NextResponse.json(
      { error: "The enquiry delivery service rejected the request." },
      { status: 502 },
    );
  }

  return NextResponse.json({ received: true }, { status: 202 });
}

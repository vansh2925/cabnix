export const enquiryInbox = "info@cabnix.in";

type EnquiryAttachment = {
  filename: string;
  contentType: string;
  content: string;
};

type EnquiryEmail = {
  subject: string;
  replyTo: string;
  text: string;
  html: string;
  attachment?: EnquiryAttachment | null;
};

function rows(fields: Record<string, string>) {
  const lines = Object.entries(fields)
    .filter(([, value]) => value.trim().length > 0)
    .map(([label, value]) => `${label}: ${value}`);

  return {
    text: lines.join("\n"),
    html: `<table style="border-collapse:collapse;width:100%;max-width:640px;font:14px/1.5 Arial,sans-serif">${Object.entries(
      fields,
    )
      .filter(([, value]) => value.trim().length > 0)
      .map(
        ([label, value]) =>
          `<tr><td style="padding:8px 12px;border:1px solid #d7dee6;width:160px;font-weight:600">${escapeHtml(
            label,
          )}</td><td style="padding:8px 12px;border:1px solid #d7dee6;white-space:pre-wrap">${escapeHtml(
            value,
          )}</td></tr>`,
      )
      .join("")}</table>`,
  };
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}

export function enquiryContent(fields: Record<string, string>) {
  return rows(fields);
}

async function sendWithResend(email: EnquiryEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const from = process.env.MAIL_FROM || "CABNIX Website <noreply@cabnix.in>";
  const payload: Record<string, unknown> = {
    from,
    to: [enquiryInbox],
    reply_to: email.replyTo,
    subject: email.subject,
    text: email.text,
    html: email.html,
  };

  if (email.attachment) {
    payload.attachments = [
      {
        filename: email.attachment.filename,
        content: email.attachment.content,
        content_type: email.attachment.contentType,
      },
    ];
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail || "The mail service rejected the enquiry.");
  }

  return true;
}

async function sendWithWebhook(url: string | undefined, payload: unknown) {
  if (!url) return false;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("The enquiry delivery service rejected the request.");
  }

  return true;
}

export async function deliverEnquiry({
  email,
  webhookUrl,
  webhookPayload,
}: {
  email: EnquiryEmail;
  webhookUrl?: string;
  webhookPayload: unknown;
}) {
  let mailed = false;
  let forwarded = false;
  let lastError: Error | null = null;

  try {
    mailed = await sendWithResend(email);
  } catch (error) {
    lastError = error instanceof Error ? error : new Error("Mail delivery failed.");
  }

  try {
    forwarded = await sendWithWebhook(webhookUrl, webhookPayload);
  } catch (error) {
    if (!mailed) {
      lastError = error instanceof Error ? error : new Error("The enquiry delivery service rejected the request.");
    }
  }

  if (mailed || forwarded) return;

  throw lastError ?? new Error("Enquiry delivery is not configured yet.");
}

export async function fileToAttachment(file: File | null): Promise<EnquiryAttachment | null> {
  if (!file || file.size === 0) return null;

  const buffer = Buffer.from(await file.arrayBuffer());
  return {
    filename: file.name || "attachment",
    contentType: file.type || "application/octet-stream",
    content: buffer.toString("base64"),
  };
}

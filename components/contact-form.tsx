"use client";

import { useState, type FormEvent } from "react";

type FieldName = "firstName" | "lastName" | "email" | "phone" | "subject" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

function digits(value: string) {
  return value.replace(/\D/g, "").length;
}

function validate(form: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const firstName = String(form.get("firstName") || "").trim();
  const lastName = String(form.get("lastName") || "").trim();
  const email = String(form.get("email") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const subject = String(form.get("subject") || "").trim();
  const message = String(form.get("message") || "").trim();

  if (firstName.length < 2) errors.firstName = "Enter your first name.";
  if (lastName.length < 2) errors.lastName = "Enter your last name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  if (digits(phone) < 8) errors.phone = "Enter a valid phone number.";
  if (subject.length < 2) errors.subject = "Enter a subject.";
  if (message.length < 2) errors.message = "Enter your message.";

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm text-[#b42318]" role="alert">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [submissionState, setSubmissionState] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validate(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmissionState("error");
      setStatusMessage("Please correct the highlighted fields and try again.");
      return;
    }

    setErrors({});
    setSubmissionState("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "The message could not be sent.");
      }

      setSubmissionState("submitted");
      form.reset();
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "The message could not be sent.");
      setSubmissionState("error");
    }
  };

  return (
    <section className="bg-white pb-16 md:pb-24 lg:pb-28" aria-labelledby="contact-form-heading">
      <div className="wrap text-center">
        <p className="eyebrow text-[#2f74c8]">Get in Touch</p>
        <h2 id="contact-form-heading" className="h2 mt-3">
          Ready to Get Started?
        </h2>
      </div>

      <div className="wrap">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="mx-auto mt-10 max-w-[1100px] min-w-0 rounded-lg border border-[var(--border)] bg-white p-6 shadow-[0_12px_32px_rgba(16,24,32,0.06)] md:mt-14 md:p-10 lg:p-12"
      >
        <div className="sr-only" aria-hidden="true">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="grid min-w-0 gap-5 md:grid-cols-2">
          <label className="block min-w-0 text-sm font-medium">
            First Name *
            <input
              name="firstName"
              autoComplete="given-name"
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
              className="field"
            />
            <FieldError id="firstName-error" message={errors.firstName} />
          </label>
          <label className="block min-w-0 text-sm font-medium">
            Last Name *
            <input
              name="lastName"
              autoComplete="family-name"
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              className="field"
            />
            <FieldError id="lastName-error" message={errors.lastName} />
          </label>
          <label className="block min-w-0 text-sm font-medium">
            Your Email *
            <input
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="field"
            />
            <FieldError id="email-error" message={errors.email} />
          </label>
          <label className="block min-w-0 text-sm font-medium">
            Your Phone *
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="field"
            />
            <FieldError id="phone-error" message={errors.phone} />
          </label>
          <label className="block min-w-0 text-sm font-medium md:col-span-2">
            Subject *
            <input
              name="subject"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className="field"
            />
            <FieldError id="subject-error" message={errors.subject} />
          </label>
          <label className="block min-w-0 text-sm font-medium md:col-span-2">
            Your Message *
            <textarea
              name="message"
              rows={7}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="field min-h-40"
            />
            <FieldError id="message-error" message={errors.message} />
          </label>
        </div>

        <div className="mt-8">
          <button type="submit" disabled={submissionState === "submitting"} className="btn btn-primary disabled:opacity-60">
            {submissionState === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </div>

        {submissionState === "submitted" ? (
          <p className="mt-6 border border-[var(--border)] px-4 py-3 text-sm" role="status">
            Message sent successfully.
          </p>
        ) : null}

        {submissionState === "error" && statusMessage ? (
          <p className="mt-6 border border-[var(--border)] px-4 py-3 text-sm" role="alert">
            {statusMessage}
          </p>
        ) : null}
      </form>
      </div>
    </section>
  );
}

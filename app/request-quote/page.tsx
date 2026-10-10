"use client";

import { useState, type FormEvent, type HTMLAttributes } from "react";

export default function RequestQuotePage() {
  const [submissionState, setSubmissionState] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const attachment = formData.get("attachment");

    if (attachment instanceof File && attachment.size > 10 * 1024 * 1024) {
      setStatusMessage("The attachment is larger than 10 MB. Please choose a smaller file and try again.");
      setSubmissionState("error");
      return;
    }

    setSubmissionState("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/request-quote", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "The enquiry could not be submitted.");
      }

      setSubmissionState("submitted");
      form.reset();
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "The enquiry could not be submitted.");
      setSubmissionState("error");
    }
  };

  return (
    <div className="wrap section">
      <p className="eyebrow">Request a quote</p>
      <h1 className="h1 mt-4 max-w-[18ch]">Submit an enquiry</h1>
      <p className="lead mt-4">Short supporting text goes here.</p>

      <form onSubmit={handleSubmit} className="mt-10 max-w-3xl border border-[var(--border)] p-5 md:p-8">
        <div className="sr-only" aria-hidden="true">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field name="name" label="Name" required autoComplete="name" />
          <Field name="company" label="Company" required autoComplete="organization" />
          <Field name="country" label="Country" required autoComplete="country-name" />
          <Field name="email" label="Business email" required type="email" autoComplete="email" />
          <Field name="phone" label="Phone" type="tel" autoComplete="tel" />
          <Field name="product" label="Product" placeholder="Product category" />
          <Field name="productCode" label="Product code" placeholder="If known" />
          <Field name="quantity" label="Quantity" type="number" min="1" step="1" inputMode="numeric" />
          <label className="block text-sm font-medium md:col-span-2">
            Application
            <input name="application" className="field" placeholder="Short supporting text goes here." />
          </label>
          <label className="block text-sm font-medium md:col-span-2">
            Message
            <textarea name="message" rows={5} className="field" placeholder="Short supporting text goes here." />
          </label>
          <label className="block text-sm font-medium md:col-span-2">
            Attachment
            <input name="attachment" type="file" className="field" />
          </label>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--muted)]">Required fields are validated before the enquiry is sent.</p>
          <button type="submit" disabled={submissionState === "submitting"} className="btn btn-primary disabled:opacity-60">
            {submissionState === "submitting" ? "Sending..." : "Submit enquiry"}
          </button>
        </div>

        {submissionState === "submitted" ? (
          <p className="mt-6 border border-[var(--border)] px-4 py-3 text-sm" role="status">
            Enquiry submitted successfully.
          </p>
        ) : null}

        {submissionState === "error" ? (
          <p className="mt-6 border border-[var(--border)] px-4 py-3 text-sm" role="alert">
            {statusMessage}
          </p>
        ) : null}
      </form>
    </div>
  );
}

function Field({
  name,
  label,
  required,
  type = "text",
  autoComplete,
  placeholder,
  min,
  step,
  inputMode,
}: {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  min?: string;
  step?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      {required ? " *" : null}
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        min={min}
        step={step}
        inputMode={inputMode}
        className="field"
      />
    </label>
  );
}

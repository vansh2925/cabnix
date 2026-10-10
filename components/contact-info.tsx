import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/site-data";

export function ContactInfo() {
  const address = company.address.trim() || "Add company address here.";
  const email = company.email.trim() || "Add company email here.";
  const phones = company.phones.filter(Boolean);

  return (
    <section className="bg-white" aria-label="Contact information">
      <div className="wrap grid grid-cols-1 gap-6 py-14 md:grid-cols-2 md:py-20 lg:grid-cols-3 lg:gap-8">
        <article className="rounded-lg border border-[var(--border)] bg-white px-8 py-12 text-center shadow-[0_12px_32px_rgba(16,24,32,0.06)]">
          <MapPin className="mx-auto h-10 w-10 text-[#2f74c8]" strokeWidth={1.4} aria-hidden="true" />
          <h2 className="mt-6 text-sm font-semibold tracking-[0.16em] text-[var(--text)] uppercase">Address</h2>
          <p className="mx-auto mt-4 max-w-[28ch] text-[0.98rem] leading-7 text-[var(--muted)]">{address}</p>
        </article>

        <article className="rounded-lg border border-[var(--border)] bg-white px-8 py-12 text-center shadow-[0_12px_32px_rgba(16,24,32,0.06)]">
          <Mail className="mx-auto h-10 w-10 text-[#2f74c8]" strokeWidth={1.4} aria-hidden="true" />
          <h2 className="mt-6 text-sm font-semibold tracking-[0.16em] text-[var(--text)] uppercase">Email</h2>
          {company.email.trim() ? (
            <a
              href={`mailto:${email}`}
              className="mx-auto mt-4 inline-flex min-h-11 max-w-full items-center break-all text-[0.98rem] leading-7 text-[var(--muted)] hover:text-[var(--text)]"
            >
              {email}
            </a>
          ) : (
            <p className="mx-auto mt-4 text-[0.98rem] leading-7 text-[var(--muted)]">{email}</p>
          )}
        </article>

        <article className="rounded-lg border border-[var(--border)] bg-white px-8 py-12 text-center shadow-[0_12px_32px_rgba(16,24,32,0.06)] md:col-span-2 lg:col-span-1">
          <Phone className="mx-auto h-10 w-10 text-[#2f74c8]" strokeWidth={1.4} aria-hidden="true" />
          <h2 className="mt-6 text-sm font-semibold tracking-[0.16em] text-[var(--text)] uppercase">Phone</h2>
          {phones.length > 0 ? (
            <ul className="mt-4 space-y-1">
              {phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className="inline-flex min-h-11 items-center text-[0.98rem] leading-7 text-[var(--muted)] hover:text-[var(--text)]"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-[0.98rem] leading-7 text-[var(--muted)]">Add phone number here.</p>
          )}
        </article>
      </div>
    </section>
  );
}

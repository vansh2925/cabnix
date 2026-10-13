import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BackToTop } from "@/components/back-to-top";
import { company } from "@/lib/site-data";
import { navItems, productNavItems, socialLinks } from "@/lib/template";

const accent = "mt-2.5 block h-[2px] w-9 bg-[#2f74c8]";

function FooterHeading({ children }: { children: string }) {
  return (
    <div>
      <h3 className="text-[0.95rem] font-semibold tracking-wide text-white">{children}</h3>
      <span className={accent} aria-hidden="true" />
    </div>
  );
}

export function SiteFooter() {
  const productRange = productNavItems;

  return (
    <footer className="border-t border-white/10 bg-[var(--navy)] text-white">
        <section aria-label="Site footer">
          <div className="wrap grid gap-12 py-14 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-4 lg:gap-x-12 lg:py-16">
            <div>
              <Link href="/" className="inline-flex" aria-label={`${company.name} home`}>
                <Image
                  src="/cabnix-logo.png"
                  alt={company.name}
                  width={220}
                  height={52}
                  sizes="176px"
                  className="h-11 w-auto object-contain"
                />
              </Link>
              <p className="mt-5 max-w-[17rem] text-sm leading-7 text-white/60">
                Precision-focused industrial manufacturing and product solutions.
              </p>
              {socialLinks.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {socialLinks.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2f74c8] text-[0.65rem] font-semibold tracking-wide text-white hover:bg-[#3b82d6]"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div>
              <FooterHeading>Product Range</FooterHeading>
              <ul className="mt-5 space-y-0.5 text-sm">
                {productRange.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center text-white/70 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Quick Links</FooterHeading>
              <ul className="mt-5 space-y-0.5 text-sm">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center text-white/70 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterHeading>Contact Us</FooterHeading>
              <ul className="mt-5 space-y-5 text-sm">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#2f74c8]" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    {company.phones.length > 0 ? (
                      company.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                          className="mt-1 flex min-h-11 items-center text-white/70 hover:text-white"
                        >
                          {phone}
                        </a>
                      ))
                    ) : (
                      <p className="mt-1 text-white/50">Contact information</p>
                    )}
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#2f74c8]" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    {company.email ? (
                      <a
                        href={`mailto:${company.email}`}
                        className="mt-1 inline-flex min-h-11 items-center break-all text-white/70 hover:text-white"
                      >
                        {company.email}
                      </a>
                    ) : (
                      <p className="mt-1 text-white/50">Contact information</p>
                    )}
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2f74c8]" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="mt-1 leading-6 text-white/70">{company.address || "Contact information"}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="border-t border-white/10">
          <div className="wrap flex flex-col gap-2 py-4 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {company.name}. All rights reserved.</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <BackToTop />
    </footer>
  );
}

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { company } from "@/lib/site-data";

export function HomeFooterCta() {
  return (
    <section className="home-enquiry-cta" aria-labelledby="footer-cta-heading">
      <div className="home-enquiry-cta-inner">
        <div className="home-enquiry-cta-copy">
          <p className="home-enquiry-cta-badge">
            <span className="home-enquiry-cta-dot" aria-hidden="true" />
            24-HOUR RESPONSE
          </p>
          <h2 id="footer-cta-heading">Need Product Quickly?</h2>
          <p className="home-enquiry-cta-text">
            Our technical team responds to business enquiries within 24 hours, helping you select the right brass
            cable gland or component for your application.
          </p>
        </div>

        <div className="home-enquiry-cta-actions">
          <a href={`mailto:${company.email}`} className="home-enquiry-cta-email">
            <Mail size={16} strokeWidth={2.25} aria-hidden="true" />
            Email an Expert
            <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
          </a>
          <Link href="/request-quote" className="home-enquiry-cta-quote">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

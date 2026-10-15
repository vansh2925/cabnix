import { Compass, Layers } from "lucide-react";

export function AboutMission() {
  return (
    <section className="scroll-mt-24 bg-[#f4f5f6]" aria-labelledby="about-mission-heading">
      <div className="about-wrap about-section">
        <div className="text-center">
          <h2
            id="about-mission-heading"
            className="text-[2.125rem] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text)] md:text-[2.25rem] lg:text-[2.375rem]"
          >
            Mission &amp; Vision
          </h2>
          <div className="mt-5 flex items-center justify-center gap-3" aria-hidden="true">
            <span className="h-px w-10 bg-[var(--navy)]/20" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[var(--navy)]" />
            <span className="h-px w-10 bg-[var(--navy)]/20" />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-[75rem] items-stretch gap-6 md:mt-12 md:grid-cols-2 md:gap-7">
          <article className="flex h-full flex-col border border-[var(--border)] bg-white px-8 py-9 text-left shadow-[0_8px_24px_rgba(16,24,32,0.05)] sm:px-10 md:px-11 md:py-11">
            <Layers className="h-9 w-9 text-[var(--navy)]" strokeWidth={1.4} aria-hidden="true" />
            <h3 className="mt-5 text-[1.375rem] font-semibold tracking-tight text-[var(--text)] md:text-[1.5rem]">
              Our Mission
            </h3>
            <div className="mt-5 space-y-4 text-[0.9875rem] leading-[1.75] text-[var(--muted)] md:text-base">
              <p>
                Our mission is to manufacture reliable, durable, and precision-engineered brass cable glands, cable
                gland accessories, and precision brass components that meet customer requirements across electrical,
                plumbing, and industrial applications.
              </p>
              <p>
                We strive to deliver consistent workmanship, practical solutions, and dependable service to every
                customer.
              </p>
            </div>
          </article>

          <article className="flex h-full flex-col border border-[var(--border)] bg-white px-8 py-9 text-left shadow-[0_8px_24px_rgba(16,24,32,0.05)] sm:px-10 md:px-11 md:py-11">
            <Compass className="h-9 w-9 text-[var(--navy)]" strokeWidth={1.4} aria-hidden="true" />
            <h3 className="mt-5 text-[1.375rem] font-semibold tracking-tight text-[var(--text)] md:text-[1.5rem]">
              Our Vision
            </h3>
            <div className="mt-5 space-y-4 text-[0.9875rem] leading-[1.75] text-[var(--muted)] md:text-base">
              <p>
                Our vision is to establish CABNIX as a trusted name in brass manufacturing, recognized for precision,
                consistent quality, and dependable solutions.
              </p>
              <p>
                We aim to build lasting customer relationships and strengthen our presence in India and international
                markets through continuous improvement and a commitment to customer satisfaction.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

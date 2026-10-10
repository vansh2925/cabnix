export function AboutStory() {
  return (
    <section className="border-t border-[var(--border)] bg-white" aria-labelledby="about-story-heading">
      <div className="about-wrap about-section">
        <div className="max-w-[56.25rem] text-left">
          <h2
            id="about-story-heading"
            className="text-[2.125rem] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text)] md:text-[2.25rem] lg:text-[2.5rem]"
          >
            Our Story
          </h2>
          <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.75] text-[var(--muted)] md:space-y-5">
            <p>
              Our approach is built around{" "}
              <strong className="font-semibold text-[var(--text)]">
                precision manufacturing, consistent quality, and customer-focused service
              </strong>
              . Whether customers require brass cable entry solutions, electrical fittings, plumbing components, or
              customized industrial parts, we aim to provide practical products that meet their application needs.
            </p>
            <p>
              As we continue to develop our capabilities and strengthen customer relationships, our focus remains on
              dependable manufacturing, responsive service, and building lasting partnerships with customers across India
              and international markets.
            </p>
            <p className="font-semibold text-[var(--text)]">CABNIX — Precision. Quality. Reliability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CertificateIntro() {
  return (
    <section className="bg-white" aria-labelledby="certifications-heading">
      <div className="wrap pt-16 text-center md:pt-24 lg:pt-28">
        <h2 id="certifications-heading" className="h2">
          Our Certifications
        </h2>
        <div className="mt-5 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-10 bg-[var(--navy)]/20" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[var(--navy)]" />
          <span className="h-px w-10 bg-[var(--navy)]/20" />
        </div>
        <p className="mx-auto mt-6 max-w-[46rem] text-[1.05rem] leading-8 text-[var(--muted)]">
          Certification documents and quality credentials will be presented here as they become available.
        </p>
      </div>
    </section>
  );
}

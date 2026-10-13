import { qualityWhy } from "@/lib/template";

export function QualityWhy() {
  return (
    <section className="border-t border-[var(--border)] bg-[#f4f5f6]" aria-labelledby="quality-why-heading">
      <div className="about-wrap about-section">
        <p className="text-[0.8125rem] font-semibold tracking-[0.18em] text-[var(--muted)] uppercase">
          {qualityWhy.eyebrow}
        </p>
        <h2
          id="quality-why-heading"
          className="mt-3 text-[2.125rem] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text)] md:text-[2.375rem]"
        >
          {qualityWhy.title}
        </h2>
        <p className="mt-6 max-w-[46rem] text-[1.0625rem] leading-[1.75] text-[var(--muted)]">{qualityWhy.text}</p>
      </div>
    </section>
  );
}

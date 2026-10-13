import Image from "next/image";
import { qualityPolicy } from "@/lib/template";

export function QualityPolicy() {
  return (
    <section className="bg-white" aria-labelledby="quality-policy-heading">
      <div className="about-wrap about-section flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-14">
        <div className="w-full shrink-0 lg:w-[46%]">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e8e8] lg:aspect-auto lg:h-full lg:min-h-[28rem]">
            <Image
              src={qualityPolicy.image}
              alt={qualityPolicy.imageAlt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              quality={90}
              className="object-cover object-[center_40%]"
            />
          </div>
        </div>

        <div className="min-w-0 w-full lg:w-[54%]">
          <p className="text-[0.8125rem] font-semibold tracking-[0.18em] text-[var(--muted)] uppercase">
            {qualityPolicy.eyebrow}
          </p>
          <h2
            id="quality-policy-heading"
            className="mt-3 text-[2.125rem] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text)] md:text-[2.375rem]"
          >
            {qualityPolicy.title}
          </h2>
          <div className="mt-6 space-y-4 text-[1.0625rem] leading-[1.75] text-[var(--muted)]">
            {qualityPolicy.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ol className="mt-9 space-y-6">
            {qualityPolicy.pillars.map((pillar, index) => (
              <li key={pillar.title} className="flex gap-4">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center bg-[var(--navy)] text-sm font-semibold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-[1.125rem] font-semibold tracking-tight text-[var(--text)]">{pillar.title}</h3>
                  <p className="mt-1.5 text-[0.98rem] leading-7 text-[var(--muted)]">{pillar.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

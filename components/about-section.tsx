import Image from "next/image";
import Link from "next/link";

const points = [
  "20+ years of brass manufacturing experience since 2003.",
  "Specialized in brass cable glands and components.",
  "Precision brass components for electrical, plumbing & industrial applications.",
  "Precision machining and component manufacturing.",
  "Standard and customized manufacturing solutions.",
  "Commitment to quality, reliability and customer satisfaction.",
] as const;

export function AboutSection() {
  return (
    <section className="bg-white">
      <div className="wrap flex flex-col gap-12 py-20 md:gap-16 md:py-28 lg:flex-row lg:items-center lg:justify-between lg:gap-24 lg:py-32">
        <div className="w-full lg:w-[48%]">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8e8e8]">
            <Image
              src="/images/who-we-are.jpg"
              alt="CABNIX technicians operating CNC machines in the workshop"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="min-w-0 w-full lg:w-[44%]">
          <p className="eyebrow text-[var(--muted)]">Who we are</p>
          <p className="mt-4 text-[var(--muted)]">Welcome To</p>
          <h2 className="h2 max-w-[16ch]">CABNIX</h2>
          <p className="mt-2 text-[var(--text)]">9001-2015 Certified Company</p>
          <p className="mt-5 text-[var(--muted)]">
            At CABNIX, a specialized brand of Varudi Brass Products, we focus on the manufacturing of brass cable
            glands, cable gland accessories and precision brass components for electrical, plumbing and industrial
            applications. With 20+ years of brass manufacturing experience since 2003, we combine precision machining,
            consistent workmanship and customer-focused service to deliver reliable products for diverse industrial
            requirements.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[var(--text)]">
                <span className="mt-[0.7em] h-px w-3.5 shrink-0 bg-[var(--navy)]" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Link href="/about-us" className="btn btn-primary mt-10">
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}

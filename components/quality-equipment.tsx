import Image from "next/image";
import { qualityEquipment } from "@/lib/template";

export function QualityEquipment() {
  return (
    <section className="bg-white" aria-labelledby="quality-equipment-heading">
      <div className="about-wrap about-section">
        <div className="max-w-[46rem]">
          <h2
            id="quality-equipment-heading"
            className="text-[2.125rem] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text)] md:text-[2.375rem]"
          >
            Inspection Equipment
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-[1.75] text-[var(--muted)]">
            Dimensional and material checks support consistent workmanship on brass cable glands and precision
            components.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {qualityEquipment.map((item) => (
            <li key={item.title} className="border border-[var(--border)] bg-white shadow-[0_8px_24px_rgba(16,24,32,0.04)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-white">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="border-t border-[var(--border)] px-5 py-4">
                <h3 className="text-[1.05rem] font-semibold tracking-tight text-[var(--text)]">{item.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

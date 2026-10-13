import Image from "next/image";
import { aboutMainSrc } from "@/lib/template";

export function AboutWelcome() {
  return (
    <section className="bg-white" aria-labelledby="about-welcome-heading">
      <div className="about-wrap about-section flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
        <div className="w-full shrink-0 lg:w-[45%]">
          <div className="relative aspect-[16/10] overflow-hidden bg-[var(--stage-2)]">
            <Image
              src={aboutMainSrc}
              alt="CABNIX workshop production floor with technicians operating CNC machines"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="min-w-0 w-full text-left lg:w-[55%]">
          <p className="text-[0.8125rem] font-semibold tracking-[0.18em] text-[var(--muted)] uppercase lg:text-[0.875rem]">
            Welcome To
          </p>
          <h2
            id="about-welcome-heading"
            className="mt-3 text-[2.25rem] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--text)] md:text-[2.625rem] lg:text-[2.875rem]"
          >
            CABNIX
          </h2>
          <p className="mt-3 text-[1.125rem] font-medium leading-snug tracking-tight text-[var(--text)] lg:text-[1.25rem]">
            Precision Brass Cable Glands &amp; Components
          </p>
          <div className="mt-6 max-w-[37.5rem] space-y-5 text-[1.0625rem] leading-[1.75] text-[var(--muted)]">
            <p>
              CABNIX, a specialized brand of <strong className="font-semibold text-[var(--text)]">Varudi Brass Products</strong>,
              brings over{" "}
              <strong className="font-semibold text-[var(--text)]">20 years of brass manufacturing experience since 2003</strong>{" "}
              to the production of brass cable glands, cable gland accessories, and precision brass components. Based in
              Jamnagar, Gujarat, India, we serve electrical, plumbing, and industrial applications with a focus on
              precision, consistent workmanship, and product reliability.
            </p>
            <p>
              At CABNIX, we understand the importance of accuracy, consistency, and reliability in industrial components.
              Our manufacturing and precision machining capabilities support both standard products and customized
              components developed according to customer drawings, dimensions, and technical specifications. From machining
              and finishing to inspection and packing, we focus on meeting defined product requirements with care and
              attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

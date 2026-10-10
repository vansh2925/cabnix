import Image from "next/image";
import Link from "next/link";
import { whyChooseFeatures, whyChooseMedia, whyChoosePanel } from "@/lib/template";

function CheckIcon() {
  return (
    <span
      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/35 text-white"
      aria-hidden="true"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.2 6.2 4.7 8.8 9.8 3.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function MediaSlot({ src, alt, tone = "light" }: { src: string; alt: string; tone?: "light" | "mid" }) {
  const fallback = tone === "mid" ? "bg-[#dcdcdc]" : "bg-[#e8e8e8]";

  if (!src) {
    return <div className={`h-full min-h-[10.5rem] w-full lg:min-h-0 ${fallback}`} aria-hidden="true" />;
  }

  return (
    <div className="relative h-full min-h-[10.5rem] w-full overflow-hidden lg:min-h-0">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover object-center" />
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="border-b border-white/10 bg-[var(--navy)]">
      <div className="grid lg:h-[min(700px,70vh)] lg:min-h-[600px] lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col justify-center px-6 py-12 text-white sm:px-10 md:px-12 lg:px-14 lg:py-12 xl:px-16">
          <h2 className="h2 max-w-[12ch] text-white">Why Choose Us</h2>

          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {whyChooseFeatures.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3">
                <CheckIcon />
                <div>
                  <h3 className="text-[1.05rem] font-semibold tracking-tight">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:h-full lg:min-h-0">
          <div className="flex min-h-[17rem] flex-col items-center justify-center bg-[#00488d] px-6 py-8 text-center text-white sm:min-h-[16rem] lg:min-h-0">
            <p className="text-[4.25rem] font-bold leading-none tracking-tight md:text-[5rem] lg:text-[6.25rem]">
              {whyChoosePanel.value}
            </p>
            <p className="mt-3 whitespace-pre-line text-[1.75rem] font-bold leading-tight">
              {whyChoosePanel.label}
            </p>
          </div>

          <MediaSlot
            src={whyChooseMedia.topRightSrc}
            alt="CABNIX team reviewing a machined component beside a CNC lathe"
            tone="light"
          />
          <MediaSlot
            src={whyChooseMedia.bottomLeftSrc}
            alt="Measuring a brass component with a caliper"
            tone="mid"
          />

          <div className="flex min-h-[10.5rem] flex-col justify-center bg-[#0c1218] px-7 py-8 text-white lg:min-h-0 lg:px-8">
            <p className="text-sm leading-relaxed text-white/75">{whyChoosePanel.copy}</p>
            <Link href={whyChoosePanel.href} className="btn btn-light mt-6 self-start">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

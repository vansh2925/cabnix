import Image from "next/image";
import Link from "next/link";

type Crumb = {
  href?: string;
  label: string;
};

export function PageHero({
  title,
  headingId,
  imageSrc,
  crumbs,
  wrapClass = "wrap",
  overlayClass = "bg-black/45",
  imageClass = "object-cover object-center",
}: {
  title: string;
  headingId: string;
  imageSrc: string;
  crumbs: Crumb[];
  wrapClass?: string;
  overlayClass?: string;
  imageClass?: string;
}) {
  return (
    <section className="page-hero" aria-labelledby={headingId}>
      <div className="absolute inset-0 overflow-hidden bg-[var(--navy)]" aria-hidden="true">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className={imageClass}
        />
        <div className={`absolute inset-0 ${overlayClass}`} />
      </div>

      <div className="page-hero-content">
        <div className={`${wrapClass} flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`}>
          <h1
            id={headingId}
            className="min-w-0 text-[clamp(2rem,4vw,3.15rem)] font-semibold tracking-[-0.03em] break-words text-white"
          >
            {title}
          </h1>
          <nav aria-label="Breadcrumb" className="min-w-0 text-sm text-white/75">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((crumb, index) => {
                const last = index === crumbs.length - 1;

                return (
                  <li key={`${crumb.label}-${index}`} className="flex min-w-0 items-center gap-2">
                    {index > 0 ? (
                      <span aria-hidden="true" className="text-white/45">
                        &gt;
                      </span>
                    ) : null}
                    {last || !crumb.href ? (
                      <span aria-current={last ? "page" : undefined} className="min-w-0 break-words text-white">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link href={crumb.href} className="inline-flex min-h-11 items-center hover:text-white">
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}

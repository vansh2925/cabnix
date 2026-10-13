import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { FileText } from "lucide-react";
import { certificates, type CertificateItem } from "@/lib/template";

function publicFileExists(src: string) {
  if (!src.startsWith("/")) return false;
  return existsSync(join(process.cwd(), "public", src.slice(1)));
}

function CertificateCard({ item }: { item: CertificateItem }) {
  const hasDocument = Boolean(item.document);
  const showImage = publicFileExists(item.image);

  return (
    <article className="group rounded-sm border border-[var(--border)] bg-white p-5 shadow-[0_8px_24px_rgba(16,24,32,0.04)] transition-shadow duration-200 hover:shadow-[0_12px_28px_rgba(16,24,32,0.08)] motion-reduce:transition-none">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#f0f1f3] transition-colors duration-200 group-hover:bg-[#e8eaed]">
        {showImage ? (
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-contain p-3"
          />
        ) : (
          <FileText className="h-12 w-12 text-[var(--navy)]/35" strokeWidth={1.25} aria-hidden="true" />
        )}
      </div>
      <h3 className="mt-5 text-center text-base font-semibold tracking-tight break-words text-[var(--text)]">
        {item.title}
      </h3>
      {hasDocument ? (
        <a
          href={item.document}
          className="mt-3 inline-flex min-h-11 w-full items-center justify-center text-[0.7rem] font-semibold tracking-[0.14em] text-[var(--navy)] uppercase hover:underline"
        >
          View document
        </a>
      ) : (
        <button
          type="button"
          disabled
          className="mt-3 inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center text-[0.7rem] font-semibold tracking-[0.14em] text-[var(--muted)]/70 uppercase"
        >
          View document
        </button>
      )}
    </article>
  );
}

export function CertificateGrid() {
  return (
    <section className="bg-white" aria-label="Certificate documents">
      <div className="wrap grid grid-cols-1 gap-6 py-12 md:grid-cols-2 md:gap-8 md:py-16 lg:grid-cols-3 lg:pb-28">
        {certificates.map((item) => (
          <CertificateCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

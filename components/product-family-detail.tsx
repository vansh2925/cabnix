"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { ProductFamily, ProductModel, ProductSizeChart } from "@/lib/template";

function MediaFrame({
  src,
  label,
  compact = false,
  photo = false,
}: {
  src?: string;
  label: string;
  compact?: boolean;
  photo?: boolean;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const failed = !src || failedSrc === src;

  return (
    <div
      className={`relative overflow-hidden border border-[var(--border)] ${
        photo
          ? "aspect-square bg-white"
          : compact
            ? "aspect-[5/3] max-h-[13.5rem] bg-[#f6f7f8]"
            : "aspect-[4/3] bg-[#f6f7f8]"
      }`}
    >
      {failed ? (
        <div className="flex h-full items-center justify-center px-4 text-center text-[0.68rem] font-semibold tracking-[0.18em] text-[var(--muted)] uppercase">
          {label}
        </div>
      ) : (
        <Image
          src={src || ""}
          alt=""
          fill
          quality={90}
          sizes={photo ? "(min-width: 1024px) 20vw, 100vw" : "(min-width: 1024px) 26vw, 100vw"}
          className="object-contain p-3"
          onError={() => setFailedSrc(src || "")}
        />
      )}
    </div>
  );
}

function ProductPhotoSlider({ sources, label }: { sources: string[]; label: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const sourceKey = sources.join("|");
  const [index, setIndex] = useState(0);
  const [activeKey, setActiveKey] = useState(sourceKey);
  const [inView, setInView] = useState(false);

  if (activeKey !== sourceKey) {
    setActiveKey(sourceKey);
    setIndex(0);
  }

  useEffect(() => {
    const node = rootRef.current;
    if (!node || sources.length < 2) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [sources]);

  useEffect(() => {
    if (sources.length < 2 || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => (current + 1) % sources.length);
    }, 2000);

    return () => window.clearInterval(id);
  }, [sources, inView]);

  if (sources.length <= 1) {
    return <MediaFrame src={sources[0]} label={label} photo />;
  }

  return (
    <div
      ref={rootRef}
      className="relative aspect-square overflow-hidden border border-[var(--border)] bg-white"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {sources.map((src, slideIndex) => (
          <div key={src} className="relative h-full w-full shrink-0" aria-hidden={slideIndex !== index}>
            <Image
              src={src}
              alt=""
              fill
              quality={90}
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="object-contain p-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function ModelButton({
  model,
  active,
  onSelect,
}: {
  model: ProductModel;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={active ? "true" : undefined}
      className={`flex min-h-[3.25rem] w-full shrink-0 items-center justify-between gap-3 border px-4 py-2.5 text-left text-[0.9375rem] leading-snug font-medium transition-colors ${
        active
          ? "border-[var(--navy)] bg-[var(--navy)] text-white"
          : "border-[#e4e8ec] bg-[#f3f6f8] text-[var(--text)] hover:border-[#d5dbe2] hover:bg-[#e8eef3]"
      }`}
    >
      <span>{model.label}</span>
      {active ? <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
    </button>
  );
}

function SpecTable({
  columns,
  rows,
  wrapValues = false,
}: {
  columns: string[];
  rows: string[][];
  wrapValues?: boolean;
}) {
  return (
    <div className="table-scroll mt-4 overflow-x-auto border border-[var(--border)]">
      <table className="min-w-full border-collapse text-left text-[0.9rem]">
        <thead>
          <tr className="bg-[var(--navy)] text-white">
            {columns.map((column) => (
              <th key={column} className="px-4 py-2.5 font-semibold whitespace-nowrap">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.join("-")} className={index % 2 === 0 ? "bg-[#eef1f4]" : "bg-[#f7f8fa]"}>
              {row.map((cell, cellIndex) => (
                <td
                  key={`${columns[cellIndex]}-${cell}`}
                  className={`px-4 py-2.5 text-[var(--text)] ${wrapValues && cellIndex > 0 ? "min-w-[12rem] whitespace-pre-line" : "whitespace-nowrap"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function headerLines(label: string) {
  return label.split("\n").map((line, index) => (
    <span key={`${line}-${index}`}>
      {index > 0 ? <br /> : null}
      {line}
    </span>
  ));
}

function SizeChartTable({ chart }: { chart: ProductSizeChart }) {
  const head = "border border-[#c5ced6] px-1.5 py-2 text-center align-middle font-semibold leading-tight";
  const sub = "border border-[#c5ced6] bg-[#00488d] px-1.5 py-1.5 text-center align-middle font-medium whitespace-nowrap text-white";
  const cell = "border border-[#c5ced6] px-1.5 py-2 text-center align-middle whitespace-nowrap tabular-nums text-[var(--text)]";
  const hasGroups = chart.columns.some((column) => column.group);
  const groups: { title: string | null; columns: ProductSizeChart["columns"] }[] = [];

  for (const column of chart.columns) {
    const last = groups.at(-1);
    if (column.group && last && last.title === column.group) {
      last.columns.push(column);
    } else {
      groups.push({ title: column.group ?? null, columns: [column] });
    }
  }

  return (
    <div className="table-scroll overflow-x-auto">
      <table className="w-full min-w-max border-collapse bg-white text-[0.78rem]">
        <thead>
          <tr className="bg-[#dce3ea] text-[var(--text)]">
            {groups.map((group) =>
              group.title ? (
                <th key={group.title} colSpan={group.columns.length} className={head}>
                  {headerLines(group.title)}
                </th>
              ) : (
                group.columns.map((column) => (
                  <th key={column.key} rowSpan={hasGroups ? 2 : 1} className={head}>
                    {headerLines(column.label)}
                  </th>
                ))
              ),
            )}
          </tr>
          {hasGroups ? (
            <tr>
              {chart.columns
                .filter((column) => column.group)
                .map((column) => (
                  <th key={column.key} className={sub}>
                    {column.label}
                  </th>
                ))}
            </tr>
          ) : null}
        </thead>
        <tbody>
          {chart.rows.map((row, index) => (
            <tr key={row.code ?? `${row.size}-${index}`} className={index % 2 === 0 ? "bg-[#eceff2]" : "bg-white"}>
              {chart.columns.map((column) => (
                <td key={column.key} className={`${cell}${column.key === "size" ? " font-medium" : ""}`}>
                  {row[column.key] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DetailSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-[var(--border)] pt-7">
      <h3 className="text-[1.5rem] font-semibold tracking-tight text-[var(--text)] md:text-[1.65rem]">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Placeholder({ children }: { children: string }) {
  return <p className="text-base leading-7 text-[var(--muted)]">{children}</p>;
}

function TechnicalDetailsSection({
  technicalFields,
  technicalDetails,
}: {
  technicalFields: ProductFamily["technicalFields"];
  technicalDetails?: string;
}) {
  const fields = technicalFields ?? [];
  return (
    <DetailSection title="Technical Details">
      {fields.length > 0 ? (
        <SpecTable
          columns={["Specification", "Value"]}
          rows={fields.map((field) => [field.label, field.value])}
          wrapValues
        />
      ) : technicalDetails ? (
        <Placeholder>{technicalDetails}</Placeholder>
      ) : (
        <Placeholder>Technical details will be added here.</Placeholder>
      )}
    </DetailSection>
  );
}

function specTableData(models: ProductModel[]) {
  const keys: string[] = [];

  for (const model of models) {
    if (!model.specs) continue;
    for (const [key, value] of Object.entries(model.specs)) {
      if (value && !keys.includes(key)) keys.push(key);
    }
  }

  if (keys.length === 0) return null;

  return {
    columns: ["Model", ...keys],
    rows: models.map((model) => [model.label, ...keys.map((key) => model.specs?.[key] ?? "—")]),
  };
}

export function ProductFamilyDetail({ family }: { family: ProductFamily }) {
  const [selectedId, setSelectedId] = useState(family.models[0]?.id ?? "");
  const selected = useMemo(
    () => family.models.find((model) => model.id === selectedId) ?? family.models[0],
    [family.models, selectedId],
  );
  const table = specTableData(family.models);
  const mainImage = selected?.image || family.gallery?.main || family.image;
  const secondaryImage = selected?.drawing || family.gallery?.drawing || family.gallery?.detail;
  const technicalFields = selected?.technicalFields ?? family.technicalFields ?? [];
  const technicalDetails = family.technicalDetails;
  const applications = selected?.applications ?? family.applications ?? [];
  const features = selected?.features ?? [];
  const hasProductPhoto = Boolean(selected?.image);
  const stackDetailsBesideImage =
    (selected?.id === "double-compression" || selected?.id === "single-compression") &&
    hasProductPhoto;
  const largerDrawings =
    selected?.id === "double-compression" ||
    selected?.id === "single-compression" ||
    selected?.id === "double-compression-unarmoured-weather-proof" ||
    selected?.id === "double-compression-flame-proof" ||
    selected?.id === "double-compression-weather-proof";
  const sizeChart = selected?.sizeChart;
  const drawingSources = selected?.drawings?.length
    ? selected.drawings
    : selected?.drawing
      ? [selected.drawing]
      : [];
  const galleryImages = useMemo(() => {
    if (selected?.images?.length) return selected.images;
    if (selected?.image) return [selected.image];
    return mainImage ? [mainImage] : [];
  }, [mainImage, selected]);

  const hasVariants = family.models.length > 1;
  const showGallery = hasProductPhoto || Boolean(mainImage) || Boolean(secondaryImage);

  return (
    <div className="bg-white">
      <section className="product-detail-shell">
        <div
          className={`product-detail-grid${hasProductPhoto ? " is-product-photo" : ""}${
            stackDetailsBesideImage ? " is-photo-stack-details" : ""
          }${hasVariants ? "" : " is-single-product"}${showGallery ? "" : " is-no-gallery"}`}
        >
          {hasVariants ? (
            <nav aria-label="Product variants" className="product-detail-nav">
              <h2 className="mb-3 text-[1.25rem] leading-snug font-semibold tracking-tight text-[var(--navy)] lg:mb-4 lg:text-[1.45rem]">
                {family.name}
              </h2>
              <div className="table-scroll -mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden">
                {family.models.map((model) => (
                  <div key={model.id} className="min-w-[11.5rem]">
                    <ModelButton
                      model={model}
                      active={model.id === selected?.id}
                      onSelect={() => setSelectedId(model.id)}
                    />
                  </div>
                ))}
              </div>
              <div className="hidden space-y-2 lg:block">
                {family.models.map((model) => (
                  <ModelButton
                    key={model.id}
                    model={model}
                    active={model.id === selected?.id}
                    onSelect={() => setSelectedId(model.id)}
                  />
                ))}
              </div>
            </nav>
          ) : null}

          <header className="product-detail-title">
            <h2 className="text-[2.125rem] leading-[1.15] font-semibold tracking-[-0.03em] break-words text-[var(--navy)] lg:text-[2.5rem]">
              {selected?.label ?? family.name}
            </h2>
          </header>

          {showGallery ? (
            <div className="product-detail-gallery space-y-3">
              {hasProductPhoto ? (
                <ProductPhotoSlider sources={galleryImages} label={`${selected?.label ?? family.name} images`} />
              ) : (
                <>
                  <MediaFrame src={mainImage} label="Product image" />
                  <MediaFrame src={secondaryImage} label="Technical drawing" compact />
                </>
              )}
            </div>
          ) : null}

          {hasProductPhoto ? null : (
            <div className="product-detail-copy">
              {selected?.descriptionImage ? (
                <Image
                  src={selected.descriptionImage}
                  alt={`${selected.label} size chart`}
                  width={797}
                  height={562}
                  quality={90}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="h-auto w-full border border-[var(--border)] bg-white"
                />
              ) : selected?.description?.length ? (
                <div className="max-w-[40rem] space-y-4 text-base leading-7 text-[var(--muted)] [text-align:justify] [text-justify:inter-word]">
                  {selected.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p className="max-w-[40rem] text-base leading-7 text-[var(--muted)]">{family.description}</p>
              )}
            </div>
          )}

          <div className="product-detail-intro">
            {hasProductPhoto && selected?.description?.length ? (
              <div className="mb-6 space-y-4 text-base leading-7 text-[var(--muted)]">
                {selected.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {features.length > 0 ? (
              <section>
                <h3 className="text-[1.5rem] font-semibold tracking-tight text-[var(--text)] md:text-[1.65rem]">
                  Features
                </h3>
                <div className="mt-3">
                  <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-[var(--muted)]">
                    {features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </section>
            ) : (
              <section>
                <h3 className="text-[1.5rem] font-semibold tracking-tight text-[var(--text)] md:text-[1.65rem]">
                  Applications
                </h3>
                <div className="mt-3">
                  {applications.length > 0 ? (
                    <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-[var(--muted)]">
                      {applications.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <Placeholder>Application information will be added here.</Placeholder>
                  )}
                </div>
              </section>
            )}
            {stackDetailsBesideImage ? (
              <TechnicalDetailsSection technicalFields={technicalFields} technicalDetails={technicalDetails} />
            ) : null}
          </div>

          <div className="product-detail-body space-y-8 pt-2 lg:pt-4">
            {stackDetailsBesideImage ? null : (
              <TechnicalDetailsSection technicalFields={technicalFields} technicalDetails={technicalDetails} />
            )}

            {drawingSources.length > 0 && hasProductPhoto ? (
              <DetailSection title="Technical Drawing">
                <div
                  className={`mx-auto grid bg-white ${
                    drawingSources.length > 1
                      ? largerDrawings
                        ? "max-w-[52rem] grid-cols-1 items-center gap-5 sm:grid-cols-2 sm:gap-6 md:max-w-[56rem]"
                        : "max-w-[42rem] grid-cols-1 items-center gap-5 sm:grid-cols-2 sm:gap-6 md:max-w-[46rem]"
                      : "max-w-[28rem] md:max-w-[32rem]"
                  }`}
                >
                  {drawingSources.map((src, index) => (
                    <figure key={src} className="flex items-center justify-center bg-white">
                      {/* Native img keeps linework sharp; next/image would downsample the drawing. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${selected?.label ?? family.name} technical drawing ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className={
                          drawingSources.length > 1
                            ? `mx-auto w-auto max-w-full object-contain ${largerDrawings ? "h-[15.5rem]" : "h-[10.5rem]"}`
                            : "mx-auto h-auto w-full"
                        }
                      />
                    </figure>
                  ))}
                </div>
              </DetailSection>
            ) : null}

            {sizeChart ? (
              <DetailSection title="Size Chart">
                <SizeChartTable chart={sizeChart} />
              </DetailSection>
            ) : null}

            {table || !technicalFields.length ? (
              <DetailSection title="Model Details">
                {table ? (
                  <SpecTable columns={table.columns} rows={table.rows} />
                ) : (
                  <Placeholder>Detailed model specifications will be available here.</Placeholder>
                )}
              </DetailSection>
            ) : null}

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
              <Link href="/request-quote" className="btn btn-primary">
                Request a Quote
              </Link>
              {family.catalogueFile ? (
                <a href={family.catalogueFile} className="btn btn-primary" download>
                  Download Catalogue
                </a>
              ) : null}
              {family.datasheetFile ? (
                <a href={family.datasheetFile} className="btn btn-primary" download>
                  Download Datasheet
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

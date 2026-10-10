"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import type { ProductFamily, ProductModel } from "@/lib/template";

function MediaFrame({
  src,
  label,
  compact = false,
}: {
  src?: string;
  label: string;
  compact?: boolean;
}) {
  const [failed, setFailed] = useState(!src);

  return (
    <div
      className={`relative overflow-hidden border border-[var(--border)] bg-[#f6f7f8] ${
        compact ? "aspect-[5/3] max-h-[13.5rem]" : "aspect-[4/3]"
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
          sizes="(min-width: 1024px) 26vw, 100vw"
          className="object-contain p-3"
          onError={() => setFailed(true)}
        />
      )}
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
      className={`flex min-h-[3.25rem] w-full shrink-0 items-center justify-between border px-4 text-left text-[0.9375rem] font-medium transition-colors ${
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

function SpecTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="mt-4 overflow-x-auto border border-[var(--border)]">
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
                <td key={`${columns[cellIndex]}-${cell}`} className="px-4 py-2.5 whitespace-nowrap text-[var(--text)]">
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
  const mainImage = family.gallery?.main || family.image;
  const secondaryImage = family.gallery?.drawing || family.gallery?.detail;
  const materialsTable = family.materialsTable ?? [];
  const technicalFields = family.technicalFields ?? [];

  return (
    <div className="bg-white">
      <section className="product-detail-shell">
        <div className="product-detail-grid">
          {family.models.length > 0 ? (
            <nav aria-label="Product variants" className="product-detail-nav">
              <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:hidden">
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
            <h2 className="text-[2.125rem] leading-[1.15] font-semibold tracking-[-0.03em] text-[var(--navy)] lg:text-[2.5rem]">
              {family.name}
            </h2>
            {selected ? (
              <p className="mt-2 text-sm font-medium tracking-wide text-[var(--navy)]">{selected.label}</p>
            ) : null}
          </header>

          <div className="product-detail-gallery space-y-3">
            <MediaFrame src={mainImage} label="Product image" />
            <MediaFrame src={secondaryImage} label="Technical drawing" compact />
          </div>

          <div className="product-detail-copy">
            <p className="max-w-[40rem] text-base leading-7 text-[var(--muted)]">{family.description}</p>
          </div>

          <div className="product-detail-body space-y-8 pt-2 lg:pt-4">
            <div className="grid gap-8 border-t border-[var(--border)] pt-7 md:grid-cols-2 md:gap-10">
              <section>
                <h3 className="text-[1.5rem] font-semibold tracking-tight text-[var(--text)] md:text-[1.65rem]">
                  Product Overview
                </h3>
                <div className="mt-3">
                  <Placeholder>{family.overview || "Product overview will be added here."}</Placeholder>
                </div>
              </section>
              <section>
                <h3 className="text-[1.5rem] font-semibold tracking-tight text-[var(--text)] md:text-[1.65rem]">
                  Materials &amp; Construction
                </h3>
                <div className="mt-3">
                  {materialsTable.length > 0 ? (
                    <SpecTable
                      columns={["Part", "Material"]}
                      rows={materialsTable.map((row) => [row.part, row.material])}
                    />
                  ) : family.materials ? (
                    <Placeholder>{family.materials}</Placeholder>
                  ) : (
                    <Placeholder>Material information will be added here.</Placeholder>
                  )}
                </div>
              </section>
            </div>

            <DetailSection title="Technical Details">
              {technicalFields.length > 0 ? (
                <SpecTable
                  columns={["Specification", "Value"]}
                  rows={technicalFields.map((field) => [field.label, field.value])}
                />
              ) : family.technicalDetails ? (
                <Placeholder>{family.technicalDetails}</Placeholder>
              ) : (
                <Placeholder>Technical details will be added here.</Placeholder>
              )}
            </DetailSection>

            {family.applications && family.applications.length > 0 ? (
              <DetailSection title="Applications">
                <ul className="list-disc space-y-1 pl-5 text-base leading-7 text-[var(--muted)]">
                  {family.applications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </DetailSection>
            ) : null}

            <DetailSection title="Model Details">
              {table ? (
                <SpecTable columns={table.columns} rows={table.rows} />
              ) : (
                <Placeholder>Detailed model specifications will be available here.</Placeholder>
              )}
            </DetailSection>

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

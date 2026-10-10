"use client";

import { BookOpen, Download, FileText, Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  resources,
  resourceTabs,
  resourceTypeLabels,
  type ResourceItem,
  type ResourceType,
} from "@/lib/template";

type TabId = (typeof resourceTabs)[number]["id"];

function uniqueValues(items: ResourceItem[], key: "category" | "series") {
  return [...new Set(items.map((item) => item[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function matchesQuery(item: ResourceItem, query: string) {
  if (!query) return true;
  const haystack = [item.title, item.category, item.series, item.type, resourceTypeLabels[item.type]]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function typeIcon(type: ResourceType) {
  if (type === "catalogue" || type === "brochure") {
    return <BookOpen className="h-8 w-8 text-[var(--navy)]" strokeWidth={1.4} aria-hidden="true" />;
  }
  return <FileText className="h-8 w-8 text-[var(--navy)]" strokeWidth={1.4} aria-hidden="true" />;
}

function downloadLabel(file: string) {
  return file.toLowerCase().endsWith(".dxf") || file.toLowerCase().endsWith(".step") ? "Download CAD" : "Download PDF";
}

function ResourceCard({ item }: { item: ResourceItem }) {
  const hasFile = Boolean(item.file);

  return (
    <article className="flex h-full flex-col rounded-sm border border-[var(--border)] bg-white p-5 shadow-[0_8px_24px_rgba(16,24,32,0.04)]">
      <div className="flex items-start justify-between gap-3">
        {typeIcon(item.type)}
        <span className="rounded-sm bg-[rgba(16,24,32,0.08)] px-2 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-[var(--navy)] uppercase">
          {resourceTypeLabels[item.type]}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-[var(--text)]">{item.title}</h3>
      {item.series || item.category ? (
        <p className="mt-2 text-sm text-[var(--muted)]">{item.series || item.category}</p>
      ) : null}
      {item.size ? <p className="mt-1 text-sm text-[var(--muted)]">{item.size}</p> : null}
      <div className="mt-auto pt-6">
        {hasFile ? (
          <a href={item.file} className="btn btn-primary w-full gap-2" download>
            <Download className="h-4 w-4" aria-hidden="true" />
            {downloadLabel(item.file)}
          </a>
        ) : (
          <button type="button" disabled className="btn btn-primary w-full cursor-not-allowed gap-2 opacity-45">
            <Download className="h-4 w-4" aria-hidden="true" />
            Download PDF
          </button>
        )}
      </div>
    </article>
  );
}

export function ResourcesLibrary() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<TabId>("all");
  const [category, setCategory] = useState("");
  const [series, setSeries] = useState("");

  const categories = useMemo(() => uniqueValues(resources, "category"), []);
  const seriesOptions = useMemo(() => uniqueValues(resources, "series"), []);
  const normalizedQuery = query.trim().toLowerCase();

  const tabCounts = useMemo(() => {
    return {
      all: resources.length,
      catalogue: resources.filter((item) => item.type === "catalogue").length,
      datasheet: resources.filter((item) => item.type === "datasheet").length,
      certificate: resources.filter((item) => item.type === "certificate").length,
    };
  }, []);

  const tabItems = useMemo(() => {
    if (tab === "all") return resources;
    return resources.filter((item) => item.type === tab);
  }, [tab]);

  const visibleItems = useMemo(() => {
    return tabItems.filter((item) => {
      if (category && item.category !== category) return false;
      if (series && item.series !== series) return false;
      return matchesQuery(item, normalizedQuery);
    });
  }, [tabItems, category, series, normalizedQuery]);

  const showCounts = resources.length > 0;
  const heading = tab === "all" ? "All Documents" : resourceTabs.find((item) => item.id === tab)?.label;
  const emptyLibrary = resources.length === 0;
  const noMatches = !emptyLibrary && visibleItems.length === 0;

  return (
    <section className="bg-white" aria-labelledby="resources-library-heading">
      <div className="wrap py-12 md:py-16 lg:py-20">
        <div className="relative">
          <Search
            className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
            aria-hidden="true"
          />
          <label htmlFor="resource-search" className="sr-only">
            Search documents by title
          </label>
          <input
            id="resource-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search documents by title..."
            className="field field-with-icon mt-0 min-h-12 rounded-sm"
          />
        </div>

        <div
          className="-mx-1 mt-6 flex gap-2 overflow-x-auto px-1 pb-1"
          role="tablist"
          aria-label="Resource types"
        >
          {resourceTabs.map((item) => {
            const selected = tab === item.id;
            const count = tabCounts[item.id];
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-sm font-medium ${
                  selected
                    ? "bg-[var(--navy)] text-white"
                    : "border border-[var(--border)] bg-white text-[var(--text)] hover:border-[var(--navy)]/30"
                }`}
                onClick={() => setTab(item.id)}
              >
                {item.label}
                {showCounts ? <span className="ml-2 text-xs opacity-70">{count}</span> : null}
              </button>
            );
          })}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <label className="text-sm text-[var(--muted)]">
            <span className="sr-only">All Categories</span>
            <select
              className="field mt-0"
              value={category}
              disabled={categories.length === 0}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm text-[var(--muted)]">
            <span className="sr-only">All Series</span>
            <select
              className="field mt-0"
              value={series}
              disabled={seriesOptions.length === 0}
              onChange={(event) => setSeries(event.target.value)}
            >
              <option value="">All Series</option>
              {seriesOptions.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-10">
          <h2 id="resources-library-heading" className="text-2xl font-semibold tracking-tight text-[var(--text)]">
            {heading}
          </h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {emptyLibrary
              ? "No documents available yet."
              : `Showing ${visibleItems.length} of ${tabItems.length} documents`}
          </p>
        </div>

        {emptyLibrary ? (
          <div className="mt-10 border border-[var(--border)] bg-[#fafafa] px-6 py-16 text-center">
            <p className="text-lg font-semibold text-[var(--text)]">No resources available yet.</p>
            <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
              Technical documents and product resources will be added here.
            </p>
          </div>
        ) : noMatches ? (
          <div className="mt-10 border border-[var(--border)] bg-[#fafafa] px-6 py-16 text-center">
            <p className="text-lg font-semibold text-[var(--text)]">No matching documents.</p>
            <p className="mx-auto mt-3 max-w-md text-[var(--muted)]">
              Try a different search term or clear the current filters.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <ResourceCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

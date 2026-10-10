"use client";

import { ChevronUp } from "lucide-react";

export function BackToTop() {
  function handleClick() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed right-4 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--navy)] text-white shadow-[0_8px_20px_rgba(16,24,32,0.18)] md:right-6 md:bottom-7"
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

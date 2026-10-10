"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems, productNavItems } from "@/lib/template";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const productsActive = pathname === "/products" || pathname.startsWith("/products/");
  const aboutActive = pathname === "/about" || pathname === "/about-us";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navLink = (active: boolean) =>
    `py-3 text-[0.9375rem] font-medium hover:text-[#f49400] ${
      active ? "text-[#f49400] underline decoration-[#f49400]/80 underline-offset-[14px]" : "text-[var(--navy)]"
    }`;

  return (
    <header className="site-header sticky inset-x-0 top-0 z-50 border-b border-black/[0.08] bg-[#ffffff] text-[var(--navy)]">
      <div className="wrap flex h-24 items-center gap-8 lg:gap-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label="CABNIX home">
          <Image
            src="/cabnix-logo.png"
            alt="CABNIX"
            width={220}
            height={52}
            priority
            className="h-9 w-auto object-contain sm:h-10 lg:h-11"
          />
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center gap-7 xl:flex" aria-label="Main navigation">
          {navItems.map((item) =>
            "hasDropdown" in item && item.hasDropdown ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={productsActive ? "page" : undefined}
                  className={`inline-flex items-center gap-1 ${navLink(productsActive)}`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-[16rem] border border-[var(--border)] bg-white py-2 opacity-0 shadow-none transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {productNavItems.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="block px-4 py-2.5 text-sm text-[var(--navy)] hover:bg-[#f7f8fa] hover:text-[#f49400]"
                    >
                      {product.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={
                  (item.href === "/" && pathname === "/") ||
                  (item.href === "/about" && aboutActive) ||
                  (item.href === "/certificate" && pathname === "/certificate") ||
                  (item.href === "/resources" &&
                    (pathname === "/resources" || pathname.startsWith("/resources/"))) ||
                  (item.href === "/contact" && pathname === "/contact")
                    ? "page"
                    : undefined
                }
                className={navLink(
                  (item.href === "/" && pathname === "/") ||
                    (aboutActive && item.href === "/about") ||
                    (pathname === "/certificate" && item.href === "/certificate") ||
                    (item.href === "/resources" &&
                      (pathname === "/resources" || pathname.startsWith("/resources/"))) ||
                    (pathname === "/contact" && item.href === "/contact"),
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link
            href="/request-quote"
            className="btn hidden min-h-11 bg-[#f49400] px-5 text-[0.7rem] text-white hover:bg-[#d67d00] sm:!inline-flex"
          >
            Request a Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-[var(--navy)]/20 text-[var(--navy)] xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          className="border-t border-black/[0.08] bg-[#ffffff] xl:hidden"
          aria-label="Mobile navigation"
        >
          <div className="wrap max-h-[calc(100svh-6rem)] space-y-1 overflow-y-auto py-5">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  aria-current={
                    (item.href === "/" && pathname === "/") ||
                    (item.href === "/about" && aboutActive) ||
                    (item.href === "/certificate" && pathname === "/certificate") ||
                    (item.href === "/resources" &&
                      (pathname === "/resources" || pathname.startsWith("/resources/"))) ||
                    (item.href === "/contact" && pathname === "/contact") ||
                    (item.href === "/products" && productsActive)
                      ? "page"
                      : undefined
                  }
                  className="block py-2.5 text-base font-medium text-[var(--navy)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {"hasDropdown" in item && item.hasDropdown
                  ? productNavItems.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block py-2 pl-4 text-sm text-[var(--muted)]"
                        onClick={() => setOpen(false)}
                      >
                        {product.label}
                      </Link>
                    ))
                  : null}
              </div>
            ))}
            <Link
              href="/request-quote"
              className="btn mt-4 w-full bg-[#f49400] text-white hover:bg-[#d67d00]"
              onClick={() => setOpen(false)}
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

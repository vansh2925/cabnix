"use client";

import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { applications, applicationsBackground } from "@/lib/template";

const AUTOPLAY_MS = 3000;
const ANIMATION_MS = 700;
const SWIPE_THRESHOLD = 40;

function ApplicationMedia({ src, alt }: { src: string; alt: string }) {
  if (!src) {
    return <div className="absolute inset-0 bg-[#d8d8d8]" aria-hidden="true" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 82vw"
      className="object-cover object-center"
    />
  );
}

export function OurApplications() {
  const count = applications.length;
  const slides = [...applications, ...applications];
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pointerX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [stride, setStride] = useState(0);
  const [instant, setInstant] = useState(false);
  const [playId, setPlayId] = useState(0);
  const [inView, setInView] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "80px 0px", threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const cards = track.querySelectorAll<HTMLElement>(".applications-card");
      if (cards.length < 2) return;
      setStride(cards[1].offsetLeft - cards[0].offsetLeft);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || !inView) return;

    const id = window.setInterval(() => {
      if (document.hidden) return;
      setIndex((current) => (current >= count ? current : current + 1));
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [count, playId, inView, reduceMotion]);

  useEffect(() => {
    if (index < count) return;

    const delay = reduceMotion ? 0 : ANIMATION_MS;
    const id = window.setTimeout(() => {
      setInstant(true);
      setIndex((current) => current % count);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setInstant(false);
        });
      });
    }, delay);

    return () => window.clearTimeout(id);
  }, [count, index, reduceMotion]);

  function go(direction: -1 | 1) {
    setPlayId((value) => value + 1);

    if (direction < 0 && index <= 0) {
      setInstant(true);
      setIndex(count);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setInstant(false);
          setIndex(count - 1);
        });
      });
      return;
    }

    setIndex((current) => current + direction);
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    pointerX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (pointerX.current == null) return;
    const delta = event.clientX - pointerX.current;
    pointerX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    go(delta < 0 ? 1 : -1);
  }

  function onPointerCancel() {
    pointerX.current = null;
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
  }

  const current = applications[index % count];
  const snap = instant || reduceMotion;

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#1c2430]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={applicationsBackground}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_35%] md:object-center"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 wrap section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h2 text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.35)]">Our Applications</h2>
          <p className="mt-4 text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.35)]">
            We provide custom-engineered solutions for various industries, backed by reliable manufacturing processes
            and a commitment to consistent quality.
          </p>
        </div>

        <div
          className="relative mt-12"
          role="region"
          aria-roledescription="carousel"
          aria-label="Our applications"
          tabIndex={0}
          onKeyDown={onKeyDown}
        >
          <p className="sr-only" aria-live="polite">
            {current?.title}
          </p>
          <button
            type="button"
            className="applications-arrow left-0"
            aria-label="Previous application"
            onClick={() => go(-1)}
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          <div
            className="applications-viewport touch-pan-y"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
          >
            <div
              ref={trackRef}
              className={snap ? "applications-track is-instant" : "applications-track"}
              style={{ transform: `translate3d(${-index * stride}px, 0, 0)` }}
            >
              {slides.map((item, slideIndex) => (
                <article key={`${item.slug}-${slideIndex}`} className="applications-card">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[4px] bg-[#d8d8d8]">
                    <ApplicationMedia src={item.image} alt={slideIndex < count ? item.title : ""} />
                  </div>
                  <h3 className="mt-4 text-center text-base font-semibold tracking-tight break-words text-white">
                    {item.title}
                  </h3>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="applications-arrow right-0"
            aria-label="Next application"
            onClick={() => go(1)}
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

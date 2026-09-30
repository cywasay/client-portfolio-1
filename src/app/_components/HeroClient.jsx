"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { heroHighlights } from "../home-data";

export default function HeroClient() {
  const heroRef = useRef(null);
  const portraitRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) return;

      const timeline = gsap.timeline({
        defaults: { duration: 0.9, ease: "power3.out" },
      });

      timeline
        .from("[data-hero-eyebrow]", { y: 18, opacity: 0 })
        .from(
          "[data-hero-line]",
          { yPercent: 105, rotate: 1.5, stagger: 0.12 },
          "-=0.55",
        )
        .from(
          "[data-hero-copy], [data-hero-actions]",
          { y: 24, opacity: 0, stagger: 0.12 },
          "-=0.45",
        )
        .from(
          "[data-hero-visual]",
          { x: 40, opacity: 0, scale: 0.985 },
          "-=0.75",
        )
        .from(
          "[data-hero-stat]",
          { y: 16, opacity: 0, stagger: 0.08 },
          "-=0.35",
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  const handleVisualMove = (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    gsap.to(portraitRef.current, {
      x: x * 14,
      y: y * 10,
      scale: 1.035,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.to(badgeRef.current, {
      x: x * -16,
      y: y * -16,
      duration: 0.9,
      ease: "power3.out",
    });
  };

  const resetVisual = () => {
    gsap.to([portraitRef.current, badgeRef.current], {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.9,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden bg-[#edf4f8] text-[#0d2b45] lg:h-[88svh] lg:min-h-[42rem] lg:max-h-[56rem]"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="mx-auto grid max-w-[96rem] lg:h-full lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative flex flex-col px-6 pb-8 pt-12 sm:px-10 sm:pb-10 sm:pt-14 lg:px-14 lg:pb-0 lg:pt-0 xl:px-20">
          <div className="flex flex-1 items-center">
            <div className="w-full max-w-3xl py-7 lg:py-8">
              <div
                data-hero-eyebrow
                className="mb-5 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#28628d] sm:text-xs"
              >
                <span className="h-px w-10 bg-[#4e85ad]" aria-hidden="true" />
                School Principal &middot; Education Leader &middot; Public Voice
              </div>

              <h1
                id="hero-title"
                className="max-w-[13ch] font-serif text-[clamp(3rem,5.6vw,5.8rem)] leading-[0.88] tracking-[-0.055em] text-[#0b2942]"
              >
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-hero-line className="block origin-left">
                    Leading with
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.08em]">
                  <span data-hero-line className="block origin-left italic text-[#23679a]">
                    purpose.
                  </span>
                </span>
                <span className="block overflow-hidden pb-[0.1em]">
                  <span data-hero-line className="block origin-left">
                    Teaching what&apos;s possible.
                  </span>
                </span>
              </h1>

              <p
                data-hero-copy
                className="mt-6 max-w-xl border-l border-[#8fb4cf] pl-5 text-base leading-7 text-[#486277] sm:text-lg sm:leading-8"
              >
                I build learning communities where high standards, human
                connection, and opportunity belong to every student.
              </p>

              <div
                data-hero-actions
                className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Link
                  href="/about"
                  className="group relative inline-flex min-h-13 items-center justify-center gap-3 overflow-hidden bg-[#0d3b5f] px-7 text-sm font-semibold tracking-wide text-white shadow-[0_12px_30px_rgba(13,59,95,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#16527d] hover:shadow-[0_16px_36px_rgba(13,59,95,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d3b5f]"
                >
                  Discover my journey
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="/leadership-and-values"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 border border-[#9bb4c7] px-7 text-sm font-semibold tracking-wide text-[#0d3b5f] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0d3b5f] hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d3b5f]"
                >
                  Leadership philosophy
                  <span
                    className="h-px w-5 bg-current transition-all duration-300 group-hover:w-8"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-3 rounded-3xl bg-white/40 py-5 sm:gap-6 lg:max-w-2xl lg:py-5">
            {heroHighlights.map((stat, index) => (
              <div
                data-hero-stat
                key={stat.label}
                className={`group cursor-default transition-transform duration-300 hover:-translate-y-1 ${index > 0 ? "border-l border-[#b7cedd] pl-4 sm:pl-6" : ""}`}
              >
                <div className="font-serif text-2xl leading-none text-[#0d3b5f] transition-colors duration-300 group-hover:text-[#2380bd] sm:text-3xl">
                  {stat.number}
                </div>
                <div className="mt-2 max-w-[9rem] text-[0.62rem] font-semibold uppercase leading-4 tracking-[0.14em] text-[#607789] sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-hero-visual
          onPointerMove={handleVisualMove}
          onPointerLeave={resetVisual}
          className="group relative min-h-[32rem] overflow-hidden bg-[#0a2943] lg:min-h-0"
        >
          <div ref={portraitRef} className="absolute -inset-3 will-change-transform">
            <Image
              src="/edu-leader.jpg"
              alt="Neelam Nasir speaking at an educational event"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-[48%_center] saturate-[0.92] transition-[filter] duration-700 group-hover:saturate-100"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,37,61,0.08)_40%,rgba(5,28,47,0.9)_100%)]" />
          <div className="absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-[#edf4f8]/30 to-transparent lg:block" />

          <div ref={badgeRef} className="absolute right-5 top-5 flex size-20 items-center justify-center rounded-full border border-white/60 bg-[#0b416b]/35 text-center text-[0.55rem] font-semibold uppercase leading-4 tracking-[0.18em] text-white shadow-xl backdrop-blur-md transition-colors duration-300 group-hover:bg-[#0b416b]/55 sm:right-8 sm:top-8 sm:size-24 sm:text-[0.62rem]">
            Education
            <br />
            with impact
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9 lg:p-11">
            <div className="mb-6 max-w-sm border-l border-[#80b9df] pl-5 text-lg leading-7 text-white sm:text-xl">
              Preparing students for the world. Encouraging them to shape it.
            </div>
            <div className="flex items-end justify-between gap-6 border-t border-white/30 pt-5 text-white">
              <div>
                <p className="font-serif text-2xl">Neelam Nasir</p>
                <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Principal &amp; Educational Leader
                </p>
              </div>
              <a
                href="#about"
                className="hidden items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white sm:flex"
              >
                Explore
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

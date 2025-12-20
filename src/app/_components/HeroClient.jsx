"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { heroHighlights } from "../home-data";

export default function HeroClient() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(line1Ref.current, { y: 60, opacity: 0, duration: 1, delay: 0.2 })
      .from(line2Ref.current, { y: 60, opacity: 0, duration: 1 }, "-=0.8")
      .from(taglineRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.6");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20 py-20 lg:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-float-slow" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-200 rounded-full opacity-15 animate-float-medium" />
        <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-purple-200 rounded-full opacity-25 animate-float-fast" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        <div className="flex-1 max-w-2xl space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span ref={line1Ref} className="block text-blue-950">
                Shaping Minds,
              </span>
              <span ref={line2Ref} className="block text-blue-950">
                Inspiring Futures
              </span>
            </h1>
            <p
              ref={taglineRef}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
            >
              Empowering students through innovative education, compassionate
              leadership, and transformative learning experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 py-6">
            {heroHighlights.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-1`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <PrimaryButton>Explore My Journey</PrimaryButton>
            <SecondaryButton>View My Work</SecondaryButton>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[29rem] lg:h-[29rem] rounded-full bg-gradient-to-br from-blue-400 via-emerald-400 to-purple-400 shadow-2xl ring-4 ring-white/50 relative overflow-hidden">
              <Image
                src="/edu-leader.jpg"
                alt="Education Leader"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-2xl rotate-12 opacity-80 animate-float-slow" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-400 rounded-3xl -rotate-12 opacity-60 animate-float-medium" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";

function PrimaryButton({ children }) {
  return (
    <Button className="group px-8 py-6 h-auto bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 flex items-center gap-3">
      <span>{children}</span>
      <span className="group-hover:translate-x-1 transition-transform duration-300">
        →
      </span>
    </Button>
  );
}

function SecondaryButton({ children }) {
  return (
    <Button
      variant="ghost"
      className="px-8 py-6 h-auto text-blue-950 rounded-2xl font-semibold hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center gap-3"
    >
      {children}
    </Button>
  );
}

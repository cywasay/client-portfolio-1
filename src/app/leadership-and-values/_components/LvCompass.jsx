"use client";

import { useState } from "react";
import { compassValues } from "../data";
import { Card } from "@/components/ui/card";

export default function LvCompass() {
  const [hoveredValue, setHoveredValue] = useState(null);

  return (
    <section
      id="leadership-compass"
      className="py-24 px-6 sm:px-12 lg:px-20 scroll-mt-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @media (min-width: 768px) {
          .orbit-container {
            animation: orbit var(--orbit-speed, 35s) linear infinite;
          }
          .orbit-card-inner {
            animation: counter-orbit var(--orbit-speed, 35s) linear infinite;
          }
        }
      `,
        }}
      />
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mb-4 tracking-tight">
          My Leadership Compass
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-4 rounded-full"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Core principles that guide every decision and interaction
        </p>
      </div>

      {/* Desktop Circular Layout */}
      <div className="hidden md:block relative h-[700px] mb-20 mt-32">
        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-slate-200/50 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-slate-100 pointer-events-none"></div>

        {/* Center Circle */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-white shadow-2xl border-2 flex items-center justify-center z-20 transition-all duration-500 ${
            hoveredValue
              ? "border-blue-400 shadow-blue-100 scale-105"
              : "border-slate-200 shadow-slate-200"
          }`}
        >
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 via-white to-emerald-50 transition-opacity duration-500 ${
              hoveredValue ? "opacity-100" : "opacity-60"
            }`}
          ></div>
          <div className="text-center relative z-10">
            <div className="text-6xl mb-3 transform transition-transform duration-300">
              🧭
            </div>
            <p className="text-gray-700 font-bold text-xl tracking-wide">
              Leadership
            </p>
            <p className="text-gray-500 text-sm mt-1">Compass</p>
          </div>
        </div>

        {/* Orbit Layer */}
        <div className="orbit-container absolute inset-0">
          {compassValues.map((value) => (
            <div
              key={value.title}
              className="absolute top-1/2 left-1/2 w-40 h-40 lg:w-44 lg:h-44 group cursor-pointer"
              style={{
                transform: `translate(-50%, -50%) rotate(${value.angle}deg) translate(280px)`,
              }}
              onMouseEnter={() => setHoveredValue(value.title)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div
                className="w-full h-full"
                style={{ transform: `rotate(-${value.angle}deg)` }}
              >
                <div className="orbit-card-inner w-full h-full">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${
                      value.color
                    } rounded-2xl shadow-lg text-white flex flex-col items-center justify-center p-6 transition-all duration-500 ease-out border-2 border-white/40 relative overflow-hidden ${
                      hoveredValue && hoveredValue !== value.title
                        ? "opacity-40 scale-90 blur-[1px]"
                        : "opacity-100 scale-100"
                    } ${
                      hoveredValue === value.title
                        ? "scale-115 shadow-22xl border-white/60 z-30 ring-4 ring-white/20"
                        : "shadow-xl"
                    }`}
                  >
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Animated ring on hover */}
                    <div className="absolute inset-0 rounded-2xl ring-4 ring-white/0 group-hover:ring-white/30 transition-all duration-500"></div>

                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {value.icon}
                    </div>
                    <div className="text-sm font-bold text-center tracking-wider uppercase relative z-10 leading-tight">
                      {value.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Grid Layout */}
      <div className="md:hidden">
        <div className="w-56 h-56 mx-auto rounded-full bg-white shadow-2xl border-2 border-slate-200 flex items-center justify-center mb-12 relative overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 via-white to-emerald-50 opacity-60"></div>
          <div className="text-center relative z-10">
            <div className="text-7xl mb-3">🧭</div>
            <p className="text-gray-700 font-bold text-xl">Leadership</p>
            <p className="text-gray-500 text-sm mt-1">Compass</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 max-w-md mx-auto">
          {compassValues.map((value) => (
            <Card
              key={value.title}
              onMouseEnter={() => setHoveredValue(value.title)}
              onMouseLeave={() => setHoveredValue(null)}
              className={`bg-gradient-to-br ${
                value.color
              } rounded-2xl shadow-lg flex flex-col items-center justify-center text-white p-8 aspect-square border-2 border-white/40 active:scale-95 transition-all duration-300 relative overflow-hidden ${
                hoveredValue && hoveredValue !== value.title
                  ? "opacity-40 scale-95 grayscale-[0.2]"
                  : "opacity-100 scale-100"
              } ${
                hoveredValue === value.title
                  ? "scale-105 shadow-2xl border-white/60"
                  : ""
              }`}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 opacity-60"></div>

              <div className="text-5xl mb-4 relative z-10 transition-transform duration-300 group-hover:scale-110">
                {value.icon}
              </div>
              <div className="text-base font-bold text-center uppercase tracking-wide relative z-10 leading-tight">
                {value.title}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

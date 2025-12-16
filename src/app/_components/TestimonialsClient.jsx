"use client";

import { useEffect, useState } from "react";
import { testimonials } from "../home-data";

export default function TestimonialsClient() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-950">Voices of Impact</h2>
        </header>
        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((t) => (
                <article key={t.author} className="w-full flex-shrink-0 p-10 sm:p-12">
                  <div className="text-center max-w-3xl mx-auto">
                    <div className="text-6xl mb-6">❝</div>
                    <p className="text-2xl sm:text-3xl text-gray-700 leading-relaxed mb-8 italic">{t.quote}</p>
                    <div>
                      <div className="font-bold text-gray-800 text-lg">{t.author}</div>
                      <div className="text-gray-600">{t.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((t, index) => (
              <button
                key={t.author}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


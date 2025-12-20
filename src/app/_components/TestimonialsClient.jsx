"use client";

import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "../home-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TestimonialsClient() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-950">
            Voices of Impact
          </h2>
        </header>

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            loop: true,
            align: "start",
          }}
          className="relative w-full"
        >
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl relative">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.author}>
                  <article className="w-full flex-shrink-0 p-10 sm:p-12">
                    <div className="text-center max-w-3xl mx-auto">
                      <div className="text-6xl mb-6">❝</div>
                      <p className="text-2xl sm:text-3xl text-gray-700 leading-relaxed mb-8 italic">
                        {t.quote}
                      </p>
                      <div>
                        <div className="font-bold text-gray-800 text-lg">
                          {t.author}
                        </div>
                        <div className="text-gray-600">{t.role}</div>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Added arrows for better accessibility/control */}
            <div className="hidden sm:block">
              <CarouselPrevious className="left-4 bg-gray-100 hover:bg-gray-200 border-none" />
              <CarouselNext className="right-4 bg-gray-100 hover:bg-gray-200 border-none" />
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}

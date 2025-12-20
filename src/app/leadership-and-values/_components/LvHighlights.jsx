import Image from "next/image";
import { highlights } from "../data";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

const highlightImages = [
  "/edu-leader2.jpg",
  "/edu-leader3.jpg",
  "/edu-leader6.jpg",
];

export default function LvHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">
            Leadership in Action
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <Card
              key={highlight.title}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 border-none p-0"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center relative">
                <Image
                  src={highlightImages[index]}
                  alt={highlight.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="text-3xl mb-3 text-white">{highlight.icon}</div>
                <CardTitle className="text-xl font-bold text-white mb-2 underline-offset-4 decoration-white/30 group-hover:underline">
                  {highlight.title}
                </CardTitle>
                <CardDescription className="text-white/90 text-sm leading-relaxed">
                  {highlight.description}
                </CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

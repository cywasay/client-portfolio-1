import Image from "next/image";
import { journeyPoints } from "../data";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function LvTimeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950 mb-2">
            Leadership Journey
          </h2>
          <p className="text-lg text-gray-600">
            The flowing path of growth and transformation.
          </p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-emerald-200 to-purple-200" />
          <div className="space-y-14 md:space-y-20">
            {journeyPoints.map((point, index) => (
              <div
                key={point.title}
                className={`relative flex flex-col md:flex-row items-center ${
                  point.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    point.side === "left" ? "md:pr-12" : "md:pl-12"
                  } mb-6 md:mb-0`}
                >
                  <Card className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-l-emerald-500 border-none shrink-0">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 w-fit">
                      {point.year}
                    </span>
                    <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                      {point.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed text-base">
                      {point.description}
                    </CardDescription>
                  </Card>
                </div>
                <div
                  className={`w-full md:w-1/2 ${
                    point.side === "left" ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl shadow-lg overflow-hidden aspect-video flex items-center justify-center relative group">
                    {index === 0 ? (
                      <Image
                        src="/edu-leader1.jpg"
                        alt={point.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : index === 1 ? (
                      <Image
                        src="/edu-leader4.jpg"
                        alt={point.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : index === 2 ? (
                      <Image
                        src="/edu-leader5.jpg"
                        alt={point.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : index === 3 ? (
                      <Image
                        src="/edu-leader6.jpg"
                        alt={point.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">📸</div>
                        <p>Leadership Image</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

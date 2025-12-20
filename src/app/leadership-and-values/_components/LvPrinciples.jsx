import Image from "next/image";
import { principles } from "../data";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function LvPrinciples() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">
            Guiding Principles
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {principles.map((principle) => (
              <Card
                key={principle.title}
                className="flex flex-col sm:flex-row items-start gap-4 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl transition hover:-translate-y-1 border-l-4 border-l-emerald-500 border-none"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl text-white shrink-0">
                  {principle.icon}
                </div>
                <div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    {principle.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600">
                    {principle.description}
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>
          <div className="relative mt-6 lg:mt-0 group">
            <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-3xl shadow-2xl overflow-hidden aspect-square flex items-center justify-center border-4 border-white relative">
              <Image
                src="/edu-leader7.jpg"
                alt="Leadership Guiding Principles"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-100 rounded-2xl rotate-12 opacity-80" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-32 sm:h-32 bg-emerald-100 rounded-3xl -rotate-12 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}

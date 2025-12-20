import Image from "next/image";
import { stats } from "../data";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function AboutHero() {
  return (
    <section className="relative py-16 sm:py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-float-slow" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-200 rounded-full opacity-15 animate-float-medium" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-blue-950">
              About My
              <br />
              Educational Journey
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              With over a decade of dedicated experience, I create
              transformative learning experiences that empower students to
              discover their potential and thrive.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                  {stat.number}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm text-gray-600 font-medium">
                  {stat.label}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl shadow-2xl aspect-square overflow-hidden border-2 border-white relative group">
            <Image
              src="/edu-leader2.jpg"
              alt="Education Leader Journey"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl rotate-12 opacity-80 animate-float-slow" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-400 rounded-3xl -rotate-12 opacity-60 animate-float-medium" />
        </div>
      </div>
    </section>
  );
}

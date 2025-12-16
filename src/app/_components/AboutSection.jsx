import Image from "next/image";
import { interactiveStats } from "../home-data";

export default function AboutSection() {
  return (
    <section className="relative py-20 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-blue-950">About My Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A decade of dedicated service in education, transforming learning experiences and empowering future leaders.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                With over a decade of experience in education, I&apos;m passionate about creating
                <span className="font-semibold text-blue-950"> inclusive learning environments</span> where every student can discover their potential.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in developing
                <span className="font-semibold text-emerald-600"> innovative curriculum</span> that integrates technology while honoring human connection.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {interactiveStats.map((stat) => (
                <div key={stat.label} className="group text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden border-2 border-white">
              <Image src="/educational-excellence.jpg" alt="Educational Excellence" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-100 rounded-2xl rotate-12 animate-float-slow" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange-100 rounded-3xl -rotate-12 opacity-60 animate-float-medium" />
          </div>
        </div>
      </div>
    </section>
  );
}


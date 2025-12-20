import { impactStats } from "../data";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function AchievementsHero() {
  return (
    <section className="relative py-16 sm:py-20 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-float-slow" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-200 rounded-full opacity-15 animate-float-medium" />
      </div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-blue-950">
          Achievements & Impact
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
          Celebrating milestones that shaped innovation, inspired students, and
          created lasting impact.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {impactStats.map((stat) => (
            <Card
              key={stat.label}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <CardTitle className="text-2xl font-bold text-gray-800">
                {stat.number}
              </CardTitle>
              <CardDescription className="text-sm text-gray-600 font-medium">
                {stat.label}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

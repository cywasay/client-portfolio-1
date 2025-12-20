import { philosophyPoints } from "../data";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

const palette = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    light: "bg-blue-50",
    border: "border-blue-200",
  },
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    light: "bg-emerald-50",
    border: "border-emerald-200",
  },
};

export default function PhilosophyGrid() {
  return (
    <Card className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-blue-950">
        My Educational Philosophy
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
        Education should ignite curiosity and empower students to own their
        learning journey. Safe, inclusive spaces let learners explore, question,
        and grow.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {philosophyPoints.map((point) => {
          const colors = palette[point.color];
          return (
            <Card
              key={point.title}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${colors.border}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white text-lg shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  {point.icon}
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                    {point.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {point.description}
                  </CardDescription>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Card>
  );
}

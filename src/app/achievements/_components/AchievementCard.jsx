import { Card, CardTitle } from "@/components/ui/card";

const palette = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    light: "bg-blue-50",
    border: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    light: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
  },
  purple: {
    gradient: "from-purple-500 to-purple-600",
    light: "bg-purple-50",
    border: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
  },
  orange: {
    gradient: "from-orange-500 to-orange-600",
    light: "bg-orange-50",
    border: "border-orange-200",
    badge: "bg-orange-100 text-orange-700",
  },
};

export default function AchievementCard({ achievement, onSelect }) {
  const colors = palette[achievement.color] || palette.blue;
  return (
    <div
      className="group relative cursor-pointer"
      onClick={() => onSelect(achievement)}
    >
      <Card
        className={`relative bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 border-2 ${colors.border} group-hover:-translate-y-3 overflow-hidden`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
        />
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-2xl text-white shadow-lg mb-4`}
        >
          {achievement.icon}
        </div>
        <div className="mb-3">
          <span
            className={`inline-block px-3 py-1 ${colors.badge} rounded-full text-xs font-semibold mb-2`}
          >
            {achievement.category.charAt(0).toUpperCase() +
              achievement.category.slice(1)}
          </span>
          <CardTitle className="text-xl font-bold text-gray-800 mb-1 leading-tight">
            {achievement.title}
          </CardTitle>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{achievement.organization}</span>
            <span className="font-semibold">{achievement.year}</span>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-3 text-sm">
          {achievement.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {achievement.metrics.map((metric) => (
            <span
              key={metric}
              className={`px-2 py-1 ${colors.light} rounded-full text-xs font-medium text-gray-700 border ${colors.border}`}
            >
              {metric}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Click to view details</span>
          <span className="text-blue-500 font-semibold group-hover:translate-x-1 transition-transform duration-300">
            View ›
          </span>
        </div>
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}
        />
      </Card>
    </div>
  );
}

"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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

export default function AchievementModal({ achievement, onClose }) {
  if (!achievement) return null;
  const colors = palette[achievement.color] || palette.blue;

  return (
    <Dialog open={!!achievement} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl bg-white rounded-3xl p-0 overflow-hidden border-none">
        <div className="p-8 space-y-6">
          <DialogHeader className="flex flex-row items-center gap-6 space-y-0 text-left">
            <div
              className={`w-20 h-20 shrink-0 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-3xl text-white shadow-lg`}
            >
              {achievement.icon}
            </div>
            <div className="flex-1">
              <span
                className={`inline-block px-3 py-1 ${colors.badge} rounded-full text-sm font-semibold mb-2`}
              >
                {achievement.category.charAt(0).toUpperCase() +
                  achievement.category.slice(1)}
              </span>
              <DialogTitle className="text-2xl font-bold text-gray-800">
                {achievement.title}
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-base mt-1">
                {achievement.organization} • {achievement.year}
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            <Info title="Description" content={achievement.description} />
            <Info title="Impact" content={achievement.impact} />

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Key Metrics
              </h3>
              <div className="flex flex-wrap gap-2">
                {achievement.metrics.map((metric) => (
                  <span
                    key={metric}
                    className={`px-3 py-2 ${colors.light} rounded-lg text-sm font-medium text-gray-700 border ${colors.border}`}
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            {achievement.highlight && (
              <div
                className={`p-4 ${colors.light} rounded-xl border ${colors.border}`}
              >
                <h4 className="font-semibold text-gray-800 mb-1">Highlight</h4>
                <p className="text-gray-600 text-sm italic">
                  "{achievement.highlight}"
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const Info = ({ title, content }) => (
  <div className="space-y-1">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{content}</p>
  </div>
);

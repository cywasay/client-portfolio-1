"use client";

const palette = {
  blue: { gradient: 'from-blue-500 to-blue-600', light: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700' },
  emerald: { gradient: 'from-emerald-500 to-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700' },
  purple: { gradient: 'from-purple-500 to-purple-600', light: 'bg-purple-50', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-700' },
  orange: { gradient: 'from-orange-500 to-orange-600', light: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700' }
};

export default function AchievementModal({ achievement, onClose }) {
  if (!achievement) return null;
  const colors = palette[achievement.color] || palette.blue;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8 space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-3xl text-white shadow-lg`}>{achievement.icon}</div>
              <div>
                <span className={`inline-block px-3 py-1 ${colors.badge} rounded-full text-sm font-semibold mb-2`}>{achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}</span>
                <h2 className="text-2xl font-bold text-gray-800">{achievement.title}</h2>
                <p className="text-gray-600">{achievement.organization} • {achievement.year}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 text-2xl leading-none">×</button>
          </div>
          <Info title="Description" content={achievement.description} />
          <Info title="Impact" content={achievement.impact} />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Metrics</h3>
            <div className="flex flex-wrap gap-2">
              {achievement.metrics.map((metric) => (
                <span key={metric} className={`px-3 py-2 ${colors.light} rounded-lg text-sm font-medium text-gray-700 border ${colors.border}`}>
                  {metric}
                </span>
              ))}
            </div>
          </div>
          {achievement.highlight && (
            <div className={`p-4 ${colors.light} rounded-xl border ${colors.border}`}>
              <h4 className="font-semibold text-gray-800 mb-1">Highlight</h4>
              <p className="text-gray-600 text-sm">{achievement.highlight}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Info = ({ title, content }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{content}</p>
  </div>
);


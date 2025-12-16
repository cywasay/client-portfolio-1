import { experienceTimeline } from '../data';

export default function JourneyTimeline() {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">Professional Journey</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 hidden sm:block" />
        <div className="space-y-8">
          {experienceTimeline.map((experience) => (
            <div key={experience.year} className="relative flex items-start gap-6 group">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg transition-transform duration-300 group-hover:scale-110 z-10">
                {experience.icon}
              </div>
              <div className="flex-1 bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-2 border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{experience.role}</h3>
                    <p className="text-blue-600 font-semibold">{experience.institution}</p>
                  </div>
                  <span className="mt-2 sm:mt-0 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">{experience.year}</span>
                </div>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


"use client";

export default function Achievements() {
  return (
    <main className="text-gray-800 bg-white px-6 sm:px-12 lg:px-20 py-20">
      
      {/* ===== PAGE TITLE ===== */}
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-blue-500">
          Achievements
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Celebrating milestones, recognitions, and moments that have shaped my educational journey.
        </p>
      </div>

      {/* ===== ACHIEVEMENTS GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Achievement Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500 group">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
            <span className="text-2xl text-blue-500">🏆</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">Award / Recognition 1</h3>
          <p className="text-gray-600 leading-relaxed">
            Short description of the achievement goes here. Explain the significance and impact.
          </p>
        </div>

        {/* Achievement Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-emerald-500 group">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
            <span className="text-2xl text-emerald-500">⭐</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">Award / Recognition 2</h3>
          <p className="text-gray-600 leading-relaxed">
            Short description of the achievement goes here. Explain the significance and impact.
          </p>
        </div>

        {/* Achievement Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500 group">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
            <span className="text-2xl text-blue-500">🎓</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">Award / Recognition 3</h3>
          <p className="text-gray-600 leading-relaxed">
            Short description of the achievement goes here. Explain the significance and impact.
          </p>
        </div>

        {/* Achievement Card 4 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-emerald-500 group">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
            <span className="text-2xl text-emerald-500">📚</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">Award / Recognition 4</h3>
          <p className="text-gray-600 leading-relaxed">
            Short description of the achievement goes here. Explain the significance and impact.
          </p>
        </div>

        {/* Achievement Card 5 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500 group">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
            <span className="text-2xl text-blue-500">✨</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">Award / Recognition 5</h3>
          <p className="text-gray-600 leading-relaxed">
            Short description of the achievement goes here. Explain the significance and impact.
          </p>
        </div>

        {/* Achievement Card 6 */}
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-emerald-500 group">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
            <span className="text-2xl text-emerald-500">🌟</span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-800">Award / Recognition 6</h3>
          <p className="text-gray-600 leading-relaxed">
            Short description of the achievement goes here. Explain the significance and impact.
          </p>
        </div>

      </div>

    </main>
  );
}
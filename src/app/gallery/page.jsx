"use client";

export default function Gallery() {
  return (
    <main className="text-gray-800 bg-soft-white px-6 sm:px-12 lg:px-20 py-20">
      
      {/* ===== PAGE TITLE ===== */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-blue-500">
          Gallery
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A visual journey through memorable moments, events, and experiences.
        </p>
      </div>

      {/* ===== IMAGE GRID ===== */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        
        {/* Image Card 1 */}
        <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-4xl opacity-50">📸</span>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Event Title 1</h3>
            <p className="text-sm text-gray-600">Brief description or date</p>
          </div>
        </div>

        {/* Image Card 2 */}
        <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-4xl opacity-50">🎓</span>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Event Title 2</h3>
            <p className="text-sm text-gray-600">Brief description or date</p>
          </div>
        </div>

        {/* Image Card 3 */}
        <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-blue-100 to-emerald-100 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-4xl opacity-50">🏆</span>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Event Title 3</h3>
            <p className="text-sm text-gray-600">Brief description or date</p>
          </div>
        </div>

        {/* Image Card 4 */}
        <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-emerald-100 to-blue-100 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-4xl opacity-50">📚</span>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Event Title 4</h3>
            <p className="text-sm text-gray-600">Brief description or date</p>
          </div>
        </div>

        {/* Image Card 5 */}
        <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-blue-200 to-blue-300 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-4xl opacity-50">🌟</span>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Event Title 5</h3>
            <p className="text-sm text-gray-600">Brief description or date</p>
          </div>
        </div>

        {/* Image Card 6 */}
        <div className="group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
          <div className="bg-gradient-to-br from-emerald-200 to-emerald-300 h-64 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-4xl opacity-50">✨</span>
          </div>
          <div className="bg-white p-4">
            <h3 className="font-semibold text-gray-800 mb-1">Event Title 6</h3>
            <p className="text-sm text-gray-600">Brief description or date</p>
          </div>
        </div>

      </section>

      {/* ===== CAPTION / DESCRIPTION ===== */}
      <section className="text-center bg-gray-50 py-8 px-6 rounded-2xl">
        <p className="text-gray-600 text-lg">
          Click on any image to view details and explore more moments from my journey.
        </p>
      </section>

    </main>
  );
}
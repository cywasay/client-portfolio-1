"use client";

export default function About() {
  return (
    <main className="text-gray-800 bg-white px-6 sm:px-12 lg:px-20 py-20">
      
      {/* ===== ABOUT HERO ===== */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-20">
        <div className="flex-1 min-w-0 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Brief professional bio goes here. Highlight your teaching philosophy, education experience, and inspiration.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Use short paragraphs and bullet points if needed to keep it readable and engaging.
          </p>
        </div>
        <div className="flex-1 min-w-0 w-full">
          <div className="h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl shadow-xl ring-1 ring-gray-200"></div>
        </div>
      </section>

      {/* ===== VALUES / PHILOSOPHY ===== */}
      <section className="p-8 sm:p-12 bg-gray-50 rounded-2xl shadow-md border-l-4 border-blue-500 mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-500">
          My Philosophy
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Short paragraph describing your core values, educational philosophy, or leadership principles. Keep it inspiring and concise.
        </p>
        <ul className="space-y-4">
          <li className="flex items-start gap-3 group">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold mt-1 transition-transform duration-200 group-hover:scale-110">✓</span>
            <span className="text-lg text-gray-700">Value / Principle 1</span>
          </li>
          <li className="flex items-start gap-3 group">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold mt-1 transition-transform duration-200 group-hover:scale-110">✓</span>
            <span className="text-lg text-gray-700">Value / Principle 2</span>
          </li>
          <li className="flex items-start gap-3 group">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-sm font-bold mt-1 transition-transform duration-200 group-hover:scale-110">✓</span>
            <span className="text-lg text-gray-700">Value / Principle 3</span>
          </li>
        </ul>
      </section>

      {/* ===== CAREER HIGHLIGHTS ===== */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-500">
          Career Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500 group">
            <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl mb-4 ring-1 ring-gray-200"></div>
            <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors">Career Milestone 1</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-emerald-500 group">
            <div className="w-full h-32 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl mb-4 ring-1 ring-gray-200"></div>
            <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors">Career Milestone 2</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500 group">
            <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl mb-4 ring-1 ring-gray-200"></div>
            <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors">Career Milestone 3</p>
          </div>
        </div>
      </section>

    </main>
  );
}
"use client";

export default function Home() {
  return (
    <main className="text-gray-800 bg-white">
      
      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 py-20 lg:py-28 bg-gray-50 gap-12">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight">
            Shaping Minds, Inspiring Futures
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Empowering students and creating impactful learning experiences through dedication, innovation, and compassion.
          </p>
          <div>
            <button className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors duration-300 shadow-md">
              Explore My Journey
            </button>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-emerald-100 shadow-xl ring-4 ring-white ring-opacity-50"></div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="px-6 sm:px-12 lg:px-20 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-500">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 min-w-0 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Brief professional bio and teaching philosophy go here. Keep it short, inspiring, and readable. Share your passion for education and how you've made a difference in students' lives.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Highlight your unique approach to teaching and what drives your commitment to excellence in education.
            </p>
          </div>
          <div className="flex-1 min-w-0 w-full">
            <div className="bg-gradient-to-br from-blue-100 to-emerald-100 h-72 rounded-2xl shadow-lg ring-1 ring-gray-200"></div>
          </div>
        </div>
      </section>

      {/* ===== CAREER JOURNEY SECTION ===== */}
      <section className="px-6 sm:px-12 lg:px-20 py-20 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-500">
          Career Journey
        </h2>
        <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-emerald-500 hover:shadow-lg transition-shadow duration-300">
          <p className="text-gray-600 text-center">Timeline visualization coming soon</p>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS SECTION ===== */}
      <section className="px-6 sm:px-12 lg:px-20 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-500">
          Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 group">
            <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors">Achievement Card 1</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-emerald-100 group">
            <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors">Achievement Card 2</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 group">
            <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors">Achievement Card 3</p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="px-6 sm:px-12 lg:px-20 py-20 bg-blue-50">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-500">
          Get In Touch
        </h2>
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg ring-1 ring-gray-200">
          <p className="text-gray-600 text-center mb-6 text-lg leading-relaxed">
            Let's connect! Whether you have questions or want to collaborate, I'd love to hear from you.
          </p>
          <div className="bg-gray-100 h-48 rounded-xl flex items-center justify-center border border-gray-200">
            <p className="text-gray-500">Contact form placeholder</p>
          </div>
        </div>
      </section>

    </main>
  );
}
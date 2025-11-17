"use client";

export default function Career() {
  return (
    <main className="text-gray-800 bg-white px-6 sm:px-12 lg:px-20 py-20">
      
      {/* ===== PAGE TITLE ===== */}
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-blue-500">
          Career Journey
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          A timeline of my professional growth, experiences, and milestones in education.
        </p>
      </div>

      {/* ===== TIMELINE / CAREER HIGHLIGHTS ===== */}
      <section className="max-w-4xl mx-auto relative">
        
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-blue-500 hidden sm:block"></div>

        <div className="space-y-12">
          
          {/* Timeline Item 1 */}
          <div className="relative flex items-start gap-6 sm:gap-8 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 border-4 border-white shadow-lg flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-sm">1</span>
            </div>
            <div className="flex-1 bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-emerald-500">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
                  2023 – Present
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                Lead Educator at XYZ School
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Brief description of role and responsibilities. Highlight key achievements, impact on students, curriculum development, and leadership initiatives.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex items-start gap-6 sm:gap-8 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 border-4 border-white shadow-lg flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-sm">2</span>
            </div>
            <div className="flex-1 bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                  2020 – 2023
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                Instructional Designer at ABC Institute
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Brief description of role and responsibilities. Share accomplishments in designing educational materials, training programs, and innovative teaching methods.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative flex items-start gap-6 sm:gap-8 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 border-4 border-white shadow-lg flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <div className="flex-1 bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-emerald-500">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-3">
                  2018 – 2020
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                Teacher at DEF School
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Brief description of role and responsibilities. Describe teaching experience, student engagement strategies, and foundational career moments.
              </p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="relative flex items-start gap-6 sm:gap-8 group">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 border-4 border-white shadow-lg flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-sm">4</span>
            </div>
            <div className="flex-1 bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
                  2015 – 2018
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                Education Role or Certification
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Early career experience, education, or professional development. Share how this shaped your teaching philosophy and career path.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
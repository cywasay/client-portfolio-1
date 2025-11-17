"use client";

export default function LeadershipAndValues() {
  return (
    <main className="text-gray-800 bg-white px-6 sm:px-12 lg:px-20 py-20">
      
      {/* ===== PAGE TITLE ===== */}
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-blue-500">
          Leadership & Values
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          The principles and beliefs that guide my approach to education and leadership.
        </p>
      </div>

      {/* ===== VALUES / PHILOSOPHY SECTION ===== */}
      <section className="flex flex-col lg:flex-row gap-12 items-center mb-20">
        
        {/* Text column */}
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-500">
            My Philosophy
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Describe your leadership approach, core principles, and how you guide and inspire others. Keep it concise and inspirational while sharing what drives your commitment to excellence.
          </p>
          
          <div className="space-y-5">
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-emerald-500 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-emerald-600 text-xl">💡</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Value / Principle 1</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Brief explanation of this core value and its impact.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-blue-500 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-blue-600 text-xl">🎯</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Value / Principle 2</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Brief explanation of this core value and its impact.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-emerald-500 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-emerald-600 text-xl">🌱</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Value / Principle 3</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Brief explanation of this core value and its impact.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual column */}
        <div className="flex-1 min-w-0 w-full">
          <div className="h-96 bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center border border-gray-200">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">🌟</div>
              <p className="text-gray-500 text-sm">Inspiring visual or illustration</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY LEADERSHIP HIGHLIGHTS ===== */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-blue-500">
          Key Leadership Highlights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Highlight Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              <span className="text-3xl">👥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Team Leadership</h3>
            <p className="text-gray-600 leading-relaxed">
              Led initiatives that fostered collaboration and professional growth among educators.
            </p>
          </div>

          {/* Highlight Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-emerald-500 group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              Implemented innovative teaching methods that transformed student engagement and outcomes.
            </p>
          </div>

          {/* Highlight Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500 group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
              <span className="text-3xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Mentorship</h3>
            <p className="text-gray-600 leading-relaxed">
              Mentored aspiring educators and guided them toward excellence in their teaching practice.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
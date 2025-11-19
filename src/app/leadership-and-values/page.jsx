"use client";

export default function LeadershipAndValues() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
      `}} />
      
      <main className="text-gray-800 bg-white min-h-screen overflow-hidden">
        
        {/* ===== FLOATING ISLANDS HERO ===== */}
        <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating Island Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-float-slow"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-100 rounded-full opacity-15 animate-float-medium"></div>
            <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-purple-100 rounded-full opacity-25 animate-float-fast"></div>
          </div>
          
          <div className="relative px-6 sm:px-12 lg:px-20 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 bg-clip-text text-transparent">
              Leadership
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-600 mt-4">& Values</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Guiding principles that shape educational transformation and inspire meaningful impact
            </p>
          </div>
        </section>

        {/* ===== INTERACTIVE VALUES COMPASS ===== */}
        <section className="py-20 px-6 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">
                My Leadership Compass
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Core principles that guide every decision and interaction
              </p>
            </div>

            {/* Circular Values Layout - Desktop */}
            <div className="hidden md:block relative h-96 sm:h-[500px] lg:h-[600px] mb-20">
              {/* Central Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full shadow-2xl border-4 border-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl mb-2">🧭</div>
                    <p className="text-sm sm:text-base text-gray-600 font-medium">My Compass</p>
                  </div>
                </div>
              </div>

              {/* Orbiting Values */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {[
                  { angle: 0, icon: "💡", title: "Innovation", color: "blue" },
                  { angle: 90, icon: "❤️", title: "Empathy", color: "emerald" },
                  { angle: 180, icon: "🎯", title: "Purpose", color: "purple" },
                  { angle: 270, icon: "🌱", title: "Growth", color: "orange" }
                ].map((value, index) => (
                  <div
                    key={index}
                    className="absolute w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{
                      transform: `rotate(${value.angle}deg) translate(200px) rotate(-${value.angle}deg)`
                    }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${
                      value.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      value.color === 'emerald' ? 'from-emerald-500 to-emerald-600' :
                      value.color === 'purple' ? 'from-purple-500 to-purple-600' :
                      'from-orange-500 to-orange-600'
                    } rounded-2xl shadow-lg flex flex-col items-center justify-center text-white p-4 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl`}>
                      <div className="text-2xl mb-2">{value.icon}</div>
                      <div className="text-sm font-semibold text-center">{value.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Values Grid */}
            <div className="md:hidden grid grid-cols-2 gap-4 mb-12">
              {[
                { icon: "💡", title: "Innovation", color: "blue" },
                { icon: "❤️", title: "Empathy", color: "emerald" },
                { icon: "🎯", title: "Purpose", color: "purple" },
                { icon: "🌱", title: "Growth", color: "orange" }
              ].map((value, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${
                    value.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    value.color === 'emerald' ? 'from-emerald-500 to-emerald-600' :
                    value.color === 'purple' ? 'from-purple-500 to-purple-600' :
                    'from-orange-500 to-orange-600'
                  } rounded-2xl shadow-lg flex flex-col items-center justify-center text-white p-6 aspect-square`}
                >
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <div className="text-base font-semibold text-center">{value.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TIMELINE RIVER ===== */}
        <section className="py-20 bg-gray-50">
          <div className="px-6 sm:px-12 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">
                Leadership Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The flowing path of growth and transformation
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* River Line - Hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-emerald-200 to-purple-200"></div>
              
              {/* Journey Points */}
              <div className="space-y-12 md:space-y-24">
                {[
                  {
                    year: "2012-2015",
                    title: "Foundational Values",
                    description: "Building the core principles of student-centered education",
                    image: "/api/placeholder/300/200",
                    side: "left"
                  },
                  {
                    year: "2015-2018", 
                    title: "Developing Voice",
                    description: "Taking on mentorship and developing innovative methodologies",
                    image: "/api/placeholder/300/200",
                    side: "right"
                  },
                  {
                    year: "2018-2021",
                    title: "Leading Change", 
                    description: "Implementing systemic transformations across institutions",
                    image: "/api/placeholder/300/200",
                    side: "left"
                  },
                  {
                    year: "2021-Present",
                    title: "Inspiring Excellence",
                    description: "Mentoring next-generation leaders and pioneering new approaches",
                    image: "/api/placeholder/300/200", 
                    side: "right"
                  }
                ].map((point, index) => (
                  <div key={index} className={`relative flex flex-col md:flex-row items-center ${point.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${point.side === 'left' ? 'md:pr-12' : 'md:pl-12'} mb-6 md:mb-0`}>
                      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-emerald-500">
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                          {point.year}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{point.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className={`w-full md:w-1/2 ${point.side === 'left' ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl shadow-lg overflow-hidden aspect-video flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <div className="text-4xl mb-2">📸</div>
                          <p>Leadership Image</p>
                        </div>
                      </div>
                    </div>

                    {/* River Dot - Hidden on mobile */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== PRINCIPLES GALLERY ===== */}
        <section className="py-20 px-6 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">
                Guiding Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Principles List */}
              <div className="space-y-6">
                {[
                  { icon: "🎯", title: "Value / Principle 1", description: "Brief explanation of this core value and its impact." },
                  { icon: "💡", title: "Value / Principle 2", description: "Brief explanation of this core value and its impact." },
                  { icon: "🌱", title: "Value / Principle 3", description: "Brief explanation of this core value and its impact." }
                ].map((principle, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border-l-4 border-emerald-500">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center text-xl sm:text-2xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {principle.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{principle.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Column */}
              <div className="relative mt-8 lg:mt-0">
                <div className="bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-3xl shadow-2xl overflow-hidden aspect-square flex items-center justify-center border-4 border-white">
                  <div className="text-center p-4 sm:p-8">
                    <div className="text-4xl sm:text-6xl mb-4">🌟</div>
                    <p className="text-sm sm:text-base text-gray-500">Inspiring visual or illustration</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-purple-100 rounded-2xl rotate-12 opacity-80"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-32 sm:h-32 bg-orange-100 rounded-3xl -rotate-12 opacity-60"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== LEADERSHIP HIGHLIGHTS WALL ===== */}
        <section className="py-20 bg-gray-50">
          <div className="px-6 sm:px-12 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600">
                Leadership in Action
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: "👥", title: "Team Leadership", description: "Led initiatives that fostered collaboration and professional growth among educators.", image: "/api/placeholder/400/300" },
                  { icon: "🚀", title: "Innovation", description: "Implemented innovative teaching methods that transformed student engagement and outcomes.", image: "/api/placeholder/400/300" },
                  { icon: "🎓", title: "Mentorship", description: "Mentored aspiring educators and guided them toward excellence in their teaching practice.", image: "/api/placeholder/400/300" }
                ].map((highlight, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Background Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <div className="text-4xl mb-2">🖼️</div>
                        <p>Leadership Image</p>
                      </div>
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                      <div className="text-3xl mb-3 text-white">{highlight.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
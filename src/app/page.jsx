"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroHighlights = [
    {
      number: "500+",
      label: "Students Impacted",
      color: "text-blue-600"
    },
    {
      number: "10+",
      label: "Years Experience", 
      color: "text-emerald-600"
    },
    {
      number: "25+",
      label: "Programs Developed",
      color: "text-purple-600"
    }
  ];

  const interactiveStats = [
    { value: "95%", label: "Student Engagement", icon: "🎯" },
    { value: "40%", label: "Learning Improvement", icon: "📈" },
    { value: "150+", label: "Teachers Trained", icon: "👥" },
    { value: "15+", label: "Awards Received", icon: "🏆" }
  ];

  const testimonials = [
    {
      quote: "Transformative educational leadership that inspires both students and educators to reach their full potential.",
      author: "Sarah Chen, Principal",
      role: "Innovation High School"
    },
    {
      quote: "A true innovator in curriculum development who brings passion and expertise to every project.",
      author: "Dr. Michael Torres",
      role: "Education Department Director"
    },
    {
      quote: "Her mentorship program has fundamentally changed how we approach student success in our district.",
      author: "Jessica Williams",
      role: "Teacher & Program Graduate"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="text-gray-800 bg-white overflow-hidden">
      
      {/* ===== ANIMATED HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-20 py-20 lg:py-0">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-200 rounded-full opacity-15 animate-float-medium"></div>
          <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-purple-200 rounded-full opacity-25 animate-float-fast"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Hero Content */}
            <div className="flex-1 max-w-2xl space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 bg-clip-text text-transparent">
                    Shaping Minds,
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                    Inspiring Futures
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                  Empowering students through innovative education, compassionate leadership, 
                  and transformative learning experiences that create lasting impact.
                </p>
              </div>

              {/* Interactive Stats */}
              <div className="flex flex-wrap gap-6 py-6">
                {heroHighlights.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-sm sm:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-2xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 flex items-center gap-3">
                  <span>Explore My Journey</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
                <button className="group px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-2xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-3">
                  <span>View My Work</span>
                  <span className="group-hover:scale-110 transition-transform duration-300">✨</span>
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 via-emerald-400 to-purple-400 shadow-2xl ring-4 ring-white ring-opacity-50 relative overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-5xl sm:text-6xl mb-4">👨‍🏫</div>
                      <p className="text-white/80 text-sm sm:text-base">Education Leader</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-2xl rotate-12 opacity-80 animate-float-slow"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-400 rounded-3xl -rotate-12 opacity-60 animate-float-medium"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE ABOUT SECTION ===== */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              About My Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A decade of dedicated service in education, transforming learning experiences 
              and empowering the next generation of thinkers and leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  With over a decade of experience in education, I'm passionate about creating 
                  <span className="font-semibold text-blue-600"> inclusive learning environments</span> 
                  where every student can discover their unique potential and develop the skills 
                  needed for lifelong success.
                </p>
                <p className="text-lg leading-relaxed">
                  I specialize in developing 
                  <span className="font-semibold text-emerald-600"> innovative curriculum</span> that 
                  seamlessly integrates technology while maintaining the human connection that makes 
                  education truly transformative.
                </p>
              </div>

              {/* Interactive Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {interactiveStats.map((stat, index) => (
                  <div key={index} className="group text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl shadow-2xl p-8 aspect-[4/3] flex items-center justify-center border-2 border-white">
                <div className="text-center">
                  <div className="text-6xl mb-4">📚</div>
                  <p className="text-gray-600 font-medium">Educational Excellence</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-100 rounded-2xl rotate-12 animate-float-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange-100 rounded-3xl -rotate-12 animate-float-medium"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL CAROUSEL ===== */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Voices of Impact
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-12">
                    <div className="text-center max-w-3xl mx-auto">
                      <div className="text-6xl mb-6">❝</div>
                      <p className="text-2xl sm:text-3xl text-gray-700 leading-relaxed mb-8 italic">
                        {testimonial.quote}
                      </p>
                      <div>
                        <div className="font-bold text-gray-800 text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Education Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's collaborate to create innovative learning experiences that empower students 
              and shape the future of education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Start a Conversation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                View My Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
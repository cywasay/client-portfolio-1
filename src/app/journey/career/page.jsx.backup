"use client";

import { useState } from 'react';

export default function Career() {
  const [activePhase, setActivePhase] = useState(0);

  const careerPhases = [
    {
      phase: "Foundation & Growth",
      period: "2015 – 2018",
      title: "Teaching Fellow & Graduate Studies",
      institution: "University Education Program",
      description: "Built the foundational knowledge and practical experience that shaped my educational philosophy. Conducted research on student-centered learning while completing Master's degree.",
      achievements: ["Master of Education", "Research publications", "Teaching certification", "Classroom experience"],
      skills: ["Curriculum Design", "Educational Research", "Classroom Management"],
      icon: "🌱",
      color: "blue",
      stats: { students: "150+", programs: "5+", impact: "Classroom Level" }
    },
    {
      phase: "Classroom Excellence", 
      period: "2018 – 2020",
      title: "Classroom Teacher & Department Head",
      institution: "Maplewood Elementary",
      description: "Led the science department while teaching multiple grade levels. Developed interdisciplinary curriculum connecting STEM concepts with real-world community applications.",
      achievements: ["Department leadership", "Community outreach programs", "Grant writing success", "Team mentoring"],
      skills: ["STEM Education", "Team Leadership", "Community Engagement"],
      icon: "📚",
      color: "emerald", 
      stats: { students: "300+", programs: "12+", impact: "School Level" }
    },
    {
      phase: "Instructional Leadership",
      period: "2020 – 2023",
      title: "Instructional Coach & Specialist",
      institution: "City School District",
      description: "Designed and delivered professional development programs that transformed teaching practices across the district. Implemented innovative strategies that significantly improved student outcomes.",
      achievements: ["Trained 100+ educators", "Developed 20+ training modules", "Increased teacher satisfaction by 35%", "District-wide initiatives"],
      skills: ["Professional Development", "Curriculum Strategy", "Data Analysis"],
      icon: "👥",
      color: "purple",
      stats: { students: "1000+", programs: "20+", impact: "District Level" }
    },
    {
      phase: "Educational Innovation",
      period: "2023 – Present", 
      title: "Senior Educator & Curriculum Lead",
      institution: "Innovation High School",
      description: "Leading district-wide STEM curriculum development and implementation. Mentoring educators and establishing professional learning communities to enhance teaching excellence and student achievement.",
      achievements: ["Led district-wide STEM initiative", "Mentored 15+ teachers", "Improved student engagement by 40%", "Innovation grants"],
      skills: ["STEM Leadership", "Mentorship", "Strategic Planning"],
      icon: "🚀",
      color: "orange",
      stats: { students: "2000+", programs: "25+", impact: "Regional Level" }
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        light: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        badge: "bg-blue-100 text-blue-700",
        bullet: "bg-blue-500"
      },
      emerald: {
        gradient: "from-emerald-500 to-emerald-600",
        light: "bg-emerald-50", 
        border: "border-emerald-200",
        text: "text-emerald-600",
        badge: "bg-emerald-100 text-emerald-700",
        bullet: "bg-emerald-500"
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        light: "bg-purple-50",
        border: "border-purple-200", 
        text: "text-purple-600",
        badge: "bg-purple-100 text-purple-700",
        bullet: "bg-purple-500"
      },
      orange: {
        gradient: "from-orange-500 to-orange-600",
        light: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-600", 
        badge: "bg-orange-100 text-orange-700",
        bullet: "bg-orange-500"
      }
    };
    return colors[color] || colors.blue;
  };

  const currentPhase = careerPhases[activePhase];
  const colors = getColorClasses(currentPhase.color);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      
      {/* ===== INTERACTIVE HERO ===== */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-200 rounded-full opacity-15 animate-float-medium"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 bg-clip-text text-transparent">
              Career Evolution
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            A journey of continuous growth, from classroom foundations to educational leadership, 
            dedicated to transforming learning experiences and empowering future generations.
          </p>

          {/* Career Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {[
              { number: "10+", label: "Years Experience", icon: "📅" },
              { number: "2000+", label: "Students Impacted", icon: "👨‍🎓" },
              { number: "25+", label: "Programs Developed", icon: "🛠️" },
              { number: "100+", label: "Educators Trained", icon: "👥" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE CAREER MAP ===== */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Phase Navigation */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            {careerPhases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-500 ${
                  activePhase === index
                    ? `bg-gradient-to-r ${getColorClasses(phase.color).gradient} text-white shadow-2xl scale-105`
                    : 'bg-white text-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <span className="text-xl">{phase.icon}</span>
                <div className="text-left">
                  <div className="text-sm font-medium">{phase.phase}</div>
                  <div className="text-xs opacity-80">{phase.period}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Phase Content */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`inline-block px-4 py-2 ${colors.badge} rounded-full text-sm font-semibold mb-3`}>
                      {currentPhase.period}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                      {currentPhase.title}
                    </h2>
                    <p className="text-lg text-blue-600 font-semibold">
                      {currentPhase.institution}
                    </p>
                  </div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-2xl text-white shadow-lg`}>
                    {currentPhase.icon}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {currentPhase.description}
                </p>

                {/* Impact Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-xl font-bold text-gray-800 mb-1">{currentPhase.stats.students}</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-xl font-bold text-gray-800 mb-1">{currentPhase.stats.programs}</div>
                    <div className="text-sm text-gray-600">Programs</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-xl font-bold text-gray-800 mb-1">{currentPhase.stats.impact}</div>
                    <div className="text-sm text-gray-600">Impact</div>
                  </div>
                </div>

                {/* Key Achievements - FIXED BULLET POINTS */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Key Achievements</h3>
                  <div className="space-y-3">
                    {currentPhase.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        {/* Fixed Bullet Point - Properly positioned with checkmark */}
                        <div className={`flex-shrink-0 w-5 h-5 mt-1 rounded-full ${colors.bullet} flex items-center justify-center`}>
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <span className="text-gray-700 flex-1">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Developed */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Skills Developed</h3>
                <div className="flex flex-wrap gap-3">
                  {currentPhase.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className={`px-4 py-2 ${colors.light} rounded-full text-sm font-medium text-gray-700 border ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-emerald-500 to-purple-500 hidden lg:block"></div>
              
              <div className="space-y-8 lg:space-y-12">
                {careerPhases.map((phase, index) => {
                  const phaseColors = getColorClasses(phase.color);
                  return (
                    <div 
                      key={index}
                      className={`relative flex items-start gap-6 group cursor-pointer transition-all duration-500 ${
                        activePhase === index ? 'scale-105' : 'opacity-70 hover:opacity-100'
                      }`}
                      onClick={() => setActivePhase(index)}
                    >
                      {/* Timeline Dot */}
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full ${phaseColors.bg} border-4 border-white shadow-lg flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-125`}>
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                      </div>
                      
                      {/* Phase Card */}
                      <div className={`flex-1 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 ${phaseColors.border} ${
                        activePhase === index ? 'ring-2 ring-blue-200' : ''
                      }`}>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-2xl">{phase.icon}</span>
                          <div>
                            <h4 className="font-bold text-gray-800">{phase.phase}</h4>
                            <p className="text-sm text-gray-600">{phase.period}</p>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {phase.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAREER PHILOSOPHY ===== */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              My Career Philosophy
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              "Every step in my career has been guided by a simple belief: education has the power to transform lives. 
              From the classroom to district leadership, my focus remains on creating environments where both students 
              and educators can discover their potential and achieve extraordinary things."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                View My Achievements
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
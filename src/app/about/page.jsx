"use client";

import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('philosophy');

  const philosophyPoints = [
    {
      icon: "🎯",
      title: "Student-Centered Learning",
      description: "Placing students at the heart of every educational decision, ensuring their needs, interests, and aspirations guide the learning journey.",
      color: "blue"
    },
    {
      icon: "💡",
      title: "Innovative Methodologies", 
      description: "Embracing cutting-edge teaching strategies that adapt to diverse learning styles and prepare students for future challenges.",
      color: "emerald"
    },
    {
      icon: "🌱",
      title: "Lifelong Growth Mindset",
      description: "Cultivating environments where continuous learning, resilience, and personal development are celebrated and encouraged.",
      color: "blue"
    },
    {
      icon: "🤝",
      title: "Inclusive Environments",
      description: "Creating welcoming spaces where every student feels valued, heard, and empowered to contribute their unique perspective.",
      color: "emerald"
    },
    {
      icon: "🔍",
      title: "Critical Thinking Focus",
      description: "Developing students' abilities to analyze, question, and solve complex problems through inquiry-based learning approaches.",
      color: "blue"
    }
  ];

  const experienceTimeline = [
    {
      year: "2020-Present",
      role: "Senior Educator & Curriculum Lead",
      institution: "Innovation High School",
      achievements: ["Led STEM curriculum development", "Mentored 15+ teachers", "Improved engagement by 40%"],
      icon: "🚀"
    },
    {
      year: "2017-2020", 
      role: "Instructional Coach",
      institution: "City School District",
      achievements: ["Trained 100+ educators", "Developed 20+ training modules", "Increased teacher satisfaction"],
      icon: "👥"
    },
    {
      year: "2014-2017",
      role: "Classroom Teacher",
      institution: "Maplewood Elementary", 
      achievements: ["Department leadership", "Community programs", "Grant writing success"],
      icon: "📚"
    }
  ];

  const stats = [
    { number: "500+", label: "Students Impacted", icon: "👨‍🎓" },
    { number: "10+", label: "Years Experience", icon: "📅" },
    { number: "25+", label: "Programs Developed", icon: "🛠️" },
    { number: "95%", label: "Student Engagement", icon: "🎯" }
  ];

  const getColorClasses = (color) => {
    return color === "blue" ? {
      gradient: "from-blue-500 to-blue-600",
      light: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600"
    } : {
      gradient: "from-emerald-500 to-emerald-600", 
      light: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-600"
    };
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      
      {/* ===== ANIMATED HERO SECTION ===== */}
      <section className="relative py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-200 rounded-full opacity-15 animate-float-medium"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    About My
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                    Educational Journey
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  With over a decade of dedicated experience, I'm passionate about creating 
                  transformative learning experiences that empower students to discover their 
                  unique potential and develop skills for lifelong success.
                </p>
              </div>

              {/* Interactive Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl shadow-2xl p-8 aspect-square flex items-center justify-center border-2 border-white">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl mb-4">👨‍🏫</div>
                  <p className="text-gray-600 font-medium text-lg">Education Leader</p>
                  <p className="text-gray-500 text-sm mt-2">10+ Years of Excellence</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl rotate-12 opacity-80 animate-float-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-400 rounded-3xl -rotate-12 opacity-60 animate-float-medium"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE CONTENT SECTIONS ===== */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {[
              { id: 'philosophy', label: 'Teaching Philosophy', icon: '💭' },
              { id: 'journey', label: 'Career Journey', icon: '🛣️' },
              { id: 'approach', label: 'My Approach', icon: '🎯' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="transition-all duration-500">
            {activeTab === 'philosophy' && (
              <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-gray-100">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
                  My Educational Philosophy
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-12 text-center max-w-4xl mx-auto">
                  Education is not just about imparting knowledge, but about igniting curiosity and 
                  empowering students to become active participants in their own learning journey. 
                  I believe in creating environments where students feel safe to explore, question, 
                  and discover their unique potential.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {philosophyPoints.map((point, index) => {
                    const colors = getColorClasses(point.color);
                    return (
                      <div 
                        key={index}
                        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white text-lg shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                            {point.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                              {point.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {point.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'journey' && (
              <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-gray-100">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
                  Professional Journey
                </h2>
                
                <div className="relative max-w-4xl mx-auto">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-emerald-500 hidden sm:block"></div>
                  
                  <div className="space-y-8">
                    {experienceTimeline.map((experience, index) => (
                      <div key={index} className="relative flex items-start gap-6 group">
                        {/* Timeline Dot */}
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg transition-transform duration-300 group-hover:scale-110 z-10">
                          {experience.icon}
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-2 border-gray-100">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 mb-1">
                                {experience.role}
                              </h3>
                              <p className="text-blue-600 font-semibold">
                                {experience.institution}
                              </p>
                            </div>
                            <span className="mt-2 sm:mt-0 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                              {experience.year}
                            </span>
                          </div>
                          
                          <ul className="space-y-2">
                            {experience.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-center gap-2 text-gray-600">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
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
            )}

            {activeTab === 'approach' && (
              <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-gray-100">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800">
                  My Teaching Approach
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="prose prose-lg text-gray-600 space-y-4">
                      <p>
                        My approach to education is built on the foundation of <strong>relationships, innovation, and impact</strong>. 
                        I believe that meaningful learning happens when students feel connected, challenged, and supported.
                      </p>
                      <p>
                        Through <strong>project-based learning</strong> and <strong>real-world applications</strong>, I help students 
                        see the relevance of their education and develop the critical thinking skills needed for success in an ever-changing world.
                      </p>
                      <p>
                        Every lesson is an opportunity to inspire, every challenge is a chance to grow, and every student 
                        is a unique story waiting to be written.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎨</div>
                      <p className="text-gray-600 font-medium">Creative & Adaptive</p>
                      <p className="text-gray-500 text-sm mt-2">Teaching Methods</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Learn More?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Explore my career journey, achievements, and educational philosophy in more detail. 
              Let's connect and discuss how we can work together to transform education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                View My Career
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
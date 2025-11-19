"use client";

import { useState } from 'react';

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      icon: "🏆",
      title: "Excellence in Teaching Award",
      organization: "National Education Association",
      year: "2023",
      description: "Recognized for innovative teaching methodologies and exceptional student engagement strategies that improved learning outcomes by 40% across diverse classrooms.",
      category: "teaching",
      color: "blue",
      metrics: ["40% improvement", "500+ students", "District-wide impact"],
      impact: "Transformed teaching practices across 15 classrooms, reaching 500+ students with improved engagement and learning outcomes.",
      highlight: "Featured in Education Today magazine"
    },
    {
      icon: "📚",
      title: "Curriculum Innovation Grant",
      organization: "State Department of Education",
      year: "2022",
      description: "Awarded $50,000 grant to develop and implement STEM curriculum that integrated emerging technologies and project-based learning approaches.",
      category: "innovation",
      color: "emerald",
      metrics: ["$50K funding", "12 schools", "2-year program"],
      impact: "Developed comprehensive STEM curriculum now used in 12 schools, impacting 800+ students annually.",
      highlight: "Grant renewal secured for 2024"
    },
    {
      icon: "🌟",
      title: "Mentor of the Year",
      organization: "Teachers Leadership Council",
      year: "2022",
      description: "Honored for outstanding mentorship of early-career educators, supporting professional growth and retention of 25+ teachers in the district.",
      category: "leadership",
      color: "purple",
      metrics: ["25+ mentees", "95% retention", "3 programs"],
      impact: "Established mentorship program that improved teacher retention by 25% and created sustainable professional development pathways.",
      highlight: "Program adopted district-wide"
    },
    {
      icon: "🎓",
      title: "Research Publication Award",
      organization: "Journal of Educational Innovation",
      year: "2021",
      description: "Published groundbreaking research on student-centered learning approaches that has been cited by educators nationwide.",
      category: "research",
      color: "orange",
      metrics: ["National reach", "50+ citations", "Peer-reviewed"],
      impact: "Research findings implemented in 30+ schools, influencing educational policy and classroom practices.",
      highlight: "Keynote speaker at national conference"
    },
    {
      icon: "🚀",
      title: "Technology Integration Pioneer",
      organization: "EdTech Association",
      year: "2020",
      description: "Pioneered the integration of AI and VR technologies in classroom settings, creating immersive learning experiences for students.",
      category: "technology",
      color: "blue",
      metrics: ["15+ tools", "300 students", "State recognition"],
      impact: "Introduced cutting-edge technologies that increased student engagement by 60% and improved complex concept comprehension.",
      highlight: "Featured in EdTech Review"
    },
    {
      icon: "💫",
      title: "Community Impact Award",
      organization: "Local Education Foundation",
      year: "2019",
      description: "Recognized for developing community partnership programs that connected classroom learning with real-world applications and local businesses.",
      category: "community",
      color: "emerald",
      metrics: ["20 partners", "Community events", "Student projects"],
      impact: "Forged partnerships that provided 200+ students with real-world learning experiences and career exposure.",
      highlight: "Program expanded to 5 additional districts"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Achievements', icon: '🌟', count: achievements.length },
    { id: 'teaching', label: 'Teaching Excellence', icon: '👨‍🏫', count: achievements.filter(a => a.category === 'teaching').length },
    { id: 'innovation', label: 'Innovation', icon: '💡', count: achievements.filter(a => a.category === 'innovation').length },
    { id: 'leadership', label: 'Leadership', icon: '🌟', count: achievements.filter(a => a.category === 'leadership').length },
    { id: 'research', label: 'Research', icon: '🔬', count: achievements.filter(a => a.category === 'research').length },
    { id: 'technology', label: 'Technology', icon: '🚀', count: achievements.filter(a => a.category === 'technology').length },
    { id: 'community', label: 'Community', icon: '🤝', count: achievements.filter(a => a.category === 'community').length }
  ];

  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeCategory);

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        gradient: "from-blue-500 to-blue-600",
        light: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        badge: "bg-blue-100 text-blue-700",
        glow: "shadow-blue-200"
      },
      emerald: {
        gradient: "from-emerald-500 to-emerald-600",
        light: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-600",
        badge: "bg-emerald-100 text-emerald-700",
        glow: "shadow-emerald-200"
      },
      purple: {
        gradient: "from-purple-500 to-purple-600",
        light: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        badge: "bg-purple-100 text-purple-700",
        glow: "shadow-purple-200"
      },
      orange: {
        gradient: "from-orange-500 to-orange-600",
        light: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-600",
        badge: "bg-orange-100 text-orange-700",
        glow: "shadow-orange-200"
      }
    };
    return colors[color] || colors.blue;
  };

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
              Achievements & Impact
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Celebrating transformative milestones that have shaped educational innovation, 
            inspired students, and created lasting impact across learning communities.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "15+", label: "Awards & Honors", icon: "🏆" },
              { number: "2000+", label: "Students Impacted", icon: "👨‍🎓" },
              { number: "25+", label: "Programs Developed", icon: "🛠️" },
              { number: "10+", label: "Years of Excellence", icon: "⭐" }
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

      {/* ===== INTERACTIVE CATEGORY FILTER ===== */}
      <section className="py-12 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-semibold transition-all duration-500 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENTS SHOWCASE ===== */}
      <section className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredAchievements.map((achievement, index) => {
              const colors = getColorClasses(achievement.color);
              return (
                <div 
                  key={index}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedAchievement(achievement)}
                >
                  <div className={`relative bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${colors.border} group-hover:-translate-y-3 overflow-hidden`}>
                    
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    {/* Achievement Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-2xl text-white shadow-lg mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      {achievement.icon}
                    </div>

                    {/* Header */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 ${colors.badge} rounded-full text-xs font-semibold mb-2`}>
                        {achievement.category.charAt(0).toUpperCase() + achievement.category.slice(1)}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{achievement.organization}</span>
                        <span className="font-semibold">{achievement.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {achievement.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {achievement.metrics.map((metric, metricIndex) => (
                        <span 
                          key={metricIndex}
                          className={`px-2 py-1 ${colors.light} rounded-full text-xs font-medium text-gray-700 border ${colors.border}`}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    {/* View Details CTA */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Click to view details</span>
                      <span className="text-blue-500 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                        View ›
                      </span>
                    </div>

                    {/* Hover Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENT MODAL ===== */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${getColorClasses(selectedAchievement.color).gradient} flex items-center justify-center text-3xl text-white shadow-lg`}>
                    {selectedAchievement.icon}
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 ${getColorClasses(selectedAchievement.color).badge} rounded-full text-sm font-semibold mb-2`}>
                      {selectedAchievement.category.charAt(0).toUpperCase() + selectedAchievement.category.slice(1)}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedAchievement.title}</h2>
                    <p className="text-gray-600">{selectedAchievement.organization} • {selectedAchievement.year}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedAchievement(null)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedAchievement.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Impact</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedAchievement.impact}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Metrics</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedAchievement.metrics.map((metric, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-2 ${getColorClasses(selectedAchievement.color).light} rounded-lg text-sm font-medium text-gray-700 border ${getColorClasses(selectedAchievement.color).border}`}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedAchievement.highlight && (
                  <div className={`p-4 ${getColorClasses(selectedAchievement.color).light} rounded-xl border ${getColorClasses(selectedAchievement.color).border}`}>
                    <h4 className="font-semibold text-gray-800 mb-1">Highlight</h4>
                    <p className="text-gray-600 text-sm">{selectedAchievement.highlight}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== CALL TO ACTION ===== */}
      <section className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let's Create More Success Stories
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Every achievement represents a step toward transforming education. 
              I'm excited to collaborate on new initiatives and create meaningful impact together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Explore My Work
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
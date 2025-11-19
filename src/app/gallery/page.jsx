"use client";

import { useState } from 'react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const galleryCategories = [
    { id: 'all', label: 'All Moments', icon: '🌟', count: 12 },
    { id: 'teaching', label: 'Teaching', icon: '👨‍🏫', count: 4 },
    { id: 'events', label: 'Events', icon: '🎉', count: 3 },
    { id: 'achievements', label: 'Achievements', icon: '🏆', count: 3 },
    { id: 'community', label: 'Community', icon: '🤝', count: 2 }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'teaching',
      title: 'Classroom Innovation',
      description: 'Interactive learning session using cutting-edge educational technology',
      date: '2023',
      gradient: 'from-blue-400 to-cyan-500',
      icon: '💻',
      featured: true,
      size: 'medium'
    },
    {
      id: 2,
      category: 'events',
      title: 'Education Conference',
      description: 'Keynote speaker at National Education Summit 2023',
      date: 'Nov 2023',
      gradient: 'from-emerald-400 to-teal-500',
      icon: '🎤',
      featured: true,
      size: 'large'
    },
    // ... keep all your gallery items as they were
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const getCardSize = (size) => {
    switch(size) {
      case 'large': return 'h-80';
      case 'medium': return 'h-64';
      case 'small': return 'h-56';
      default: return 'h-64';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-x-hidden">
      
      {/* ===== FLOATING GALLERY HEADER ===== */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full opacity-20 animate-float-slow"></div>
          <div className="absolute top-20 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200 rounded-full opacity-15 animate-float-medium"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-purple-200 rounded-full opacity-25 animate-float-fast"></div>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-12 xl:px-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 bg-clip-text text-transparent">
            Visual Journey
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            A curated collection of transformative moments, inspiring events, and memorable milestones from my educational journey
          </p>
        </div>
      </section>

      {/* ===== INTERACTIVE CATEGORY SELECTOR ===== */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 mb-12 sm:mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <span className="text-base sm:text-lg lg:text-xl">{category.icon}</span>
                <span className="whitespace-nowrap hidden sm:inline">{category.label}</span>
                <span className="whitespace-nowrap sm:hidden">{category.label.split(' ')[0]}</span>
                <span className={`text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
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

      {/* ===== MASONRY-STYLE GALLERY WALL ===== */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-12 mb-16 sm:mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative break-inside-avoid overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  item.featured ? 'featured-card' : ''
                } animate-fade-in`}
                style={{ 
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Image Container with Gradient */}
                <div className={`bg-gradient-to-br ${item.gradient} ${getCardSize(item.size)} relative overflow-hidden`}>
                  {/* Placeholder Image Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-4 opacity-80">{item.icon}</div>
                      <p className="text-white/70 text-xs sm:text-sm">Gallery Image</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                    <div className="text-white text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">👁️</div>
                      <p className="text-xs sm:text-sm font-semibold">View Details</p>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {item.featured && (
                    <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 bg-yellow-400 text-yellow-900 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                      Featured
                    </div>
                  )}

                  {/* Date Badge */}
                  <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 bg-black/40 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm backdrop-blur-sm">
                    {item.date}
                  </div>
                </div>

                {/* Content Panel */}
                <div className="bg-white p-4 sm:p-5 lg:p-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500 capitalize">
                      {item.category}
                    </span>
                    <button className="text-blue-500 hover:text-blue-600 font-semibold text-xs sm:text-sm transition-colors duration-300">
                      Explore ›
                    </button>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE STORY WALL ===== */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 mb-16 sm:mb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-800">
              Story Highlights
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4">
              Featured moments that tell the story behind the images
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {/* Featured Story 1 */}
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 sm:p-7 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎓</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Graduation Ceremony 2023</h3>
                <p className="text-blue-100 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
                  Celebrating the achievements of 150+ students as they embark on their next educational journey, filled with hope and promise for the future.
                </p>
                <button className="bg-white text-blue-600 px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 text-sm sm:text-base">
                  View Album
                </button>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
            </div>

            {/* Featured Story 2 */}
            <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white p-6 sm:p-7 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2">
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🔬</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Science Fair Innovation</h3>
                <p className="text-emerald-100 leading-relaxed mb-4 sm:mb-5 text-sm sm:text-base">
                  Students showcasing groundbreaking projects that demonstrate the power of curiosity, critical thinking, and collaborative problem-solving.
                </p>
                <button className="bg-white text-emerald-600 px-4 sm:px-6 py-2 rounded-full font-semibold hover:bg-emerald-50 transition-colors duration-300 text-sm sm:text-base">
                  Explore Projects
                </button>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CALL TO EXPLORE ===== */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border-2 border-gray-100">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">📸</div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              Every Picture Tells a Story
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
              These captured moments represent more than just memories—they're milestones in an ongoing journey 
              of educational transformation, student empowerment, and community building.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm sm:text-base">
                View Full Portfolio
              </button>
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-sm sm:text-base">
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
const height = (size) => (size === 'large' ? 'h-80' : size === 'small' ? 'h-56' : 'h-64');

export default function GalleryCard({ item, delay }) {
  return (
    <div
      className={`gallery-card w-full sm:w-1/2 lg:w-1/3 mb-6 sm:mb-8 group relative break-inside-avoid overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
        item.featured ? 'featured-card' : ''
      } animate-fade-in`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`bg-gradient-to-br ${item.gradient} ${height(item.size)} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-4 opacity-80">{item.icon}</div>
            <p className="text-white/70 text-xs sm:text-sm">Gallery Image</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
          <div className="text-white text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">👁️</div>
            <p className="text-xs sm:text-sm font-semibold">View Details</p>
          </div>
        </div>
        {item.featured && (
          <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 bg-yellow-400 text-yellow-900 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg">
            Featured
          </div>
        )}
        <div className="absolute top-2 sm:top-3 lg:top-4 right-2 sm:right-3 lg:right-4 bg-black/40 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm backdrop-blur-sm">
          {item.date}
        </div>
      </div>
      <div className="bg-white p-4 sm:p-5 lg:p-6">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 leading-tight">{item.title}</h3>
        <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm text-gray-500 capitalize">{item.category}</span>
          <button className="text-blue-500 hover:text-blue-600 font-semibold text-xs sm:text-sm transition-colors duration-300">
            Explore ›
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </div>
  );
}


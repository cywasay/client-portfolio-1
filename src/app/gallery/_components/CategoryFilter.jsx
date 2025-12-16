export default function CategoryFilter({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`flex items-center gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-2xl scale-105'
              : 'bg-white text-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1'
          }`}
        >
          <span className="text-base sm:text-lg lg:text-xl">{category.icon}</span>
          <span className="whitespace-nowrap hidden sm:inline">{category.label}</span>
          <span className="whitespace-nowrap sm:hidden">{category.label.split(' ')[0]}</span>
          <span
            className={`text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
              activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
}


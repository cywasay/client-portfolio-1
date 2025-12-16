export default function CategoryFilter({ categories, active, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelect(category.id)}
          className={`flex items-center gap-3 px-5 py-3 rounded-2xl font-semibold transition-all duration-500 ${
            active === category.id
              ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-2xl scale-105'
              : 'bg-white text-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1'
          }`}
        >
          <span className="text-lg">{category.icon}</span>
          <span>{category.label}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${active === category.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}`}>
            {category.count}
          </span>
        </button>
      ))}
    </div>
  );
}


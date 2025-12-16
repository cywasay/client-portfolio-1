import { highlights } from '../data';

export default function LvHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="px-6 sm:px-12 lg:px-20 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">Leadership in Action</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🖼️</div>
                  <p>Leadership Image</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <div className="text-3xl mb-3 text-white">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{highlight.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


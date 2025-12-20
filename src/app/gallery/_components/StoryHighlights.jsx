import { Button } from "@/components/ui/button";

export default function StoryHighlights({ highlights }) {
  return (
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
          {highlights.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br ${item.gradient} text-white p-6 sm:p-7 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2`}
            >
              <div className="relative z-10 space-y-3 sm:space-y-4">
                <div className="text-3xl sm:text-4xl">{item.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>
                <Button className="bg-white text-blue-600 px-4 sm:px-6 py-2 h-auto rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 text-sm sm:text-base border-none">
                  {item.cta}
                </Button>
              </div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

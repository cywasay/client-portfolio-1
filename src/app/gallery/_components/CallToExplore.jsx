export default function CallToExplore() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 xl:px-20 pb-16 sm:pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border-2 border-gray-100">
          <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">📸</div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Every Picture Tells a Story</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed px-2">
            These captured moments represent more than memories—they're milestones in an ongoing journey of educational transformation, student empowerment, and community building.
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
  );
}


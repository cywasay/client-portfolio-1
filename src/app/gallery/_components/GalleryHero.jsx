export default function GalleryHero() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full opacity-20 animate-float-slow" />
        <div className="absolute top-20 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200 rounded-full opacity-15 animate-float-medium" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-purple-200 rounded-full opacity-25 animate-float-fast" />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-12 xl:px-20 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-blue-950">
          Visual Journey
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          A curated collection of transformative moments, inspiring events, and
          memorable milestones from my educational journey
        </p>
      </div>
    </section>
  );
}

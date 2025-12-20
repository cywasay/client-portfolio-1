export default function LvHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 animate-float-slow" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-100 rounded-full opacity-15 animate-float-medium" />
        <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-purple-100 rounded-full opacity-25 animate-float-fast" />
      </div>
      <div className="relative px-6 sm:px-12 lg:px-20 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-blue-950">
          Leadership{" "}
          <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-600 mt-4">
            & Values
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Guiding principles that shape educational transformation and inspire
          meaningful impact.
        </p>
      </div>
    </section>
  );
}

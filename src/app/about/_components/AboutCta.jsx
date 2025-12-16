export default function AboutCta() {
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Explore my career journey, achievements, and educational philosophy in more detail. Let's connect and transform education together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              View My Career
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


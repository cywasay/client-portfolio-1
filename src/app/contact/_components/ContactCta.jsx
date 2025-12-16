export default function ContactCta() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 xl:px-20 pb-16 sm:pb-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl">
          <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🚀</div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Let&apos;s Create Something Amazing Together</h2>
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-5 sm:mb-6 lg:mb-8 leading-relaxed px-2">
            Every great educational innovation starts with a conversation. Let&apos;s explore how we can transform learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-white text-blue-600 px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Schedule a Call
            </button>
            <button className="border-2 border-white text-white px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


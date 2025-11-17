"use client";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main className="text-gray-800 bg-soft-white px-6 sm:px-12 lg:px-20 py-20">
      
      {/* ===== PAGE TITLE ===== */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-blue-500">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I'd love to hear from you! Whether you have a question, feedback, or just want to connect.
        </p>
      </div>

      {/* ===== CONTACT FORM ===== */}
      <section className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow-lg mb-16">
        <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name
            </label>
            <input 
              type="text"
              id="name"
              placeholder="Enter your full name" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Email
            </label>
            <input 
              type="email"
              id="email"
              placeholder="your.email@example.com" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Message
            </label>
            <textarea 
              id="message"
              placeholder="Write your message here..." 
              rows="6"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none resize-none text-gray-800"
            />
          </div>

          <button 
            onClick={handleSubmit}
            className="w-full sm:w-auto px-8 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </div>
      </section>

      {/* ===== SOCIAL LINKS ===== */}
      <section className="text-center">
        <p className="text-lg text-gray-600 mb-8">Or connect with me on:</p>
        <div className="flex justify-center gap-6 flex-wrap">
          
          <a 
            href="#" 
            className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 hover:shadow-lg transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <span className="group-hover:rotate-12 transition-transform duration-300">💼</span>
          </a>

          <a 
            href="#" 
            className="w-14 h-14 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 hover:shadow-lg transition-all duration-300 group"
            aria-label="Twitter"
          >
            <span className="group-hover:rotate-12 transition-transform duration-300">🐦</span>
          </a>

          <a 
            href="#" 
            className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 hover:shadow-lg transition-all duration-300 group"
            aria-label="Email"
          >
            <span className="group-hover:rotate-12 transition-transform duration-300">📧</span>
          </a>

          <a 
            href="#" 
            className="w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl hover:scale-110 hover:shadow-lg transition-all duration-300 group"
            aria-label="Facebook"
          >
            <span className="group-hover:rotate-12 transition-transform duration-300">📱</span>
          </a>

        </div>
      </section>

    </main>
  );
}
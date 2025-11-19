"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle actual form submission logic here
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@educator.com',
      gradient: 'from-blue-400 to-cyan-500',
      action: 'mailto:hello@educator.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      gradient: 'from-emerald-400 to-teal-500',
      action: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Education District, City',
      gradient: 'from-purple-400 to-pink-500',
      action: '#'
    },
    {
      icon: '🕒',
      title: 'Response Time',
      value: 'Within 24 hours',
      gradient: 'from-orange-400 to-red-500',
      action: '#'
    }
  ];

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: '💼',
      gradient: 'from-blue-500 to-blue-700',
      url: '#',
      description: 'Professional Network'
    },
    {
      platform: 'Twitter',
      icon: '🐦',
      gradient: 'from-sky-400 to-sky-600',
      url: '#',
      description: 'Education Insights'
    },
    {
      platform: 'ResearchGate',
      icon: '🔬',
      gradient: 'from-green-500 to-green-700',
      url: '#',
      description: 'Academic Work'
    },
    {
      platform: 'Instagram',
      icon: '📸',
      gradient: 'from-pink-400 to-pink-600',
      url: '#',
      description: 'Classroom Moments'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-x-hidden">
      
      {/* ===== FLOATING CONTACT HEADER ===== */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-200 rounded-full opacity-20 animate-float-slow"></div>
          <div className="absolute top-20 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200 rounded-full opacity-15 animate-float-medium"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-purple-200 rounded-full opacity-25 animate-float-fast"></div>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-12 xl:px-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to collaborate, share ideas, or discuss educational opportunities? 
            I&apos;m always excited to connect with fellow educators, students, and innovators.
          </p>
        </div>
      </section>

      {/* ===== INTERACTIVE CONTACT CARDS ===== */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 mb-12 sm:mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-xl sm:text-2xl text-white mb-3 sm:mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  {method.icon}
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base break-words">
                  {method.value}
                </p>

                {/* Hover Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE CONTACT FORM ===== */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 mb-16 sm:mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Form Container */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl border-2 border-gray-100">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                  Send a Message
                </h2>
                <p className="text-gray-600 text-sm sm:text-base">
                  I&apos;ll get back to you as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none text-gray-800 bg-gray-50 focus:bg-white text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                    Your Email
                  </label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com" 
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none text-gray-800 bg-gray-50 focus:bg-white text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-300">
                    Your Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?" 
                    rows="5"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 outline-none resize-none text-gray-800 bg-gray-50 focus:bg-white text-sm sm:text-base"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2.5 sm:py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm sm:text-base ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 hover:shadow-xl hover:-translate-y-1'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    'Send Message ✨'
                  )}
                </button>
              </form>
            </div>

            {/* Visual Side */}
            <div className="relative">
              {/* Main Visual Container */}
              <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-white flex items-center justify-center aspect-square">
                <div className="text-center px-4">
                  <div className="text-5xl sm:text-6xl lg:text-7xl mb-3 sm:mb-4">💬</div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                    Let&apos;s Start a Conversation
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Whether it&apos;s about education, collaboration, or just sharing ideas, 
                    I&apos;m here to listen and connect.
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-2xl rotate-12 opacity-80 animate-float-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 sm:w-24 sm:h-24 bg-orange-100 rounded-3xl -rotate-12 opacity-60 animate-float-medium"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL CONNECTION HUB ===== */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 mb-16 sm:mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Connect Through Social Media
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg px-4">
              Follow my journey and join the conversation across platforms
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center text-lg sm:text-xl lg:text-2xl text-white mb-2 sm:mb-3 lg:mb-4 mx-auto shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  {social.icon}
                </div>

                {/* Content */}
                <h3 className="font-bold text-gray-800 text-xs sm:text-sm lg:text-base mb-1">
                  {social.platform}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {social.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CALL TO ACTION ===== */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🚀</div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Let&apos;s Create Something Amazing Together
            </h2>
            <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-5 sm:mb-6 lg:mb-8 leading-relaxed px-2">
              Every great educational innovation starts with a conversation. 
              Whether you&apos;re a fellow educator, student, or organization, 
              I&apos;m excited to explore how we can work together to transform learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-blue-600 px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                Schedule a Call
              </button>
              <button className="border-2 border-white text-white px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm sm:text-base">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
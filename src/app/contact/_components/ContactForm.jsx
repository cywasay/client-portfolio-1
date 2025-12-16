"use client";

import { useState } from 'react';
import ContactVisual from './ContactVisual';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-12 xl:px-20 mb-16 sm:mb-20">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
        <FormCard formData={formData} isSubmitting={isSubmitting} onChange={handleChange} onSubmit={handleSubmit} />
        <ContactVisual />
      </div>
    </section>
  );
}

function FormCard({ formData, isSubmitting, onChange, onSubmit }) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl border-2 border-gray-100">
      <header className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Send a Message</h2>
        <p className="text-gray-600 text-sm sm:text-base">I&apos;ll get back to you as soon as possible.</p>
      </header>
      <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">
        {['name', 'email'].map((field) => (
          <InputField
            key={field}
            id={field}
            label={field === 'name' ? 'Your Name' : 'Your Email'}
            type={field === 'email' ? 'email' : 'text'}
            value={formData[field]}
            onChange={onChange}
            placeholder={field === 'name' ? 'Enter your full name' : 'your.email@example.com'}
          />
        ))}
        <InputField id="message" label="Your Message" type="textarea" value={formData.message} onChange={onChange} placeholder="What would you like to discuss?" />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-xl font-semibold transition-all shadow-lg text-sm sm:text-base ${
            isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 hover:shadow-xl hover:-translate-y-1'
          } text-white`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message ✨'}
        </button>
      </form>
    </div>
  );
}

const InputField = ({ id, label, type, value, onChange, placeholder }) => (
  <div className="group">
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        name={id}
        rows="5"
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition outline-none resize-none text-gray-800 bg-gray-50 focus:bg-white text-sm sm:text-base"
      />
    ) : (
      <input
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition outline-none text-gray-800 bg-gray-50 focus:bg-white text-sm sm:text-base"
      />
    )}
  </div>
);


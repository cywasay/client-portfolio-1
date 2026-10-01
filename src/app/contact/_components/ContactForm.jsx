"use client";

import { useState } from "react";
import ContactVisual from "./ContactVisual";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section className="editorialSection editorialSectionAlt"><div className="editorialInner grid overflow-hidden rounded-[2rem] border border-[#c8dceb] bg-white shadow-[0_28px_80px_rgba(24,67,96,.12)] lg:grid-cols-[1.08fr_.92fr]">
      <div className="p-6 sm:p-9 lg:p-12">
        <p className="editorialKicker">Start a conversation</p>
        <h2 className="font-serif text-4xl leading-tight text-[#123f60] sm:text-5xl">Tell me what you are building.</h2>
        <p className="mt-4 max-w-xl leading-7 text-[#60798a]">Share the context, the people involved, and the change you hope to make. A thoughtful first note is all we need.</p>
        <form onSubmit={handleSubmit} className="mt-9 space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <InputField id="name" label="Your name" type="text" value={formData.name} onChange={handleChange} placeholder="Full name" />
            <InputField id="email" label="Email address" type="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
          </div>
          <InputField id="message" label="What would you like to discuss?" type="textarea" value={formData.message} onChange={handleChange} placeholder="A short note about your idea or invitation" />
          <button type="submit" disabled={isSubmitting} className="editorialButton disabled:cursor-wait disabled:opacity-60">{isSubmitting ? "Sending…" : "Send message"} <span>→</span></button>
        </form>
      </div>
      <ContactVisual />
    </div></section>
  );
}

function InputField({ id, label, type, value, onChange, placeholder }) {
  const classes = "rounded-xl border border-[#c8dceb] bg-[#f7fafc] px-4 text-[#173e58] shadow-none outline-none transition placeholder:text-[#8ca0ae] focus:border-[#4f98c5] focus:bg-white focus-visible:ring-2 focus-visible:ring-[#cfe8f6]";
  return <div className="space-y-2"><Label htmlFor={id} className="text-xs font-bold uppercase tracking-[.14em] text-[#46687e]">{label}</Label>{type === "textarea" ? <Textarea id={id} name={id} value={value} onChange={onChange} required placeholder={placeholder} className={`${classes} min-h-40 resize-none py-4`} /> : <Input id={id} name={id} type={type} value={value} onChange={onChange} required placeholder={placeholder} className={`${classes} h-12`} />}</div>;
}

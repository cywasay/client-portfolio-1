"use client";

import { useState } from "react";
import Link from "next/link";
import EnvelopeEnding from "@/components/EnvelopeEnding";

const careerPhases = [
  { phase: "Foundation & Growth", period: "2015 – 2018", title: "Teaching Fellow & Graduate Studies", institution: "University Education Program", description: "Built the foundational knowledge and practical experience that shaped my educational philosophy. Conducted research on student-centered learning while completing a Master’s degree.", achievements: ["Master of Education", "Research publications", "Teaching certification", "Classroom experience"], skills: ["Curriculum Design", "Educational Research", "Classroom Management"], stats: { students: "150+", programs: "5+", impact: "Classroom" } },
  { phase: "Classroom Excellence", period: "2018 – 2020", title: "Classroom Teacher & Department Head", institution: "Maplewood Elementary", description: "Led the science department while teaching multiple grade levels. Developed interdisciplinary curriculum connecting STEM concepts with real-world community applications.", achievements: ["Department leadership", "Community outreach programs", "Grant writing success", "Team mentoring"], skills: ["STEM Education", "Team Leadership", "Community Engagement"], stats: { students: "300+", programs: "12+", impact: "School" } },
  { phase: "Instructional Leadership", period: "2020 – 2023", title: "Instructional Coach & Specialist", institution: "City School District", description: "Designed and delivered professional development programs that transformed teaching practices across the district. Implemented strategies that significantly improved student outcomes.", achievements: ["Trained 100+ educators", "Developed 20+ training modules", "Increased teacher satisfaction by 35%", "District-wide initiatives"], skills: ["Professional Development", "Curriculum Strategy", "Data Analysis"], stats: { students: "1000+", programs: "20+", impact: "District" } },
  { phase: "Educational Innovation", period: "2023 – Present", title: "Senior Educator & Curriculum Lead", institution: "Innovation High School", description: "Leading district-wide STEM curriculum development and implementation. Mentoring educators and establishing professional learning communities to enhance teaching excellence and student achievement.", achievements: ["Led district-wide STEM initiative", "Mentored 15+ teachers", "Improved student engagement by 40%", "Innovation grants"], skills: ["STEM Leadership", "Mentorship", "Strategic Planning"], stats: { students: "2000+", programs: "25+", impact: "Regional" } },
];

export default function Career() {
  const [activePhase, setActivePhase] = useState(0);
  const current = careerPhases[activePhase];
  return (
    <main id="top" className="interiorPage">
      <section className="interiorHero"><div className="interiorHeroInner">
        <p className="interiorEyebrow">A professional journey</p><h1 className="mb-6">Career <em>evolution.</em></h1>
        <p className="interiorHeroLead mb-12">A career moving from classroom practice to educational leadership, with each chapter widening the circle of people served.</p>
        <div className="interiorStats mb-0">{[["10+", "Years experience"], ["2000+", "Students impacted"], ["25+", "Programs developed"], ["100+", "Educators trained"]].map(([number, label]) => <div key={label} className="interiorStat"><strong>{number}</strong><span>{label}</span></div>)}</div>
      </div></section>

      <section className="editorialSection"><div className="editorialInner">
        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_.75fr] md:items-end"><div><p className="editorialKicker">Career map</p><h2 className="editorialHeading">Each role built the capacity for the next.</h2></div><p className="max-w-xl leading-7 text-[#60798a] md:justify-self-end">Explore the four phases to see how classroom insight became school, district, and regional impact.</p></div>
        <div className="editorialTabs mb-8" role="tablist" aria-label="Career phases">{careerPhases.map((phase, index) => <button key={phase.phase} type="button" role="tab" aria-selected={activePhase === index} onClick={() => setActivePhase(index)} className="editorialTab"><span>{String(index + 1).padStart(2, "0")}</span><span>{phase.phase}</span></button>)}</div>

        <div className="grid overflow-hidden rounded-[2rem] border border-[#c8dceb] bg-white shadow-[0_28px_80px_rgba(24,67,96,.12)] lg:grid-cols-[1.15fr_.85fr]">
          <article className="p-7 sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center justify-between gap-3"><span className="rounded-full bg-[#eaf4fa] px-4 py-2 text-xs font-bold uppercase tracking-[.14em] text-[#28719f]">{current.period}</span><span className="font-serif text-5xl text-[#a2c8de]">{String(activePhase + 1).padStart(2, "0")}</span></div>
            <h3 className="mt-6 max-w-xl font-serif text-4xl leading-tight text-[#123f60]">{current.title}</h3><p className="mt-2 text-sm font-bold uppercase tracking-[.13em] text-[#28719f]">{current.institution}</p><p className="mt-6 max-w-2xl leading-7 text-[#60798a]">{current.description}</p>
            <div className="mt-8 grid grid-cols-3 divide-x divide-[#c8dceb] border-y border-[#c8dceb] py-5">{Object.entries(current.stats).map(([label, value]) => <div key={label} className="px-3 first:pl-0"><strong className="block font-serif text-2xl font-normal text-[#123f60]">{value}</strong><span className="mt-1 block text-xs capitalize text-[#6f8290]">{label}</span></div>)}</div>
            <div className="mt-8"><p className="editorialKicker">Skills developed</p><div className="flex flex-wrap gap-2">{current.skills.map((skill) => <span key={skill} className="rounded-full border border-[#c8dceb] bg-[#f7fafc] px-4 py-2 text-sm text-[#456579]">{skill}</span>)}</div></div>
          </article>
          <aside className="bg-[#123f60] p-7 text-white sm:p-10 lg:p-12"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#9bc9e4]">Key achievements</p><ol className="mt-7 divide-y divide-white/15">{current.achievements.map((achievement, index) => <li key={achievement} className="grid grid-cols-[40px_1fr] gap-3 py-5"><span className="font-serif text-lg text-[#8fc2df]">{String(index + 1).padStart(2, "0")}</span><span className="leading-6 text-white/82">{achievement}</span></li>)}</ol><p className="mt-10 text-sm leading-6 text-white/55">Select another phase above to trace the progression.</p></aside>
        </div>
      </div></section>

      <EnvelopeEnding><section className="editorialSection editorialSectionAlt"><div className="editorialInner editorialCta">
        <p className="editorialKicker !text-[#a9d3ec]">Career philosophy</p><blockquote className="max-w-5xl font-serif text-3xl leading-snug text-white sm:text-5xl">“Education can transform lives when leaders create the conditions for both students and educators to discover what they are capable of.”</blockquote>
        <div className="flex flex-wrap gap-3"><Link href="/achievements" className="editorialButton">View achievements</Link><Link href="/contact" className="editorialButton editorialButtonGhost">Start a conversation</Link></div>
      </div></section></EnvelopeEnding>
    </main>
  );
}

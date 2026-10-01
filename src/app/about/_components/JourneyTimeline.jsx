import { experienceTimeline } from "../data";

export default function JourneyTimeline() {
  return (
    <div className="editorialCard p-7 sm:p-10">
      <header className="editorialHeading center"><p className="editorialKicker">Experience over time</p><h2>Professional <em>journey.</em></h2></header>
      <div className="mx-auto max-w-4xl">
        {experienceTimeline.map((experience, index) => (
          <article key={experience.year} className="grid gap-4 border-t border-[#d9e6ed] py-7 sm:grid-cols-[70px_1fr_auto] sm:gap-7">
            <span className="editorialIndex">{experience.icon}</span>
            <div><h3 className="text-2xl">{experience.role}</h3><p className="mt-1 text-sm font-semibold text-[#2b719a]">{experience.institution}</p><ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5a7385]">{experience.achievements.map(item=><li key={item}>— {item}</li>)}</ul></div>
            <span className="text-xs font-bold tracking-wider text-[#6c8da2]">{experience.year}</span>
          </article>
        ))}
      </div>
    </div>
  );
}

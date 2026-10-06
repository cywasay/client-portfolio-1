import Link from "next/link";

export default function StoryHighlights({ highlights }) {
  return (
    <section className="editorialSection editorialSectionAlt"><div className="editorialInner">
      <div className="mb-10 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end">
        <div><p className="editorialKicker">Selected stories</p><h2 className="editorialHeading">A closer look at the moments that shape a school.</h2></div>
        <p className="max-w-xl leading-7 text-[#5c7586] md:justify-self-end">Beyond the photographs are the people, decisions, and shared experiences that make each milestone meaningful.</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {highlights.map((item, index) => <article key={item.title} className="editorialCard group relative min-h-72 overflow-hidden p-7 sm:p-9">
          <span className="editorialIndex">{String(index + 1).padStart(2, "0")}</span>
          <div className="mt-16 max-w-md"><h3 className="font-serif text-3xl text-[#123f60]">{item.title}</h3><p className="mt-4 leading-7 text-[#5c7586]">{item.description}</p><Link href={item.href} className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#1d658f]">{item.cta} <span className="transition group-hover:translate-x-1">→</span></Link></div>
        </article>)}
      </div>
    </div></section>
  );
}

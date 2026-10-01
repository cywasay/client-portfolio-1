import Image from "next/image";
import { journeyPoints } from "../data";

const images = ["/edu-leader1.jpg", "/edu-leader4.jpg", "/edu-leader5.jpg", "/edu-leader6.jpg"];

export default function LvTimeline() {
  return (
    <section className="editorialSection editorialSectionAlt"><div className="editorialInner">
      <div className="mb-12"><p className="editorialKicker">The journey</p><h2 className="editorialHeading">Growth measured in widening responsibility.</h2></div>
      <div className="space-y-5">
        {journeyPoints.map((point, index) => <article key={point.title} className="grid overflow-hidden rounded-[1.75rem] border border-[#c8dceb] bg-white shadow-[0_18px_50px_rgba(25,70,101,.08)] md:grid-cols-[.72fr_1.28fr]">
          <div className={`relative min-h-64 overflow-hidden ${index % 2 ? "md:order-2" : ""}`}><Image src={images[index]} alt={point.title} fill className="object-cover transition-transform duration-700 hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b334d]/45 to-transparent" /><span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-[#0b334d]/55 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-white backdrop-blur">{point.year}</span></div>
          <div className={`flex min-h-64 items-center p-7 sm:p-10 ${index % 2 ? "md:order-1" : ""}`}><div><span className="editorialIndex">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-7 font-serif text-3xl text-[#123f60] sm:text-4xl">{point.title}</h3><p className="mt-4 max-w-xl leading-7 text-[#60798a]">{point.description}</p></div></div>
        </article>)}
      </div>
    </div></section>
  );
}

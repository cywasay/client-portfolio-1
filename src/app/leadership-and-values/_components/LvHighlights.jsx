import Image from "next/image";
import { highlights } from "../data";
import EnvelopeEnding from "@/components/EnvelopeEnding";
import { portfolioPhotos } from "@/lib/portfolio-photos";

const highlightImages = [portfolioPhotos.roundtable, { src: "/edu-leader2.jpg", alt: "Neelam Nisar exploring a student project display", position: "50% 50%" }, portfolioPhotos.studentRecognition];

export default function LvHighlights() {
  return (
    <EnvelopeEnding><section className="editorialSection editorialSectionAlt"><div className="editorialInner">
      <div className="mb-10"><p className="editorialKicker">Leadership in action</p><h2 className="editorialHeading">Where values become visible.</h2></div>
      <div className="grid gap-5 md:grid-cols-3">{highlights.map((highlight, index) => <article key={highlight.title} className="group overflow-hidden rounded-[1.75rem] border border-[#c8dceb] bg-white shadow-[0_18px_50px_rgba(25,70,101,.09)]">
        <div className="relative h-72 overflow-hidden"><Image src={highlightImages[index].src} alt={highlightImages[index].alt} fill loading="lazy" style={{ objectPosition: highlightImages[index].position }} sizes="(max-width: 767px) 90vw, 30vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-[#082b43]/55 to-transparent" /></div>
        <div className="p-6"><span className="editorialIndex">{highlight.icon}</span><h3 className="mt-5 font-serif text-2xl text-[#123f60]">{highlight.title}</h3><p className="mt-3 leading-7 text-[#60798a]">{highlight.description}</p></div>
      </article>)}</div>
    </div></section></EnvelopeEnding>
  );
}

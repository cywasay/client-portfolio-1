import Image from "next/image";
import { principles } from "../data";

export default function LvPrinciples() {
  return (
    <section className="editorialSection"><div className="editorialInner grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
      <div><p className="editorialKicker">Guiding principles</p><h2 className="editorialHeading">A standard for how the work gets done.</h2><div className="mt-8 divide-y divide-[#c8dceb] border-y border-[#c8dceb]">
        {principles.map((principle) => <div key={principle.title} className="grid grid-cols-[48px_1fr] gap-4 py-6"><span className="font-serif text-xl text-[#6f9fbd]">{principle.icon}</span><div><h3 className="font-serif text-2xl text-[#123f60]">{principle.title}</h3><p className="mt-2 leading-7 text-[#60798a]">{principle.description}</p></div></div>)}
      </div></div>
      <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] sm:min-h-[540px]"><Image src="/edu-leader7.jpg" alt="Leadership in practice" fill loading="lazy" sizes="(max-width: 1023px) 90vw, 46vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#082b43]/70 via-transparent to-transparent" /><p className="absolute bottom-0 max-w-lg p-6 font-serif text-3xl leading-snug text-white sm:p-8">A school’s culture is built in the space between what leaders say and what people experience.</p></div>
    </div></section>
  );
}

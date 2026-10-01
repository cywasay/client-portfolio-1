"use client";

import { useState } from "react";
import { compassValues } from "../data";

export default function LvCompass() {
  const [active, setActive] = useState(0);
  return (
    <section id="leadership-compass" className="editorialSection scroll-mt-24"><div className="editorialInner">
      <div className="mb-10 grid gap-5 md:grid-cols-[1fr_.75fr] md:items-end"><div><p className="editorialKicker">Leadership compass</p><h2 className="editorialHeading">Four ideas. One consistent direction.</h2></div><p className="max-w-xl leading-7 text-[#60798a] md:justify-self-end">Leadership becomes credible when values can be recognized in everyday choices—not only in formal statements.</p></div>
      <div className="grid overflow-hidden rounded-[2rem] border border-[#c8dceb] bg-white shadow-[0_26px_75px_rgba(25,70,101,.1)] lg:grid-cols-[.8fr_1.2fr]">
        <div className="divide-y divide-[#c8dceb] border-b border-[#c8dceb] lg:border-b-0 lg:border-r">
          {compassValues.map((value, index) => <button key={value.title} type="button" onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={`flex w-full items-center justify-between px-6 py-6 text-left transition sm:px-8 ${active === index ? "bg-[#eaf4fa]" : "hover:bg-[#f5f9fb]"}`}>
            <span className="flex items-center gap-5"><span className="font-serif text-xl text-[#6f9fbd]">{value.icon}</span><span className="font-serif text-2xl text-[#123f60]">{value.title}</span></span><span className="text-[#28719f]">{active === index ? "—" : "+"}</span>
          </button>)}
        </div>
        <div className="relative min-h-[400px] overflow-hidden bg-[#123f60] p-8 text-white sm:p-12">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" /><div className="absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />
          <div className="relative flex h-full max-w-lg flex-col justify-between"><span className="font-serif text-7xl text-[#8fc2df]">{compassValues[active].icon}</span><div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#9bc9e4]">A working principle</p><h3 className="mt-4 font-serif text-4xl text-white sm:text-5xl">{compassValues[active].title}</h3><p className="mt-5 leading-7 text-white/70">{compassValues[active].description}</p></div></div>
        </div>
      </div>
    </div></section>
  );
}

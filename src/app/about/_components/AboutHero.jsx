import Image from "next/image";
import { stats } from "../data";

export default function AboutHero() {
  return (
    <section className="interiorHero">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <div>
          <p className="interiorEyebrow justify-start">01 / The educator</p>
          <h1>More than a role.<br /><em>A lifelong practice.</em></h1>
          <p className="interiorHeroLead mx-0">A decade of teaching, mentoring, and educational leadership shaped by one belief: every learner deserves to feel seen.</p>
          <div className="interiorStats mx-0">
            {stats.map((stat) => <div className="interiorStat" key={stat.label}><strong>{stat.number}</strong><span>{stat.label}</span></div>)}
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/4.5] w-full max-w-md overflow-hidden rounded-[90px_24px_24px_24px] bg-[#dbe9f1] shadow-[0_28px_60px_#153b5420]">
          <Image src="/edu-leader2.jpg" alt="Neelam Nasir with students" fill priority className="object-cover object-center" sizes="(max-width: 1024px) 90vw, 40vw" />
        </div>
      </div>
    </section>
  );
}

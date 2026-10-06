import Image from "next/image";
import { portfolioPhotos } from "@/lib/portfolio-photos";

export default function ContactVisual() {
  return (
    <aside className="relative min-h-[440px] overflow-hidden bg-[#123f60] lg:min-h-full">
      <Image src={portfolioPhotos.schoolMeeting.src} alt={portfolioPhotos.schoolMeeting.alt} fill loading="lazy" className="object-cover opacity-65" style={{ objectPosition: portfolioPhotos.schoolMeeting.position }} sizes="(max-width: 1023px) 90vw, 40vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#082b43] via-[#123f60]/60 to-transparent" />
      <blockquote className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
        <span className="text-xs font-bold uppercase tracking-[.22em] text-[#a9d3ec]">An open door</span>
        <p className="mt-4 max-w-md font-serif text-3xl leading-snug text-white">“The strongest work begins with listening carefully enough to understand what matters.”</p>
      </blockquote>
    </aside>
  );
}

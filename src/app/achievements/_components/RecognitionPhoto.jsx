import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioPhotos } from "@/lib/portfolio-photos";

export default function RecognitionPhoto() {
  const photo = portfolioPhotos.recognitionPresentation;
  return <section className="editorialSection editorialSectionAlt" aria-labelledby="recognition-photo-title">
    <div className="editorialInner grid items-center gap-8 lg:grid-cols-[1.2fr_.8fr] lg:gap-14">
      <figure className="overflow-hidden rounded-[44px_24px_24px_24px] bg-[#e0edf5]">
        <div className="relative aspect-[4/3] sm:aspect-[16/11]"><Image src={photo.src} alt={photo.alt} fill loading="lazy" style={{ objectPosition: photo.position }} sizes="(max-width: 1023px) 90vw, 55vw" className="object-cover" /></div>
        <figcaption className="px-6 py-4 text-xs leading-6 text-[#55778e]">Neelam Nisar at a recognition presentation.</figcaption>
      </figure>
      <div><p className="editorialKicker">Recognition, in pictures</p><h2 id="recognition-photo-title" className="editorialHeading">The people behind<br /><em className="font-normal text-[#2a709b]">the milestones.</em></h2><p className="max-w-lg text-[15px] leading-8 text-[#5a7385]">A moment from the school community—one of the photographs shared by Neelam Nisar, alongside moments of student recognition, conversation, and everyday leadership.</p><Link href="/gallery/9" className="mt-7 inline-flex items-center gap-4 text-xs font-semibold text-[#236b92]">Explore this moment<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
    </div>
  </section>;
}

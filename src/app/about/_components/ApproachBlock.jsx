import Image from "next/image";
import { approachParagraphs } from "../data";

export default function ApproachBlock() {
  return (
    <div className="editorialCard grid items-center gap-10 overflow-hidden p-7 sm:p-10 lg:grid-cols-2">
      <div>
        <p className="editorialKicker">Inside the classroom</p>
        <h2 className="text-[clamp(2.4rem,4vw,4rem)] leading-[1.05]">A thoughtful, <em className="font-normal text-[#2a709b]">adaptive approach.</em></h2>
        <div className="mt-7 space-y-5 text-[15px] leading-8 text-[#5a7385]">{approachParagraphs.map(text=><p key={text}>{text}</p>)}</div>
      </div>
      <div className="relative aspect-[4/4.2] overflow-hidden rounded-[70px_22px_22px_22px]">
        <Image src="/edu-leader7.jpg" alt="Neelam Nisar with students in a classroom" fill loading="lazy" className="object-cover" sizes="(max-width:1023px) 90vw, 40vw" />
      </div>
    </div>
  );
}

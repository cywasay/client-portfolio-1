import Link from "next/link";
import EnvelopeEnding from "@/components/EnvelopeEnding";

export default function ContactCta() {
  return (
    <EnvelopeEnding><section className="editorialSection"><div className="editorialInner editorialCta">
      <p className="editorialKicker !text-[#a9d3ec]">A purposeful next step</p>
      <h2 className="max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl">Good educational work grows through trust, clarity, and a conversation worth having.</h2>
      <p className="max-w-2xl leading-7 text-white/70">If you are planning a program, inviting a speaker, or exploring a collaboration, I would be glad to hear the idea.</p>
      <div className="flex flex-wrap gap-3"><a href="mailto:hello@educator.com" className="editorialButton">Schedule a conversation</a><Link href="/about" className="editorialButton editorialButtonGhost">About my work</Link></div>
    </div></section></EnvelopeEnding>
  );
}

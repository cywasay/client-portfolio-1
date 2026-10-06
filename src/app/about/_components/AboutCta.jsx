import Link from "next/link";
import EnvelopeEnding from "@/components/EnvelopeEnding";

export default function AboutCta() {
  return (
    <EnvelopeEnding><section className="editorialSection">
      <div className="editorialInner editorialCta">
        <div><p className="editorialKicker !text-[#8fc9e2]">Continue the story</p><h2 className="text-3xl sm:text-4xl">Explore the work behind the philosophy.</h2><p className="mt-4 max-w-2xl leading-7">Follow the professional journey or begin a conversation about education and leadership.</p></div>
        <div className="flex shrink-0 flex-wrap gap-3"><Link href="/research-and-publications" className="editorialButton !bg-white !text-[#174f78]">Research & writing</Link><Link href="/journey/career" className="editorialButton !border !border-white/30 !bg-transparent">View career</Link><Link href="/contact" className="editorialButton !border !border-white/30 !bg-transparent">Get in touch</Link></div>
      </div>
    </section></EnvelopeEnding>
  );
}

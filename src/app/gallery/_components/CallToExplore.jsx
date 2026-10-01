import Link from "next/link";
import EnvelopeEnding from "@/components/EnvelopeEnding";

export default function CallToExplore() {
  return (
    <EnvelopeEnding><section className="editorialSection"><div className="editorialInner editorialCta">
      <div><p className="editorialKicker !text-[#a9d3ec]">Every picture holds a story</p><h2 className="max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl">Education becomes memorable when people can see themselves in its story.</h2></div>
      <p className="max-w-xl leading-7 text-white/70">These moments document an ongoing practice of student growth, educator collaboration, and community trust.</p>
      <div className="flex flex-wrap gap-3"><Link href="/contact" className="editorialButton">Share your story</Link><Link href="/about" className="editorialButton editorialButtonGhost">Read the philosophy</Link></div>
    </div></section></EnvelopeEnding>
  );
}

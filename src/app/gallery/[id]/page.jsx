import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { galleryItems } from "../data";
import EnvelopeEnding from "@/components/EnvelopeEnding";

const getImageUrl = (id) => `/edu-leader${((id - 1) % 7) + 1}.jpg`;

export default async function GalleryDetailPage({ params }) {
  const { id } = await params;
  const item = galleryItems.find((entry) => String(entry.id) === id);
  if (!item) notFound();

  return (
    <main id="top" className="interiorPage">
      <section className="editorialSection pt-28 sm:pt-32"><div className="editorialInner">
        <Link href="/gallery" className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.15em] text-[#28719f]"><span className="transition group-hover:-translate-x-1">←</span> Back to gallery</Link>
        <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-[#c8dceb] bg-white shadow-[0_28px_80px_rgba(24,67,96,.13)] lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-[680px]"><Image src={getImageUrl(item.id)} alt={item.title} fill priority className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#082b43]/65 via-transparent to-transparent" /><div className="absolute bottom-0 left-0 p-7 text-white sm:p-10"><p className="text-xs font-bold uppercase tracking-[.18em] text-white/70">{item.category}</p><p className="mt-2 text-sm text-white/80">{item.date}</p></div></div>
          <article className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div><span className="editorialIndex">{item.icon}</span><h1 className="mt-8 font-serif text-5xl leading-[.96] text-[#123f60] sm:text-6xl">{item.title}</h1><p className="mt-7 text-lg leading-8 text-[#60798a]">{item.description}</p></div>
            <div className="mt-12">
              <div className="grid gap-6 border-y border-[#c8dceb] py-7 sm:grid-cols-2"><div><p className="editorialKicker">Focus</p><p className="leading-7 text-[#456579]">{item.category.charAt(0).toUpperCase() + item.category.slice(1)} innovation and student empowerment.</p></div><div><p className="editorialKicker">Documented</p><p className="leading-7 text-[#456579]">A milestone captured in {item.date}.</p></div></div>
              <Link href="/contact" className="editorialButton mt-8">Discuss similar work <span className="ml-2">→</span></Link>
            </div>
          </article>
        </div>
      </div></section>
      <EnvelopeEnding>
        <section className="editorialSection editorialSectionAlt"><div className="editorialInner editorialCta">
          <p className="editorialKicker !text-[#a9d3ec]">Continue the story</p>
          <h2 className="max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl">One moment can become the beginning of a wider change.</h2>
          <p className="max-w-2xl leading-7 text-white/70">If this work connects with an idea you are exploring, let’s begin with a thoughtful conversation.</p>
          <Link href="/contact" className="editorialButton">Discuss similar work <span className="ml-2">→</span></Link>
        </div></section>
      </EnvelopeEnding>
    </main>
  );
}

import AchievementsHero from './_components/AchievementsHero';
import AchievementsClient from './_components/AchievementsClient';
import { achievements } from './data';
import Link from 'next/link';
import EnvelopeEnding from '@/components/EnvelopeEnding';
import RecognitionPhoto from './_components/RecognitionPhoto';

export default function Achievements() {
  return (
    <main id="top" className="interiorPage">
      <AchievementsHero />
      <RecognitionPhoto />
      <AchievementsClient achievements={achievements} />
      <EnvelopeEnding>
        <section className="editorialSection editorialSectionAlt">
          <div className="editorialInner editorialCta">
            <p className="editorialKicker !text-[#a9d3ec]">What recognition makes possible</p>
            <h2 className="max-w-4xl font-serif text-4xl leading-tight text-white sm:text-5xl">The milestone matters most when it opens a door for someone else.</h2>
            <p className="max-w-2xl leading-7 text-white/70">Each award represents shared work—students taking risks, educators growing together, and communities investing in possibility.</p>
            <div className="flex flex-wrap gap-3"><Link href="/contact" className="editorialButton">Start a conversation</Link><Link href="/journey/career" className="editorialButton editorialButtonGhost">Follow the journey</Link></div>
          </div>
        </section>
      </EnvelopeEnding>
    </main>
  );
}

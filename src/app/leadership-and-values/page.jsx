import LvHero from './_components/LvHero';
import LvCompass from './_components/LvCompass';
import LvTimeline from './_components/LvTimeline';
import LvPrinciples from './_components/LvPrinciples';
import LvHighlights from './_components/LvHighlights';

export default function LeadershipAndValues() {
  return (
    <main id="top" className="interiorPage">
      <LvHero />
      <LvCompass />
      <LvTimeline />
      <LvPrinciples />
      <LvHighlights />
    </main>
  );
}

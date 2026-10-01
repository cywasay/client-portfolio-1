import AboutHero from './_components/AboutHero';
import AboutTabs from './_components/AboutTabs';
import AboutCta from './_components/AboutCta';

export default function About() {
  return (
    <main id="top" className="interiorPage">
      <AboutHero />
      <AboutTabs />
      <AboutCta />
    </main>
  );
}

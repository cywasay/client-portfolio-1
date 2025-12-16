import AboutHero from './_components/AboutHero';
import AboutTabs from './_components/AboutTabs';
import AboutCta from './_components/AboutCta';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <AboutHero />
      <AboutTabs />
      <AboutCta />
    </main>
  );
}
import HeroClient from "./_components/HeroClient";
import AboutSection from "./_components/AboutSection";
import TestimonialsClient from "./_components/TestimonialsClient";

export default function Home() {
  return (
    <main className="text-gray-800 bg-white overflow-hidden">
      <HeroClient />
      <AboutSection />
      <TestimonialsClient />
    </main>
  );
}


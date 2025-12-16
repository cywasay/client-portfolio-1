import AchievementsHero from './_components/AchievementsHero';
import AchievementsClient from './_components/AchievementsClient';
import { achievements } from './data';

export default function Achievements() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <AchievementsHero />
      <AchievementsClient achievements={achievements} />
    </main>
  );
}
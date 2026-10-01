import { impactStats } from "../data";

export default function AchievementsHero() {
  return (
    <section className="interiorHero">
      <div className="interiorHeroInner">
        <p className="interiorEyebrow">A record of meaningful work</p>
        <h1>Achievements <em>&amp; impact.</em></h1>
        <p className="interiorHeroLead">Milestones shaped by thoughtful practice, shared effort, and a lasting commitment to student possibility.</p>
        <div className="interiorStats">
          {impactStats.map((stat) => <div className="interiorStat" key={stat.label}><strong>{stat.number}</strong><span>{stat.label}</span></div>)}
        </div>
      </div>
    </section>
  );
}

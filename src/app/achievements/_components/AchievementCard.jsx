export default function AchievementCard({ achievement, onSelect }) {
  return (
    <button type="button" onClick={() => onSelect(achievement)} className="editorialCard group flex min-h-[360px] w-full flex-col p-7 text-left">
      <div className="flex items-start justify-between"><span className="editorialIndex">{achievement.icon}</span><span className="text-[10px] font-bold tracking-[.16em] text-[#6c8da2]">{achievement.year}</span></div>
      <p className="editorialKicker mt-8">{achievement.category}</p>
      <h2 className="text-[1.75rem] leading-tight">{achievement.title}</h2>
      <p className="mt-2 text-xs font-semibold text-[#2b719a]">{achievement.organization}</p>
      <p className="mt-5 text-sm leading-7 text-[#5a7385]">{achievement.description}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-6">{achievement.metrics.map(metric=><span key={metric} className="rounded-full bg-[#e9f2f7] px-3 py-1.5 text-[10px] font-semibold text-[#486a7f]">{metric}</span>)}</div>
      <span className="mt-5 text-xs font-bold text-[#246b96] transition-transform group-hover:translate-x-1">View full story →</span>
    </button>
  );
}

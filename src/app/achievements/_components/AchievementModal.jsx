"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function AchievementModal({ achievement, onClose }) {
  if (!achievement) return null;
  return (
    <Dialog open={!!achievement} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl overflow-hidden border border-[#c8dceb] bg-[#f8fbfd] p-0 shadow-[0_32px_90px_rgba(20,66,98,.24)] sm:rounded-[2rem]">
        <div className="grid md:grid-cols-[180px_1fr]">
          <aside className="flex min-h-40 flex-col justify-between bg-[#123f60] p-7 text-white md:min-h-[520px]">
            <span className="font-serif text-6xl font-light text-[#a9d3ec]">{achievement.icon}</span>
            <div>
              <p className="mb-2 text-[.68rem] font-bold uppercase tracking-[.24em] text-[#a9d3ec]">{achievement.category}</p>
              <p className="text-sm text-white/70">{achievement.year}</p>
            </div>
          </aside>
          <div className="p-7 sm:p-10">
            <DialogHeader className="space-y-3 text-left">
              <DialogDescription className="text-xs font-bold uppercase tracking-[.2em] text-[#28719f]">{achievement.organization}</DialogDescription>
              <DialogTitle className="max-w-xl font-serif text-3xl font-normal leading-tight text-[#0f3550] sm:text-4xl">{achievement.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-8 space-y-7">
              <Info title="The recognition" content={achievement.description} />
              <Info title="The impact" content={achievement.impact} />
              <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-[#28719f]">At a glance</h3>
                <div className="flex flex-wrap gap-2">
                  {achievement.metrics.map((metric) => <span key={metric} className="rounded-full border border-[#c8dceb] bg-white px-4 py-2 text-sm text-[#34566e]">{metric}</span>)}
                </div>
              </div>
              {achievement.highlight && <blockquote className="border-l-2 border-[#4f98c5] pl-5 font-serif text-xl italic leading-relaxed text-[#194f73]">{achievement.highlight}</blockquote>}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Info({ title, content }) {
  return <div><h3 className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-[#28719f]">{title}</h3><p className="leading-7 text-[#4d687a]">{content}</p></div>;
}

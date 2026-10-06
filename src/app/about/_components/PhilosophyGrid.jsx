import { philosophyPoints } from "../data";

export default function PhilosophyGrid() {
  return (
    <div className="editorialCard p-5 sm:p-10">
      <header className="editorialHeading center">
        <p className="editorialKicker">Beliefs in practice</p>
        <h2>My educational <em>philosophy.</em></h2>
        <p>Education should ignite curiosity and give students ownership of their learning. Safe, inclusive classrooms make room for questions, challenge, and growth.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {philosophyPoints.map((point) => (
          <article key={point.title} className="editorialCard flex min-w-0 flex-col items-start gap-4 p-5 min-[480px]:flex-row sm:p-6">
            <span className="editorialIndex shrink-0">{point.icon}</span>
            <div className="min-w-0"><h3 className="text-xl">{point.title}</h3><p className="mt-2 text-sm leading-7 text-[#5a7385]">{point.description}</p></div>
          </article>
        ))}
      </div>
    </div>
  );
}

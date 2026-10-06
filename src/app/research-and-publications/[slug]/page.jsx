import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, FileText, BookOpen } from "lucide-react";
import StudyNotes from "../StudyNotes";
import ResearchEnding from "../ResearchEnding";
import { papers } from "../publication";
import styles from "../Research.module.css";

export function generateStaticParams() {
  return papers.map(paper => ({ slug: paper.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const paper = papers.find(item => item.slug === slug);
  return paper ? { title: paper.title, description: paper.summary } : {};
}

export default async function PaperPage({ params }) {
  const { slug } = await params;
  const paper = papers.find(item => item.slug === slug);
  if (!paper) notFound();
  return <main id="top" className={styles.page}>
    <div className={styles.detailIntro}><Link href="/research-and-publications#papers"><ArrowLeft size={16} aria-hidden="true" />All research & publications</Link><span>{paper.category} / {paper.year}</span></div>
    <section className={styles.study} aria-labelledby="study-title">
      <div className={styles.studyGrid}>
        <aside className={styles.record} aria-label="Publication details">
          <p className={styles.eyebrow}>THE PUBLICATION</p>
          <dl><div><dt>Authors</dt><dd>{paper.authors.map(author => <span key={author}>{author}</span>)}</dd></div><div><dt>Published in</dt><dd>{paper.journal}</dd></div><div><dt>Issue & pages</dt><dd>Volume {paper.volume}, Issue {paper.issue}<br />{paper.year} · Pages {paper.pages}</dd></div><div><dt>DOI</dt><dd><a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">{paper.doi}<ArrowUpRight size={14} aria-label="opens in a new tab" /></a></dd></div></dl>
        </aside>
        <article className={styles.article}>
          <p className={styles.eyebrow}>A CLOSER LOOK / {paper.shortJournal}</p>
          <h1 id="study-title">{paper.title}</h1>
          <p className={styles.articleLead}>{paper.summary}</p>
          {paper.dateNote && <p className={styles.dateNote}>{paper.dateNote}</p>}
          <h3>The study at a glance</h3><p>{paper.approach}</p><p>{paper.context}</p>
          <div className={styles.finding}><span>THE TAKEAWAY</span><p>{paper.finding}</p><small>An editorial interpretation of the published research.</small></div>
          <h3>What this invites us to consider</h3>
          <div className={styles.questions}>{paper.reflections.map(([title, description], index) => <div key={title}><span>0{index + 1}</span><div><h4>{title}</h4><p>{description}</p></div></div>)}</div>
          <p className={styles.editorialNote}>This overview is a plain-language introduction, not a reproduction of the paper. The reflections are editorial interpretations; consult the original publication for methods, evidence, and complete conclusions.</p>
          <div className={styles.sourceBox}><div><BookOpen size={23} strokeWidth={1.4} aria-hidden="true" /><h3>Continue with the original.</h3><p>Explore the journal record and the authors’ published work.</p></div><div className={styles.sourceActions}><a href={paper.articleUrl} target="_blank" rel="noopener noreferrer">Read journal article<ArrowUpRight size={17} aria-hidden="true" /></a>{paper.pdfUrl && <a href={paper.pdfUrl} target="_blank" rel="noopener noreferrer"><FileText size={17} aria-hidden="true" />Open full paper (PDF)<ArrowUpRight size={17} aria-hidden="true" /></a>}<span>External sources · open in a new tab</span></div></div>
          <StudyNotes paper={paper} />
          <div className={styles.related}><p className={styles.eyebrow}>CONTINUE EXPLORING</p>{papers.filter(item => item.slug !== paper.slug && item.category === paper.category).slice(0, 1).map(item => <Link key={item.slug} href={`/research-and-publications/${item.slug}`}><span>{item.title}</span><ArrowUpRight size={20} aria-hidden="true" /></Link>)}<Link href="/research-and-publications#papers">Back to the full collection<ArrowUpRight size={18} aria-hidden="true" /></Link></div>
        </article>
      </div>
    </section>
    <ResearchEnding />
  </main>;
}

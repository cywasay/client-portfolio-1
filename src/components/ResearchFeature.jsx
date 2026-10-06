import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredPaper as paper } from "@/app/research-and-publications/publication";
import styles from "@/app/research-and-publications/Research.module.css";

export default function ResearchFeature({ full = false }) {
  const Heading = full ? "h1" : "h2";
  return (
    <section id="research" className={`${styles.feature} ${full ? styles.fullFeature : ""}`} aria-labelledby="research-heading">
      <div className={styles.featureInner}>
        <div className={styles.paperStage}>
          <Link href={`/research-and-publications/${paper.slug}`} className={styles.paper} aria-label="Explore the research on AI and English learning">
            <div className={styles.paperTop}><span>SELECTED RESEARCH</span><span>{paper.year} / 01</span></div>
            <div className={styles.paperTitle}>Learning English<br />in the age of <em>AI.</em></div>
            <div className={styles.wordStudy} aria-hidden="true"><span>FOR<span className={styles.wordArrow}>↗</span></span><span className={styles.wordAnd}>&</span><span><i>FROM</i></span></div>
            <p className={styles.paperSubtitle}>Teachers’ and learners’ perspectives<br />from Pakistani schools.</p>
            <div className={styles.paperBottom}><span>NEELAM NISAR<br /><small>WITH M. RABICA & M. A. ADAM</small></span><span className={styles.paperArrow}><ArrowUpRight size={21} aria-hidden="true" /></span></div>
          </Link>
          <p className={styles.stageCaption}>A question from the classroom. A contribution to the conversation.</p>
        </div>
        <div className={styles.featureCopy}>
          <p className={styles.eyebrow}>{full ? "RESEARCH & PUBLICATIONS" : "03 / RESEARCH & WRITING"}</p>
          <Heading id="research-heading" className={styles.featureHeading}>Practice, examined.<br /><em>Ideas, shared.</em></Heading>
          <p className={styles.intro}>The classroom is where the questions begin.</p>
          <p className={styles.description}>Neelam Nisar’s work as a researcher and writer explores educational leadership, language, culture, and technology—connecting scholarly inquiry with a life in education.</p>
          <div className={styles.tags}><span>5 research papers</span><span>1 book · 2 editions</span></div>
          <Link href={full ? "#papers" : "/research-and-publications"} className={styles.primaryLink}>{full ? "Browse the research" : "Explore research & writing"}{full ? <ArrowDown size={18} aria-hidden="true" /> : <ArrowRight size={18} aria-hidden="true" />}</Link>
          {full && <Link href="#book" className={styles.bookJump}>Meet the book<ArrowDown size={14} aria-hidden="true" /></Link>}
          <p className={styles.sourceNote}>Featured study · {paper.shortJournal} · {paper.year}</p>
        </div>
      </div>
    </section>
  );
}

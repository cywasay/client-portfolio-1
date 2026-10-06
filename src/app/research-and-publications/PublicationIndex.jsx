"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Research.module.css";

const categories = ["All research", "Leadership", "Technology & learning", "Language & culture"];

export default function PublicationIndex({ papers }) {
  const [category, setCategory] = useState("All research");
  const visible = category === "All research" ? papers : papers.filter(paper => paper.category === category);
  return <section id="papers" className={styles.collection} aria-labelledby="collection-title">
    <div className={styles.collectionInner}>
      <div className={styles.collectionHeading}><div><p className={styles.eyebrow}>THE RESEARCH / 2018—2026</p><h2 id="collection-title">Questions that move<br /><em>education forward.</em></h2></div><p>Five papers. Three connected fields of inquiry.<br />Explore the work, then continue with the original sources.</p></div>
      <div className={styles.filters} aria-label="Filter research by subject">{categories.map(item => <button type="button" key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}</div>
      <p className={styles.resultCount} role="status">{visible.length} {visible.length === 1 ? "paper" : "papers"}{category !== "All research" ? ` in ${category.toLowerCase()}` : " in the collection"}</p>
      <div className={styles.paperList}>{visible.map(paper => <article className={styles.paperRow} key={paper.slug}>
        <div className={styles.rowDate}><span>{paper.year}</span><small>{paper.shortJournal}</small></div>
        <div className={styles.rowCopy}><p className={styles.rowCategory}>{paper.category}</p><h3><Link href={`/research-and-publications/${paper.slug}`}>{paper.title}</Link></h3><p>{paper.summary}</p>{paper.dateNote && <small className={styles.dateNote}>{paper.dateNote}</small>}<span className={styles.rowCredit}>{paper.authors.join(" · ")}</span></div>
        <Link className={styles.readStudy} href={`/research-and-publications/${paper.slug}`} aria-label={`Read study: ${paper.title}`}><ArrowUpRight size={23} strokeWidth={1.4} aria-hidden="true" /><span>Read study</span></Link>
      </article>)}</div>
    </div>
  </section>;
}

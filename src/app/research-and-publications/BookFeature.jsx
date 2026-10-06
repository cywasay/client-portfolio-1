"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { book } from "./publication";
import styles from "./Research.module.css";

export default function BookFeature() {
  const [imageFailed, setImageFailed] = useState(false);
  return <section id="book" className={styles.bookSection} aria-labelledby="book-title">
    <div className={styles.bookInner}>
      <figure className={styles.bookVisual}>
        {imageFailed ? <div className={styles.bookFallback}><BookOpen size={35} strokeWidth={1} /><span>EDUCATIONAL<br /><em>INSIGHTS</em></span><small>A Practitioner’s Perspective<br />Dr Neelam Nisar</small></div> : <img src={book.coverUrl} alt="First-edition cover of Educational Insights by Dr Neelam Nisar" width="600" height="600" loading="lazy" decoding="async" onError={() => setImageFailed(true)} />}
        <figcaption>{imageFailed ? "Educational Insights · first edition" : "The first-edition cover · Auraq Publications, 2023"}</figcaption>
      </figure>
      <div className={styles.bookCopy}>
        <p className={styles.eyebrow}>THE BOOK / A PRACTITIONER’S PERSPECTIVE</p>
        <h2 id="book-title">Educational <em>Insights.</em></h2>
        <p className={styles.bookSubtitle}>A Practitioner’s Perspective</p>
        <p className={styles.bookByline}>By {book.author}</p>
        <p className={styles.description}>{book.summary}</p>
        <div className={styles.editions}>
          {book.editions.map(edition => <div className={styles.edition} key={edition.year}>
            <div><span className={styles.editionYear}>{edition.year}</span><h3>{edition.name}</h3><p>{edition.publisher}</p></div>
            <div className={styles.editionAction}>{edition.available ? <a href={edition.url} target="_blank" rel="noopener noreferrer">View publisher listing<ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a> : <Link href="/contact">Enquire about this edition<ArrowUpRight size={15} aria-hidden="true" /></Link>}
              {edition.available ? <small>English · {edition.pages} pages · Paperback<br />ISBN {edition.isbn}</small> : <small>Edition details supplied by the author.<br /><a href={edition.url} target="_blank" rel="noopener noreferrer">Publisher listing currently unavailable ↗</a></small>}
            </div>
          </div>)}
        </div>
      </div>
    </div>
  </section>;
}

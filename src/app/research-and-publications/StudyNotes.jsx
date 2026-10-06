"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import styles from "./Research.module.css";

export default function StudyNotes({ paper }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  async function copyCitation() {
    try {
      await navigator.clipboard.writeText(paper.citation);
      setCopied(true);
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }
  return (
    <div className={styles.citation}>
      <div className={styles.citationTop}><h3>Cite this work</h3><button type="button" onClick={copyCitation}>{copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}{copied ? "Copied" : "Copy citation"}</button></div>
      <p>{paper.citation}</p>
      <span className={styles.copyStatus} role="status">{failed ? "Select and copy the citation text above; clipboard access is unavailable." : copied ? "Citation copied to clipboard." : "APA citation"}</span>
    </div>
  );
}

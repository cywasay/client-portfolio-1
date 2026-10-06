import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import EnvelopeEnding from "@/components/EnvelopeEnding";
import styles from "./Research.module.css";

export default function ResearchEnding() {
  return <EnvelopeEnding><section className={styles.closing}><div>
    <p className={styles.eyebrow}>FROM INQUIRY TO PRACTICE</p>
    <h2>Good questions deserve<br /><em>a conversation.</em></h2>
    <p>For research discussions, educational collaborations,<br />or an exchange of ideas about learning.</p>
    <Link href="/contact" className={styles.primaryLink}>Start a conversation<ArrowUpRight size={18} aria-hidden="true" /></Link>
  </div></section></EnvelopeEnding>;
}

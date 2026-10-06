import ResearchFeature from "@/components/ResearchFeature";
import BookFeature from "./BookFeature";
import PublicationIndex from "./PublicationIndex";
import ResearchEnding from "./ResearchEnding";
import { papers } from "./publication";
import styles from "./Research.module.css";

export const metadata = {
  title: "Research & Publications",
  description: "Explore Neelam Nisar’s research in educational leadership, language and technology, alongside her book Educational Insights: A Practitioner’s Perspective.",
};

export default function ResearchPage() {
  return (
    <main id="top" className={styles.page}>
      <ResearchFeature full />
      <BookFeature />
      <PublicationIndex papers={papers} />
      <ResearchEnding />
    </main>
  );
}

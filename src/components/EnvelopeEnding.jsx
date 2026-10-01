import SiteFooter from "./SiteFooter";

export default function EnvelopeEnding({ children }) {
  return (
    <div className="pageEnvelopeEnding">
      <div className="pageEnvelopeLead">{children}</div>
      <SiteFooter envelope />
    </div>
  );
}

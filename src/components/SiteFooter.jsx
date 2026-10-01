import Link from "next/link";

export default function SiteFooter({ envelope = false }) {
  return (
    <footer className={"siteFooter" + (envelope ? " siteFooterEnvelope" : "")}>
      {envelope && <div className="siteFooterFlap" aria-hidden="true">A note from Neelam</div>}
      <div className="siteFooterMain">
        <div className="siteFooterIdentity">
          <Link className="siteFooterBrand" href="/">Neelam Nasir<span>Educator &amp; educational leader</span></Link>
          <p>Education changes what people believe is possible.</p>
        </div>
        <div className="siteFooterDirectory">
          <nav aria-label="Profile">
            <span>Profile</span>
            <Link href="/about">About</Link>
            <Link href="/journey/career">Career</Link>
            <Link href="/achievements">Achievements</Link>
          </nav>
          <nav aria-label="Explore">
            <span>Explore</span>
            <Link href="/leadership-and-values">Leadership</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </div>
      <div className="siteFooterBottom"><p>© {new Date().getFullYear()} Neelam Nasir. All rights reserved.</p><a href="#top">Back to top <span>↑</span></a></div>
    </footer>
  );
}

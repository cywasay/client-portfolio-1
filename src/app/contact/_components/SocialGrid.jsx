import { socialLinks } from "../data";

export default function SocialGrid() {
  return (
    <section className="editorialSection"><div className="editorialInner">
      <div className="mb-10 grid gap-4 md:grid-cols-2 md:items-end"><div><p className="editorialKicker">Elsewhere</p><h2 className="editorialHeading">Follow the wider conversation.</h2></div><p className="max-w-lg leading-7 text-[#60798a] md:justify-self-end">Notes on school leadership, classroom practice, research, and the people doing the work.</p></div>
      <div className="divide-y divide-[#c8dceb] border-y border-[#c8dceb]">
        {socialLinks.map((social) => <a key={social.platform} href={social.url} className="group grid grid-cols-[64px_1fr_auto] items-center gap-5 py-5 sm:grid-cols-[90px_1fr_1fr_auto]">
          <span className="font-serif text-2xl text-[#28719f]">{social.icon}</span><strong className="font-serif text-xl font-normal text-[#123f60]">{social.platform}</strong><span className="hidden text-sm text-[#60798a] sm:block">{social.description}</span><span className="text-[#28719f] transition group-hover:translate-x-1">↗</span>
        </a>)}
      </div>
    </div></section>
  );
}

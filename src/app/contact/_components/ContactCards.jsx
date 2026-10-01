import { contactMethods } from "../data";

export default function ContactCards() {
  return (
    <section className="editorialSection"><div className="editorialInner grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {contactMethods.map((method) => <a key={method.title} href={method.action} className="editorialCard group flex min-h-52 flex-col justify-between p-6 sm:p-7">
        <div className="flex items-start justify-between"><span className="editorialIndex">{method.icon}</span><span className="text-[#79a9c7] transition group-hover:translate-x-1">↗</span></div>
        <div><h3 className="font-serif text-2xl text-[#123f60]">{method.title}</h3><p className="mt-2 break-words text-sm leading-6 text-[#60798a]">{method.value}</p></div>
      </a>)}
    </div></section>
  );
}

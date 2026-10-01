import Link from "next/link";
import Image from "next/image";

const height = (size) => size === "large" ? "h-[28rem]" : size === "small" ? "h-72" : "h-96";
const getImageUrl = (id) => `/edu-leader${((id - 1) % 7) + 1}.jpg`;

export default function GalleryCard({ item }) {
  return (
    <Link href={`/gallery/${item.id}`} className="gallery-card group block overflow-hidden rounded-[1.75rem] border border-[#cbddea] bg-white shadow-[0_18px_55px_rgba(26,72,103,.10)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(26,72,103,.18)]">
      <div className={`${height(item.size)} relative overflow-hidden`}>
        <Image src={getImageUrl(item.id)} alt={item.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092d46]/75 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-6">
          <span className="text-xs font-bold uppercase tracking-[.18em] text-white/75">{item.category}</span><span className="text-xs text-white/75">{item.date}</span>
        </div>
      </div>
      <div className="flex items-start justify-between gap-5 p-5 sm:p-6">
        <div><h3 className="font-serif text-2xl leading-tight text-[#123f60]">{item.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-[#60798a]">{item.description}</p></div>
        <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#eaf4fa] text-lg text-[#1d658f] transition group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}

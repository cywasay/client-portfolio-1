"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/journey/career", label: "Career" },
  { href: "/achievements", label: "Achievements" },
  { href: "/leadership-and-values", label: "Leadership" },
  { href: "/research-and-publications", label: "Research" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const next = window.scrollY;
      setScrolled(next > 18);
      setVisible(next < 100 || next < lastScroll.current);
      lastScroll.current = next;
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(updateScroll); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const active = (href) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-500 ${visible ? "translate-y-0" : "-translate-y-full"} ${scrolled ? "border-[#c8dbe7] bg-[#f8fbfd]/94 shadow-[0_14px_40px_rgba(14,55,81,.09)] backdrop-blur-xl" : "border-[#d9e5ec] bg-[#f8fbfd]"}`}>
        <div className="mx-auto max-w-[96rem] px-5 sm:px-8 lg:px-10">
          <div className="hidden h-[88px] grid-cols-[1fr_auto_1fr] items-center xl:grid">
            <Brand />

            <nav aria-label="Primary navigation" className="flex h-full items-stretch border-x border-[#d9e5ec]">
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href} aria-current={active(item.href) ? "page" : undefined} className={`group relative flex min-w-[84px] flex-col items-center justify-center px-3 transition-colors 2xl:min-w-[96px] ${active(item.href) ? "text-[#0d4b73]" : "text-[#587083] hover:text-[#0d4b73]"}`}>
                  <span className="mb-1 text-[8px] font-bold tracking-[.18em] text-[#8aa4b6]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[12px] font-semibold tracking-[.02em]">{item.label}</span>
                  <span className={`absolute inset-x-5 bottom-0 h-[2px] origin-center bg-[#2475a5] transition-transform duration-300 ${active(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </Link>
              ))}
            </nav>

            <Link href="/contact" aria-label="Begin a conversation" className="group justify-self-end flex items-center gap-4 text-[#123f60]">
              <span className="hidden text-right 2xl:block"><strong className="block text-[11px] uppercase tracking-[.15em]">Begin a conversation</strong><small className="mt-1 block text-[10px] text-[#718b9d]">Ideas · invitations · collaboration</small></span>
              <span className="grid size-12 place-items-center rounded-full bg-[#103f61] text-white shadow-[0_10px_28px_rgba(16,63,97,.18)] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#2373a2]"><ArrowUpRight size={18} /></span>
            </Link>
          </div>

          <div className="flex h-[72px] items-center justify-between xl:hidden">
            <Brand compact />
            <button type="button" onClick={() => setMenuOpen(true)} className="flex h-11 shrink-0 items-center gap-3 border-l border-[#cbdde8] pl-4 text-[#123f60]" aria-label="Open navigation menu" aria-expanded={menuOpen}>
              <span className="text-[9px] font-bold uppercase tracking-[.18em]">Menu</span>
              <span className="flex w-6 flex-col gap-[5px]"><i className="h-px w-full bg-current" /><i className="h-px w-4 self-end bg-current" /></span>
            </button>
          </div>
        </div>
      </header>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="right" className="w-[min(88vw,390px)] border-0 bg-[#0d3049] p-0 text-white [&>button]:hidden">
          <div className="flex h-dvh min-h-0 flex-col">
            <div className="flex items-start justify-between border-b border-white/10 p-7">
              <SheetHeader className="min-w-0 p-0 text-left"><SheetTitle className="font-serif text-[22px] font-normal text-white sm:text-2xl">Explore the portfolio</SheetTitle><SheetDescription className="mt-2 text-xs leading-5 text-white/55">Education, leadership, and a life of purposeful work.</SheetDescription></SheetHeader>
              <button onClick={() => setMenuOpen(false)} aria-label="Close navigation menu" className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 text-white/80 hover:bg-white/10"><X size={18} /></button>
            </div>
            <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-7 py-3" aria-label="Mobile navigation">
              {navItems.map((item, index) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} aria-current={active(item.href) ? "page" : undefined} className={`group grid grid-cols-[32px_minmax(0,1fr)_auto] items-center border-b border-white/10 py-4 ${active(item.href) ? "text-[#9dd1ee]" : "text-white/80"}`}><span className="text-[9px] tracking-[.18em] text-white/35">{String(index + 1).padStart(2, "0")}</span><span className="font-serif text-[22px] sm:text-2xl">{item.label}</span><span className="transition group-hover:translate-x-1">→</span></Link>)}
            </nav>
            <div className="shrink-0 p-7"><Link href="/contact" onClick={() => setMenuOpen(false)} className="flex items-center justify-between gap-3 rounded-full bg-white px-6 py-4 text-xs font-bold text-[#123f60]">Start a conversation <ArrowUpRight size={18} className="shrink-0" /></Link></div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="h-[72px] xl:h-[88px]" />
    </>
  );
}

function Brand({ compact = false }) {
  return (
    <Link href="/" className="group flex w-fit min-w-0 items-center gap-3">
      <span className={`${compact ? "size-10" : "size-12"} relative grid shrink-0 place-items-center rounded-full border border-[#9ebed2] bg-[#eef6fa] font-serif text-sm text-[#123f60]`}><span className="absolute inset-[4px] rounded-full border border-[#c5dbe7]" />NN</span>
      <span className="min-w-0"><strong className={`${compact ? "text-lg" : "text-[22px]"} block whitespace-nowrap font-serif font-normal leading-none text-[#102f48]`}>Neelam <em className="font-normal not-italic text-[#2974a2]">Nisar</em></strong><small className={`mt-1.5 block text-[8px] font-bold uppercase tracking-[.22em] text-[#6f889a] ${compact ? "max-[380px]:hidden" : ""}`}>Educator · Principal · Public voice</small></span>
    </Link>
  );
}

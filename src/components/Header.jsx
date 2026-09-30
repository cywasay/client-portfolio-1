"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (path) => pathname === path;
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/journey/career", label: "Career" },
    { href: "/achievements", label: "Achievements" },
    { href: "/leadership-and-values", label: "Leadership" },
    { href: "/gallery", label: "Gallery" },
  ];

  const isActivePath = (href) =>
    href === "/"
      ? isActive("/")
      : href.startsWith("/journey")
      ? pathname.startsWith("/journey")
      : isActive(href);

  const NavLink = ({ item, mobile = false }) => {
    const active = isActivePath(item.href);
    const baseClass = mobile
      ? `flex items-center gap-4 border-l-2 p-4 text-base font-medium transition-all duration-300 ${
          active
            ? "border-[#246b9c] bg-[#edf5fa] text-[#12456b]"
            : "border-transparent text-slate-700 hover:border-[#9bbfd8] hover:bg-[#f5f9fc] hover:text-[#12456b]"
        }`
      : `group relative flex items-center gap-2 rounded-full px-3.5 py-2 text-[0.75rem] font-semibold tracking-wide transition-all duration-300 whitespace-nowrap ${
          active
            ? "bg-white text-[#0d4f7c] shadow-[0_3px_10px_rgba(13,59,95,0.08)]"
            : "text-slate-600 hover:bg-white/70 hover:text-[#0d4f7c]"
        }`;

    return (
      <a
        href={item.href}
        onClick={mobile ? closeMenu : undefined}
        className={baseClass}
      >
        <span className="font-semibold">{item.label}</span>
        {!mobile && (
          <span
            className={`absolute bottom-0 left-4 right-4 h-px origin-left bg-[#2e78aa] transition-transform duration-300 ${
              active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            }`}
            aria-hidden="true"
          />
        )}
      </a>
    );
  };

  const Logo = ({ mobile = false }) => (
    <a
      href="/"
      className={`group flex items-center ${mobile ? "gap-2.5" : "gap-3"}`}
    >
      <span className={`${mobile ? "size-9" : "size-10"} relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#0d3b5f] text-sm font-serif text-white shadow-sm`}>
        NN
        <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-[#6eb1db] transition-transform duration-300 group-hover:scale-x-50" />
      </span>
      <div className="text-left">
        <div
          className={`${
            mobile ? "text-lg" : "text-xl"
          } font-serif font-semibold tracking-tight text-[#0b2942] transition-colors duration-300 group-hover:text-[#1d6596]`}
        >
          Neelam <span className="text-[#2d719f]">Nasir</span>
        </div>
        {!mobile && (
          <div className="text-[0.59rem] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Educational Leadership
          </div>
        )}
      </div>
    </a>
  );

  const ContactButton = ({ mobile = false }) => (
    <Button
      asChild
      className={
        mobile
          ? "h-auto w-full bg-[#0d3b5f] py-6 font-semibold text-white transition-all duration-300 hover:bg-[#16527d]"
          : "group relative flex h-auto items-center gap-2 overflow-hidden border border-[#0d3b5f] bg-[#0d3b5f] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(13,59,95,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#16527d] hover:shadow-[0_12px_24px_rgba(13,59,95,0.2)]"
      }
    >
      <a href="/contact" style={{ borderRadius: 999 }} onClick={mobile ? closeMenu : undefined}>
        {!mobile && (
          <div className="absolute inset-0 -translate-x-full -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"></div>
        )}
        <span
          className="flex items-center justify-center gap-2"
        >
          <span>{mobile ? "Contact me" : "Let’s talk"}</span>
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </a>
    </Button>
  );

  const MenuButton = () => (
    <Button
      variant="ghost"
      onClick={toggleMenu}
      className="flex h-10 items-center gap-2 border border-[#c8d9e5] bg-[#edf4f8] px-3 text-[#173f5d] transition-all duration-300 hover:bg-[#dfeef7]"
      aria-label="Toggle menu"
    >
      <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em]">Menu</span>
      <div className="relative h-6 w-6 shrink-0">
        {["-translate-y-1.5", "", "translate-y-1.5"].map((pos, i) => (
          <span
            key={i}
            className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#173f5d] transition-all duration-300 ${
              isMenuOpen
                ? i === 0
                  ? "rotate-45 translate-y-0 bg-[#236d9d]"
                  : i === 1
                  ? "opacity-0"
                  : "-rotate-45 translate-y-0 bg-[#236d9d]"
                : pos
            }`}
          ></span>
        ))}
      </div>
    </Button>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "border-b border-[#c7d9e5] bg-white/92 shadow-[0_10px_35px_rgba(13,59,95,0.08)] backdrop-blur-xl"
            : "border-b border-[#d8e4ec] bg-[#f8fbfd]/92 backdrop-blur-lg"
        }`}
      >
        <nav className="mx-auto max-w-[96rem] px-4 sm:px-6 lg:px-8">
          <div className="hidden h-[78px] items-center justify-between lg:flex">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="flex items-center rounded-full border border-[#d2e0e9] bg-[#edf4f8]/80 p-1">
              <div className="flex items-center space-x-0.5">
                {navItems.map((item) => (
                  <NavLink key={item.href} item={item} />
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <ContactButton />
            </div>
          </div>

          <div className="flex h-[68px] items-center justify-between lg:hidden">
            <Logo mobile />
            <MenuButton />
          </div>
        </nav>
      </header>

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent
          side="right"
          className="w-80 border-l-0 p-0 [&>button]:hidden"
        >
          <div className="flex h-full flex-col bg-white">
            <div className="flex items-center justify-between border-b border-[#d7e4ec] bg-[#edf5fa] p-6">
              <div className="flex items-center gap-3">
                <SheetHeader className="space-y-1 text-left">
                  <SheetTitle className="text-lg font-bold text-[#0b2942]">
                    Menu
                  </SheetTitle>
                  <SheetDescription className="text-sm text-[#607789]">
                    Navigate through my portfolio
                  </SheetDescription>
                </SheetHeader>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 text-[#496b83] transition-all duration-300 hover:bg-white/60"
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex-1 p-4 overflow-y-auto">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <NavLink item={item} mobile />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-[#d7e4ec] p-4">
              <ContactButton mobile />
            </div>

            <div className="border-t border-[#d7e4ec] bg-[#f5f9fc] p-4">
              <p className="text-center text-xs text-[#607789]">
                Transforming Education • Inspiring Futures
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="h-[68px] lg:h-[78px]"></div>
    </>
  );
}

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
      ? `flex items-center gap-4 p-4 rounded-xl text-base font-medium transition-all duration-300 ${
          active
            ? "bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-600 border-l-4 border-blue-600 shadow-sm"
            : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
        }`
      : `group relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
          active
            ? "text-blue-600 bg-blue-50 shadow-inner"
            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
        }`;

    return (
      <a
        href={item.href}
        onClick={mobile ? closeMenu : undefined}
        className={baseClass}
      >
        <span className="font-semibold">{item.label}</span>
        {!mobile && active && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"></div>
        )}
      </a>
    );
  };

  const Logo = ({ mobile = false }) => (
    <a
      href="/"
      className={`flex items-center ${mobile ? "gap-2" : "gap-3 group"}`}
    >
      <div className="text-left">
        <div
          className={`${
            mobile ? "text-lg" : "text-xl"
          } font-monoton font-medium text-black ${
            !mobile &&
            "group-hover:text-blue-700 transition-colors duration-300"
          }`}
        >
          Neelam<span className="text-emerald-700">Nasir</span>
        </div>
        {!mobile && (
          <div className="text-xs text-gray-500 font-medium">
            Inspiring Futures
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
          ? "w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-6 h-auto rounded-xl font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg border-none"
          : "group relative px-6 py-2.5 h-auto bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 overflow-hidden border-none"
      }
    >
      <a href="/contact" onClick={mobile ? closeMenu : undefined}>
        {!mobile && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        )}
        <span
          className={mobile ? "flex items-center justify-center gap-2" : ""}
        >
          Contact{mobile && " Me"}
        </span>
      </a>
    </Button>
  );

  const MenuButton = () => (
    <Button
      variant="ghost"
      onClick={toggleMenu}
      className="p-2 w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300"
      aria-label="Toggle menu"
    >
      <div className="w-6 h-6 relative shrink-0">
        {["-translate-y-1.5", "", "translate-y-1.5"].map((pos, i) => (
          <span
            key={i}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              isMenuOpen
                ? i === 0
                  ? "rotate-45 translate-y-0 bg-blue-600"
                  : i === 1
                  ? "opacity-0"
                  : "-rotate-45 translate-y-0 bg-blue-600"
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
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
            : "bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex items-center justify-between py-4">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink key={item.href} item={item} />
              ))}
            </div>
            <div className="flex-shrink-0">
              <ContactButton />
            </div>
          </div>

          <div className="md:hidden flex items-center justify-between py-3">
            <Logo mobile />
            <MenuButton />
          </div>
        </nav>
      </header>

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetContent
          side="right"
          className="w-80 p-0 border-l-0 [&>button]:hidden"
        >
          <div className="flex flex-col h-full bg-white">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-emerald-50">
              <div className="flex items-center gap-3">
                <SheetHeader className="text-left space-y-1">
                  <SheetTitle className="text-lg font-bold text-gray-800">
                    Menu
                  </SheetTitle>
                  <SheetDescription className="text-sm text-gray-600">
                    Navigate through my portfolio
                  </SheetDescription>
                </SheetHeader>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg hover:bg-white/50 transition-all duration-300"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
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

            <div className="p-4 border-t border-gray-200">
              <ContactButton mobile />
            </div>

            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <p className="text-xs text-gray-600 text-center">
                Transforming Education • Inspiring Futures
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="h-20"></div>
    </>
  );
}

"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "About", href: "/about" },
    { name: "Journey", href: "/journey" },
    { name: "Leadership", href: "/leadership-and-values" },
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white pt-20 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-monoton mb-4 text-white tracking-widest leading-normal">
                Neelam <span className="text-emerald-400">Nasir</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Empowering students and educators through innovative leadership
              and transformative learning experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-base font-semibold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {links.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="space-y-6">
            <h4 className="text-base font-semibold text-white tracking-wide">
              Explore
            </h4>
            <ul className="space-y-3">
              {links.slice(3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 text-sm inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-base font-semibold text-white tracking-wide">
              Get in Touch
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">✉</span>
                </div>
                <span className="text-slate-300">hello@example.com</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">📍</span>
                </div>
                <span className="text-slate-300">New Delhi, India</span>
              </div>
              <div className="flex gap-3 pt-2">
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-all duration-200 text-xs font-medium"
                >
                  in
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-all duration-200 text-xs font-medium"
                >
                  tw
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© {currentYear} EducatorPortfolio. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-700">•</span>
              <Link
                href="#"
                className="hover:text-emerald-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

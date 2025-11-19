"use client";

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { 
      href: "/", 
      label: "Home", 
      icon: "🏠"
    },
    { 
      href: "/about", 
      label: "About", 
      icon: "👨‍🏫"
    },
    { 
      href: "/journey/career", 
      label: "Career", 
      icon: "📈"
    },
    { 
      href: "/achievements", 
      label: "Achievements", 
      icon: "🏆"
    },
    { 
      href: "/leadership-and-values", 
      label: "Leadership", 
      icon: "🌟"
    },
    { 
      href: "/gallery", 
      label: "Gallery", 
      icon: "📸"
    },
  ];

  return (
    <>
      {/* ===== PROFESSIONAL HEADER ===== */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="/" 
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-105 transition-transform duration-300">
                  EP
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    Educator<span className="text-emerald-600">Portfolio</span>
                  </div>
                  <div className="text-xs text-gray-500 font-medium">Inspiring Futures</div>
                </div>
              </a>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActivePath = item.href === '/' ? isActive('/') : 
                                   item.href.startsWith('/journey') ? pathname.startsWith('/journey') : 
                                   isActive(item.href);
                
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActivePath
                        ? 'text-blue-600 bg-blue-50 shadow-inner'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {/* Icon */}
                    <span className={`text-lg transition-transform duration-300 ${
                      isActivePath ? 'scale-110' : 'group-hover:scale-110'
                    }`}>
                      {item.icon}
                    </span>
                    
                    {/* Label */}
                    <span className="font-semibold">{item.label}</span>

                    {/* Active Indicator */}
                    {isActivePath && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-blue-600 rounded-full"></div>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Contact Button */}
            <div className="flex-shrink-0">
              <a 
                href="/contact"
                className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 overflow-hidden"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <span className="text-lg">💬</span>
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between py-3">
            {/* Mobile Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                EP
              </div>
              <span className="text-lg font-bold text-gray-800">
                Educator<span className="text-emerald-600">Portfolio</span>
              </span>
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-0 bg-blue-600' : '-translate-y-1.5'
                }`}></span>
                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 translate-y-0 bg-blue-600' : 'translate-y-1.5'
                }`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* ===== MOBILE SIDEBAR ===== */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        ></div>
      )}

      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-all duration-300 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-emerald-50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                EP
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">Menu</h2>
                <p className="text-sm text-gray-600">Navigate through my portfolio</p>
              </div>
            </div>
            <button 
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-white transition-all duration-300"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActivePath = item.href === '/' ? isActive('/') : 
                                   item.href.startsWith('/journey') ? pathname.startsWith('/journey') : 
                                   isActive(item.href);
                
                return (
                  <li key={item.href}>
                    <a 
                      href={item.href} 
                      onClick={closeMenu}
                      className={`flex items-center gap-4 p-4 rounded-xl text-base font-medium transition-all duration-300 ${
                        isActivePath
                          ? 'bg-gradient-to-r from-blue-50 to-emerald-50 text-blue-600 border-l-4 border-blue-600 shadow-sm' 
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-semibold">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="p-4 border-t border-gray-200">
            <a 
              href="/contact" 
              onClick={closeMenu}
              className="block w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-center py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 shadow-lg"
            >
              <span className="flex items-center justify-center gap-2">
                <span>💬</span>
                <span>Contact Me</span>
              </span>
            </a>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <p className="text-xs text-gray-600 text-center">
              Transforming Education • Inspiring Futures
            </p>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
}
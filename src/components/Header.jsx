"use client";

import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-center space-x-1 sm:space-x-2 py-4">
            <li>
              <a 
                href="/" 
                className={`relative px-3 py-2 text-sm font-medium text-gray-800 hover:text-blue-500 transition-colors duration-200 rounded-md ${
                  isActive('/') ? 'text-blue-500' : ''
                }`}
              >
                Home
                {isActive('/') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className={`relative px-3 py-2 text-sm font-medium text-gray-800 hover:text-blue-500 transition-colors duration-200 rounded-md ${
                  isActive('/about') ? 'text-blue-500' : ''
                }`}
              >
                About
                {isActive('/about') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="/journey/career" 
                className={`relative px-3 py-2 text-sm font-medium text-gray-800 hover:text-blue-500 transition-colors duration-200 rounded-md ${
                  pathname.startsWith('/journey') ? 'text-blue-500' : ''
                }`}
              >
                Career
                {pathname.startsWith('/journey') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="/achievements" 
                className={`relative px-3 py-2 text-sm font-medium text-gray-800 hover:text-blue-500 transition-colors duration-200 rounded-md ${
                  isActive('/achievements') ? 'text-blue-500' : ''
                }`}
              >
                Achievements
                {isActive('/achievements') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="/leadership-and-values" 
                className={`relative px-3 py-2 text-sm font-medium text-gray-800 hover:text-blue-500 transition-colors duration-200 rounded-md ${
                  isActive('/leadership-and-values') ? 'text-blue-500' : ''
                }`}
              >
                Leadership & Values
                {isActive('/leadership-and-values') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="/gallery" 
                className={`relative px-3 py-2 text-sm font-medium text-gray-800 hover:text-blue-500 transition-colors duration-200 rounded-md ${
                  isActive('/gallery') ? 'text-blue-500' : ''
                }`}
              >
                Gallery
                {isActive('/gallery') && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></span>
                )}
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="px-4 py-2 rounded-md text-sm font-medium bg-blue-500 text-white hover:bg-emerald-500 transition-colors duration-200 shadow-sm"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Navigation Header */}
          <div className="md:hidden flex items-center justify-between py-4">
            <div className="text-xl font-bold text-blue-500">Menu</div>
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-xl font-bold text-blue-500">Navigation</h2>
            <button 
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Sidebar Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActive('/') 
                      ? 'bg-blue-50 text-blue-500 border-l-4 border-blue-500' 
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActive('/about') 
                      ? 'bg-blue-50 text-blue-500 border-l-4 border-blue-500' 
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/journey/career" 
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    pathname.startsWith('/journey') 
                      ? 'bg-blue-50 text-blue-500 border-l-4 border-blue-500' 
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  Career
                </a>
              </li>
              <li>
                <a 
                  href="/achievements" 
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActive('/achievements') 
                      ? 'bg-blue-50 text-blue-500 border-l-4 border-blue-500' 
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  Achievements
                </a>
              </li>
              <li>
                <a 
                  href="/leadership-and-values" 
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActive('/leadership-and-values') 
                      ? 'bg-blue-50 text-blue-500 border-l-4 border-blue-500' 
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  Leadership & Values
                </a>
              </li>
              <li>
                <a 
                  href="/gallery" 
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                    isActive('/gallery') 
                      ? 'bg-blue-50 text-blue-500 border-l-4 border-blue-500' 
                      : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  Gallery
                </a>
              </li>
              <li className="pt-4">
                <a 
                  href="/contact" 
                  onClick={closeMenu}
                  className="block px-4 py-3 rounded-lg text-base font-medium bg-blue-500 text-white hover:bg-emerald-500 transition-colors duration-200 text-center shadow-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">© 2024 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
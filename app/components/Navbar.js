"use client"
import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: 'about' },
    { label: 'Services', href: 'services' },
    { label: 'Gallery', href: 'gallery' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-blue-800">
          N Gen Decorations
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}
              viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-2 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

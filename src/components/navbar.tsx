"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/services", label: "Coverages" },
  { href: "/coverages", label: "Who We Cover" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CI</span>
            </div>
            <div>
              <span className="font-heading font-bold text-slate-900 text-sm leading-tight block">
                Concessionaire
              </span>
              <span className="font-heading font-bold text-teal-500 text-sm leading-tight block">
                Insurance
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-teal-500 font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:844-967-5247"
              className="flex items-center space-x-1 text-slate-700 hover:text-teal-500 text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>844-967-5247</span>
            </a>
            <Link
              href="/quote"
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 hover:text-teal-500 font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 space-y-2">
            <a
              href="tel:844-967-5247"
              className="flex items-center space-x-2 text-slate-700 font-medium py-2"
            >
              <Phone className="w-4 h-4" />
              <span>844-967-5247</span>
            </a>
            <Link
              href="/quote"
              onClick={() => setIsOpen(false)}
              className="block bg-teal-500 text-white text-center py-3 rounded-lg font-semibold"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download, Mail, ExternalLink } from "lucide-react";

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: pathname === "/" ? "#projects" : "/#projects" },
    { name: "Design Systems", href: pathname === "/" ? "#design-systems" : "/#design-systems" },
    { name: "About", href: pathname === "/" ? "#about" : "/#about" },
    { name: "Resume", href: "/resume" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
        isScrolled
          ? "bg-bg-primary/80 border-b border-border-muted backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-geist font-bold text-xl tracking-tight text-text-primary">
            Godwin Udu<span className="text-accent-green">.</span>
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono border border-border-muted text-text-muted rounded-full group-hover:border-neutral-700 transition-colors">
            Product Designer
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-text-primary transition-colors ${
                  (pathname === link.href || (pathname === "/resume" && link.name === "Resume"))
                    ? "text-text-primary font-semibold"
                    : "text-text-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-border-muted" />

          {/* Socials & Actions */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:godwinudu01@gmail.com"
              aria-label="Email"
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="/GodwinUdu_Portfolio_ProductDesign.pdf"
              download
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-secondary border border-border-muted text-xs font-medium text-text-primary hover:bg-neutral-950 hover:border-neutral-700 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-accent-green" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="/GodwinUdu_Portfolio_ProductDesign.pdf"
            download
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-bg-secondary border border-border-muted text-[11px] font-medium text-text-primary hover:bg-neutral-950 transition-all"
          >
            <Download className="w-3 h-3 text-accent-green" />
            <span>PDF</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-secondary hover:text-text-primary transition-colors p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg-primary/95 border-b border-border-muted backdrop-blur-lg px-6 py-8 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-2 border-b border-neutral-900 ${
                  pathname === link.href ? "text-text-primary" : "text-text-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-neutral-900">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:godwinudu01@gmail.com"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      {/* Top bar */}
      <header className="sticky top-0 z-50 w-full glass-header border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

          {/* Wordmark (Left) */}
          <Link href="/" className="font-bold text-text-primary text-[19px] sm:text-[21px] tracking-tight hover:opacity-70 transition-opacity" onClick={close}>
            GodwinUdu
          </Link>

          {/* Desktop Center Nav Links */}
          <nav className="hidden sm:flex items-center gap-8 text-xs sm:text-sm font-medium text-text-secondary">
            <Link href="/#work" className="hover:text-text-primary transition-colors">
              Cases
            </Link>
            <Link href="/#skills" className="hover:text-text-primary transition-colors">
              Services
            </Link>
            <Link href="/#about" className="hover:text-text-primary transition-colors">
              About
            </Link>
          </nav>

          {/* Action Link (Right) */}
          <div className="hidden sm:flex items-center">
            <Link
              href="/#about"
              className="text-xs sm:text-sm font-medium text-text-primary hover:opacity-70 transition-opacity"
            >
              Inquire
            </Link>
          </div>

          {/* Hamburger (Mobile only) */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="sm:hidden flex flex-col gap-[5px] p-2 rounded-md hover:bg-bg-tertiary transition-colors group"
          >
            <span
              className={`block h-[1.5px] bg-text-primary transition-transform duration-300 origin-center ${
                open ? "w-5 rotate-45 translate-y-[3.5px]" : "w-5"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-text-primary transition-transform duration-300 ${
                open ? "w-5 -rotate-45 -translate-y-[3.5px]" : "w-4"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Drawer overlay (Mobile only) */}
      <nav className={`nav-drawer ${open ? "open" : "closed"} z-40 sm:hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex-grow flex flex-col pt-4 pb-10">
          {/* Close button (top-right, aligned with grid) */}
          <div className="flex justify-end h-14 items-center">
            <button
              onClick={close}
              aria-label="Close menu"
              className="p-2 -mr-2 rounded-md hover:bg-bg-tertiary transition-colors"
            >
              <X className="w-5 h-5 text-text-primary" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-1 mt-4 sm:mt-8">
            {[
              { label: "Cases", href: "/#work" },
              { label: "Services", href: "/#skills" },
              { label: "About", href: "/#about" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="text-4xl sm:text-5xl font-extrabold text-text-primary hover:text-text-secondary tracking-tight transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-auto pt-8 border-t border-border-muted flex flex-col gap-3">
            <Link
              href="/#about"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-text-primary text-bg-primary font-semibold text-sm hover:bg-black/80 transition-all"
            >
              Inquire
            </Link>
            <a
              href="https://www.linkedin.com/in/godwin-udu/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border-muted text-text-primary font-semibold text-sm hover:bg-bg-tertiary transition-all"
            >
              LinkedIn
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full glass-header border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

          {/* Wordmark */}
          <Link href="/" className="font-bold text-text-primary text-[21px] tracking-tight hover:opacity-70 transition-opacity" onClick={close}>
            Godwin Udu
          </Link>

          {/* Hamburger — two lines like Fabrica */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex flex-col gap-[5px] p-2 rounded-md hover:bg-bg-tertiary transition-colors group"
          >
            <span
              className={`block h-[1.5px] bg-text-primary transition-all duration-300 origin-center ${
                open ? "w-5 rotate-45 translate-y-[3.5px]" : "w-5"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-text-primary transition-all duration-300 ${
                open ? "w-5 -rotate-45 -translate-y-[3.5px]" : "w-4"
              }`}
            />
          </button>
        </div>
      </header>

      {/* ── Drawer overlay ──────────────────────────────────── */}
      <nav className={`nav-drawer ${open ? "open" : "closed"} z-40`}>
        <div className="max-w-7xl mx-auto px-6 w-full flex-grow flex flex-col pt-4 pb-10">
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

          {/* Nav links — large editorial style aligned with header logo */}
          <div className="flex flex-col gap-1 mt-4 sm:mt-8">
            {[
              { label: "Work", href: "/#work" },
              { label: "Skills", href: "/#skills" },
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
          <div className="mt-auto pt-8 border-t border-border-muted flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.linkedin.com/in/godwin-udu/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-text-primary text-bg-primary font-semibold text-sm hover:bg-black/80 transition-all"
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

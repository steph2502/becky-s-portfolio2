"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-line bg-cream/90 backdrop-blur-md">
      <nav className="wrap flex items-center justify-between py-[18px]">
        <a
          href="#home"
          className="font-serif text-[1.35rem] font-bold tracking-[0.03em] text-maroon"
        >
          BAL<span className="text-gold">.</span>
        </a>

        <ul className="hidden gap-[34px] min-[900px]:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navlink text-[0.92rem] text-ink transition-colors duration-200 hover:text-maroon"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden whitespace-nowrap rounded border border-maroon px-5 py-[9px] text-[0.86rem] text-maroon transition-colors duration-200 hover:bg-maroon hover:text-white min-[900px]:inline-block"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex flex-col gap-[5px] border-none bg-transparent p-1 min-[900px]:hidden"
        >
          <span className="block h-[2px] w-6 bg-ink" />
          <span className="block h-[2px] w-6 bg-ink" />
          <span className="block h-[2px] w-6 bg-ink" />
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="flex flex-col gap-[18px] border-b border-line bg-cream px-8 py-6 min-[900px]:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[0.95rem] text-ink hover:text-maroon"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block w-fit rounded border border-maroon px-5 py-[9px] text-[0.86rem] text-maroon hover:bg-maroon hover:text-white"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </header>
  );
}

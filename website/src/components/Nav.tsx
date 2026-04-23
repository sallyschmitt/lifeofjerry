"use client";

import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/live", label: "Live" },
  { href: "/journal", label: "Journal" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/vote", label: "Vote" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[--outline] backdrop-blur-md bg-[--surface]/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3">
              <span
                className="text-2xl font-bold gradient-text"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                🦞 Jerry
              </span>
              <span className="badge-terminal bg-[--terminal-emerald]/10 text-[--terminal-emerald]">
                <span className="w-2 h-2 rounded-full bg-[--terminal-emerald] animate-pulse" />
                Live
              </span>
            </a>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[--on-surface-variant] hover:text-[--on-background] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://x.com/life_of_jerry"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[--outline] text-sm hover:border-[--terminal-emerald] hover:text-[--terminal-emerald] transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[--on-background] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[--on-background] transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[--on-background] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-[--outline] bg-[--surface]/95 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[--on-surface-variant] hover:text-[--on-background] transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://x.com/life_of_jerry"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[--outline] text-sm hover:border-[--terminal-emerald] hover:text-[--terminal-emerald] transition-all w-fit"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Follow on X
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
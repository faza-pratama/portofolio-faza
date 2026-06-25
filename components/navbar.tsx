"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <nav
        className={clsx(
          "transition-all duration-300 mt-4 w-full max-w-6xl mx-4",
          scrolled ? "scale-[0.98]" : "scale-100"
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-between px-5 py-3 rounded-2xl",
            "border border-white/10 backdrop-blur-xl",
            "bg-black/40 shadow-lg shadow-black/20",
            "transition-all duration-300",
            scrolled && "bg-black/60 border-white/15"
          )}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500" />
            <span className="text-white font-semibold tracking-wide">
              Faza<span className="text-blue-500">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm text-zinc-300 relative">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group hover:text-white transition"
              >
                {item.name}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={clsx(
            "md:hidden overflow-hidden transition-all duration-300",
            open ? "max-h-60 mt-2" : "max-h-0"
          )}
        >
          <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-4 space-y-3 text-zinc-300">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
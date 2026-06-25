"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  // smooth scroll
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // detect active section
  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-5">
      <nav className="px-6 py-3 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl shadow-lg">

        <ul className="flex gap-6 text-sm">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScroll(link.id)}
                className={`relative transition ${
                  active === link.id
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}

                {/* active underline */}
                {active === link.id && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
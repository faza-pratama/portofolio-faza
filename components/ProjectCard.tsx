"use client";

import { useRef } from "react";

export default function ProjectCard({
  title,
  desc,
  tech,
}: {
  title: string;
  desc: string;
  tech: string[];
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / rect.height) * -18;
    const rotateY = ((x - centerX) / rect.width) * 18;

    // 3D tilt
    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;

    // glow follow cursor
    glow.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(34, 211, 238, 0.25),
        transparent 60%
      )
    `;
  };

  const reset = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    card.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;

    glow.style.background = "transparent";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ transformStyle: "preserve-3d" }}
      className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-transform duration-200 will-change-transform overflow-hidden"
    >
      {/* dynamic glow layer */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-all duration-200"
      />

      {/* animated shine layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
        <div className="absolute -top-20 left-[-100px] w-[200px] h-[200px] bg-white/10 rotate-12 blur-2xl animate-pulse" />
      </div>

      {/* content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        <p className="mt-2 text-sm text-zinc-400">{desc}</p>

        {/* tech */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* buttons */}
        <div className="mt-6 flex gap-3">
          <button className="px-3 py-2 text-xs rounded-lg bg-white text-black font-medium hover:scale-105 transition">
            Live
          </button>
          <button className="px-3 py-2 text-xs rounded-lg border border-white/20 text-white hover:border-white/40 transition">
            Code
          </button>
        </div>
      </div>
    </div>
  );
}
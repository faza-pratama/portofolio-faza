"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            About Me
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
            I’m a frontend developer passionate about building{" "}
            <span className="text-white">fast</span>,{" "}
            <span className="text-white">beautiful</span>, and{" "}
            <span className="text-white">interactive</span> web experiences.
            <br /><br />
            I specialize in <span className="text-cyan-400">Next.js</span>,{" "}
            <span className="text-cyan-400">React</span>, and modern UI animation
            using <span className="text-cyan-400">Framer Motion</span>.
          </p>

          {/* small stats */}
          <div className="mt-8 flex gap-6 text-sm text-zinc-400">
            <div>
              <p className="text-white text-xl font-semibold">1+</p>
              Years Experience
            </div>
            <div>
              <p className="text-white text-xl font-semibold">10+</p>
              Projects Built
            </div>
            <div>
              <p className="text-white text-xl font-semibold">100%</p>
              Focus on UI
            </div>
          </div>

        </motion.div>

        {/* RIGHT: CARD */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

            {/* glow inside card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

            <div className="relative">

              <p className="text-sm text-zinc-400">Currently working on</p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                Modern Portfolio & UI Systems
              </h3>

              <p className="mt-4 text-zinc-400 text-sm leading-relaxed">
                Building reusable UI components, smooth animations, and scalable
                frontend architecture using modern React ecosystem.
              </p>

              {/* tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Next.js", "Tailwind", "Framer Motion", "TypeScript"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
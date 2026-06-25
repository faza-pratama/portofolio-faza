"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

export default function Hero() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden" id="home">

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/25 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-20%] right-1/3 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full" />
      </div>

      <div className="text-center max-w-4xl">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-tight"
        >
          Build modern{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
            web experiences
          </span>{" "}
          that stand out
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed"
        >
          I’m <span className="text-white font-medium">Faza Pratama</span>, a frontend developer
          focused on performance, animations, and modern UI design using Next.js.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >

          {/* Primary button */}
          <a
            href="#projects"
            className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>

            {/* glow effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-white/10" />
          </a>

          {/* Secondary button */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/15 text-white hover:border-white/40 hover:bg-white/5 transition backdrop-blur-md"
          >
            Contact Me
          </a>

        </motion.div>

        {/* Small social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-sm text-zinc-500"
        >
          "Frontend Developer • Next.js Enthusiast"
        </motion.div>

      </div>
    </section>
  );
}
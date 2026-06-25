"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

export default function About() {
    const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">

      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto">

        {/* badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm"
        >
          ✦ About Me
        </motion.div>

        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          I build modern, fast,<br />
          and meaningful web experiences.
        </motion.h2>

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl"
        >
          I’m <span className="text-white font-medium">Faza Pratama</span>, a frontend developer
          focused on crafting clean UI, smooth animations, and scalable web architecture
          using modern tools like <span className="text-cyan-400">Next.js</span>.
        </motion.p>

        {/* highlights */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Focus",
              desc: "UI/UX & frontend architecture",
            },
            {
              title: "Passion",
              desc: "Smooth animations & interactions",
            },
            {
              title: "Goal",
              desc: "Building impactful digital products",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-white/20 transition"
            >
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
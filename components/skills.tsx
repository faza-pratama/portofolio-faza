"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript"],
    color: "from-cyan-500/20 to-blue-500/10",
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "CSS", "Sass", "Framer Motion"],
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    title: "Tools",
    skills: ["Git", "Figma", "Vercel", "VS Code"],
    color: "from-emerald-500/20 to-green-500/10",
  },
];

export default function Skills() {
const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          Skills & Tech Stack
        </motion.h2>

        <p className="mt-4 text-zinc-400">
          Technologies I use to build modern web experiences
        </p>

        {/* GRID */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">

          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >

              {/* card */}
              <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-white/20 transition">

                {/* glow background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-40 group-hover:opacity-60 transition`} />

                <div className="relative">

                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    {group.skills.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between text-sm text-zinc-300 hover:text-white transition"
                      >
                        <span>{skill}</span>

                        {/* small indicator dot */}
                        <span className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-white/60 transition" />
                      </motion.div>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
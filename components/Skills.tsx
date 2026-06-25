"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", level: 90 },
  { name: "React", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Framer Motion", level: 85 },
];

export default function Skills() {
    const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="skills" className="relative py-32 px-6">

      {/* glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-purple-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Skills
        </motion.h2>

        <p className="mt-4 text-zinc-400">
          Technologies I use to bring ideas into reality
        </p>

        {/* radar style list */}
        <div className="mt-12 space-y-6">

          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >

              <div className="flex justify-between text-sm text-zinc-300">
                <span className="group-hover:text-white transition">
                  {skill.name}
                </span>
                <span className="text-zinc-500">{skill.level}%</span>
              </div>

              {/* progress bar */}
              <div className="mt-2 h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                />
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
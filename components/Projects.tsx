"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern portfolio with glass UI + animations",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "E-Commerce UI",
    desc: "Responsive shopping UI design system",
    tech: ["React", "Tailwind"],
  },
  {
    title: "SaaS Landing Page",
    desc: "High conversion landing page design",
    tech: ["Next.js", "UI/UX"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white text-center"
        >
          Featured Projects
        </motion.h2>

        <p className="text-center text-zinc-400 mt-4">
          Hover to see 3D interaction effect
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
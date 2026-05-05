"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Welcome to my portfolio
          </p>

          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-cyan-300">{profile.name}</span>
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-slate-300">
            {profile.role}
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-400">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-slate-300">
            <a href={profile.github} className="hover:text-cyan-300">
              <span>GitHub</span>
            </a>
            <a href={profile.linkedin} className="hover:text-cyan-300">
              <span>LinkedIn</span>
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-cyan-300">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-cyan-300/60 shadow-2xl shadow-cyan-500/20 md:h-96 md:w-96">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
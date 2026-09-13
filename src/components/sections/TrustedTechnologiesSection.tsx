"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  Globe,
  Server,
  Cloud,
  Code2,
  Database,
  FileCode,
  Layout,
  Smartphone,
  BookOpen,
} from "lucide-react";

const TECH_ITEMS = [
  { name: "Python", icon: <Code2 className="w-5 h-5 text-blue-500 dark:text-blue-400" /> },
  { name: "JavaScript", icon: <FileCode className="w-5 h-5 text-amber-500 dark:text-amber-400" /> },
  { name: "React", icon: <Globe className="w-5 h-5 text-cyan-500 dark:text-cyan-400" /> },
  { name: "React Native", icon: <Smartphone className="w-5 h-5 text-sky-500 dark:text-sky-400" /> },
  { name: "Node.js", icon: <Server className="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> },
  { name: "Express.js", icon: <Server className="w-5 h-5 text-slate-600 dark:text-slate-300" /> },
  { name: "Google Gemini API", icon: <Sparkles className="w-5 h-5 text-blue-500 dark:text-blue-400" /> },
  { name: "SQL", icon: <Database className="w-5 h-5 text-indigo-500 dark:text-indigo-400" /> },
  { name: "HTML5 & CSS3", icon: <Layout className="w-5 h-5 text-orange-500 dark:text-orange-400" /> },
  { name: "Expo", icon: <Zap className="w-5 h-5 text-violet-500 dark:text-violet-400" /> },
  { name: "Vercel & Render", icon: <Cloud className="w-5 h-5 text-cyan-500 dark:text-cyan-400" /> },
  { name: "PDF Parsing / Multer", icon: <BookOpen className="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> },
];

export function TrustedTechnologiesSection() {
  return (
    <section className="py-12 relative z-10 border-y border-border bg-slate-100/40 dark:bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold">
          CORE TECH STACK & PLATFORMS
        </span>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-4 sm:gap-6 whitespace-nowrap"
        >
          {[...TECH_ITEMS, ...TECH_ITEMS].map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl glass-panel border border-border/80 hover:border-blue-500/50 hover:scale-105 transition-all shadow-sm"
            >
              {tech.icon}
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Brain,
  Flame,
  Sparkles,
  Zap,
  Box,
  Link2,
  Database,
  Layers,
  Globe,
  Code2,
  FileCode,
  Palette,
  Layout,
  Wand2,
  Server,
  Workflow,
  Network,
  Lock,
  GitBranch,
  GitPullRequest,
  Container,
  Cloud,
  Triangle,
  RefreshCw,
  Terminal,
  Send,
  BookOpen,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-5 h-5 text-blue-500" />,
  Flame: <Flame className="w-5 h-5 text-amber-500" />,
  Cpu: <Cpu className="w-5 h-5 text-sky-500" />,
  Sparkles: <Sparkles className="w-5 h-5 text-yellow-400" />,
  Zap: <Zap className="w-5 h-5 text-cyan-400" />,
  Box: <Box className="w-5 h-5 text-emerald-400" />,
  Link: <Link2 className="w-5 h-5 text-blue-400" />,
  Database: <Database className="w-5 h-5 text-indigo-400" />,
  Layers: <Layers className="w-5 h-5 text-sky-400" />,
  Atom: <Globe className="w-5 h-5 text-cyan-400 animate-spin-slow" />,
  Globe: <Globe className="w-5 h-5 text-blue-500" />,
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  FileCode: <FileCode className="w-5 h-5 text-amber-400" />,
  Palette: <Palette className="w-5 h-5 text-cyan-400" />,
  Layout: <Layout className="w-5 h-5 text-orange-500" />,
  Wand2: <Wand2 className="w-5 h-5 text-purple-400" />,
  Server: <Server className="w-5 h-5 text-emerald-500" />,
  Workflow: <Workflow className="w-5 h-5 text-slate-400" />,
  Network: <Network className="w-5 h-5 text-sky-400" />,
  Lock: <Lock className="w-5 h-5 text-red-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-orange-500" />,
  Github: <GitPullRequest className="w-5 h-5 text-slate-200" />,
  Container: <Container className="w-5 h-5 text-blue-400" />,
  Cloud: <Cloud className="w-5 h-5 text-sky-400" />,
  Triangle: <Triangle className="w-5 h-5 text-white" />,
  RefreshCw: <RefreshCw className="w-5 h-5 text-emerald-400" />,
  Terminal: <Terminal className="w-5 h-5 text-blue-400" />,
  Send: <Send className="w-5 h-5 text-orange-400" />,
  Figma: <Palette className="w-5 h-5 text-purple-400" />,
  BookOpen: <BookOpen className="w-5 h-5 text-blue-400" />,
};


export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Mastering tools across Artificial Intelligence, Web Systems, Cloud Infrastructure, and Developer Productivity.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === idx
                  ? "bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-[1.02]"
                  : "glass-panel border border-border/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-8 font-medium">
          {SKILL_CATEGORIES[activeCategory].description}
        </p>

        {/* Skills Cards Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES[activeCategory].skills.map((skill) => (
            <div
              key={skill.name}
              className="group glass-panel p-6 rounded-3xl relative border border-border/80 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-blue-500/10 dark:bg-slate-800/80 rounded-2xl group-hover:scale-110 transition-transform">
                    {ICON_MAP[skill.icon] || <Cpu className="w-5 h-5 text-blue-500" />}
                  </div>
                  <span className="text-xs font-bold font-mono text-blue-600 dark:text-sky-400">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Progress Level Bar */}
              <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

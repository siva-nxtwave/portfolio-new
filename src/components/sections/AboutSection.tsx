"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Target, Compass, Sparkles, BookOpen, Code, Award, CheckCircle2, Briefcase, GraduationCap } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10 bg-slate-100/40 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Operations Discipline Meets <span className="text-gradient">Software Engineering</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            Transitioning from procurement operations to software development with strong analytical acumen and hands-on full-stack development skills.
          </p>
        </div>

        {/* About Grid Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Column: Biography & Core Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-border/80"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 text-blue-500">
              <Sparkles className="w-32 h-32" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span>Professional Background</span>
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {PERSONAL_INFO.bio}
            </p>

            {/* Target Roles Bar */}
            <div className="mb-6 p-4 rounded-2xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20">
              <span className="block text-xs font-mono font-bold text-blue-600 dark:text-sky-400 uppercase tracking-wider mb-2">
                Target Roles
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 rounded-xl glass-panel text-xs font-semibold text-slate-800 dark:text-slate-200 border border-border"
                  >
                    ✦ {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border/60">
              {/* Mission Card */}
              <div className="flex gap-4">
                <div className="p-3 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-2xl h-fit">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">My Mission</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {PERSONAL_INFO.mission}
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div className="flex gap-4">
                <div className="p-3 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-2xl h-fit">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 mb-1">My Vision</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {PERSONAL_INFO.vision}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statistics & Core Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <div className="glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between border border-border/80 hover:border-blue-500/50 hover:shadow-lg transition-all">
              <div className="p-3 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-2xl w-fit mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Royal Enfield</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Procurement Trainee</span>
              </div>
            </div>

            <div className="glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between border border-border/80 hover:border-sky-500/50 hover:shadow-lg transition-all">
              <div className="p-3 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-2xl w-fit mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">B.Sc. Physics</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">H.H. The Rajah&apos;s College</span>
              </div>
            </div>

            <div className="glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between border border-border/80 hover:border-cyan-500/50 hover:shadow-lg transition-all">
              <div className="p-3 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-2xl w-fit mb-4">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Full-Stack</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">NxtWave Coursework</span>
              </div>
            </div>

            <div className="glass-panel p-5 sm:p-6 rounded-3xl flex flex-col justify-between border border-border/80 hover:border-emerald-500/50 hover:shadow-lg transition-all">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">Gemini + Mobile</span>
                <span className="block text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">AI & React Native Apps</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Additional Strengths Row */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-border/80">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            <span>Key Differentiators & Core Strengths</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PERSONAL_INFO.strengths.map((str, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/60 border border-border/50">
                <CheckCircle2 className="w-5 h-5 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {str}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

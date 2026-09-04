"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, GitPullRequest, Sparkles, Star } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="w-6 h-6 text-amber-400" />,
  GitPullRequest: <GitPullRequest className="w-6 h-6 text-blue-400" />,
  Award: <Award className="w-6 h-6 text-purple-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-cyan-400" />,
};

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>MILESTONES & RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Awards & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Full-stack web application deployments, mobile game development, and manufacturing operational excellence.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group glass-panel p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800/80 rounded-2xl group-hover:scale-110 transition-transform">
                    {ICON_MAP[item.icon] || <Star className="w-6 h-6 text-blue-400" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-sky-400 text-[10px] font-mono font-bold">
                    {item.metric}
                  </span>
                </div>

                <span className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                  {item.event}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-[10px] font-medium text-slate-500">
                <span>Verified Milestone</span>
                <Sparkles className="w-3 h-3 text-sky-400" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

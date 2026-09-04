"use client";

import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, GitFork, Code2, Flame } from "lucide-react";


const TOP_LANGUAGES = [
  { name: "JavaScript", percent: 42, color: "#f1e05a" },
  { name: "Python", percent: 32, color: "#3572A5" },
  { name: "HTML / CSS", percent: 16, color: "#e34c26" },
  { name: "SQL", percent: 10, color: "#e38c00" },
];

export function GithubSection() {
  // Generate mock GitHub heatmap matrix (52 weeks x 7 days)
  const weeks = Array.from({ length: 32 }, (_, w) =>
    Array.from({ length: 7 }, (_, d) => {
      const level = Math.floor(Math.random() * 5); // 0 to 4
      return level;
    })
  );

  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-blue-900/60";
      case 2:
        return "bg-blue-700";
      case 3:
        return "bg-sky-500";
      case 4:
        return "bg-cyan-400";
      default:
        return "bg-slate-200 dark:bg-slate-800/60";
    }
  };

  return (
    <section className="py-24 relative z-10 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & CODE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            GitHub <span className="text-gradient">Activity & Stats</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Continuous daily engineering commitment, open source contributions, and code repositories.
          </p>
        </div>

        {/* Heatmap & Stats Panel */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-8 border border-border">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-600/10 text-blue-500 rounded-2xl">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">1,248 Commits in 2026</h3>
                <p className="text-xs text-slate-500 font-mono">Longest streak: 42 days</p>
              </div>
            </div>

            <a
              href="https://github.com/karthikeyan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              <GitBranch className="w-4 h-4" />
              <span>@karthikeyan-dev</span>
            </a>
          </div>

          {/* GitHub Heatmap Grid Visualization */}
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-1.5 min-w-[700px] justify-center">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`w-3.5 h-3.5 rounded-sm transition-all hover:scale-125 ${getLevelColor(level)}`}
                      title={`Activity level: ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap Legend */}
          <div className="flex items-center justify-end gap-2 text-[10px] font-mono text-slate-400 pt-4 border-t border-border/40">
            <span>Less</span>
            <div className="w-2.5 h-2.5 rounded-sm bg-slate-200 dark:bg-slate-800/60" />
            <div className="w-2.5 h-2.5 rounded-sm bg-blue-900/60" />
            <div className="w-2.5 h-2.5 rounded-sm bg-blue-700" />
            <div className="w-2.5 h-2.5 rounded-sm bg-sky-500" />
            <div className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
            <span>More</span>
          </div>
        </div>

        {/* Top Languages breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {TOP_LANGUAGES.map((lang) => (
            <div key={lang.name} className="glass-panel p-5 rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">{lang.name}</span>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{lang.percent}%</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

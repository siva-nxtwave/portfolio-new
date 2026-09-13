"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from "lucide-react";
import { TIMELINE } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & EDUCATION</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Professional <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Procurement operations at Royal Enfield, rigorous B.Sc. Physics education, and structured full-stack engineering.
          </p>
        </div>

        {/* Timeline Items List */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-sky-400 to-cyan-500 transform -translate-x-1/2 opacity-30" />

          <div className="space-y-8 sm:space-y-12">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Node Marker */}
                  <div className="absolute left-3 sm:left-1/2 transform -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-background border-2 border-blue-500 flex items-center justify-center z-10 shadow-lg shadow-blue-500/30">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-500 animate-ping" />
                  </div>

                  {/* Timeline Card Container */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] ml-8 sm:ml-0">
                    <div className="glass-panel p-5 sm:p-8 rounded-3xl border border-border/80 hover:border-blue-500/50 hover:shadow-xl transition-all duration-300">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-sky-400 text-[10px] font-bold uppercase tracking-wider">
                          {item.type}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-blue-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      
                      <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300 font-medium mb-4">
                        <span className="text-blue-600 dark:text-sky-400 font-semibold">{item.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-slate-400" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Description Bullet points */}
                      <ul className="space-y-2 mb-6">
                        {item.description.map((desc, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Achievements */}
                      {item.achievements.length > 0 && (
                        <div className="pt-4 border-t border-border/60 mb-4">
                          <span className="block text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1">
                            <Award className="w-3 h-3 text-amber-500" /> Key Impact Highlights
                          </span>
                          <div className="space-y-1">
                            {item.achievements.map((ach, aIdx) => (
                              <p key={aIdx} className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                                ✦ {ach}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {item.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-[10px] text-slate-700 dark:text-slate-300 border border-border/40 font-mono"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

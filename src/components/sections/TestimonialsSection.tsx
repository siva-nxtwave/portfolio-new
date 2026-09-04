"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Client & Leader <span className="text-gradient">Feedback</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            What AI engineering leaders and VP executives say about working with Karthikeyan.
          </p>
        </div>

        {/* Testimonials Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="glass-panel p-8 rounded-3xl relative flex flex-col justify-between hover:border-blue-500/40 hover:shadow-xl transition-all"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-500/40 mb-4" />
                
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border/40">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white font-bold text-sm">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">{item.author}</h3>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

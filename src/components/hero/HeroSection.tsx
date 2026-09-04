"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, FileText, Send, Terminal, Bot, Cpu, Smartphone } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import { Hero3DCanvas } from "./Hero3DCanvas";

const TYPING_PHRASES = [
  "Software Developer & Full-Stack Engineer",
  "AI Application Builder (Google Gemini API)",
  "React, Node.js & Express.js Developer",
  "React Native Mobile App Creator",
  "Transitioning from Operations to Tech",
];

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                Open to Software Developer & Full-Stack Roles
              </span>
            </div>

            {/* Greeting & Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4">
              Hello, I&apos;m <br />
              <span className="text-gradient">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <p className="text-lg sm:text-2xl font-mono text-blue-500 dark:text-sky-400 font-semibold">
                &gt; {displayText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold glass-panel rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto text-slate-800 dark:text-slate-100"
              >
                <FileText className="w-4 h-4 text-blue-500" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-500 transition-colors w-full sm:w-auto"
              >
                <Send className="w-4 h-4" />
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Key Metric Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-border/60">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-sky-400">
                  {PERSONAL_INFO.stats.yearsLearning}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Hands-on Exp
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-sky-400">
                  {PERSONAL_INFO.stats.projectsCompleted}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Projects Built
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-sky-400">
                  {PERSONAL_INFO.stats.technologiesMastered}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Tech Skills
                </span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-sky-400 truncate">
                  {PERSONAL_INFO.stats.domainExperience}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Domain Ops
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Custom 3D & UI Illustration Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* 3D R3F Canvas Component */}
            <Hero3DCanvas />

            {/* Floating Glass Holographic UI Overlay Cards */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 glass-panel p-3.5 rounded-2xl flex items-center gap-3 border border-blue-500/30 shadow-xl hidden sm:flex"
            >
              <div className="p-2 bg-blue-600/20 text-blue-400 rounded-xl">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-800 dark:text-white">ResumeIQ AI</span>
                <span className="text-[10px] text-emerald-400 font-mono">Google Gemini API • Active</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 glass-panel p-3.5 rounded-2xl flex items-center gap-3 border border-sky-500/30 shadow-xl hidden sm:flex"
            >
              <div className="p-2 bg-sky-500/20 text-sky-400 rounded-xl">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-800 dark:text-white">Space Escape Runner</span>
                <span className="text-[10px] text-sky-400 font-mono">React Native + Expo • 60 FPS</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

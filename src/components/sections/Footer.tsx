"use client";

import React from "react";
import { Cpu, ArrowUp, Globe, Share2, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";


export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 py-12 border-t border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/10 text-blue-500 border border-blue-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white">
                KARTHIKEYAN A
              </span>
              <span className="block text-[10px] text-slate-400 font-mono">
                Software Developer & Full-Stack Engineer
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-500 font-semibold hover:underline"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl glass-panel hover:text-blue-500 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl glass-panel hover:text-blue-500 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-xl glass-panel hover:text-sky-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md shadow-blue-500/20"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/40 text-center text-[10px] text-slate-500 font-mono">
          © {new Date().getFullYear()} Karthikeyan A. All rights reserved. Built with Next.js, React, Tailwind CSS & Framer Motion.
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Sparkles } from "lucide-react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 90);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white"
      >
        <div className="relative flex items-center justify-center mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-full border-2 border-dashed border-blue-500/40 border-t-blue-400 flex items-center justify-center"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.9, 1.1, 0.9] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="p-3 bg-blue-600/20 rounded-2xl backdrop-blur-md border border-blue-400/40 text-blue-400"
            >
              <Cpu className="w-8 h-8" />
            </motion.div>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-2xl font-bold tracking-tight text-white mb-4">
          <span>KARTHIKEYAN A</span>
          <Sparkles className="w-5 h-5 text-sky-400 animate-pulse" />
        </div>

        <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-6">
          Initializing Software Developer Portfolio... {progress}%
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

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
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white px-4 text-center select-none overflow-hidden min-h-[100dvh]"
      >
        <div className="w-full max-w-sm mx-auto flex flex-col items-center justify-center text-center">
          {/* Animated Spinner & Icon */}
          <div className="relative flex items-center justify-center mb-6 sm:mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-dashed border-blue-500/40 border-t-blue-400 flex items-center justify-center"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/30 border border-blue-400/40 flex items-center justify-center"
              >
                <Image
                  src="/logo.png"
                  alt="Karthikeyan A"
                  width={56}
                  height={56}
                  priority
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Name & Sparkle */}
          <div className="flex items-center justify-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-white mb-3 text-center">
            <span>KARTHIKEYAN A</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 animate-pulse shrink-0" />
          </div>

          {/* Loading Subtitle */}
          <p className="text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-slate-400 font-mono mb-6 text-center max-w-[280px] sm:max-w-xs mx-auto leading-relaxed">
            Initializing Software Developer Portfolio... {progress}%
          </p>

          {/* Progress Bar Container */}
          <div className="w-56 sm:w-64 max-w-[80vw] h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50 mx-auto">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

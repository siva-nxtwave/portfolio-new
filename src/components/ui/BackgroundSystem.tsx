"use client";

import React, { useEffect, useRef } from "react";

export function BackgroundSystem() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animateSpotlight = () => {
      // Smooth lerp without React re-renders
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animateSpotlight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animateSpotlight);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" style={{ contain: "strict" }}>
      {/* Hardware-Accelerated Mouse Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute w-[500px] h-[500px] rounded-full blur-[90px] opacity-15 dark:opacity-25 bg-gradient-to-tr from-blue-600 via-sky-400 to-cyan-400"
        style={{ willChange: "transform", transform: "translate3d(-500px, -500px, 0)" }}
      />

      {/* Static Ambient Glow Orbs with Optimized Hardware Acceleration */}
      <div
        className="absolute top-[8%] left-[8%] w-[380px] h-[380px] rounded-full bg-blue-500/8 dark:bg-blue-600/10 blur-[80px]"
        style={{ willChange: "opacity" }}
      />
      <div
        className="absolute top-[45%] right-[6%] w-[420px] h-[420px] rounded-full bg-sky-500/8 dark:bg-sky-500/10 blur-[90px]"
        style={{ willChange: "opacity" }}
      />
      <div
        className="absolute bottom-[12%] left-[15%] w-[350px] h-[350px] rounded-full bg-cyan-500/8 dark:bg-cyan-500/10 blur-[80px]"
        style={{ willChange: "opacity" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20" />

      {/* Subtle Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-background/70 to-background" />
    </div>
  );
}

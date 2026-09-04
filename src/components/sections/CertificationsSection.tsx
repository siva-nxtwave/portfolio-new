"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ExternalLink, Calendar, KeyRound, Cpu } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";

export function CertificationsSection() {
  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Full-stack software development credentials, Google Gemini AI integration, and Physics degree.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="group glass-panel p-6 rounded-3xl relative flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Issuer Badge & Date Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-blue-600/10 text-blue-500 border border-blue-500/20 text-xs font-bold font-mono">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>{cert.badge}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.issueDate}</span>
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-500 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-medium">Issued by {cert.issuer}</p>

                {/* Credential ID */}
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 mb-6 flex items-center gap-2 font-mono text-[10px] text-slate-500">
                  <KeyRound className="w-3.5 h-3.5 text-blue-400" />
                  <span>ID: {cert.credentialId}</span>
                </div>

                {/* Topics Covered */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 rounded-md bg-blue-500/5 dark:bg-blue-500/10 text-[10px] text-blue-600 dark:text-sky-400 font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link Button */}
              <div className="pt-4 border-t border-border/40">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors shadow-md shadow-blue-500/20"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

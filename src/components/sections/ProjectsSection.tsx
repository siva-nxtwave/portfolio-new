"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  GitPullRequest,
  Search,
  Layers,
  Sparkles,
  CheckCircle2,
  X,
  ArrowRight,
} from "lucide-react";
import { PROJECTS, Project } from "@/lib/data";


export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "AI", "Mobile"];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = filter === "All" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-100/40 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Hands-on AI-powered applications, cloud deployments, and interactive mobile apps.
          </p>
        </div>

        {/* Search & Category Filtering Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "glass-panel border border-border/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-panel text-xs border border-border text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group glass-panel rounded-3xl overflow-hidden flex flex-col justify-between border border-border/80 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div>
                {/* Project Header Banner */}
                <div className="relative h-48 bg-gradient-to-br from-blue-900/50 via-slate-900 to-sky-950/50 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10px] font-bold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3 text-amber-400" /> Featured AI Project
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-slate-400 ml-auto">
                      {project.timeline}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics Badge Chips */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="p-2.5 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/20">
                        <span className="block text-xs font-extrabold text-blue-600 dark:text-sky-400">{m.value}</span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/90 text-[10px] font-medium text-slate-700 dark:text-slate-300 border border-border/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-border/40 mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-sky-400 hover:underline"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl glass-panel text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                      title="GitHub Repository"
                    >
                      <GitPullRequest className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-md shadow-blue-500/20"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Case Study Popup */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-background border border-border rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full glass-panel text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-blue-600 dark:text-sky-400 uppercase tracking-widest font-semibold">
                    {selectedProject.category} Case Study
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-slate-900 dark:text-white">{selectedProject.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">{selectedProject.subtitle}</p>

                <div className="space-y-6">
                  {/* Problem Statement */}
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" /> Problem Statement
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" /> AI Solution
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                  {/* Architecture */}
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-500" /> Technical Architecture
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.architecture.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Modal Action Footer */}
                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <div className="flex gap-2">
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-xs font-semibold text-slate-800 dark:text-slate-200 border border-border hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <GitPullRequest className="w-4 h-4" />
                          <span>GitHub Repo</span>
                        </a>
                      )}
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live App</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

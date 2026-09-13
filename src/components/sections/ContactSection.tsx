"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Copy,
  Send,
  Sparkles,
  Clock,
  Globe,
  Share2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const onSubmit = async (_data: ContactFormData) => {
    void _data;
    setIsSubmitting(true);
    // Simulate server delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmitted(true);

    // Trigger celebratory confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-blue-600 dark:text-sky-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            Have a software engineering opportunity, full-stack project, or collaboration inquiry? Drop a message!
          </p>
        </div>

        {/* Two-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Social Dock */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-5 sm:p-8 rounded-3xl space-y-6 border border-border/80">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Information</h3>

              {/* Email item with copy button */}
              <div className="p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-800/80 border border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 font-medium">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs font-semibold text-slate-900 dark:text-white truncate block hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl glass-panel border border-border/60 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300 shrink-0"
                  title="Copy email address"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item with copy button */}
              <div className="p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-800/80 border border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 font-medium">Phone Number</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs font-semibold text-slate-900 dark:text-white truncate block hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                    >
                      {PERSONAL_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-xl glass-panel border border-border/60 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300 shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-800/80 border border-border/50 flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono text-slate-500 dark:text-slate-400 font-medium">Base Location</span>
                  <span className="text-xs font-semibold text-slate-900 dark:text-white">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Availability status */}
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                <div className="p-2.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-mono text-emerald-600 dark:text-emerald-400 font-bold">Current Availability</span>
                  <span className="text-xs font-medium text-slate-800 dark:text-slate-200">Open for Software Developer & Full-Stack Roles</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-border/40">
                <span className="block text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3 font-semibold">
                  Online Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl glass-panel border border-border/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:scale-105 transition-all"
                    title="GitHub"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl glass-panel border border-border/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 hover:scale-105 transition-all"
                    title="LinkedIn"
                  >
                    <Share2 className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="p-3 rounded-2xl glass-panel border border-border/80 text-slate-700 dark:text-slate-300 hover:text-sky-500 hover:scale-105 transition-all"
                    title="Email Direct"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-5 sm:p-8 rounded-3xl relative border border-border/80">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span>Send a Direct Message</span>
                <Sparkles className="w-4 h-4 text-sky-400" />
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Thank you for reaching out. Karthikeyan A will respond to your message promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                        Your Name
                      </label>
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/70 text-xs border border-border text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
                      />
                      {errors.name && (
                        <span className="text-[10px] text-red-500 dark:text-red-400 font-mono mt-1 block">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/70 text-xs border border-border text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-500 dark:text-red-400 font-mono mt-1 block">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                      Subject
                    </label>
                    <input
                      {...register("subject")}
                      type="text"
                      placeholder="Software Developer Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/70 text-xs border border-border text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all"
                    />
                    {errors.subject && (
                      <span className="text-[10px] text-red-500 dark:text-red-400 font-mono mt-1 block">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Hi Karthikeyan, I saw your ResumeIQ AI project and would love to connect regarding an opportunity..."
                      className="w-full px-4 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/70 text-xs border border-border text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                    />
                    {errors.message && (
                      <span className="text-[10px] text-red-500 dark:text-red-400 font-mono mt-1 block">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

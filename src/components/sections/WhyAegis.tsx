"use client";

import React from "react";
import { 
  ShieldCheck, 
  Key, 
  MessageSquare, 
  Unlock, 
  Zap, 
  Check, 
  X, 
  Sparkles, 
  Users2,
  GitPullRequest
} from "lucide-react";
import { AegisShieldIcon } from "../ui/AegisShieldLogo";

export function WhyAegis() {
  const pillars = [
    {
      title: "Defense-Grade Aegis Security",
      desc: "Every repository undergoes strict SAST/DAST static analysis, OWASP Top 10 hardening, dependency vulnerability mitigation, and zero-trust authentication protocols.",
      icon: ShieldCheck,
      accent: "text-cyan-400",
      border: "border-cyan-500/30",
    },
    {
      title: "100% Full IP & Code Ownership",
      desc: "You own every single commit, design token, database schema, and deployment configuration from day one. Transferred directly to your organization GitHub without royalties.",
      icon: Key,
      accent: "text-blue-400",
      border: "border-blue-500/30",
    },
    {
      title: "Direct Engineer Access (Slack & Jira)",
      desc: "No middlemen account managers filtering requirements. You communicate directly with your dedicated Principal Engineer and Tech Lead in daily async standups.",
      icon: MessageSquare,
      accent: "text-indigo-400",
      border: "border-indigo-500/30",
    },
    {
      title: "Zero Vendor Lock-In",
      desc: "Built on battle-tested open-source ecosystems (Next.js, PostgreSQL, Docker, Kubernetes). Any competent engineering squad can take over or scale your codebase smoothly.",
      icon: Unlock,
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
    },
  ];

  const comparison = [
    { feature: "Code & Intellectual Property Ownership", aegis: "100% Client Owned via Git Transfer", others: "Held behind contracts or licensing fees" },
    { feature: "Security & Vulnerability Audits", aegis: "Continuous CI/CD automated OWASP scans", others: "Ignored or billed as an expensive add-on" },
    { feature: "Communication Channel", aegis: "Direct Slack / Discord with Senior Engineers", others: "Relayed via non-technical account managers" },
    { feature: "Architecture Standards", aegis: "Enterprise Microservices / Next.js Edge", others: "Bloated off-the-shelf templates & plugins" },
    { feature: "Post-Launch Warranty & Handover", aegis: "30-Day Zero-Bug Warranty + Video Walkthroughs", others: "Zero warranty without monthly retainer" },
  ];

  return (
    <section id="why-aegis" className="relative py-24 bg-[#050811] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE SMARTAEGIS ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Visionary Leaders <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Choose SmartAegis</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            In Greek mythology, the <strong className="text-cyan-300">Aegis</strong> represents the ultimate shield of protection and supreme craftsmanship. We build your digital products with the same impenetrable security and elite precision.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl bg-[#090f22] border ${pillar.border} hover:border-cyan-400/50 transition-all duration-300 group flex flex-col justify-between shadow-xl hover:-translate-y-1`}
              >
                <div>
                  <div className={`p-3 rounded-2xl bg-slate-900 border border-slate-800 ${pillar.accent} w-fit mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>PILLAR // 0{idx + 1}</span>
                  <span className="text-emerald-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Competitive Comparison Matrix */}
        <div className="rounded-3xl bg-[#070c1c] border border-cyan-500/20 p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-1">
                TRANSPARENCY BENCHMARK
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                How SmartAegis Compares to Traditional Options
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs text-cyan-300 font-semibold px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                SmartAegis Standard
              </span>
            </div>
          </div>

          <div className="divide-y divide-slate-800/80 text-xs sm:text-sm">
            {comparison.map((row, i) => (
              <div key={i} className="py-4.5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div className="md:col-span-4 font-bold text-slate-200">
                  {row.feature}
                </div>
                <div className="md:col-span-4 flex items-center gap-2 text-cyan-300 font-semibold p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{row.aegis}</span>
                </div>
                <div className="md:col-span-4 flex items-center gap-2 text-slate-400 p-2.5 rounded-xl bg-slate-900/30">
                  <X className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

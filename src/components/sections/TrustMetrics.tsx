"use client";

import React from "react";
import { 
  ShieldCheck, 
  Rocket, 
  Star, 
  Headphones, 
  Clock, 
  Lock, 
  Award,
  CheckCircle2
} from "lucide-react";

export function TrustMetrics() {
  const metrics = [
    {
      value: "99.9%",
      label: "Architecture Reliability",
      subtext: "Guaranteed SLA with zero single points of failure",
      icon: ShieldCheck,
      color: "from-cyan-400 to-blue-500",
      accent: "text-cyan-400",
      border: "border-cyan-500/20",
    },
    {
      value: "50+",
      label: "Enterprise Products Delivered",
      subtext: "From seed-stage MVPs to high-throughput scale",
      icon: Rocket,
      color: "from-blue-400 to-indigo-500",
      accent: "text-blue-400",
      border: "border-blue-500/20",
    },
    {
      value: "4.9 / 5",
      label: "Client Satisfaction Rating",
      subtext: "Verified Clutch & enterprise partner feedback",
      icon: Star,
      color: "from-amber-400 to-orange-500",
      accent: "text-amber-400",
      border: "border-amber-500/20",
    },
    {
      value: "24 / 7",
      label: "Cloud DevOps & Support",
      subtext: "Round-the-clock proactive monitoring & triage",
      icon: Headphones,
      color: "from-emerald-400 to-teal-500",
      accent: "text-emerald-400",
      border: "border-emerald-500/20",
    },
  ];

  return (
    <section className="relative py-12 bg-[#060a17]/90 border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative p-6 rounded-2xl bg-gradient-to-b from-[#0a1124] to-[#070c1b] border ${item.border} hover:border-cyan-400/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg`}
              >
                {/* Glow dot */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 ${item.accent} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 group-hover:text-cyan-400 transition-colors">
                    METRIC // 0{index + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-mono`}>
                    {item.value}
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Compliance & Trust Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>ISO 27001 & SOC 2 Type II Compliant Architecture Standards</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Non-Disclosure Agreement (NDA) Protected
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Transparent Sprint Velocity
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

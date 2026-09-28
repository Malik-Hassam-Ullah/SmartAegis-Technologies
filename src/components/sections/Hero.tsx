"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Server, 
  Lock, 
  Sparkles,
  Zap,
  Globe2,
  CheckCircle2
} from "lucide-react";
import { AegisShieldIcon } from "../ui/AegisShieldLogo";

export function Hero() {
  const technologies = [
    { name: "Next.js 16", tag: "Frontend / SSR" },
    { name: "React 19", tag: "UI Core" },
    { name: "TypeScript", tag: "Type Safety" },
    { name: "React Native", tag: "Mobile" },
    { name: "Flutter", tag: "Cross-Platform" },
    { name: "Node.js", tag: "Backend Runtime" },
    { name: "Python", tag: "AI / Microservices" },
    { name: "Go (Golang)", tag: "High-Throughput" },
    { name: "PostgreSQL", tag: "Relational DB" },
    { name: "Redis", tag: "In-Memory Cache" },
    { name: "AWS Cloud", tag: "DevOps / Infra" },
    { name: "Docker & K8s", tag: "Containers" },
    { name: "GraphQL", tag: "APIs" },
    { name: "Tailwind CSS", tag: "Styling" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/20 to-indigo-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Call To Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,210,255,0.15)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold text-cyan-300 tracking-wide uppercase">
                ⚡ High-Performance Digital Product Studio
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Engineering{" "}
              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                Mission-Critical
              </span>{" "}
              Software, Web & Mobile Applications.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We partner with visionary founders and enterprises to <span className="text-white font-medium">invent</span> custom software architectures, <span className="text-white font-medium">build</span> frictionless web & mobile platforms, and <span className="text-white font-medium">scale</span> digital products globally.
            </p>

            {/* Key Value Bullets */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>100% IP & Code Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Defense-Grade Architecture</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Agile 2-Week Sprints</span>
              </div>
            </div>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#estimator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-[0_0_30px_rgba(0,210,255,0.3)] hover:shadow-[0_0_40px_rgba(0,210,255,0.5)] transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-500/40 font-semibold text-sm transition-all duration-200 backdrop-blur-sm"
              >
                <span>Explore Case Studies</span>
              </a>
            </div>

            {/* Client Trust Indicator */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] font-bold text-white">US</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">UK</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-[10px] font-bold text-white">UAE</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-[10px] font-bold text-white">EU</span>
              </div>
              <p className="text-xs text-slate-400">
                Trusted by 50+ high-growth ventures & global enterprises
              </p>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase (3D Glass Tech Dashboard Card) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-indigo-600/20 rounded-2xl blur-xl opacity-75"></div>

              {/* Main 3D Tech Card */}
              <div className="relative rounded-2xl bg-[#090e1c]/90 border border-cyan-500/30 backdrop-blur-2xl p-6 shadow-2xl space-y-5">
                
                {/* Card Header: Terminal Control Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="text-[11px] font-mono text-slate-400 ml-2">aegis-core // v3.8 cluster</span>
                  </div>
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    ONLINE
                  </span>
                </div>

                {/* Shield Security Status Widget */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-cyan-500/20">
                  <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-400">
                    <AegisShieldIcon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">Defense-Grade Aegis Architecture</span>
                      <span className="text-[10px] font-mono text-cyan-400 font-bold">256-BIT AES</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">End-to-End Encrypted Microservices & Cloud Infrastructure</p>
                  </div>
                </div>

                {/* Key Metrics 3-Col Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <div className="flex items-center justify-center gap-1 text-cyan-400 mb-1">
                      <Activity className="w-3.5 h-3.5" />
                      <span className="text-xs font-mono font-bold">99.98%</span>
                    </div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Uptime SLA</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
                      <Zap className="w-3.5 h-3.5" />
                      <span className="text-xs font-mono font-bold">&lt; 12ms</span>
                    </div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">API Latency</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <div className="flex items-center justify-center gap-1 text-indigo-400 mb-1">
                      <Globe2 className="w-3.5 h-3.5" />
                      <span className="text-xs font-mono font-bold">Multi-Reg</span>
                    </div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Global Edge</span>
                  </div>
                </div>

                {/* Live Real-Time Throughput Graph Visual */}
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono">Cluster Throughput</span>
                    <span className="text-cyan-400 font-mono font-bold">142,800 req/sec</span>
                  </div>
                  {/* Simulated Audio/Throughput Bar Spectrum */}
                  <div className="flex items-end gap-1.5 h-12 pt-2">
                    {[35, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100, 80, 65, 90, 75, 85, 95, 70, 90].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-80 hover:opacity-100 transition-all"
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1">
                    <span>Region: us-east-1 / eu-west-1</span>
                    <span className="text-emerald-400">Zero Error Rate (0.00%)</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2 SUB-COMPONENT: Live Tech Marquee / Infinite Ticker */}
      <div className="mt-16 pt-8 pb-4 border-y border-cyan-500/10 bg-[#070b16]/60 backdrop-blur-md overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050811] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050811] to-transparent z-10 pointer-events-none"></div>

        <div className="flex items-center animate-marquee whitespace-nowrap gap-8">
          {[...technologies, ...technologies].map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 font-mono text-xs hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="font-semibold text-white">{tech.name}</span>
              <span className="text-[10px] text-slate-400">({tech.tag})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

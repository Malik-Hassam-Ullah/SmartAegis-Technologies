"use client";

import React, { useState } from "react";
import { 
  Compass, 
  Palette, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ShieldAlert,
  GitBranch,
  Terminal,
  Activity
} from "lucide-react";

export function Process() {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases = [
    {
      step: "01",
      brandWord: "INVENT",
      title: "Discovery & System Blueprinting",
      subtitle: "De-risking architectural hurdles before writing a single line of code",
      icon: Compass,
      accent: "text-cyan-400",
      border: "border-cyan-500/30",
      bgGradient: "from-cyan-950/30 to-blue-950/20",
      duration: "Weeks 1 – 2",
      description: "We dissect your business goals, data flow, scaling boundaries, and compliance constraints. Our architects formulate a comprehensive technical blueprint detailing database schemas, API specs, and cloud topology.",
      keyDeliverables: [
        "System Architecture Diagram & Data Modeling",
        "Technical Stack Decision Matrix (Next.js / Node / Cloud)",
        "Security, Auth & Threat Model Assessment",
        "Sprint Roadmap & Milestones with Velocity Estimates",
      ],
      terminalSnippet: `// INVENT: Architecture Blueprint Initialization
const blueprint = await aegis.blueprint.create({
  client: "EnterprisePartner",
  slaTarget: "99.98%",
  architecture: "DistributedEdgeMicroservices",
  securityCompliance: ["SOC2", "HIPAA", "ISO27001"]
});`,
    },
    {
      step: "02",
      brandWord: "DESIGN",
      title: "Design Systems & Interactive UX",
      subtitle: "Transforming complex flows into frictionless, elegant interfaces",
      icon: Palette,
      accent: "text-blue-400",
      border: "border-blue-500/30",
      bgGradient: "from-blue-950/30 to-indigo-950/20",
      duration: "Weeks 2 – 4",
      description: "Our UI/UX designers create a tailored Figma design system featuring atomic components, high-contrast dark modes, and micro-interactions. Every screen is vetted for frictionless user journeys and accessibility.",
      keyDeliverables: [
        "Figma Tokenized Component Library & Tokens",
        "Clickable Interactive Prototype (Mobile & Desktop)",
        "WCAG 2.1 AA Accessibility & Responsive Breakpoints",
        "Design Handoff Spec with Tailwind Tokens",
      ],
      terminalSnippet: `// DESIGN: Design System Token Sync
export const themeTokens = {
  canvas: "#050811",
  accents: { cyan: "#00D2FF", royalBlue: "#1D4ED8" },
  glass: "rgba(10, 15, 29, 0.75)",
  blurRadius: "16px"
};`,
    },
    {
      step: "03",
      brandWord: "BUILD",
      title: "Agile Sprints & Defense-Grade QA",
      subtitle: "Bi-weekly production-grade releases with test-driven discipline",
      icon: Code2,
      accent: "text-indigo-400",
      border: "border-indigo-500/30",
      bgGradient: "from-indigo-950/30 to-purple-950/20",
      duration: "Weeks 4 – 10",
      description: "Senior engineers execute in 2-week agile sprints. Every commit triggers automated unit and integration tests, static code analysis, and vulnerability scans. You receive continuous staging previews and direct Slack/Jira access.",
      keyDeliverables: [
        "Clean, Modular TypeScript Codebase with Strict Types",
        "End-to-End & Unit Testing Coverage (> 85%)",
        "OWASP Defense-Grade Penetration & Security Audits",
        "Bi-Weekly Staging Environment Deployments",
      ],
      terminalSnippet: `// BUILD: Test-Driven Agile Pipeline
$ npm test -- --coverage
✓ Test Suites: 48 passed, 48 total
✓ Tests:       312 passed, 312 total
✓ Code Coverage: 92.4% (Threshold: 85%)
✓ Security Scan: 0 Critical Vulnerabilities`,
    },
    {
      step: "04",
      brandWord: "SCALE",
      title: "Cloud DevOps & Global Scaling",
      subtitle: "Automated multi-region CI/CD with 24/7 telemetry monitoring",
      icon: Rocket,
      accent: "text-emerald-400",
      border: "border-emerald-500/30",
      bgGradient: "from-emerald-950/30 to-teal-950/20",
      duration: "Continuous / Post-Launch",
      description: "We deploy to globally distributed cloud infrastructure (AWS / GCP / Cloudflare Edge) with zero-downtime rolling updates. Our telemetry watches over uptime, latency anomalies, and automated autoscaling triggers.",
      keyDeliverables: [
        "Zero-Downtime CI/CD Pipelines (GitHub Actions / Terraform)",
        "24/7 Datadog / Prometheus Telemetry & Alerts",
        "Multi-Region Database Read Replicas & Edge Caching",
        "L1/L2 Incident Response & SLA Guarantees",
      ],
      terminalSnippet: `// SCALE: Infrastructure As Code & Telemetry
resource "aws_ecs_cluster" "aegis_production" {
  name = "aegis-production-cluster"
  capacity_providers = ["FARGATE_SPOT", "FARGATE"]
  telemetry = { autoscaling = true, multiRegion = true }
}`,
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-[#050811] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR PROVEN METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The 4-Phase <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Engineering Lifecycle</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Rooted in our core motto: <strong className="text-white">INVENT</strong> with rigor, <strong className="text-white">BUILD</strong> with precision, and <strong className="text-white">SCALE</strong> without ceiling.
          </p>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {phases.map((p, idx) => {
            const Icon = p.icon;
            const isActive = activePhase === idx;
            return (
              <button
                key={p.step}
                type="button"
                onClick={() => setActivePhase(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative ${
                  isActive
                    ? "bg-[#0c142c] border-cyan-400 shadow-[0_0_25px_rgba(0,210,255,0.2)]"
                    : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? "text-cyan-400" : "text-slate-500"}`}>
                    PHASE {p.step}
                  </span>
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                    isActive ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40" : "bg-slate-900 text-slate-500"
                  }`}>
                    {p.brandWord}
                  </span>
                </div>
                <h4 className={`text-sm font-bold ${isActive ? "text-white" : "text-slate-300"}`}>
                  {p.title.split("&")[0]}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        {(() => {
          const current = phases[activePhase];
          const CurrentIcon = current.icon;
          return (
            <div className={`p-6 sm:p-10 rounded-3xl bg-gradient-to-br ${current.bgGradient} bg-[#070d1e] border ${current.border} shadow-2xl relative`}>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left: Phase Overview & Deliverables */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700 text-cyan-400">
                      <CurrentIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                          PHASE {current.step} • {current.brandWord}
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">({current.duration})</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {current.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {current.description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                      Key Milestone Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {current.keyDeliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <a
                      href="#estimator"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-lg shadow-cyan-500/20"
                    >
                      <span>Inquire About This Phase</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-xs text-slate-400 font-mono">
                      Velocity: 98% On-Time Delivery
                    </span>
                  </div>

                </div>

                {/* Right: Technical Terminal / Code Snippet */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-[#03060f] border border-cyan-500/30 p-5 font-mono text-xs shadow-2xl space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <span className="text-slate-400 ml-2">aegis-lifecycle.ts</span>
                      </div>
                      <span className="text-cyan-400">PHASE // {current.step}</span>
                    </div>

                    <pre className="text-slate-300 overflow-x-auto text-[11px] leading-relaxed p-2">
                      <code>{current.terminalSnippet}</code>
                    </pre>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                      <span>Branch: main // verified</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Activity className="w-3 h-3" /> QA Passed
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          );
        })()}

      </div>
    </section>
  );
}

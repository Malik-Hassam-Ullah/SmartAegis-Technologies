"use client";

import React, { useState } from "react";
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Activity, 
  Check, 
  X,
  Zap,
  Globe
} from "lucide-react";

interface CaseStudy {
  id: string;
  category: "web" | "mobile" | "saas";
  title: string;
  subtitle: string;
  tagline: string;
  clientType: string;
  impactMetrics: { label: string; value: string }[];
  techStack: string[];
  description: string;
  breakdown: {
    problemStatement: string;
    architecturalSolution: string;
    keyResults: string[];
    techStackDetails: { layer: string; technology: string }[];
  };
}

export function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "mobile" | "saas">("all");
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  const projects: CaseStudy[] = [
    {
      id: "fintech-core",
      category: "web",
      title: "Fintech Core",
      subtitle: "High-Frequency Asset Trading & Portfolio Matrix",
      tagline: "Sub-15ms WebSocket Order Execution",
      clientType: "Institutional Trading Firm (New York / London)",
      impactMetrics: [
        { label: "Execution Latency", value: "< 14ms" },
        { label: "Daily Volume", value: "$420M+" },
        { label: "Uptime SLA", value: "99.99%" },
      ],
      techStack: ["Next.js 16", "TypeScript", "WebSockets", "Go (Golang)", "PostgreSQL", "Redis"],
      description: "A mission-critical institutional trading desk platform featuring sub-15ms streaming order book visualization, algorithmic rebalancing, and regulatory audit compliance.",
      breakdown: {
        problemStatement: "The client suffered from frequent socket disconnections and frame rendering bottlenecks during high-volatility financial events, resulting in delayed order fills.",
        architecturalSolution: "Engineered an edge-routed Next.js interface coupled with custom Go WebSocket microservices, implementing binary Protobuf serializations and a Redis L2 streaming cache.",
        keyResults: [
          "Reduced end-to-end rendering latency from 240ms to under 14ms",
          "Seamlessly handled 125,000 simultaneous order placements during market opening spikes",
          "Completed full SOC2 Type II audit compliance within 4 weeks of launch",
        ],
        techStackDetails: [
          { layer: "Frontend Engine", technology: "Next.js 16 App Router with Canvas-based Canvas Charting" },
          { layer: "Stream Gateway", technology: "Go Microservices with binary Protobuf & Gorilla WebSockets" },
          { layer: "Database & Cache", technology: "PostgreSQL with Citus distributed extension & Redis Cluster" },
          { layer: "Infrastructure", technology: "AWS EKS with automated Kubernetes HPA (Horizontal Pod Autoscaling)" },
        ],
      },
    },
    {
      id: "healthpulse-mobile",
      category: "mobile",
      title: "HealthPulse Mobile",
      subtitle: "HIPAA-Compliant Patient Telehealth & Vitals App",
      tagline: "Cross-Platform iOS & Android Healthcare",
      clientType: "Hospital Network (Texas Medical Center)",
      impactMetrics: [
        { label: "Active Patients", value: "180,000+" },
        { label: "HIPAA Score", value: "100% Audit" },
        { label: "App Store Rating", value: "4.9 / 5" },
      ],
      techStack: ["Flutter", "Dart", "Firebase", "WebRTC", "Node.js", "AES-256"],
      description: "An end-to-end encrypted mobile health ecosystem connecting over 180,000 patients with doctors for encrypted WebRTC consultations, prescription delivery, and biometric health tracking.",
      breakdown: {
        problemStatement: "Legacy native apps were fragmented between iOS and Android, causing double maintenance costs and severe delays in emergency video consultation connections.",
        architecturalSolution: "Architected a unified Flutter cross-platform mobile solution featuring offline encrypted SQLite synchronization, hardware biometric access, and peer-to-peer WebRTC video channels.",
        keyResults: [
          "Single codebase slashed mobile maintenance overhead by 52%",
          "Reduced video call connection latency from 4.2s to 600ms worldwide",
          "Zero data leak incidents across 1.4 million encrypted patient encounters",
        ],
        techStackDetails: [
          { layer: "Mobile Framework", technology: "Flutter 3.x with BLoC State Management" },
          { layer: "Telehealth Video", technology: "WebRTC with TURN/STUN edge fallback routing" },
          { layer: "Local Storage", technology: "SQLCipher with AES-256 database encryption" },
          { layer: "Backend APIs", technology: "Node.js Fastify with strict OAuth2 and JWT token rotation" },
        ],
      },
    },
    {
      id: "logistics-engine",
      category: "saas",
      title: "Logistics Engine",
      subtitle: "Autonomous Freight Dispatch & Fleet Telemetry SaaS",
      tagline: "Multi-Tenant Cloud Supply Chain Platform",
      clientType: "Transcontinental Freight Carrier (North America)",
      impactMetrics: [
        { label: "Fleet Monitored", value: "14,500 Trucks" },
        { label: "Fuel Reduction", value: "18.4%" },
        { label: "Dispatch Velocity", value: "4x Faster" },
      ],
      techStack: ["React 19", "Python / FastAPI", "Kafka", "PostgreSQL", "Docker", "AWS"],
      description: "A multi-tenant supply chain control tower providing real-time GPS telemetry, route optimization AI algorithms, and automated driver dispatch across 14,500 commercial vehicles.",
      breakdown: {
        problemStatement: "Manual dispatcher bottlenecks and uncoordinated route scheduling led to high deadhead miles, excess fuel expenditures, and late cargo deliveries.",
        architecturalSolution: "Built an event-driven SaaS architecture ingesting real-time vehicle IoT sensor streams through Apache Kafka, with a Python-based Dijkstra route optimization solver.",
        keyResults: [
          "Eliminated 1.2 million deadhead miles annually, saving $3.4M in carrier fuel",
          "Automated 86% of routine dispatch decisions with zero manual dispatcher intervention",
          "Sub-second alert propagation for engine diagnostic anomalies and maintenance alerts",
        ],
        techStackDetails: [
          { layer: "Operator Portal", technology: "React 19 with Mapbox GL and real-time deck.gl layers" },
          { layer: "Optimization Core", technology: "Python FastAPI with NumPy / SciPy route solvers" },
          { layer: "Telemetry Pipeline", technology: "Apache Kafka streaming 45,000 IoT pings / second" },
          { layer: "Cloud Hosting", technology: "AWS Graviton EC2 with automated Terraform orchestration" },
        ],
      },
    },
    {
      id: "aegis-guardian",
      category: "saas",
      title: "Aegis Cloud Guardian",
      subtitle: "AI-Powered Zero-Trust Cloud Infrastructure Platform",
      tagline: "Autonomous Threat Hunting & Cost Optimization",
      clientType: "Fintech & Healthcare Cloud Operations",
      impactMetrics: [
        { label: "Cloud Cost Saved", value: "32% Avg" },
        { label: "Threat Detection", value: "< 2.1 sec" },
        { label: "Zero-Day Blocks", value: "99.8%" },
      ],
      techStack: ["Next.js", "Python AI", "ClickHouse", "Terraform", "Kubernetes", "Tailwind"],
      description: "An intelligent cloud posture monitoring suite that scans multi-cloud Kubernetes clusters for anomalous egress, misconfigurations, and cloud resource over-provisioning.",
      breakdown: {
        problemStatement: "Modern microservice topologies sprawl across multi-cloud regions, creating hidden security vulnerabilities and massive cloud billing over-runs.",
        architecturalSolution: "Constructed an autonomous telemetry pipeline leveraging ClickHouse for petabyte-scale event analytics and fine-tuned AI models for predictive cost remediation.",
        keyResults: [
          "Surfaced and remediated over 4,500 security misconfigurations in under 30 days",
          "Average client cloud infrastructure bill lowered by 32% within 60 days of onboarding",
          "Recognized as a Premier Cloud Governance partner by leading enterprise CTOs",
        ],
        techStackDetails: [
          { layer: "Dashboard & Visuals", technology: "Next.js App Router with Tailwind CSS & Framer Motion" },
          { layer: "Analytics Engine", technology: "ClickHouse column-oriented database for 100M+ rows/sec" },
          { layer: "AI Remediator", technology: "Python LangChain & Llama 3 agents for automated PR fixes" },
          { layer: "IaC Automation", technology: "Terraform Cloud API integration with automatic pull request creation" },
        ],
      },
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 bg-[#060a17] border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PROVEN TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Case Studies &amp; <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Client Impact</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore how we have engineered mission-critical web applications, high-scale mobile platforms, and enterprise SaaS systems for our global clients.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 self-start md:self-auto">
            {(["all", "web", "mobile", "saas"] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                  activeFilter === filter
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {filter === "all" ? "All Systems" : filter === "web" ? "Web Apps" : filter === "mobile" ? "Mobile" : "SaaS & Cloud"}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#090f22] border border-slate-800/90 hover:border-cyan-500/40 p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 shadow-xl hover:shadow-[0_10px_35px_-10px_rgba(0,210,255,0.15)]"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 font-semibold">
                    {project.clientType}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> Production Deployed
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics 3-Col Bar */}
                <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 mb-6">
                  {project.impactMetrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm sm:text-base font-extrabold text-cyan-300 font-mono">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer: Tech Stack & Action */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-slate-400">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStudy(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                >
                  <span>View Technical Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Technical Breakdown Modal */}
      {activeStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#090f23] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveStudy(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1 mb-6">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block">
                TECHNICAL ARCHITECTURE BREAKDOWN // CASE STUDY
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeStudy.title}: {activeStudy.subtitle}
              </h3>
              <p className="text-xs text-slate-400">
                Partner: <strong className="text-slate-200">{activeStudy.clientType}</strong>
              </p>
            </div>

            {/* Problem & Architectural Solution */}
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/20">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">
                  The Core Engineering Challenge:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeStudy.breakdown.problemStatement}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
                <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                  SmartAegis Architectural Solution:
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {activeStudy.breakdown.architecturalSolution}
                </p>
              </div>
            </div>

            {/* Quantified Results */}
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Verified Production Benchmarks:
              </span>
              <div className="space-y-2">
                {activeStudy.breakdown.keyResults.map((result, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Stack Layers Table */}
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Deployed Technology Layers:
              </span>
              <div className="rounded-xl border border-slate-800 overflow-hidden divide-y divide-slate-800 text-xs">
                {activeStudy.breakdown.techStackDetails.map((layer, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-900/40">
                    <span className="font-mono text-slate-400">{layer.layer}</span>
                    <span className="font-semibold text-cyan-300 font-mono">{layer.technology}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400">Want similar architecture for your venture?</span>
              <a
                href="#estimator"
                onClick={() => setActiveStudy(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition"
              >
                <span>Scope Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

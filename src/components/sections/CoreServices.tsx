"use client";

import React, { useState } from "react";
import { 
  Globe, 
  Smartphone, 
  Layers, 
  Figma, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Code2, 
  Database, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  X,
  ExternalLink
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  colSpan: string;
  gradient: string;
  accent: string;
  borderHover: string;
  features: string[];
  techTags: string[];
  architectureOverview: {
    systemDesign: string;
    throughput: string;
    database: string;
    securityLevel: string;
    deliverables: string[];
  };
}

export function CoreServices() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: "web-apps",
      title: "Custom Web Architecture & Web Apps",
      tagline: "High-Throughput Next.js & React Platforms",
      description: "We engineer resilient, sub-second web applications tailored for extreme scalability. From headless e-commerce to real-time collaboration platforms, we optimize for core web vitals and edge performance.",
      icon: Globe,
      colSpan: "lg:col-span-7",
      gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
      accent: "text-cyan-400",
      borderHover: "hover:border-cyan-400/50",
      features: [
        "Edge-rendered Next.js (App Router) & React 19 architecture",
        "Headless CMS, GraphQL & RESTful micro-API integration",
        "Progressive Web Apps (PWA) with offline caching strategies",
        "Modular Micro-Frontends & component design systems",
      ],
      techTags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"],
      architectureOverview: {
        systemDesign: "Distributed Edge Computing with ISR (Incremental Static Regeneration)",
        throughput: "50,000+ Concurrent Requests per Node",
        database: "PostgreSQL with Supabase / Prisma ORM & Redis L2 Cache",
        securityLevel: "OWASP Top 10 Hardened, CSP Strict Headers & Automated DDoS mitigation",
        deliverables: [
          "Production-ready Next.js / React codebase",
          "Automated Vercel / AWS CI/CD pipelines",
          "Full TypeScript definition package",
          "Comprehensive API documentation (Swagger / OpenAPI)",
        ],
      },
    },
    {
      id: "mobile-apps",
      title: "Cross-Platform & Native Mobile Apps",
      tagline: "iOS & Android Engineered for 60 FPS",
      description: "Deliver unified, fluid experiences across iOS and Android with single codebase efficiency. We incorporate offline-first synchronization, real-time geolocation, and hardware biometric encryption.",
      icon: Smartphone,
      colSpan: "lg:col-span-5",
      gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
      accent: "text-blue-400",
      borderHover: "hover:border-blue-400/50",
      features: [
        "Flutter & React Native cross-platform excellence",
        "Offline-first synchronization with local SQLite/WatermelonDB",
        "Native device integration (Biometrics, GPS, Camera, NFC)",
        "App Store & Google Play automated release pipelines",
      ],
      techTags: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "WebSockets"],
      architectureOverview: {
        systemDesign: "Reactive MVVM / Clean Architecture with State Management",
        throughput: "60 FPS rendering on modern iOS and Android displays",
        database: "WatermelonDB / SQLite local sync with Cloud Event Log",
        securityLevel: "Keychain / Keystore hardware biometric encryption & SSL Pinning",
        deliverables: [
          "Signed iOS (.ipa) & Android (.apk / .aab) binaries",
          "Complete Flutter / React Native source code",
          "Fastlane CI/CD automated deployment script",
          "Push notification infrastructure setup",
        ],
      },
    },
    {
      id: "enterprise-saas",
      title: "Scalable Enterprise Software & SaaS",
      tagline: "Multi-Tenant Cloud Orchestration",
      description: "From custom ERP/CRM engines to multi-tenant SaaS platforms, we architect fault-tolerant distributed backends powered by Docker, Kubernetes, and automated microservices.",
      icon: Layers,
      colSpan: "lg:col-span-5",
      gradient: "from-indigo-500/10 via-purple-500/5 to-transparent",
      accent: "text-indigo-400",
      borderHover: "hover:border-indigo-400/50",
      features: [
        "Multi-tenant SaaS architecture with isolated schema partitioning",
        "High-performance microservices in Go, Node.js, and Python",
        "Event-driven messaging via Apache Kafka and RabbitMQ",
        "Stripe, Paddle & Lemon Squeezy subscription integration",
      ],
      techTags: ["Go", "Python", "AWS ECS / EKS", "Docker", "PostgreSQL", "Kafka"],
      architectureOverview: {
        systemDesign: "Event-Driven Microservices with gRPC & Kafka Backbone",
        throughput: "100,000+ Transactions per second with horizontal autoscaling",
        database: "Distributed CockroachDB / PostgreSQL with Read Replicas",
        securityLevel: "SOC2 Compliance, Role-Based Access Control (RBAC) & Audit Trails",
        deliverables: [
          "Dockerized container definitions & Helm charts",
          "Terraform infrastructure as code (IaC) templates",
          "Automated database migration suite",
          "Multi-tenant billing & webhook handling module",
        ],
      },
    },
    {
      id: "product-design",
      title: "Product Design & Rapid Prototyping",
      tagline: "Figma Design Systems to Production Code",
      description: "Bridge the gap between product vision and engineering reality. We produce high-fidelity interactive prototypes, UX design systems, and rapid proof-of-concepts ready for investor pitches.",
      icon: Figma,
      colSpan: "lg:col-span-7",
      gradient: "from-cyan-500/10 via-emerald-500/5 to-transparent",
      accent: "text-emerald-400",
      borderHover: "hover:border-emerald-400/50",
      features: [
        "Comprehensive Figma tokenized design systems",
        "UX flow auditing, user journey mapping & wireframing",
        "High-fidelity clickable interactive prototypes",
        "Direct Figma-to-React component token synchronization",
      ],
      techTags: ["Figma", "Design Tokens", "Storybook", "Framer", "UI/UX Audit"],
      architectureOverview: {
        systemDesign: "Atomic Design Methodology with Strict Token Mapping",
        throughput: "Rapid 10-day turnaround for MVP design systems",
        database: "Centralized Design Token Repository in JSON / Tailwind config",
        securityLevel: "WCAG 2.1 AA Accessibility Compliant Interfaces",
        deliverables: [
          "Comprehensive Figma design system with components & variants",
          "Interactive desktop & mobile clickable prototype",
          "Design handoff guide with exact CSS specifications",
          "Storybook documentation component catalog",
        ],
      },
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-[#050811] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ENGINEERING CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Full-Spectrum Digital <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Engineering Services</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From modern web apps and native mobile experiences to mission-critical SaaS architectures, our engineering team builds software that outpaces market standards.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`${service.colSpan} relative rounded-3xl p-8 bg-gradient-to-b ${service.gradient} bg-[#080d1d] border border-slate-800/90 ${service.borderHover} transition-all duration-300 group flex flex-col justify-between shadow-xl`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 ${service.accent} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">
                      {service.tagline}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className={`w-4 h-4 ${service.accent} shrink-0 mt-0.5`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Tech Tags & Interactive Modal Trigger */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.techTags.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Architecture Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#090f22] border border-cyan-500/30 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
                  TECHNICAL BLUEPRINT // ARCHITECTURE SPEC
                </span>
                <h3 className="text-xl font-bold text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 mb-6 leading-relaxed">
              {selectedService.description}
            </p>

            {/* Spec Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">System Design Strategy</span>
                <span className="text-xs font-semibold text-white">{selectedService.architectureOverview.systemDesign}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Target Throughput / Perf</span>
                <span className="text-xs font-semibold text-cyan-400 font-mono">{selectedService.architectureOverview.throughput}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Data Storage &amp; Cache</span>
                <span className="text-xs font-semibold text-white">{selectedService.architectureOverview.database}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">Security &amp; Compliance</span>
                <span className="text-xs font-semibold text-emerald-400">{selectedService.architectureOverview.securityLevel}</span>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                Standard Phase Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.architectureOverview.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-900/50 border border-slate-800">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Action CTA */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400">Ready to initiate technical discovery?</span>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 hover:scale-105 transition"
              >
                <span>Book Blueprint Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

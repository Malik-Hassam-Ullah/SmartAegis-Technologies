"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  ArrowRight,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle2,
  X,
  Sparkles,
  Layers,
} from "lucide-react";

interface CaseStudy {
  id: string;
  category: "all" | "web" | "mobile" | "saas" | "ai";
  categoryLabel: string;
  categoryColor: string;
  title: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
  gradient: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "fintech-core",
    category: "saas",
    categoryLabel: "Fintech & SaaS",
    categoryColor: "#06B6D4",
    title: "Fintech Core — High-Frequency Trading Desk",
    client: "Global Asset Management · NYC",
    summary:
      "Engineered an institutional-grade algorithmic execution and portfolio rebalancing terminal with sub-14ms order execution.",
    challenge:
      "Legacy websocket architecture caused delayed execution and slippage during market opening volatility bursts.",
    solution:
      "Built an edge-routed Next.js interface communicating with high-throughput Go microservices over binary Protobuf streams with Redis cluster caching.",
    metrics: [
      { label: "Order Latency", value: "<14ms" },
      { label: "Daily Volume", value: "$420M+" },
      { label: "Execution Uptime", value: "99.99%" },
    ],
    techStack: ["Next.js", "Go", "WebSockets", "Redis", "PostgreSQL", "AWS EKS"],
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(13,13,26,0.9))",
  },
  {
    id: "healthpulse",
    category: "mobile",
    categoryLabel: "Healthcare Mobile",
    categoryColor: "#10B981",
    title: "HealthPulse — Encrypted Telehealth Ecosystem",
    client: "Hospital Network · Texas Medical",
    summary:
      "Unified HIPAA-compliant iOS & Android mobile application with WebRTC peer-to-peer consultations and digital prescription handling.",
    challenge:
      "Separate iOS and Android codebases caused high maintenance overhead and 4-second video call lag for remote patients.",
    solution:
      "Re-engineered into a unified Flutter codebase with encrypted SQLite offline storage and low-latency WebRTC media streams.",
    metrics: [
      { label: "Active Patients", value: "180,000+" },
      { label: "Call Connect Time", value: "600ms" },
      { label: "HIPAA Audits", value: "100% Passed" },
    ],
    techStack: ["Flutter", "WebRTC", "Firebase", "Node.js", "SQLCipher"],
    gradient: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(13,13,26,0.9))",
  },
  {
    id: "logistics-engine",
    category: "web",
    categoryLabel: "Supply Chain & Web",
    categoryColor: "#3B82F6",
    title: "LogisticsEngine — Real-Time Fleet Telematics",
    client: "Logistics Enterprise · Singapore",
    summary:
      "Central command dashboard tracking 4,200+ freight vehicles simultaneously across Southeast Asia with dynamic AI route re-routing.",
    challenge:
      "Browser memory crashes when rendering thousands of simultaneous vehicle GPS markers on interactive mapping layers.",
    solution:
      "Implemented Mapbox GL with WebWorker geospatial clustering, streaming telemetry data via MQTT broker to a React dashboard.",
    metrics: [
      { label: "Tracked Vehicles", value: "4,200+" },
      { label: "Fuel Savings", value: "18.4%" },
      { label: "Map Frame Rate", value: "60 FPS" },
    ],
    techStack: ["React", "TypeScript", "Mapbox GL", "MQTT", "Python", "TimescaleDB"],
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(13,13,26,0.9))",
  },
  {
    id: "nexus-ai",
    category: "ai",
    categoryLabel: "AI & Automation",
    categoryColor: "#F59E0B",
    title: "NexusAI — Enterprise Customer Knowledge Agent",
    client: "B2B SaaS Provider · London",
    summary:
      "Autonomous RAG customer operations copilot trained on 50,000+ support tickets, technical docs, and CRM interactions.",
    challenge:
      "Customer support teams were overwhelmed with repetitive Tier-1 tickets, averaging a 6-hour response turnaround.",
    solution:
      "Constructed a private RAG pipeline with Pinecone vector embeddings and Anthropic Claude 3 models with hallucination guardrails.",
    metrics: [
      { label: "First Response", value: "<15 secs" },
      { label: "Deflected Tickets", value: "64%" },
      { label: "CSAT Score", value: "4.92 / 5.0" },
    ],
    techStack: ["Claude 3", "Pinecone", "FastAPI", "Python", "LangChain", "Docker"],
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(13,13,26,0.9))",
  },
];

export function CaseStudies() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile" | "saas" | "ai">("all");
  const [activeModalProject, setActiveModalProject] = useState<CaseStudy | null>(null);

  const filteredProjects =
    filter === "all" ? CASE_STUDIES : CASE_STUDIES.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      style={{
        background: "#06060E",
        padding: "6rem 0",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container-page">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3rem" }}>
          <div className="eyebrow">
            <Sparkles size={14} style={{ color: "#06B6D4" }} />
            FEATURED CASE STUDIES
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Engineering Impact That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22D3EE, #0891B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Speaks for Itself
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
            Explore how our senior engineering pods delivered mission-critical applications for global
            enterprises, venture-backed startups, and industry disruptors.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "3rem",
          }}
        >
          {[
            { id: "all", label: "All Works" },
            { id: "web", label: "Web Applications" },
            { id: "mobile", label: "Mobile Apps" },
            { id: "saas", label: "Cloud & SaaS" },
            { id: "ai", label: "AI Systems" },
          ].map((tab) => {
            const isSelected = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: 100,
                  fontSize: "0.845rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: isSelected ? "#06B6D4" : "rgba(255,255,255,0.03)",
                  color: isSelected ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                  border: isSelected ? "1px solid #06B6D4" : "1px solid rgba(255,255,255,0.07)",
                  transition: "all 0.2s ease",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              style={{
                background: "#0D0D1A",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
              onClick={() => setActiveModalProject(project)}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = project.categoryColor;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = `0 20px 45px rgba(0,0,0,0.6), 0 0 0 1px ${project.categoryColor}25`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(255,255,255,0.06)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Graphic Banner */}
              <div
                style={{
                  height: "170px",
                  background: project.gradient,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: 100,
                      background: "rgba(0,0,0,0.4)",
                      border: `1px solid ${project.categoryColor}40`,
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: project.categoryColor,
                    }}
                  >
                    {project.categoryLabel}
                  </span>
                  <ExternalLink size={16} style={{ color: "rgba(255,255,255,0.6)" }} />
                </div>

                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>{project.client}</div>
                  <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "#FFFFFF" }}>
                    {project.title.split("—")[0].trim()}
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {project.summary}
                  </p>

                  {/* 3 Metrics Row */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: 8,
                      padding: "1rem",
                      borderRadius: 12,
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {project.metrics.map((m, i) => (
                      <div key={i} style={{ textAlign: "center" }}>
                        <div
                          style={{
                            fontSize: "1.125rem",
                            fontWeight: 900,
                            color: project.categoryColor,
                            fontFamily: "ui-monospace, monospace",
                          }}
                        >
                          {m.value}
                        </div>
                        <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Chips & CTA */}
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.25rem" }}>
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: "0.75rem",
                          padding: "3px 8px",
                          borderRadius: 6,
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          color: "rgba(255,255,255,0.5)",
                          fontFamily: "ui-monospace, monospace",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "0.845rem",
                      fontWeight: 700,
                      color: project.categoryColor,
                    }}
                  >
                    <span>Read Architecture Breakdown</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setActiveModalProject(null)}
        >
          <div
            style={{
              background: "#0D0D1A",
              border: `1px solid ${activeModalProject.categoryColor}40`,
              borderRadius: 24,
              maxWidth: "680px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "2.5rem",
              position: "relative",
              boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>

            <span
              style={{
                padding: "4px 12px",
                borderRadius: 100,
                background: `${activeModalProject.categoryColor}15`,
                border: `1px solid ${activeModalProject.categoryColor}30`,
                fontSize: "0.6875rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: activeModalProject.categoryColor,
                display: "inline-block",
                marginBottom: "1rem",
              }}
            >
              {activeModalProject.categoryLabel} • {activeModalProject.client}
            </span>

            <h3 style={{ fontSize: "1.625rem", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
              {activeModalProject.title}
            </h3>

            {/* Metrics Callout */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 12,
                padding: "1.25rem",
                borderRadius: 14,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                marginBottom: "1.75rem",
              }}
            >
              {activeModalProject.metrics.map((m, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 900,
                      color: activeModalProject.categoryColor,
                      fontFamily: "ui-monospace, monospace",
                    }}
                  >
                    {m.value}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Problem & Solution */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.75rem" }}>
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: 12,
                  background: "rgba(239,68,68,0.06)",
                  border: "1px solid rgba(239,68,68,0.2)",
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#F87171", marginBottom: 4 }}>
                  The Challenge
                </div>
                <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                  {activeModalProject.challenge}
                </div>
              </div>

              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: 12,
                  background: "rgba(16,185,129,0.06)",
                  border: "1px solid rgba(16,185,129,0.2)",
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#34D399", marginBottom: 4 }}>
                  The SmartAegis Solution
                </div>
                <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                  {activeModalProject.solution}
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: "0.5rem" }}>
                Production Tech Stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {activeModalProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "0.8125rem",
                      color: "#CBD5E1",
                      fontFamily: "ui-monospace, monospace",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>
                Want similar performance for your stack?
              </div>
              <a
                href="#contact"
                className="btn-brand"
                onClick={() => setActiveModalProject(null)}
              >
                Discuss Similar Architecture
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

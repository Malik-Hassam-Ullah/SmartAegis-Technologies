"use client";

import React, { useState } from "react";
import { ArrowRight, X, TrendingUp, Clock, ShieldCheck } from "lucide-react";

const projects = [
  {
    id: "fintech",
    tag: "Fintech",
    tagColor: "#60A5FA",
    tagBg: "rgba(37,99,235,0.12)",
    title: "Fintech Core",
    subtitle: "High-frequency institutional trading platform",
    client: "Investment bank · NYC / London",
    image: "📈",
    gradient: "linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)",
    metrics: [
      { icon: Clock, label: "Latency", value: "< 14ms" },
      { icon: TrendingUp, label: "Daily volume", value: "$420M+" },
      { icon: ShieldCheck, label: "Uptime", value: "99.99%" },
    ],
    desc: "Mission-critical trading desk with sub-15ms order book, algo rebalancing, and SOC2 compliance.",
    challenge: "Legacy socket infra caused order fill failures during high-volatility events.",
    solution: "Edge-routed Next.js + Go microservices with Protobuf serialisation and Redis streaming cache.",
    results: [
      "Latency: 240ms → 14ms (94% reduction)",
      "Handles 125K simultaneous orders at open",
      "SOC2 Type II compliant within 4 weeks",
    ],
    tags: ["Next.js", "Go", "WebSockets", "Redis", "AWS EKS", "PostgreSQL"],
  },
  {
    id: "health",
    tag: "HealthTech",
    tagColor: "#86EFAC",
    tagBg: "rgba(34,197,94,0.1)",
    title: "HealthPulse",
    subtitle: "HIPAA-compliant telehealth mobile app",
    client: "Hospital network · Texas Medical Center",
    image: "🏥",
    gradient: "linear-gradient(135deg, #064E3B 0%, #0F172A 100%)",
    metrics: [
      { icon: TrendingUp, label: "Active patients", value: "180K+" },
      { icon: ShieldCheck, label: "HIPAA compliance", value: "100%" },
      { icon: Clock, label: "Call connect", value: "600ms" },
    ],
    desc: "End-to-end encrypted telehealth platform with WebRTC consultations, biometric auth, and prescription delivery.",
    challenge: "Fragmented iOS/Android codebases doubled maintenance costs with 4s video lag.",
    solution: "Unified Flutter + offline SQLCipher + peer-to-peer WebRTC video architecture.",
    results: [
      "Mobile maintenance cost reduced 52%",
      "Video connect time: 4.2s → 600ms",
      "Zero breaches across 1.4M patient encounters",
    ],
    tags: ["Flutter", "WebRTC", "Firebase", "Node.js", "SQLCipher"],
  },
  {
    id: "logistics",
    tag: "Logistics",
    tagColor: "#C4B5FD",
    tagBg: "rgba(139,92,246,0.1)",
    title: "Logistics Engine",
    subtitle: "Autonomous freight dispatch SaaS",
    client: "Transcontinental carrier · North America",
    image: "🚛",
    gradient: "linear-gradient(135deg, #2D1B69 0%, #0F172A 100%)",
    metrics: [
      { icon: TrendingUp, label: "Fleet size", value: "14,500" },
      { icon: Clock, label: "Fuel savings", value: "$3.4M/yr" },
      { icon: ShieldCheck, label: "Auto-dispatch", value: "86%" },
    ],
    desc: "Multi-tenant supply chain control tower with GPS telemetry, AI route optimization, and automated dispatch.",
    challenge: "Manual dispatch bottlenecks and uncoordinated routing caused excess fuel costs and late deliveries.",
    solution: "Kafka event-driven SaaS with Python Dijkstra solver ingesting real-time IoT streams.",
    results: [
      "1.2M deadhead miles/yr eliminated → $3.4M saved",
      "86% of dispatch decisions automated",
      "Sub-second anomaly alert propagation",
    ],
    tags: ["React", "Python FastAPI", "Kafka", "Docker", "PostgreSQL", "AWS"],
  },
];

const filters = ["All", "Fintech", "HealthTech", "Logistics"] as const;

export function CaseStudies() {
  const [filter, setFilter] = useState<string>("All");
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.tag === filter);

  return (
    <>
      <section id="portfolio" className="section" style={{ background: "#060A17", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">

          {/* Header */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 24,
              marginBottom: "3rem",
            }}
          >
            <div>
              <div className="section-header" style={{ marginBottom: 0 }}>
                <div className="eyebrow">Selected Work</div>
                <h2 className="h2" style={{ maxWidth: 540 }}>
                  Case Studies That{" "}
                  <span
                    style={{
                      background: "linear-gradient(135deg, #60A5FA, #818CF8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Prove the Work.
                  </span>
                </h2>
              </div>
            </div>

            {/* Filter pills */}
            <div
              style={{
                display: "flex",
                gap: 6,
                padding: 5,
                borderRadius: 12,
                background: "#0C1226",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  style={{
                    padding: "7px 16px",
                    borderRadius: 8,
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    background: filter === f ? "rgba(37,99,235,0.15)" : "transparent",
                    color: filter === f ? "#93C5FD" : "#64748B",
                    transition: "all 0.15s",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Project grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {visible.map((project) => (
              <div
                key={project.id}
                style={{
                  background: "#0D1630",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 20,
                  padding: "2rem 2.5rem",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: "2rem",
                  alignItems: "center",
                  transition: "all 0.25s",
                  cursor: "default",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(37,99,235,0.25)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
                }}
              >
                {/* Emoji / visual */}
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 16,
                    background: project.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    flexShrink: 0,
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {project.image}
                </div>

                {/* Info */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: 100,
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        color: project.tagColor,
                        background: project.tagBg,
                        border: `1px solid ${project.tagColor}30`,
                      }}
                    >
                      {project.tag}
                    </span>
                    <span style={{ fontSize: "0.8125rem", color: "#475569" }}>{project.client}</span>
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.02em", marginBottom: 4 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#64748B", marginBottom: 16 }}>{project.subtitle}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 24px" }}>
                    {project.metrics.map((m) => {
                      const Icon = m.icon;
                      return (
                        <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <Icon size={13} style={{ color: project.tagColor, flexShrink: 0 }} />
                          <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#F8FAFC", fontFamily: "ui-monospace, monospace", letterSpacing: "-0.02em" }}>
                            {m.value}
                          </span>
                          <span style={{ fontSize: "0.75rem", color: "#64748B" }}>{m.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => setSelected(project)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "10px 20px",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.03)",
                    color: "#94A3B8",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = `${project.tagColor}40`;
                    (e.currentTarget as HTMLButtonElement).style.color = project.tagColor;
                    (e.currentTarget as HTMLButtonElement).style.background = project.tagBg;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#94A3B8";
                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  View Breakdown
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            background: "rgba(0,0,0,0.82)",
            backdropFilter: "blur(16px)",
          }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 640,
              background: "#0D1630",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24,
              padding: "2.5rem",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#64748B",
              }}
            >
              <X size={15} />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "1.5rem" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: selected.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.75rem",
                }}
              >
                {selected.image}
              </div>
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.025em", marginBottom: 4 }}>
                  {selected.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#64748B" }}>{selected.client}</p>
              </div>
            </div>

            <p style={{ fontSize: "0.9375rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "1.75rem" }}>{selected.desc}</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: "1.75rem" }}>
              <div style={{ padding: 16, borderRadius: 12, background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(239,68,68,0.7)", marginBottom: 8 }}>
                  The challenge
                </p>
                <p style={{ fontSize: "0.875rem", color: "#94A3B8", lineHeight: 1.65 }}>{selected.challenge}</p>
              </div>
              <div style={{ padding: 16, borderRadius: 12, background: "rgba(37,99,235,0.05)", border: "1px solid rgba(37,99,235,0.15)" }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(96,165,250,0.8)", marginBottom: 8 }}>
                  Our solution
                </p>
                <p style={{ fontSize: "0.875rem", color: "#94A3B8", lineHeight: 1.65 }}>{selected.solution}</p>
              </div>
            </div>

            <p style={{ fontSize: "0.6875rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569", marginBottom: 12 }}>Results</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: "1.75rem" }}>
              {selected.results.map((r) => (
                <div key={r} style={{ display: "flex", gap: 10, fontSize: "0.9rem", color: "#CBD5E1" }}>
                  <span style={{ color: "#22C55E", flexShrink: 0 }}>✓</span>
                  {r}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.75rem" }}>
              {selected.tags.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>

            <a
              href="#contact"
              onClick={() => setSelected(null)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "1rem",
                borderRadius: 12,
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(37,99,235,0.4)",
              }}
            >
              Build Something Similar
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

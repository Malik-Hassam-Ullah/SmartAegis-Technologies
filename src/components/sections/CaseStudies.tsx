"use client";

import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";

const projects = [
  {
    id: "fintech-core",
    cat: "web",
    catLabel: "Web",
    title: "Fintech Core",
    subtitle: "High-frequency trading platform",
    client: "Institutional trading firm · New York / London",
    tags: ["Next.js", "Go", "WebSockets", "PostgreSQL", "Redis", "AWS EKS"],
    metrics: [
      { label: "Execution latency", value: "< 14ms" },
      { label: "Daily volume", value: "$420M+" },
      { label: "Uptime", value: "99.99%" },
    ],
    description:
      "A mission-critical institutional trading desk featuring sub-15ms streaming order book visualisation, algorithmic rebalancing, and regulatory audit compliance.",
    challenge: "Legacy socket infrastructure disconnected during high-volatility events, causing costly missed order fills and compliance violations.",
    solution: "Edge-routed Next.js frontend backed by Go microservices with binary Protobuf serialisation and Redis L2 streaming cache.",
    results: [
      "Reduced end-to-end latency from 240ms → 14ms",
      "Handled 125K simultaneous order placements at market open",
      "Full SOC2 Type II compliance within 4 weeks of launch",
    ],
  },
  {
    id: "healthpulse",
    cat: "mobile",
    catLabel: "Mobile",
    title: "HealthPulse",
    subtitle: "HIPAA-compliant telehealth app",
    client: "Hospital network · Texas Medical Center",
    tags: ["Flutter", "WebRTC", "Firebase", "Node.js", "SQLCipher"],
    metrics: [
      { label: "Active patients", value: "180K+" },
      { label: "HIPAA audit", value: "100%" },
      { label: "App Store", value: "4.9 ★" },
    ],
    description:
      "End-to-end encrypted mobile health platform connecting 180K+ patients with physicians for WebRTC consultations, prescription delivery, and biometric health tracking.",
    challenge: "Fragmented iOS and Android codebases caused double maintenance costs and 4-second video call connection delays.",
    solution: "Unified Flutter codebase with offline-first encrypted SQLite, hardware biometric access, and peer-to-peer WebRTC video channels.",
    results: [
      "Mobile maintenance overhead cut by 52%",
      "Video connection latency: 4.2s → 600ms",
      "Zero data breach incidents across 1.4M encounters",
    ],
  },
  {
    id: "logistics-engine",
    cat: "saas",
    catLabel: "SaaS",
    title: "Logistics Engine",
    subtitle: "Autonomous freight dispatch SaaS",
    client: "Transcontinental carrier · North America",
    tags: ["React", "Python FastAPI", "Kafka", "Docker", "PostgreSQL", "AWS"],
    metrics: [
      { label: "Fleet managed", value: "14,500" },
      { label: "Fuel reduction", value: "18.4%" },
      { label: "Dispatch speed", value: "4× faster" },
    ],
    description:
      "Multi-tenant supply chain control tower with real-time GPS telemetry, route optimisation AI, and automated driver dispatch across 14,500 commercial vehicles.",
    challenge: "Manual dispatcher bottlenecks and uncoordinated routing led to excess deadhead miles and chronic late deliveries.",
    solution: "Event-driven SaaS on Apache Kafka with a Python-based Dijkstra route solver ingesting real-time IoT streams.",
    results: [
      "Eliminated 1.2M deadhead miles/year, saving $3.4M in fuel",
      "Automated 86% of dispatch decisions autonomously",
      "Sub-second alert propagation for critical engine anomalies",
    ],
  },
];

const filters = ["All", "Web", "Mobile", "SaaS"] as const;

export function CaseStudies() {
  const [filter, setFilter] = useState<string>("All");
  const [selected, setSelected] = useState<(typeof projects)[0] | null>(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.catLabel === filter);

  return (
    <>
      <section id="portfolio" className="section-padding" style={{ background: "var(--surface-1)", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="container-lg">

          {/* Header + filter row */}
          <div style={{ display: "flex", flexWrap: "wrap" as const, alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 48 }}>
            <div>
              <p className="label" style={{ marginBottom: 16, display: "inline-flex" }}>Work</p>
              <h2 className="display-lg" style={{ color: "var(--text-primary)" }}>
                Selected case studies
              </h2>
            </div>

            {/* Filter pills */}
            <div
              style={{
                display: "flex",
                gap: 6,
                padding: 4,
                borderRadius: 12,
                background: "var(--canvas)",
                border: "1px solid var(--border-subtle)",
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
                    fontSize: 13,
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                    background: filter === f ? "rgba(34,211,238,0.1)" : "transparent",
                    color: filter === f ? "#22d3ee" : "var(--text-muted)",
                    transition: "all 0.15s",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Project cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border-subtle)", borderRadius: 16, overflow: "hidden" }}>
            {visible.map((project) => (
              <div
                key={project.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 32,
                  padding: "32px 40px",
                  background: "var(--surface-1)",
                  transition: "background 0.15s",
                  cursor: "default",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--surface-2)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--surface-1)")}
              >
                <div>
                  {/* Category & client */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <span className="tag">{project.catLabel}</span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{project.client}</span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.025em",
                      marginBottom: 6,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>
                    {project.subtitle}
                  </p>

                  {/* Metrics row */}
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px 32px" }}>
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <span style={{ fontSize: 16, fontWeight: 800, color: "var(--text-primary)", fontFamily: "ui-monospace, monospace", letterSpacing: "-0.02em" }}>
                          {m.value}
                        </span>
                        <span style={{ fontSize: 12, color: "var(--text-muted)", marginLeft: 6 }}>{m.label}</span>
                      </div>
                    ))}
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
                    padding: "9px 18px",
                    borderRadius: 8,
                    border: "1px solid var(--border-default)",
                    background: "transparent",
                    color: "var(--text-secondary)",
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: "pointer",
                    whiteSpace: "nowrap" as const,
                    transition: "all 0.15s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.4)";
                    (e.currentTarget as HTMLElement).style.color = "#22d3ee";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-default)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                >
                  Read breakdown
                  <ArrowRight size={13} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Detail modal */}
      {selected && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(12px)",
          }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 640,
              background: "var(--surface-2)",
              border: "1px solid var(--border-default)",
              borderRadius: 20,
              padding: "40px 40px 36px",
              maxHeight: "90vh",
              overflowY: "auto",
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
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-muted)",
              }}
            >
              <X size={15} />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span className="tag">{selected.catLabel}</span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{selected.client}</span>
            </div>
            <h3 style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: 6 }}>
              {selected.title}
            </h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 24 }}>{selected.subtitle}</p>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 28 }}>{selected.description}</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 28 }}>
              <div style={{ padding: 20, borderRadius: 12, background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(239,68,68,0.7)", marginBottom: 8 }}>The challenge</p>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>{selected.challenge}</p>
              </div>
              <div style={{ padding: 20, borderRadius: 12, background: "rgba(34,211,238,0.04)", border: "1px solid rgba(34,211,238,0.15)" }}>
                <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(34,211,238,0.7)", marginBottom: 8 }}>Our solution</p>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>{selected.solution}</p>
              </div>
            </div>

            <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.09em", color: "var(--text-muted)", marginBottom: 14 }}>Results</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {selected.results.map((r) => (
                <li key={r} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "var(--text-secondary)" }}>
                  <span style={{ color: "#34d399", marginTop: 2, flexShrink: 0 }}>✓</span>
                  {r}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 6, marginBottom: 28 }}>
              {selected.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>

            <a
              href="#contact"
              onClick={() => setSelected(null)}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Build something similar
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import React from "react";
import { Check, X } from "lucide-react";

const pillars = [
  {
    title: "You own everything.",
    desc: "All code, IP, architecture decisions, and database schemas are transferred to your organisation on day one. No licensing fees, no vendor lock-in, no strings attached.",
  },
  {
    title: "Direct engineer access.",
    desc: "No account managers filtering requirements. You communicate directly with the senior engineer leading your project, in Slack, with access to your Jira board.",
  },
  {
    title: "Security isn't an add-on.",
    desc: "OWASP hardening, automated SAST/DAST scanning, and dependency vulnerability monitoring run on every CI build — not billed as a separate engagement.",
  },
  {
    title: "Transparent, predictable pricing.",
    desc: "Fixed-scope milestones with clear deliverables. No surprise invoices, no change-order theatre. You see the cost of every scope change before it's approved.",
  },
  {
    title: "30-day zero-bug warranty.",
    desc: "Every production deployment comes with a 30-day warranty. We fix any regression caused by our code at no additional cost.",
  },
  {
    title: "Built on open-source fundamentals.",
    desc: "Next.js, PostgreSQL, Docker, Kubernetes — tools that any competent engineer can maintain. We deliberately avoid proprietary platforms that create dependency.",
  },
];

const comparison = [
  { feature: "IP & code ownership", aegis: "100% yours, day one", others: "Held behind contract clauses" },
  { feature: "Security audits", aegis: "Automated in every CI run", others: "Billed separately, done manually" },
  { feature: "Communication", aegis: "Direct access to senior engineers", others: "Relayed through non-technical PMs" },
  { feature: "Post-launch warranty", aegis: "30-day zero-bug guarantee", others: "Billed at hourly rate" },
  { feature: "Infrastructure", aegis: "Open-source, standards-based", others: "Proprietary lock-in platforms" },
];

export function WhyAegis() {
  return (
    <section id="why-aegis" className="section-padding" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container-lg">

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <p className="label" style={{ marginBottom: 20, display: "inline-flex" }}>Why SmartAegis</p>
            <h2 className="display-lg" style={{ color: "var(--text-primary)", marginBottom: 20 }}>
              We work like your best internal team.
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7 }}>
              In Greek mythology, the Aegis was the ultimate shield — impenetrable, forged by master craftsmen. We apply the same standard to every codebase we touch.
            </p>
          </div>

          {/* 6 pillar mini-grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {pillars.map((p) => (
              <div key={p.title}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "rgba(34,211,238,0.08)",
                    border: "1px solid rgba(34,211,238,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 12,
                  }}
                >
                  <Check size={14} style={{ color: "#22d3ee" }} />
                </div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>{p.title}</h4>
                <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div style={{ marginTop: 72 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
              marginBottom: 24,
            }}
          >
            How we compare
          </p>

          <div style={{ border: "1px solid var(--border-subtle)", borderRadius: 16, overflow: "hidden" }}>
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1.5fr 1.5fr",
                padding: "14px 24px",
                borderBottom: "1px solid var(--border-subtle)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Feature</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.08em" }}>SmartAegis</span>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Typical agency</span>
            </div>

            {comparison.map((row, i) => (
              <div
                key={row.feature}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1.5fr 1.5fr",
                  padding: "16px 24px",
                  borderBottom: i < comparison.length - 1 ? "1px solid var(--border-subtle)" : "none",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 14, color: "var(--text-secondary)" }}>{row.feature}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Check size={14} style={{ color: "#34d399", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "var(--text-primary)", fontWeight: 500 }}>{row.aegis}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <X size={14} style={{ color: "rgba(239,68,68,0.6)", flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";

const metrics = [
  {
    value: "99.9%",
    label: "Uptime SLA",
    desc: "Guaranteed availability across every production workload we operate.",
  },
  {
    value: "50+",
    label: "Products shipped",
    desc: "Delivered for startups, mid-market firms, and global enterprises.",
  },
  {
    value: "4.9 / 5",
    label: "Client satisfaction",
    desc: "Across verified Clutch, Upwork, and direct enterprise engagements.",
  },
  {
    value: "< 4 hr",
    label: "Incident response",
    desc: "24/7 cloud telemetry with automated alerting and on-call SRE cover.",
  },
];

export function TrustMetrics() {
  return (
    <section className="section-padding" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="container-lg">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 16,
            }}
          >
            Proven at scale
          </p>
          <h2 className="display-md" style={{ color: "var(--text-primary)", maxWidth: 560, margin: "0 auto" }}>
            Numbers that reflect the work, not the pitch.
          </h2>
        </div>

        {/* 4-col grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 1,
            background: "var(--border-subtle)",
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid var(--border-subtle)",
          }}
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              style={{
                padding: "40px 32px",
                background: "var(--surface-1)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--surface-2)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--surface-1)")}
            >
              <div
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.75rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--text-primary)",
                  fontFamily: "ui-monospace, monospace",
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: 8,
                }}
              >
                {m.label}
              </div>
              <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Logos placeholder strip */}
        <div style={{ marginTop: 56, textAlign: "center" }}>
          <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 24, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Trusted by teams at
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px 32px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {["Fintech Core", "HealthPulse", "Logistics Engine", "Aegis Guardian", "RetailOS", "PayTrack"].map((co) => (
              <span
                key={co}
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  letterSpacing: "0.05em",
                  opacity: 0.6,
                }}
              >
                {co}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import {
  Lock,
  Users,
  ShieldCheck,
  DollarSign,
  Sparkles,
  Layers,
  Check,
  X,
  ArrowRight,
} from "lucide-react";

const PILLARS = [
  {
    icon: Lock,
    accent: "#E10600",
    title: "100% IP & Codebase Ownership",
    desc: "Every line of code, Docker container, database migration, and design file is completely yours from day one. Zero hidden royalties or licensing traps.",
  },
  {
    icon: Users,
    accent: "#FF4D49",
    title: "Senior Engineers, Direct Access",
    desc: "You collaborate directly in Slack/Discord with senior architects who write the code. No non-technical project managers game of telephone.",
  },
  {
    icon: ShieldCheck,
    accent: "#FFC533",
    title: "Defense-Grade Security Built In",
    desc: "Automated SAST/DAST vulnerability scanning, OWASP Top 10 hardening, and TLS 1.3 standards built into every pull request by default.",
  },
  {
    icon: DollarSign,
    accent: "#E10600",
    title: "Fixed Milestone Pricing",
    desc: "Crystal-clear milestone deliverables with no surprise bills. Every scope modification is estimated and explicitly approved in advance.",
  },
  {
    icon: Sparkles,
    accent: "#FF4D49",
    title: "60-Day Zero-Bug Warranty",
    desc: "We stand behind our craftsmanship. Any bugs or regressions identified within 60 days of production launch are patched with zero billable hours.",
  },
  {
    icon: Layers,
    accent: "#FFC533",
    title: "Zero Vendor Lock-In",
    desc: "We build exclusively on industry-standard open-source stacks (Next.js, Flutter, Go, PostgreSQL, Docker) that any competent engineer can maintain.",
  },
];

const COMPARISONS = [
  { feature: "Code & Intellectual Property Ownership", aegis: "100% Transferred from Day 1", others: "Retained / exit fee clauses" },
  { feature: "Engineer Seniority Level", aegis: "Senior Specialists Only (5+ yrs)", others: "Junior devs managed by PMs" },
  { feature: "Communication Channels", aegis: "Direct Slack channel with Tech Lead", others: "Ticket portals & email delays" },
  { feature: "Security & Penetration Testing", aegis: "Included in CI/CD pipeline", others: "Expensive optional add-on" },
  { feature: "Post-Launch Warranty", aegis: "60-Day Full Bug Warranty", others: "Billed at full hourly rate" },
  { feature: "Pricing Structure", aegis: "Milestone-fixed with scope guarantee", others: "Open-ended time & materials" },
];

export function WhyAegis() {
  return (
    <section
      id="why-aegis"
      style={{
        background: "#0B0B0E",
        padding: "6rem 0",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-page">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem" }}>
          <div className="eyebrow">
            <Sparkles size={14} style={{ color: "#E10600" }} />
            THE SMARTAEGIS ADVANTAGE
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
            Why Industry Leaders Choose{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFFFFF 20%, #FF4D49 60%, #E10600 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SmartAegis Technologies
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
            In Greek mythology, the Aegis was the impenetrable shield of the gods. We embody that standard:
            uncompromising engineering rigor, complete transparency, and flawless execution.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
            marginBottom: "4.5rem",
          }}
        >
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                style={{
                  background: "#111116",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 20,
                  padding: "2rem",
                  transition: "all 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.borderColor = p.accent;
                  target.style.transform = "translateY(-4px)";
                  target.style.boxShadow = `0 16px 36px rgba(0,0,0,0.5), 0 0 0 1px ${p.accent}20`;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.borderColor = "rgba(255,255,255,0.06)";
                  target.style.transform = "translateY(0)";
                  target.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${p.accent}15`,
                    border: `1px solid ${p.accent}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Icon size={24} style={{ color: p.accent }} />
                </div>
                <h3 style={{ fontSize: "1.1875rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5rem" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Agency Comparison Table */}
        <div
          style={{
            background: "#111116",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24,
            padding: "2.5rem",
            boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.375rem", fontWeight: 800, color: "#FFFFFF", marginBottom: 6 }}>
              SmartAegis vs. Traditional Software Agencies
            </h3>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
              See how our engineering-first partnership compares to old-school outsourced vendors.
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                  <th style={{ padding: "1rem 1.25rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Service Criterion
                  </th>
                  <th style={{ padding: "1rem 1.25rem", fontSize: "0.8125rem", color: "#E10600", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 800 }}>
                    SmartAegis Technologies
                  </th>
                  <th style={{ padding: "1rem 1.25rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    Traditional IT Firms
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISONS.map((row, idx) => (
                  <tr
                    key={row.feature}
                    style={{
                      borderBottom: idx < COMPARISONS.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    }}
                  >
                    <td style={{ padding: "1.125rem 1.25rem", fontSize: "0.875rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: "1.125rem 1.25rem", fontSize: "0.875rem", fontWeight: 700, color: "#FF4D49" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(225,6,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Check size={14} style={{ color: "#E10600" }} />
                        </div>
                        {row.aegis}
                      </div>
                    </td>
                    <td style={{ padding: "1.125rem 1.25rem", fontSize: "0.845rem", color: "rgba(255,255,255,0.4)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <X size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
                        </div>
                        {row.others}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

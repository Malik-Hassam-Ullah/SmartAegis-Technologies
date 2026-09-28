"use client";

import React from "react";
import { CheckCircle2, XCircle, Sparkles, Lock, MessageSquare, Wrench, DollarSign, Globe } from "lucide-react";

const pillars = [
  { icon: Lock, iconColor: "#60A5FA", iconBg: "rgba(37,99,235,0.12)", title: "100% IP Ownership", desc: "All code, assets, and infrastructure are yours from day one. No licensing, no lock-in, no vendor dependency." },
  { icon: MessageSquare, iconColor: "#A78BFA", iconBg: "rgba(139,92,246,0.12)", title: "Direct Engineer Access", desc: "You communicate directly with the senior engineer building your product. No account managers in the middle." },
  { icon: Wrench, iconColor: "#86EFAC", iconBg: "rgba(34,197,94,0.1)", title: "Security Is Standard", desc: "OWASP hardening, SAST/DAST scanning, and dependency monitoring run on every single CI build — at no extra cost." },
  { icon: DollarSign, iconColor: "#FCA5A5", iconBg: "rgba(239,68,68,0.1)", title: "Transparent Pricing", desc: "Fixed-scope milestones. No surprise invoices, no change-order theatre. Every scope change is costed before approval." },
  { icon: Sparkles, iconColor: "#FCD34D", iconBg: "rgba(245,158,11,0.1)", title: "30-Day Bug Warranty", desc: "Every delivery comes with a 30-day zero-bug warranty. We fix any regression from our code at absolutely no cost." },
  { icon: Globe, iconColor: "#67E8F9", iconBg: "rgba(6,182,212,0.1)", title: "Open-Source Foundation", desc: "Next.js, PostgreSQL, Docker, Kubernetes — standards-based tools any engineer can maintain. No proprietary trap." },
];

const comparison = [
  { feature: "Source code & IP ownership", aegis: "100% transferred, day one", others: "Retained in vendor contract clauses" },
  { feature: "Security auditing", aegis: "Automated in every CI pipeline", others: "Separate billable engagement" },
  { feature: "Communication model", aegis: "Direct Slack with lead engineer", others: "Filtered through non-technical PM" },
  { feature: "Post-launch support", aegis: "30-day zero-bug warranty", others: "Charged at hourly support rate" },
  { feature: "Infrastructure platform", aegis: "Open-source, zero lock-in", others: "Proprietary platforms, exit costs" },
  { feature: "Pricing transparency", aegis: "Fixed-scope, no surprises", others: "Time & materials, change orders" },
];

export function WhyAegis() {
  return (
    <section id="why-aegis" className="section" style={{ background: "#070B19", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container">

        {/* Header */}
        <div className="section-header center">
          <div className="eyebrow">Why SmartAegis</div>
          <h2 className="h2" style={{ marginBottom: "1.25rem", maxWidth: 580, margin: "0 auto 1.25rem" }}>
            We Work Like Your Best{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Internal Team.
            </span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 520, margin: "0 auto" }}>
            The Aegis was the ultimate shield in Greek mythology — forged by master craftsmen, impenetrable in battle. We apply the same standard to every product we build.
          </p>
        </div>

        {/* 3×2 pillar grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
            marginBottom: "4rem",
          }}
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                style={{
                  background: "#0D1630",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: "1.75rem",
                  transition: "all 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${p.iconColor}30`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: p.iconBg,
                    border: `1px solid ${p.iconColor}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Icon size={20} style={{ color: p.iconColor }} />
                </div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#F8FAFC", marginBottom: 8 }}>{p.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.6875rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#475569",
              marginBottom: "1.5rem",
            }}
          >
            How We Compare
          </p>

          <div
            style={{
              background: "#0D1630",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            {/* Table head */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1.5fr 1.5fr",
                padding: "1rem 1.75rem",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <span style={{ fontSize: "0.6875rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569" }}>Feature</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L20 6V12C20 16.4 16.9 20.5 12 22C7.1 20.5 4 16.4 4 12V6L12 2Z" fill="white"/>
                  </svg>
                </div>
                <span style={{ fontSize: "0.6875rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#60A5FA" }}>SmartAegis</span>
              </div>
              <span style={{ fontSize: "0.6875rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569" }}>Typical Agency</span>
            </div>

            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={row.feature}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1.5fr 1.5fr",
                  padding: "1rem 1.75rem",
                  borderBottom: i < comparison.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  alignItems: "center",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "transparent")}
              >
                <span style={{ fontSize: "0.9375rem", color: "#94A3B8", paddingRight: 16 }}>{row.feature}</span>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <CheckCircle2 size={15} style={{ color: "#22C55E", flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: "0.875rem", color: "#E2E8F0", fontWeight: 500 }}>{row.aegis}</span>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <XCircle size={15} style={{ color: "rgba(239,68,68,0.5)", flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: "0.875rem", color: "#475569" }}>{row.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

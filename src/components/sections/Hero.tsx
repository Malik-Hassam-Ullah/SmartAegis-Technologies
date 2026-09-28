"use client";

import React from "react";
import { ArrowRight, Play, Star, CheckCircle2, Zap, Shield, Activity } from "lucide-react";

const avatars = ["AK", "SR", "MT", "JL", "PW"];
const avatarColors = ["#2563EB", "#7C3AED", "#0891B2", "#059669", "#DC2626"];

const techStack = [
  "React", "Next.js", "TypeScript", "Node.js", "Flutter", "React Native",
  "Python", "Go", "PostgreSQL", "MongoDB", "AWS", "Docker",
  "Kubernetes", "Figma", "GraphQL", "Redis", "Stripe", "Vercel",
];

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "clamp(5rem, 10vw, 7.5rem)",
        paddingBottom: "4rem",
        overflow: "hidden",
        background: "linear-gradient(180deg, #060C1E 0%, #070B19 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="mesh-bg" />
      <div className="grid-lines" />

      {/* Top accent line */}
      <div className="top-glow" />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          {/* ===== LEFT COLUMN ===== */}
          <div>
            {/* Trust pill */}
            <div
              className="badge badge-blue"
              style={{ marginBottom: "1.5rem", fontSize: "0.75rem" }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", flexShrink: 0 }} />
              🚀 Trusted Digital Product Studio — Web · Apps · Software
            </div>

            {/* Headline */}
            <h1 className="h1" style={{ marginBottom: "1.5rem", maxWidth: 580 }}>
              We Engineer{" "}
              <span className="text-gradient-blue">High-Impact</span>{" "}
              Software, Web & Mobile Applications.
            </h1>

            {/* Subtitle */}
            <p className="body-lg" style={{ marginBottom: "2.25rem", maxWidth: 500 }}>
              SmartAegis designs and builds production-grade web applications,
              dynamic enterprise platforms, and native mobile apps tailored to{" "}
              <strong style={{ color: "#E2E8F0", fontWeight: 600 }}>scale your business</strong>{" "}
              from day one.
            </p>

            {/* CTA row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: "2.25rem" }}>
              <a
                href="#contact"
                className="btn btn-primary btn-lg"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  color: "#fff",
                  boxShadow: "0 6px 20px rgba(37,99,235,0.45)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "1rem 2rem",
                  borderRadius: 14,
                  fontWeight: 700,
                  fontSize: "1rem",
                  textDecoration: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 28px rgba(37,99,235,0.6)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(37,99,235,0.45)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Launch Your Project
                <ArrowRight size={17} />
              </a>
              <a
                href="#portfolio"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "1rem 2rem",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.13)",
                  background: "rgba(255,255,255,0.04)",
                  color: "#E2E8F0",
                  fontWeight: 600,
                  fontSize: "1rem",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.13)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#E2E8F0";
                }}
              >
                <Play size={15} style={{ color: "#60A5FA" }} />
                View Live Work
              </a>
            </div>

            {/* Social proof row */}
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {/* Avatar stack */}
              <div style={{ display: "flex" }}>
                {avatars.map((initials, i) => (
                  <div
                    key={i}
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      border: "2px solid #070B19",
                      background: `linear-gradient(135deg, ${avatarColors[i]}, ${avatarColors[(i + 1) % 5]})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.625rem",
                      fontWeight: 800,
                      color: "#fff",
                      marginLeft: i > 0 ? -10 : 0,
                      position: "relative",
                      zIndex: avatars.length - i,
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>

              {/* Stars + text */}
              <div>
                <div style={{ display: "flex", gap: 2, marginBottom: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} style={{ color: "#FBBF24", fill: "#FBBF24" }} />
                  ))}
                </div>
                <p style={{ fontSize: "0.8125rem", color: "#94A3B8", lineHeight: 1.3 }}>
                  <strong style={{ color: "#E2E8F0" }}>Rated 4.9/5</strong>{" "}
                  by 60+ global clients
                </p>
              </div>
            </div>

            {/* Quick wins */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px 20px",
                marginTop: "1.75rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {[
                "100% IP Ownership",
                "48hr Kickoff",
                "OWASP Secure Builds",
                "30-day Warranty",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: "0.8125rem",
                    color: "#64748B",
                  }}
                >
                  <CheckCircle2 size={13} style={{ color: "#22C55E", flexShrink: 0 }} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ===== RIGHT COLUMN — Visual Showcase ===== */}
          <div style={{ position: "relative", paddingTop: "2rem" }}>

            {/* Main dashboard mockup card */}
            <div
              className="float-anim"
              style={{
                background: "linear-gradient(145deg, #0D1630 0%, #111827 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(37,99,235,0.1), 0 -1px 0 rgba(255,255,255,0.08) inset",
              }}
            >
              {/* Window chrome */}
              <div
                style={{
                  padding: "14px 18px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div style={{ display: "flex", gap: 6 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 24,
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 10,
                    gap: 6,
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
                  <span style={{ fontSize: "0.6875rem", color: "#64748B", fontFamily: "ui-monospace, monospace" }}>
                    app.smartaegis.tech/dashboard
                  </span>
                </div>
              </div>

              {/* Dashboard body */}
              <div style={{ padding: "20px 20px 16px" }}>
                {/* Stats row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
                  {[
                    { label: "Revenue", value: "$2.4M", delta: "+18%", color: "#22C55E" },
                    { label: "Active Users", value: "94.2K", delta: "+12%", color: "#60A5FA" },
                    { label: "Uptime", value: "99.98%", delta: "↑ SLA", color: "#A78BFA" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: 10,
                        padding: "12px 14px",
                      }}
                    >
                      <div style={{ fontSize: "0.65rem", color: "#64748B", marginBottom: 4, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        {stat.label}
                      </div>
                      <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.03em", fontFamily: "ui-monospace, monospace" }}>
                        {stat.value}
                      </div>
                      <div style={{ fontSize: "0.6875rem", color: stat.color, marginTop: 2, fontWeight: 600 }}>
                        {stat.delta}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    borderRadius: 10,
                    padding: "14px 16px",
                    marginBottom: 12,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{ fontSize: "0.75rem", color: "#64748B", fontFamily: "ui-monospace, monospace" }}>
                      Transactions / 7d
                    </span>
                    <span style={{ fontSize: "0.6875rem", color: "#22C55E", fontWeight: 700 }}>● Live</span>
                  </div>
                  {/* Bar chart */}
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 52 }}>
                    {[45, 68, 54, 82, 71, 94, 88, 79, 96, 84, 91, 100, 87, 93].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${h}%`,
                          background: i >= 12
                            ? "linear-gradient(to top, #2563EB, #60A5FA)"
                            : "rgba(37,99,235,0.3)",
                          borderRadius: "3px 3px 1px 1px",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Recent items */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    { name: "Enterprise API v2.0", status: "Deployed", color: "#22C55E" },
                    { name: "Mobile App Release", status: "In review", color: "#FBBF24" },
                    { name: "Security Audit", status: "Passed ✓", color: "#22C55E" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "8px 12px",
                        borderRadius: 8,
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <span style={{ fontSize: "0.75rem", color: "#CBD5E1", fontWeight: 500 }}>{row.name}</span>
                      <span style={{ fontSize: "0.6875rem", color: row.color, fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating widget 1 — API Status */}
            <div
              className="float-anim-r"
              style={{
                position: "absolute",
                top: "1rem",
                right: "-1.5rem",
                background: "rgba(11,17,35,0.95)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 12,
                padding: "10px 14px",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                gap: 8,
                minWidth: 190,
              }}
            >
              <div style={{ position: "relative", display: "inline-flex" }}>
                <div
                  style={{
                    width: 10, height: 10, borderRadius: "50%", background: "#22C55E",
                    boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                  }}
                />
                <div
                  style={{
                    position: "absolute", inset: -3, borderRadius: "50%",
                    background: "rgba(34,197,94,0.3)",
                    animation: "pulse-ring 1.8s ease-out infinite",
                  }}
                />
              </div>
              <div>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#F8FAFC", marginBottom: 1 }}>
                  Live API Status
                </div>
                <div style={{ fontSize: "0.625rem", color: "#22C55E", fontWeight: 600, fontFamily: "ui-monospace, monospace" }}>
                  99.9% Uptime · All systems go
                </div>
              </div>
            </div>

            {/* Floating widget 2 — Code Quality */}
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "-1.5rem",
                background: "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(99,102,241,0.1))",
                border: "1px solid rgba(37,99,235,0.25)",
                borderRadius: 12,
                padding: "10px 14px",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 28, height: 28, borderRadius: 8,
                  background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <Shield size={14} style={{ color: "#fff" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#F8FAFC", marginBottom: 1 }}>
                  Code Quality: A+
                </div>
                <div style={{ fontSize: "0.625rem", color: "#93C5FD", fontWeight: 600 }}>
                  Enterprise Ready · OWASP Secure
                </div>
              </div>
            </div>

            {/* Floating widget 3 — Deployment */}
            <div
              style={{
                position: "absolute",
                top: "42%",
                right: "-2rem",
                background: "rgba(11,17,35,0.95)",
                border: "1px solid rgba(139,92,246,0.2)",
                borderRadius: 12,
                padding: "10px 14px",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ fontSize: "0.625rem", color: "#A78BFA", fontWeight: 700, marginBottom: 4 }}>
                LATEST DEPLOY
              </div>
              <div style={{ fontSize: "0.75rem", color: "#E2E8F0", fontWeight: 600, fontFamily: "ui-monospace, monospace" }}>
                ✅ v3.12.0 shipped
              </div>
              <div style={{ fontSize: "0.625rem", color: "#64748B", marginTop: 1 }}>2 min ago · main branch</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech stack marquee */}
      <div
        style={{
          marginTop: "4rem",
          padding: "20px 0",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255,255,255,0.01)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 14 }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#475569" }}>
            Powering modern startups & enterprises
          </p>
        </div>
        <div className="marquee-wrap">
          <div className="marquee-inner" style={{ gap: 10 }}>
            {[...techStack, ...techStack].map((tech, i) => (
              <span key={i} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

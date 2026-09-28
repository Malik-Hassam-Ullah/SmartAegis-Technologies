"use client";

import React from "react";
import { ArrowRight, Play, Star, CheckCircle2, Shield, Zap, TrendingUp } from "lucide-react";

const TECH_BADGES = [
  "React", "Next.js", "TypeScript", "Node.js", "Flutter", "React Native",
  "Python", "Go", "PostgreSQL", "MongoDB", "AWS", "Docker",
  "Kubernetes", "Figma", "GraphQL", "Redis", "Stripe", "Vercel",
  "React", "Next.js", "TypeScript", "Node.js", "Flutter", "React Native",
];

const AVATARS = [
  { initials: "AK", bg: "#06B6D4" },
  { initials: "SR", bg: "#8B5CF6" },
  { initials: "MT", bg: "#F59E0B" },
  { initials: "JL", bg: "#10B981" },
  { initials: "PW", bg: "#EC4899" },
];

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "6rem",
        paddingBottom: "0",
        background: "linear-gradient(180deg, #0A0A16 0%, #080812 100%)",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Decorative background */}
      <div className="gradient-bg" />
      <div className="dot-grid" />
      {/* Top accent line */}
      <div
        style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "70%", height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent)",
        }}
      />

      <div className="container-page" style={{ position: "relative", zIndex: 2, flex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            paddingBottom: "4rem",
          }}
        >
          {/* ── LEFT: Content ── */}
          <div>
            {/* Trust badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 16px",
                borderRadius: 100,
                background: "rgba(6,182,212,0.1)",
                border: "1px solid rgba(6,182,212,0.2)",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#22D3EE",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px rgba(34,197,94,0.6)" }} />
              🚀 Premium Digital Product Studio
            </div>

            {/* Headline */}
            <h1
              className="display-hero"
              style={{ color: "#fff", marginBottom: "1.5rem", maxWidth: 560 }}
            >
              Powering Businesses{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #22D3EE 0%, #06B6D4 60%, #F59E0B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Through Technology
              </span>
            </h1>

            <p className="body-lg" style={{ marginBottom: "2.5rem", maxWidth: 500 }}>
              SmartAegis builds production-grade web applications, native mobile apps, and scalable enterprise software — engineered to{" "}
              <strong style={{ color: "#CBD5E1", fontWeight: 600 }}>perform at global scale</strong>.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: "2.5rem" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "0.9rem 2rem", borderRadius: 100,
                  background: "linear-gradient(135deg, #06B6D4, #0891B2)",
                  color: "#fff", fontWeight: 700, fontSize: "1rem",
                  textDecoration: "none", border: "none", cursor: "pointer",
                  boxShadow: "0 6px 24px rgba(6,182,212,0.4)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(6,182,212,0.6)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 24px rgba(6,182,212,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </a>
              <a
                href="#portfolio"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "0.9rem 2rem", borderRadius: 100,
                  background: "transparent", color: "rgba(255,255,255,0.8)",
                  fontWeight: 600, fontSize: "1rem",
                  textDecoration: "none", cursor: "pointer",
                  border: "1px solid rgba(255,255,255,0.15)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(6,182,212,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#22D3EE";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(6,182,212,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                <Play size={15} style={{ color: "#06B6D4" }} />
                View Our Work
              </a>
            </div>

            {/* Social proof */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                paddingTop: "1.75rem",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Avatar stack */}
              <div style={{ display: "flex" }}>
                {AVATARS.map((a, i) => (
                  <div
                    key={i}
                    style={{
                      width: 32, height: 32, borderRadius: "50%",
                      border: "2px solid #080812",
                      background: a.bg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.5625rem", fontWeight: 800, color: "#fff",
                      marginLeft: i > 0 ? -10 : 0,
                      zIndex: AVATARS.length - i,
                      position: "relative",
                    }}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: "flex", gap: 2, marginBottom: 3 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} style={{ color: "#F59E0B", fill: "#F59E0B" }} />
                  ))}
                </div>
                <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)" }}>
                  <strong style={{ color: "rgba(255,255,255,0.8)" }}>4.9/5</strong> from 60+ global clients
                </p>
              </div>
              <div style={{ width: 1, height: 36, background: "rgba(255,255,255,0.08)" }} />
              <div>
                <div style={{ fontSize: "1.375rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", fontFamily: "ui-monospace, monospace", lineHeight: 1 }}>11+</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Years in industry</div>
              </div>
              <div>
                <div style={{ fontSize: "1.375rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", fontFamily: "ui-monospace, monospace", lineHeight: 1 }}>50+</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Projects delivered</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Dashboard Mockup ── */}
          <div style={{ position: "relative", paddingTop: "1rem" }}>
            {/* Main card */}
            <div
              className="float-anim"
              style={{
                background: "linear-gradient(145deg, #0D0D1E 0%, #121228 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(6,182,212,0.1)",
              }}
            >
              {/* Window titlebar */}
              <div
                style={{
                  padding: "12px 18px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div style={{ display: "flex", gap: 6 }}>
                  {["#FF5F57","#FEBC2E","#28C840"].map(c => (
                    <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                  ))}
                </div>
                <div
                  style={{
                    flex: 1, height: 22, background: "rgba(255,255,255,0.04)",
                    borderRadius: 6, display: "flex", alignItems: "center", paddingLeft: 10, gap: 6,
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E" }} />
                  <span style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.25)", fontFamily: "ui-monospace, monospace" }}>
                    dashboard.smartaegis.tech
                  </span>
                </div>
              </div>

              <div style={{ padding: "18px" }}>
                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 12 }}>
                  {[
                    { label: "Revenue", val: "$2.4M", delta: "+18%", col: "#22C55E" },
                    { label: "Users", val: "94.2K", delta: "+12%", col: "#06B6D4" },
                    { label: "Uptime", val: "99.98%", delta: "↑ SLA", col: "#A78BFA" },
                  ].map(s => (
                    <div key={s.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 10, padding: "10px 12px" }}>
                      <div style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 3 }}>{s.label}</div>
                      <div style={{ fontSize: "1rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", fontFamily: "ui-monospace, monospace" }}>{s.val}</div>
                      <div style={{ fontSize: "0.6rem", color: s.col, fontWeight: 700, marginTop: 2 }}>{s.delta}</div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px 14px", marginBottom: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ fontSize: "0.625rem", color: "rgba(255,255,255,0.25)", fontFamily: "ui-monospace, monospace" }}>Transactions / 7d</span>
                    <span style={{ fontSize: "0.5625rem", color: "#22C55E", fontWeight: 700 }}>● Live</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 48 }}>
                    {[42,65,52,79,68,91,85,76,93,82,88,100,84,90].map((h, i) => (
                      <div key={i} style={{ flex: 1, height: `${h}%`, background: i >= 12 ? "linear-gradient(to top, #06B6D4, #22D3EE)" : "rgba(6,182,212,0.25)", borderRadius: "3px 3px 1px 1px" }} />
                    ))}
                  </div>
                </div>

                {/* Activity rows */}
                {[
                  { name: "Enterprise API v2.0", status: "Deployed", col: "#22C55E" },
                  { name: "Mobile App Release", status: "In review", col: "#F59E0B" },
                  { name: "Security Audit", status: "Passed ✓", col: "#22C55E" },
                ].map(r => (
                  <div key={r.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", borderRadius: 7, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.04)", marginBottom: 6 }}>
                    <span style={{ fontSize: "0.6875rem", color: "#CBD5E1", fontWeight: 500 }}>{r.name}</span>
                    <span style={{ fontSize: "0.625rem", color: r.col, fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>{r.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Widget 1 */}
            <div
              style={{
                position: "absolute", top: "0.5rem", right: "-1.5rem",
                background: "rgba(10,10,22,0.95)",
                border: "1px solid rgba(6,182,212,0.25)",
                borderRadius: 12, padding: "10px 14px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                display: "flex", alignItems: "center", gap: 8,
                minWidth: 180,
              }}
            >
              <div style={{ position: "relative" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px rgba(34,197,94,0.6)" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#fff", marginBottom: 1 }}>API Status: Live</div>
                <div style={{ fontSize: "0.5625rem", color: "#22C55E", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>99.9% Uptime · All systems</div>
              </div>
            </div>

            {/* Floating Widget 2 */}
            <div
              style={{
                position: "absolute", bottom: "1.5rem", left: "-1.5rem",
                background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(245,158,11,0.08))",
                border: "1px solid rgba(6,182,212,0.25)",
                borderRadius: 12, padding: "10px 14px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                display: "flex", alignItems: "center", gap: 8,
              }}
            >
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(6,182,212,0.2)", border: "1px solid rgba(6,182,212,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Shield size={14} style={{ color: "#06B6D4" }} />
              </div>
              <div>
                <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#fff", marginBottom: 1 }}>Code Quality: A+</div>
                <div style={{ fontSize: "0.5625rem", color: "#22D3EE", fontWeight: 600 }}>OWASP Secure · Enterprise Ready</div>
              </div>
            </div>

            {/* Floating Widget 3 */}
            <div
              style={{
                position: "absolute", top: "45%", right: "-2rem",
                background: "rgba(10,10,22,0.95)",
                border: "1px solid rgba(245,158,11,0.2)",
                borderRadius: 12, padding: "10px 14px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ fontSize: "0.5625rem", color: "#F59E0B", fontWeight: 700, marginBottom: 3, letterSpacing: "0.06em", textTransform: "uppercase" }}>Latest Deploy</div>
              <div style={{ fontSize: "0.75rem", color: "#fff", fontWeight: 700, fontFamily: "ui-monospace, monospace" }}>✅ v3.12.0 shipped</div>
              <div style={{ fontSize: "0.5625rem", color: "rgba(255,255,255,0.3)", marginTop: 1 }}>2 min ago · main</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tech stack ticker ── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255,255,255,0.01)",
          padding: "16px 0",
          position: "relative",
          zIndex: 2,
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "0.625rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.2)",
            marginBottom: 12,
          }}
        >
          Technologies We Master
        </p>
        <div className="marquee-wrap">
          <div className="marquee-inner">
            {TECH_BADGES.map((t, i) => (
              <span key={i} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

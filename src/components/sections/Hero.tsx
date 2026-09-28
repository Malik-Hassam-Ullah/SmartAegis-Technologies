"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const technologies = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "Go", "Flutter",
  "React Native", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes",
  "GraphQL", "Tailwind CSS", "Figma", "Terraform", "Kafka",
];

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "clamp(6rem, 14vw, 10rem)",
        paddingBottom: 0,
        overflow: "hidden",
      }}
    >
      {/* Ambient glow orbs */}
      <div
        className="orb-cyan"
        style={{ width: 800, height: 600, top: -200, left: "50%", transform: "translateX(-50%)" }}
      />
      <div
        className="orb-blue"
        style={{ width: 500, height: 400, top: 0, right: -100 }}
      />

      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 60%, var(--canvas))",
          pointerEvents: "none",
        }}
      />

      <div className="container-lg" style={{ position: "relative", zIndex: 1 }}>

        {/* Top badge */}
        <div style={{ marginBottom: 32, display: "flex", justifyContent: "center" }}>
          <span className="label">
            <span
              className="pulse-dot"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#34d399",
                  display: "block",
                }}
              />
            </span>
            Accepting new projects — Squads available Q4 2026
          </span>
        </div>

        {/* Main headline */}
        <div style={{ textAlign: "center", maxWidth: 840, margin: "0 auto", marginBottom: 28 }}>
          <h1 className="display-xl" style={{ color: "var(--text-primary)", marginBottom: 24 }}>
            We build software{" "}
            <span className="gradient-text-cyan">enterprises</span>{" "}
            rely on.
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            SmartAegis delivers mission-critical web apps, native mobile platforms, and scalable SaaS — engineered with the rigor of an in-house team and the velocity of a global studio.
          </p>
        </div>

        {/* Action row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          <a href="#estimator" className="btn-primary" style={{ fontSize: 15, padding: "13px 28px" }}>
            Start your project
            <ArrowRight size={16} />
          </a>
          <a href="#portfolio" className="btn-secondary" style={{ fontSize: 15, padding: "13px 28px" }}>
            View case studies
          </a>
        </div>

        {/* Trust bullets */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 28px",
            justifyContent: "center",
            marginBottom: 72,
          }}
        >
          {[
            "100% IP ownership from day one",
            "Defense-grade security built-in",
            "2-week agile sprints",
            "24/7 SLA support",
          ].map((t) => (
            <span
              key={t}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                fontSize: 13,
                color: "var(--text-muted)",
              }}
            >
              <CheckCircle2 size={13} style={{ color: "#34d399", flexShrink: 0 }} />
              {t}
            </span>
          ))}
        </div>

        {/* Dashboard visual — clean product screenshot mockup */}
        <div
          style={{
            position: "relative",
            maxWidth: 1000,
            margin: "0 auto",
            borderRadius: "16px 16px 0 0",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "none",
            background: "var(--surface-1)",
            boxShadow: "0 -40px 80px -20px rgba(34,211,238,0.06), 0 -20px 60px -20px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.07)",
          }}
        >
          {/* Window chrome */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
            <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "var(--text-muted)", fontFamily: "ui-monospace, monospace" }}>
              aegis-platform — production cluster
            </span>
          </div>

          {/* Dashboard content */}
          <div style={{ padding: "32px 32px 0", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
            {[
              { label: "Uptime SLA", value: "99.98%", sub: "Last 90 days", color: "#34d399" },
              { label: "API Latency", value: "11.4ms", sub: "p99 global average", color: "#22d3ee" },
              { label: "Requests / sec", value: "142K", sub: "Peak throughput", color: "#818cf8" },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  padding: "20px 24px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8, fontFamily: "ui-monospace, monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {m.label}
                </div>
                <div style={{ fontSize: 28, fontWeight: 800, color: m.color, letterSpacing: "-0.03em", fontFamily: "ui-monospace, monospace", lineHeight: 1 }}>
                  {m.value}
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 6 }}>{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Fake chart bars */}
          <div style={{ padding: "0 32px 0", marginBottom: 24 }}>
            <div
              style={{
                padding: "20px 24px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "ui-monospace, monospace" }}>Request throughput — 24h</span>
                <span style={{ fontSize: 12, color: "#34d399", fontFamily: "ui-monospace, monospace" }}>↑ 0 errors</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height: 64 }}>
                {[55, 72, 48, 88, 65, 92, 78, 95, 84, 100, 88, 76, 92, 85, 96, 80, 89, 93, 74, 86, 91, 82, 95, 88, 79, 93, 86, 96, 82, 90].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      background: `linear-gradient(to top, rgba(59,130,246,0.5), rgba(34,211,238,0.4))`,
                      borderRadius: "2px 2px 0 0",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Status row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              padding: "0 32px 32px",
            }}
          >
            {[
              { label: "Security Audit", value: "OWASP Top 10 ✓", status: "passed" },
              { label: "CI/CD Pipeline", value: "38 passed · 0 failed", status: "passed" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  borderRadius: 10,
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{s.label}</span>
                <span style={{ fontSize: 12, color: "#34d399", fontFamily: "ui-monospace, monospace" }}>{s.value}</span>
              </div>
            ))}
          </div>

          {/* Gradient fade to merge with next section */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 80,
              background: "linear-gradient(to top, var(--canvas), transparent)",
            }}
          />
        </div>
      </div>

      {/* Tech marquee */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          background: "rgba(255,255,255,0.015)",
          padding: "18px 0",
          overflow: "hidden",
          position: "relative",
          marginTop: 64,
        }}
      >
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to right, var(--canvas), transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to left, var(--canvas), transparent)", zIndex: 2, pointerEvents: "none" }} />

        <div className="marquee-track" style={{ gap: 12 }}>
          {[...technologies, ...technologies].map((tech, i) => (
            <span
              key={i}
              className="tag"
              style={{ padding: "6px 14px", fontSize: 12, whiteSpace: "nowrap" }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

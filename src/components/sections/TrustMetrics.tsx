"use client";

import React from "react";
import { Award, Clock, Users, ShieldCheck } from "lucide-react";

const metrics = [
  { icon: Users, label: "Projects Shipped", value: "50+", desc: "From MVPs to enterprise-scale products" },
  { icon: Award, label: "Client Satisfaction", value: "4.9★", desc: "Average across Clutch, Upwork & direct" },
  { icon: Clock, label: "On-time Delivery", value: "97%", desc: "Sprints completed within committed timelines" },
  { icon: ShieldCheck, label: "Uptime Guarantee", value: "99.9%", desc: "Production-grade SLA across all workloads" },
];

const clientNames = [
  "Fintech Core", "HealthPulse", "RetailOS", "LogisticsEngine",
  "PayTrack Pro", "AegisGuard", "CloudStack", "DataNexus",
];

export function TrustMetrics() {
  return (
    <section className="section" style={{ background: "#060A17", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container">

        {/* 4-metric strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
            marginBottom: "5rem",
          }}
        >
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                style={{
                  background: "#0C1226",
                  padding: "2.5rem 2rem",
                  textAlign: "center",
                  transition: "background 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#111827")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#0C1226")}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(99,102,241,0.1))",
                    border: "1px solid rgba(37,99,235,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  <Icon size={20} style={{ color: "#60A5FA" }} />
                </div>

                {/* Value */}
                <div
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    fontWeight: 900,
                    color: "#F8FAFC",
                    letterSpacing: "-0.04em",
                    fontFamily: "ui-monospace, monospace",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {m.value}
                </div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#CBD5E1", marginBottom: 6 }}>
                  {m.label}
                </div>
                <p style={{ fontSize: "0.8125rem", color: "#475569", lineHeight: 1.5 }}>{m.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Client logos strip */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontSize: "0.6875rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#475569",
              marginBottom: "2rem",
            }}
          >
            Trusted by teams building the future
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px 20px",
            }}
          >
            {clientNames.map((name) => (
              <div
                key={name}
                style={{
                  padding: "8px 20px",
                  borderRadius: 8,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "#334155",
                  letterSpacing: "0.05em",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.color = "#94A3B8";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.color = "#334155";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

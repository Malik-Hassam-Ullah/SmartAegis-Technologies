"use client";

import React from "react";
import { Users, Award, Clock, ShieldCheck, Globe, Briefcase } from "lucide-react";

const STATS = [
  { icon: Briefcase, value: "50+", label: "Projects Delivered", desc: "From MVPs to enterprise platforms" },
  { icon: Award, value: "4.9★", label: "Client Satisfaction", desc: "Rated on Clutch & Upwork" },
  { icon: Clock, value: "97%", label: "On-Time Delivery", desc: "Sprint velocity maintained" },
  { icon: Globe, value: "15+", label: "Countries Served", desc: "US, UK, UAE, AU & more" },
];

const CLIENTS = ["Fintech Core", "HealthPulse", "RetailOS", "LogisticsEngine", "PayTrack Pro", "CloudStack", "DataNexus", "AegisGuard"];

export function TrustMetrics() {
  return (
    <section
      style={{
        background: "#0A0A14",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container-page" style={{ position: "relative" }}>
        {/* Stat grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            marginBottom: "4rem",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                style={{
                  padding: "2.5rem 1.5rem",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  background: "#0D0D1A",
                  textAlign: "center",
                  transition: "background 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#111126")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#0D0D1A")}
              >
                <div
                  style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: "rgba(6,182,212,0.1)",
                    border: "1px solid rgba(6,182,212,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  <Icon size={20} style={{ color: "#06B6D4" }} />
                </div>
                <div style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 900, color: "#fff", fontFamily: "ui-monospace, monospace", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 6 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#CBD5E1", marginBottom: 5 }}>{s.label}</div>
                <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Client strip */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)", marginBottom: "1.75rem" }}>
            Trusted by teams building the future
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px 16px" }}>
            {CLIENTS.map((name) => (
              <div
                key={name}
                style={{
                  padding: "8px 18px", borderRadius: 8,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  fontSize: "0.875rem", fontWeight: 700,
                  color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.05em",
                  transition: "all 0.2s", cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.color = "rgba(255,255,255,0.6)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(6,182,212,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.color = "rgba(255,255,255,0.2)";
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

"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";

const platforms = [
  { id: "web", label: "Web app", base: 9000, weeks: 4 },
  { id: "mobile", label: "Mobile app (iOS + Android)", base: 12000, weeks: 6 },
  { id: "saas", label: "Full-stack SaaS", base: 16000, weeks: 8 },
  { id: "enterprise", label: "Enterprise software", base: 24000, weeks: 10 },
];

const features = [
  { id: "auth", label: "Auth & RBAC", price: 1800, weeks: 0.5 },
  { id: "payments", label: "Payments & subscriptions", price: 2400, weeks: 1 },
  { id: "chat", label: "Real-time chat & notifications", price: 2800, weeks: 1 },
  { id: "admin", label: "Admin dashboard & analytics", price: 3200, weeks: 1.5 },
  { id: "ai", label: "AI / LLM integration", price: 4800, weeks: 2 },
  { id: "cloud", label: "Multi-region cloud infra", price: 2900, weeks: 1 },
];

const timelines = [
  { id: "fast", label: "Fast-track", note: "4 – 6 weeks", multiplier: 1.25 },
  { id: "standard", label: "Standard", note: "8 – 12 weeks", multiplier: 1.0 },
  { id: "continuous", label: "Continuous", note: "Ongoing squad", multiplier: 0.9 },
];

export function Estimator() {
  const [platform, setPlatform] = useState("web");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("standard");
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", note: "" });

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const estimate = useMemo(() => {
    const p = platforms.find((pl) => pl.id === platform) || platforms[0];
    const t = timelines.find((tl) => tl.id === timeline) || timelines[1];
    let featureTotal = 0;
    let featureWeeks = 0;
    selectedFeatures.forEach((fid) => {
      const f = features.find((fe) => fe.id === fid);
      if (f) { featureTotal += f.price; featureWeeks += f.weeks; }
    });
    const raw = (p.base + featureTotal) * t.multiplier;
    const lo = Math.round(raw * 0.9 / 500) * 500;
    const hi = Math.round(raw * 1.15 / 500) * 500;
    const wks = Math.round((p.weeks + featureWeeks) * (timeline === "fast" ? 0.75 : 1));
    return { lo, hi, weeks: wks };
  }, [platform, selectedFeatures, timeline]);

  return (
    <section id="estimator" className="section-padding" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--surface-1)" }}>
      <div className="container-lg">

        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "start", gap: 32, marginBottom: 56, flexWrap: "wrap" as const }}>
          <div>
            <p className="label" style={{ marginBottom: 16, display: "inline-flex" }}>Project estimator</p>
            <h2 className="display-lg" style={{ color: "var(--text-primary)", marginBottom: 16 }}>
              What will it cost to build?
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 480 }}>
              Configure your project and get a transparent scope estimate — no sales call required.
            </p>
          </div>
          <div
            style={{
              background: "var(--canvas)",
              border: "1px solid var(--border-default)",
              borderRadius: 16,
              padding: "28px 32px",
              minWidth: 260,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "ui-monospace, monospace" }}>
              Estimated budget
            </div>
            <div
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 800,
                color: "#22d3ee",
                letterSpacing: "-0.04em",
                fontFamily: "ui-monospace, monospace",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              ${estimate.lo.toLocaleString()} – ${estimate.hi.toLocaleString()}
            </div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", borderTop: "1px solid var(--border-subtle)", paddingTop: 12, marginTop: 8 }}>
              ~{estimate.weeks} weeks to ship
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>

          {/* Left: Config */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

            {/* Step 1: Platform */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>
                01 — Platform
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {platforms.map((p) => {
                  const isActive = platform === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPlatform(p.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 16px",
                        borderRadius: 10,
                        border: `1px solid ${isActive ? "rgba(34,211,238,0.4)" : "var(--border-subtle)"}`,
                        background: isActive ? "rgba(34,211,238,0.06)" : "var(--canvas)",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.15s",
                      }}
                    >
                      <span style={{ fontSize: 14, fontWeight: 500, color: isActive ? "#22d3ee" : "var(--text-secondary)" }}>
                        {p.label}
                      </span>
                      {isActive && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" stroke="rgba(34,211,238,0.4)" />
                          <path d="M4 7l2 2 4-4" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Timeline */}
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>
                02 — Timeline
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                {timelines.map((tl) => {
                  const isActive = timeline === tl.id;
                  return (
                    <button
                      key={tl.id}
                      type="button"
                      onClick={() => setTimeline(tl.id)}
                      style={{
                        flex: 1,
                        padding: "12px 10px",
                        borderRadius: 10,
                        border: `1px solid ${isActive ? "rgba(34,211,238,0.4)" : "var(--border-subtle)"}`,
                        background: isActive ? "rgba(34,211,238,0.06)" : "var(--canvas)",
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                    >
                      <div style={{ fontSize: 13, fontWeight: 600, color: isActive ? "#22d3ee" : "var(--text-secondary)", marginBottom: 3 }}>
                        {tl.label}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "ui-monospace, monospace" }}>
                        {tl.note}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right: Feature toggles + CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 14 }}>
                03 — Add features
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {features.map((f) => {
                  const checked = selectedFeatures.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => toggleFeature(f.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "11px 14px",
                        borderRadius: 10,
                        border: `1px solid ${checked ? "rgba(34,211,238,0.3)" : "var(--border-subtle)"}`,
                        background: checked ? "rgba(34,211,238,0.05)" : "var(--canvas)",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all 0.15s",
                      }}
                    >
                      <span style={{ fontSize: 13, color: checked ? "var(--text-primary)" : "var(--text-secondary)" }}>
                        {f.label}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "ui-monospace, monospace" }}>
                          +${f.price.toLocaleString()}
                        </span>
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 6,
                            border: `1px solid ${checked ? "#22d3ee" : "var(--border-default)"}`,
                            background: checked ? "#22d3ee" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {checked && (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5l2.5 2.5 4-4" stroke="#03070f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Claim form */}
            {!submitted ? (
              <div style={{ padding: 24, borderRadius: 14, border: "1px solid var(--border-subtle)", background: "var(--canvas)" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text-primary)", marginBottom: 16 }}>
                  Lock in this estimate — get a free architecture review
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid var(--border-subtle)",
                      background: "var(--surface-1)",
                      color: "var(--text-primary)",
                      fontSize: 13,
                      outline: "none",
                      boxSizing: "border-box" as const,
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Work email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: 8,
                      border: "1px solid var(--border-subtle)",
                      background: "var(--surface-1)",
                      color: "var(--text-primary)",
                      fontSize: 13,
                      outline: "none",
                      boxSizing: "border-box" as const,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => form.name && form.email && setSubmitted(true)}
                    className="btn-primary"
                    style={{ justifyContent: "center" }}
                  >
                    Claim this scope
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <div
                style={{
                  padding: 24,
                  borderRadius: 14,
                  border: "1px solid rgba(52,211,153,0.3)",
                  background: "rgba(52,211,153,0.04)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 22, marginBottom: 10 }}>✓</div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                  Scope received — thank you, {form.name}.
                </p>
                <p style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  We'll reach out to {form.email} within 4 hours with your architecture brief.
                </p>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

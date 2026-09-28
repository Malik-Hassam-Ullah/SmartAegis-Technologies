"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, Check, Zap, Clock, DollarSign } from "lucide-react";

const platforms = [
  { id: "web", label: "Web App / Portal", emoji: "🌐", base: 8500, weeks: 5 },
  { id: "mobile", label: "Mobile App (iOS + Android)", emoji: "📱", base: 12000, weeks: 7 },
  { id: "saas", label: "Full-stack SaaS Platform", emoji: "⚡", base: 16500, weeks: 9 },
  { id: "enterprise", label: "Enterprise / ERP System", emoji: "🏢", base: 25000, weeks: 12 },
];

const designs = [
  { id: "basic", label: "Standard UI", note: "Clean, functional", multiplier: 1.0 },
  { id: "custom", label: "Custom Design System", note: "Unique brand identity", multiplier: 1.15 },
  { id: "premium", label: "Premium UI/UX", note: "Award-worthy interface", multiplier: 1.3 },
];

const features = [
  { id: "auth", label: "Auth & RBAC", emoji: "🔐", price: 1800 },
  { id: "payments", label: "Payments & Billing", emoji: "💳", price: 2500 },
  { id: "realtime", label: "Real-time & Notifications", emoji: "⚡", price: 2800 },
  { id: "admin", label: "Admin Dashboard", emoji: "📊", price: 3200 },
  { id: "ai", label: "AI / LLM Integration", emoji: "🤖", price: 5500 },
  { id: "infra", label: "Cloud Infra & DevOps", emoji: "☁️", price: 3000 },
];

const timelines = [
  { id: "fast", label: "Fast-track", sub: "Priority queue", multiplier: 1.3 },
  { id: "standard", label: "Standard", sub: "Recommended", multiplier: 1.0 },
  { id: "flexible", label: "Flexible", sub: "Lower cost", multiplier: 0.85 },
];

export function Estimator() {
  const [platform, setPlatform] = useState("web");
  const [design, setDesign] = useState("custom");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("standard");
  const [step, setStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const toggleFeature = (id: string) =>
    setSelectedFeatures((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const estimate = useMemo(() => {
    const p = platforms.find((x) => x.id === platform) || platforms[0];
    const d = designs.find((x) => x.id === design) || designs[1];
    const t = timelines.find((x) => x.id === timeline) || timelines[1];
    let featureSum = 0;
    selectedFeatures.forEach((fid) => {
      const f = features.find((x) => x.id === fid);
      if (f) featureSum += f.price;
    });
    const raw = (p.base + featureSum) * d.multiplier * t.multiplier;
    return {
      lo: Math.round(raw * 0.9 / 500) * 500,
      hi: Math.round(raw * 1.15 / 500) * 500,
      weeks: Math.round(p.weeks * (timeline === "fast" ? 0.75 : timeline === "flexible" ? 1.3 : 1)),
    };
  }, [platform, design, selectedFeatures, timeline]);

  return (
    <section id="estimator" className="section" style={{ background: "#060A17", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container">

        {/* Header */}
        <div className="section-header center">
          <div className="eyebrow">Project Estimator</div>
          <h2 className="h2" style={{ marginBottom: "1rem", maxWidth: 560, margin: "0 auto 1rem" }}>
            What Will Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Project Cost?
            </span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 480, margin: "0 auto" }}>
            Build your custom scope below and get a transparent estimate — no sales call required.
          </p>
        </div>

        {/* Main estimator card */}
        <div
          style={{
            background: "#0D1630",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
          }}
        >
          {/* Top: price display */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(99,102,241,0.08) 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "2rem 2.5rem",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            {/* Estimate range */}
            <div>
              <div style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#64748B", marginBottom: 8, fontFamily: "ui-monospace, monospace" }}>
                Estimated Budget
              </div>
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 900,
                  color: "#60A5FA",
                  letterSpacing: "-0.045em",
                  fontFamily: "ui-monospace, monospace",
                  lineHeight: 1,
                }}
              >
                ${estimate.lo.toLocaleString()}
                <span style={{ color: "#334155" }}>–</span>
                ${estimate.hi.toLocaleString()}
              </div>
              <div style={{ fontSize: "0.8125rem", color: "#64748B", marginTop: 6 }}>
                USD · All-inclusive. Zero hidden fees.
              </div>
            </div>

            <div style={{ width: 1, height: 60, background: "rgba(255,255,255,0.06)" }} />

            {/* Timeline */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <Clock size={15} style={{ color: "#818CF8" }} />
                <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#64748B", fontFamily: "ui-monospace, monospace" }}>
                  Delivery Timeline
                </span>
              </div>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: "#A78BFA", letterSpacing: "-0.04em", fontFamily: "ui-monospace, monospace", lineHeight: 1 }}>
                ~{estimate.weeks} weeks
              </div>
              <div style={{ fontSize: "0.8125rem", color: "#64748B", marginTop: 6 }}>
                From kickoff to production launch
              </div>
            </div>
          </div>

          {/* Config grid */}
          <div style={{ padding: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>

            {/* Left column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>

              {/* Platform */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <div className="step-num">01</div>
                  <p style={{ fontWeight: 700, color: "#CBD5E1", fontSize: "0.9375rem" }}>Choose your platform</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {platforms.map((p) => {
                    const sel = platform === p.id;
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
                          borderRadius: 12,
                          border: `1px solid ${sel ? "rgba(37,99,235,0.4)" : "rgba(255,255,255,0.06)"}`,
                          background: sel ? "rgba(37,99,235,0.08)" : "rgba(255,255,255,0.02)",
                          cursor: "pointer",
                          transition: "all 0.15s",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: "1.125rem" }}>{p.emoji}</span>
                          <span style={{ fontSize: "0.9rem", fontWeight: 600, color: sel ? "#E2E8F0" : "#94A3B8" }}>{p.label}</span>
                        </div>
                        {sel && (
                          <div
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: "50%",
                              background: "#2563EB",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Check size={10} style={{ color: "#fff" }} />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Design */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <div className="step-num">02</div>
                  <p style={{ fontWeight: 700, color: "#CBD5E1", fontSize: "0.9375rem" }}>Design complexity</p>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {designs.map((d) => {
                    const sel = design === d.id;
                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setDesign(d.id)}
                        style={{
                          flex: 1,
                          padding: "12px 8px",
                          borderRadius: 12,
                          border: `1px solid ${sel ? "rgba(37,99,235,0.4)" : "rgba(255,255,255,0.06)"}`,
                          background: sel ? "rgba(37,99,235,0.08)" : "rgba(255,255,255,0.02)",
                          cursor: "pointer",
                          textAlign: "center",
                          transition: "all 0.15s",
                        }}
                      >
                        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: sel ? "#E2E8F0" : "#94A3B8", marginBottom: 3 }}>
                          {d.label}
                        </div>
                        <div style={{ fontSize: "0.6875rem", color: "#64748B" }}>{d.note}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <div className="step-num">03</div>
                  <p style={{ fontWeight: 700, color: "#CBD5E1", fontSize: "0.9375rem" }}>Delivery timeline</p>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {timelines.map((tl) => {
                    const sel = timeline === tl.id;
                    return (
                      <button
                        key={tl.id}
                        type="button"
                        onClick={() => setTimeline(tl.id)}
                        style={{
                          flex: 1,
                          padding: "12px 8px",
                          borderRadius: 12,
                          border: `1px solid ${sel ? "rgba(37,99,235,0.4)" : "rgba(255,255,255,0.06)"}`,
                          background: sel ? "rgba(37,99,235,0.08)" : "rgba(255,255,255,0.02)",
                          cursor: "pointer",
                          textAlign: "center",
                          transition: "all 0.15s",
                        }}
                      >
                        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: sel ? "#E2E8F0" : "#94A3B8", marginBottom: 3 }}>
                          {tl.label}
                        </div>
                        <div style={{ fontSize: "0.6875rem", color: "#64748B" }}>{tl.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right column: features + form */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {/* Add-on features */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <div className="step-num">04</div>
                  <p style={{ fontWeight: 700, color: "#CBD5E1", fontSize: "0.9375rem" }}>Add-on features</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
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
                          borderRadius: 12,
                          border: `1px solid ${checked ? "rgba(37,99,235,0.35)" : "rgba(255,255,255,0.06)"}`,
                          background: checked ? "rgba(37,99,235,0.07)" : "rgba(255,255,255,0.02)",
                          cursor: "pointer",
                          transition: "all 0.15s",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontSize: "1rem" }}>{f.emoji}</span>
                          <span style={{ fontSize: "0.875rem", fontWeight: 600, color: checked ? "#E2E8F0" : "#94A3B8" }}>{f.label}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: "0.75rem", color: "#64748B", fontFamily: "ui-monospace, monospace" }}>
                            +${f.price.toLocaleString()}
                          </span>
                          <div
                            style={{
                              width: 18,
                              height: 18,
                              borderRadius: 5,
                              border: `1px solid ${checked ? "#2563EB" : "rgba(255,255,255,0.15)"}`,
                              background: checked ? "#2563EB" : "transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            {checked && <Check size={10} style={{ color: "#fff" }} />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Lead form */}
              {!submitted ? (
                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "#F8FAFC", marginBottom: 4 }}>
                      🎯 Get an Exact Proposal
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "#64748B" }}>
                      We'll review your spec and send a detailed proposal within 4 hours.
                    </p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { key: "name", placeholder: "Your full name", type: "text" },
                      { key: "email", placeholder: "Work email address", type: "email" },
                      { key: "phone", placeholder: "WhatsApp / phone (optional)", type: "tel" },
                    ].map((field) => (
                      <input
                        key={field.key}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "11px 16px",
                          borderRadius: 10,
                          border: "1px solid rgba(255,255,255,0.08)",
                          background: "rgba(255,255,255,0.04)",
                          color: "#F8FAFC",
                          fontSize: "0.875rem",
                          outline: "none",
                          boxSizing: "border-box",
                          transition: "border-color 0.15s",
                        }}
                        onFocus={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "rgba(37,99,235,0.5)")}
                        onBlur={(e) => ((e.currentTarget as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.08)")}
                      />
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        if (form.name && form.email) setSubmitted(true);
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        padding: "12px",
                        borderRadius: 12,
                        background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "0.9375rem",
                        border: "none",
                        cursor: "pointer",
                        boxShadow: "0 4px 14px rgba(37,99,235,0.4)",
                        transition: "all 0.2s",
                      }}
                    >
                      Send Proposal Request
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    padding: "2rem",
                    borderRadius: 16,
                    background: "rgba(34,197,94,0.05)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: 12 }}>✅</div>
                  <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#F8FAFC", marginBottom: 8 }}>
                    Proposal request received!
                  </h4>
                  <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.6 }}>
                    We'll send a detailed architecture brief and proposal to <strong style={{ color: "#94A3B8" }}>{form.email}</strong> within 4 hours.
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

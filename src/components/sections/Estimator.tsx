"use client";

import React, { useState, useMemo } from "react";
import {
  Calculator,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Shield,
  Send,
  Zap,
  Check,
} from "lucide-react";

interface Option {
  id: string;
  name: string;
  desc: string;
  basePrice: number;
  weeks: number;
}

const PLATFORMS: Option[] = [
  {
    id: "web",
    name: "Custom Web Application",
    desc: "Next.js 15, React, responsive PWA, and SEO-optimized architecture.",
    basePrice: 8500,
    weeks: 5,
  },
  {
    id: "mobile",
    name: "Mobile App (iOS & Android)",
    desc: "Flutter / React Native cross-platform with native performance & offline sync.",
    basePrice: 12000,
    weeks: 7,
  },
  {
    id: "saas",
    name: "Full-Stack SaaS Platform",
    desc: "Multi-tenant cloud architecture, subscription engine, and analytics dashboard.",
    basePrice: 16500,
    weeks: 9,
  },
  {
    id: "enterprise",
    name: "Enterprise ERP / System",
    desc: "High-throughput microservices, legacy migrations, and defense-grade RBAC.",
    basePrice: 24000,
    weeks: 12,
  },
];

const DESIGN_TIERS = [
  {
    id: "standard",
    name: "Clean Corporate",
    desc: "Modern standard component library & clean responsive layouts.",
    multiplier: 1.0,
  },
  {
    id: "custom",
    name: "Custom Figma System",
    desc: "Bespoke design tokens, interactive prototypes, and custom UI components.",
    multiplier: 1.18,
  },
  {
    id: "elite",
    name: "Elite High-End Experience",
    desc: "Award-winning micro-interactions, rich animations & premium design system.",
    multiplier: 1.35,
  },
];

const FEATURES = [
  { id: "auth", name: "Auth & RBAC", desc: "OAuth, SSO, 2FA, session security", price: 1800 },
  { id: "billing", name: "Stripe / Payments", desc: "Subscriptions, webhooks, invoices", price: 2500 },
  { id: "realtime", name: "Real-time Sync", desc: "Websockets, live notifications", price: 2800 },
  { id: "ai", name: "AI / LLM Integration", desc: "Custom RAG, OpenAI, smart agents", price: 5200 },
  { id: "dashboard", name: "Admin Dashboard", desc: "Data tables, exports, user controls", price: 3200 },
  { id: "devops", name: "DevOps & Cloud IaC", desc: "Terraform, Docker, CI/CD, AWS setup", price: 3000 },
];

const SPEEDS = [
  { id: "standard", name: "Standard Agile", desc: "Bi-weekly sprint milestones", mult: 1.0, weekMult: 1.0 },
  { id: "fast", name: "Fast-Track Sprint", desc: "Dedicated pod, high velocity", mult: 1.25, weekMult: 0.75 },
  { id: "flexible", name: "Flexible Milestone", desc: "Cost-optimized schedule", mult: 0.9, weekMult: 1.3 },
];

export function Estimator() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("web");
  const [selectedDesign, setSelectedDesign] = useState<string>("custom");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "dashboard"]);
  const [selectedSpeed, setSelectedSpeed] = useState<string>("standard");

  // Lead form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedEstimate = useMemo(() => {
    const platform = PLATFORMS.find((p) => p.id === selectedPlatform) || PLATFORMS[0];
    const design = DESIGN_TIERS.find((d) => d.id === selectedDesign) || DESIGN_TIERS[1];
    const speed = SPEEDS.find((s) => s.id === selectedSpeed) || SPEEDS[0];

    const featureSum = selectedFeatures.reduce((acc, fid) => {
      const f = FEATURES.find((item) => item.id === fid);
      return acc + (f ? f.price : 0);
    }, 0);

    const baseCalculation = (platform.basePrice + featureSum) * design.multiplier * speed.mult;
    const minEstimate = Math.round((baseCalculation * 0.92) / 250) * 250;
    const maxEstimate = Math.round((baseCalculation * 1.12) / 250) * 250;
    const calculatedWeeks = Math.max(3, Math.round(platform.weeks * speed.weekMult));

    return {
      min: minEstimate,
      max: maxEstimate,
      weeks: calculatedWeeks,
      platformName: platform.name,
    };
  }, [selectedPlatform, selectedDesign, selectedFeatures, selectedSpeed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section
      id="estimator"
      style={{
        background: "#06060E",
        padding: "6rem 0",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container-page">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem" }}>
          <div className="eyebrow">
            <Calculator size={14} style={{ color: "#06B6D4" }} />
            TRANSPARENT PRICING CALCULATOR
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
            Estimate Your Project Cost &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22D3EE, #0891B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Delivery Timeline
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
            Select your technical scope below for an instant, real-time budgetary estimate based on our
            standard engineering sprint rates.
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* Left Column: Scope Selectors */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Step 1: Platform Selection */}
            <div
              style={{
                background: "#0D0D1A",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "1.75rem",
              }}
            >
              <div style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#06B6D4", marginBottom: "1rem" }}>
                1. Select Application Type
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.75rem" }}>
                {PLATFORMS.map((plat) => {
                  const isSelected = selectedPlatform === plat.id;
                  return (
                    <div
                      key={plat.id}
                      onClick={() => setSelectedPlatform(plat.id)}
                      style={{
                        padding: "1rem 1.25rem",
                        borderRadius: 14,
                        border: isSelected ? "1px solid #06B6D4" : "1px solid rgba(255,255,255,0.06)",
                        background: isSelected ? "rgba(6,182,212,0.08)" : "rgba(255,255,255,0.02)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                        <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: isSelected ? "#fff" : "rgba(255,255,255,0.85)" }}>
                          {plat.name}
                        </div>
                        <div
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            border: isSelected ? "5px solid #06B6D4" : "2px solid rgba(255,255,255,0.2)",
                            background: isSelected ? "#fff" : "transparent",
                          }}
                        />
                      </div>
                      <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
                        {plat.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Design Level */}
            <div
              style={{
                background: "#0D0D1A",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "1.75rem",
              }}
            >
              <div style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#06B6D4", marginBottom: "1rem" }}>
                2. Design & UX Architecture
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem" }}>
                {DESIGN_TIERS.map((tier) => {
                  const isSelected = selectedDesign === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedDesign(tier.id)}
                      style={{
                        padding: "1rem",
                        borderRadius: 12,
                        border: isSelected ? "1px solid #06B6D4" : "1px solid rgba(255,255,255,0.06)",
                        background: isSelected ? "rgba(6,182,212,0.08)" : "rgba(255,255,255,0.02)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: "0.875rem", color: isSelected ? "#fff" : "rgba(255,255,255,0.85)", marginBottom: 4 }}>
                        {tier.name}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
                        {tier.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Feature Add-ons */}
            <div
              style={{
                background: "#0D0D1A",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "1.75rem",
              }}
            >
              <div style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#06B6D4", marginBottom: "1rem" }}>
                3. Technical Modules & Features (Select all needed)
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
                {FEATURES.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      style={{
                        padding: "0.875rem 1rem",
                        borderRadius: 12,
                        border: isChecked ? "1px solid #06B6D4" : "1px solid rgba(255,255,255,0.06)",
                        background: isChecked ? "rgba(6,182,212,0.08)" : "rgba(255,255,255,0.02)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: 5,
                          border: isChecked ? "1px solid #06B6D4" : "1px solid rgba(255,255,255,0.2)",
                          background: isChecked ? "#06B6D4" : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        {isChecked && <Check size={12} style={{ color: "#fff" }} />}
                      </div>
                      <div>
                        <div style={{ fontSize: "0.845rem", fontWeight: 700, color: isChecked ? "#fff" : "rgba(255,255,255,0.85)" }}>
                          {feat.name}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>
                          {feat.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Speed / Velocity */}
            <div
              style={{
                background: "#0D0D1A",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "1.75rem",
              }}
            >
              <div style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#06B6D4", marginBottom: "1rem" }}>
                4. Delivery Velocity
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "0.75rem" }}>
                {SPEEDS.map((sp) => {
                  const isSelected = selectedSpeed === sp.id;
                  return (
                    <div
                      key={sp.id}
                      onClick={() => setSelectedSpeed(sp.id)}
                      style={{
                        padding: "1rem",
                        borderRadius: 12,
                        border: isSelected ? "1px solid #06B6D4" : "1px solid rgba(255,255,255,0.06)",
                        background: isSelected ? "rgba(6,182,212,0.08)" : "rgba(255,255,255,0.02)",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div style={{ fontWeight: 700, fontSize: "0.875rem", color: isSelected ? "#fff" : "rgba(255,255,255,0.85)", marginBottom: 4 }}>
                        {sp.name}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
                        {sp.desc}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Calculation & Direct Consultation Form */}
          <div style={{ position: "sticky", top: "100px" }}>
            <div
              style={{
                background: "#0D0D1A",
                border: "1px solid rgba(6,182,212,0.3)",
                borderRadius: 24,
                padding: "2.25rem",
                boxShadow: "0 25px 50px rgba(0,0,0,0.6), 0 0 30px rgba(6,182,212,0.08)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Card top badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 12px",
                  borderRadius: 100,
                  background: "rgba(6,182,212,0.12)",
                  border: "1px solid rgba(6,182,212,0.25)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#22D3EE",
                  marginBottom: "1.25rem",
                }}
              >
                <Zap size={12} />
                LIVE SUMMARY
              </div>

              {/* Price Estimate */}
              <div style={{ marginBottom: "1.75rem" }}>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>
                  Estimated Investment
                </div>
                <div
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                    fontWeight: 900,
                    color: "#FFFFFF",
                    fontFamily: "ui-monospace, monospace",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  ${calculatedEstimate.min.toLocaleString()} – ${calculatedEstimate.max.toLocaleString()}
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginTop: 6 }}>
                  *USD — Includes sprint QA, code review & IP transfer.
                </div>
              </div>

              {/* Stats Bar */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  padding: "1rem",
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  marginBottom: "1.75rem",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginBottom: 2 }}>
                    <Clock size={12} style={{ color: "#06B6D4" }} />
                    Timeline
                  </div>
                  <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "#fff" }}>
                    ~{calculatedEstimate.weeks} Weeks
                  </div>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginBottom: 2 }}>
                    <Shield size={12} style={{ color: "#06B6D4" }} />
                    Warranty
                  </div>
                  <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "#fff" }}>
                    60 Days Free
                  </div>
                </div>
              </div>

              {/* Form / Lead capture */}
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff", marginBottom: 2 }}>
                    Save & Lock In This Estimate
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff",
                      fontSize: "0.875rem",
                      outline: "none",
                    }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff",
                      fontSize: "0.875rem",
                      outline: "none",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone or WhatsApp (Optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      padding: "0.75rem 1rem",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff",
                      fontSize: "0.875rem",
                      outline: "none",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-brand"
                    style={{ width: "100%", justifyContent: "center", marginTop: 6 }}
                  >
                    {isSubmitting ? "Locking In Estimate..." : "Get Detailed Proposal & Roadmap"}
                    <ArrowRight size={16} />
                  </button>
                  <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", textAlign: "center" }}>
                    No spam. We reply within 2 business hours with an architectural breakdown.
                  </p>
                </form>
              ) : (
                <div
                  style={{
                    padding: "1.5rem",
                    borderRadius: 16,
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    textAlign: "center",
                  }}
                >
                  <CheckCircle2 size={36} style={{ color: "#10B981", margin: "0 auto 0.75rem" }} />
                  <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>
                    Estimate Locked In!
                  </div>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: "1rem" }}>
                    Thanks {name}! We’ve received your scope requirements. Our Principal Architect will review and send your full PDF proposal to <strong>{email}</strong> within 2 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#06B6D4",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Recalculate with different scope
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

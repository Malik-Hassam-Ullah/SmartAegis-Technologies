"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Sparkles,
  MapPin,
  MessageSquare,
  Lock,
} from "lucide-react";

const PROJECT_TYPES = ["Web Application", "Mobile App", "Enterprise SaaS", "AI & Automation", "UI/UX Design"];
const BUDGET_RANGES = ["$5k – $10k", "$10k – $25k", "$25k – $50k", "$50k+"];

export function Contact() {
  const [projectType, setProjectType] = useState<string>("Web Application");
  const [budget, setBudget] = useState<string>("$10k – $25k");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1.125rem",
    borderRadius: 12,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.09)",
    color: "#FFFFFF",
    fontSize: "0.9375rem",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s ease, background 0.2s ease",
  };

  return (
    <section
      id="contact"
      style={{
        background: "#080812",
        padding: "6rem 0",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container-page">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem" }}>
          <div className="eyebrow">
            <Sparkles size={14} style={{ color: "#06B6D4" }} />
            START A CONVERSATION
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
            Let’s Build Something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22D3EE, #0891B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Remarkable Together
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
            Submit your technical brief below. A Principal Architect will analyze your requirements
            and respond within 2 hours with an initial estimation and consultation slot.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Left Column: Direct Info & Guarantees */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Contact details box */}
            <div
              style={{
                background: "#0D0D1A",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 20,
                padding: "2rem",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>
                Direct Communication Channels
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <a
                  href="mailto:contact@smartaegis.tech"
                  style={{ display: "flex", alignItems: "flex-start", gap: 14, color: "inherit", textDecoration: "none" }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: "rgba(6,182,212,0.1)",
                      border: "1px solid rgba(6,182,212,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={18} style={{ color: "#06B6D4" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>Email Our Engineers</div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#FFFFFF" }}>contact@smartaegis.tech</div>
                  </div>
                </a>

                <a
                  href="tel:+923001234567"
                  style={{ display: "flex", alignItems: "flex-start", gap: 14, color: "inherit", textDecoration: "none" }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: "rgba(6,182,212,0.1)",
                      border: "1px solid rgba(6,182,212,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={18} style={{ color: "#06B6D4" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>Direct Phone & WhatsApp</div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#FFFFFF" }}>+92 300 1234567</div>
                  </div>
                </a>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: "rgba(6,182,212,0.1)",
                      border: "1px solid rgba(6,182,212,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} style={{ color: "#06B6D4" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)" }}>Global Presence</div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#FFFFFF" }}>
                      Lahore, PK • Dubai, UAE • Delaware, USA
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Response Guarantee Box */}
            <div
              style={{
                background: "rgba(6,182,212,0.05)",
                border: "1px solid rgba(6,182,212,0.2)",
                borderRadius: 18,
                padding: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.5rem" }}>
                <Clock size={18} style={{ color: "#06B6D4" }} />
                <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#22D3EE" }}>
                  2-Hour Response Time SLA
                </span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                We respect your engineering timeline. During standard business hours, you will receive
                a qualified technical assessment within 120 minutes.
              </p>
            </div>

            {/* Mutual NDA Guarantee Box */}
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 18,
                padding: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.5rem" }}>
                <Lock size={18} style={{ color: "#10B981" }} />
                <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#34D399" }}>
                  100% Strict Mutual NDA
                </span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>
                Your intellectual property and technical concept are legally protected from the moment
                you contact us. We are happy to countersign your corporate NDA prior to call.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation RFP Form */}
          <div
            style={{
              background: "#0D0D1A",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24,
              padding: "2.5rem",
              boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
            }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Project Category Selection */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)", marginBottom: "0.75rem" }}>
                    What are you looking to build?
                  </label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {PROJECT_TYPES.map((type) => {
                      const isSelected = projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setProjectType(type)}
                          style={{
                            padding: "0.45rem 1rem",
                            borderRadius: 100,
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            background: isSelected ? "#06B6D4" : "rgba(255,255,255,0.03)",
                            color: isSelected ? "#FFFFFF" : "rgba(255,255,255,0.65)",
                            border: isSelected ? "1px solid #06B6D4" : "1px solid rgba(255,255,255,0.08)",
                            transition: "all 0.15s ease",
                          }}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range Selection */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)", marginBottom: "0.75rem" }}>
                    Estimated Project Budget
                  </label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {BUDGET_RANGES.map((b) => {
                      const isSelected = budget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          style={{
                            padding: "0.45rem 1rem",
                            borderRadius: 100,
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            background: isSelected ? "rgba(6,182,212,0.15)" : "rgba(255,255,255,0.03)",
                            color: isSelected ? "#22D3EE" : "rgba(255,255,255,0.65)",
                            border: isSelected ? "1px solid #06B6D4" : "1px solid rgba(255,255,255,0.08)",
                            transition: "all 0.15s ease",
                          }}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Inputs */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#06B6D4")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#06B6D4")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>
                    Company / Organization Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp, Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "#06B6D4")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>
                    Project Brief & Key Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your product vision, timeline constraints, or existing codebase..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "#06B6D4")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-brand"
                  style={{ width: "100%", justifyContent: "center", padding: "1rem" }}
                >
                  {submitting ? "Analyzing Brief..." : "Submit Technical Brief & Schedule Call"}
                  <Send size={16} />
                </button>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
                <CheckCircle2 size={48} style={{ color: "#10B981", margin: "0 auto 1rem" }} />
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: "0.5rem" }}>
                  Brief Received Successfully
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: "420px", margin: "0 auto 1.5rem" }}>
                  Thank you, {formData.name}. Our Principal Engineer will review your requirements for <strong>{projectType}</strong> and contact you at <strong>{formData.email}</strong> within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", message: "" });
                  }}
                  className="btn-outline"
                >
                  Send another inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

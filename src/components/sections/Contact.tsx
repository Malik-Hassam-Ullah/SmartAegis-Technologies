"use client";

import React, { useState } from "react";
import { Send, ArrowRight, Mail, Clock, Globe, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", budget: "$15k–$30k", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setDone(true); }, 800);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.04)",
    color: "#F8FAFC",
    fontSize: "0.9375rem",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s, background 0.15s",
    fontFamily: "inherit",
  };

  return (
    <section id="contact" className="section" style={{ background: "#070B19", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>
      <div className="mesh-bg" />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>

        {/* Header */}
        <div className="section-header center">
          <div className="eyebrow">Start a Project</div>
          <h2 className="h2" style={{ marginBottom: "1.25rem", maxWidth: 560, margin: "0 auto 1.25rem" }}>
            Ready to Build Something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Remarkable?
            </span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 480, margin: "0 auto" }}>
            Fill in your brief below. We'll send a preliminary architecture plan and cost estimate to your inbox within 4 hours.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }}>

          {/* LEFT: what to expect + contact details */}
          <div>
            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {[
                { step: "01", title: "Submit your brief", desc: "Takes 2 minutes. No obligation, no sales call needed to get started.", icon: "✍️" },
                { step: "02", title: "Receive architecture plan", desc: "We'll send a technical brief specific to your project within 4 hours.", icon: "📐" },
                { step: "03", title: "Align on scope & price", desc: "One 30-min call with the engineer who will actually build it.", icon: "🤝" },
              ].map((s) => (
                <div key={s.step} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div className="step-num">{s.step}</div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: "1rem" }}>{s.icon}</span>
                      <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#E2E8F0" }}>{s.title}</h4>
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div
              style={{
                background: "#0D1630",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "1.5rem",
              }}
            >
              <p style={{ fontSize: "0.6875rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569", marginBottom: "1rem" }}>
                Contact directly
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a
                  href="mailto:contact@smartaegis.tech"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: "0.9375rem",
                    color: "#60A5FA",
                    textDecoration: "none",
                    transition: "color 0.15s",
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "rgba(37,99,235,0.1)",
                      border: "1px solid rgba(37,99,235,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={14} style={{ color: "#60A5FA" }} />
                  </div>
                  contact@smartaegis.tech
                </a>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "rgba(34,197,94,0.08)",
                      border: "1px solid rgba(34,197,94,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={14} style={{ color: "#86EFAC" }} />
                  </div>
                  <span style={{ fontSize: "0.875rem", color: "#64748B" }}>
                    Response SLA: <strong style={{ color: "#94A3B8" }}>&lt; 4 hours</strong>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: "rgba(139,92,246,0.08)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Globe size={14} style={{ color: "#A78BFA" }} />
                  </div>
                  <span style={{ fontSize: "0.875rem", color: "#64748B" }}>
                    Coverage: <strong style={{ color: "#94A3B8" }}>US · UK · UAE · PK</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: form */}
          <div
            style={{
              background: "#0D1630",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24,
              padding: "2.5rem",
              boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            {!done ? (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#F8FAFC", marginBottom: 6 }}>
                    Tell us about your project
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "#475569" }}>
                    All fields required. Mutual NDA available on request.
                  </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#64748B", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Your name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Alex Mercer"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(37,99,235,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#64748B", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Work email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(37,99,235,0.5)")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#64748B", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Approximate budget
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                  >
                    <option>Under $15k</option>
                    <option>$15k – $30k</option>
                    <option>$30k – $60k</option>
                    <option>$60k – $150k</option>
                    <option>$150k+</option>
                    <option>Ongoing retainer</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#64748B", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    What are you building?
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your product, the problem it solves, key features needed, and any technical constraints or deadlines we should know about..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none", lineHeight: 1.65 }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(37,99,235,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "1rem",
                    borderRadius: 14,
                    background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1rem",
                    border: "none",
                    cursor: submitting ? "not-allowed" : "pointer",
                    boxShadow: "0 6px 20px rgba(37,99,235,0.45)",
                    transition: "all 0.2s",
                    opacity: submitting ? 0.75 : 1,
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    if (!submitting) (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(37,99,235,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(37,99,235,0.45)";
                  }}
                >
                  {submitting ? (
                    "Sending…"
                  ) : (
                    <>
                      Send Project Brief
                      <Send size={16} />
                    </>
                  )}
                </button>

                {/* Trust bullets */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px", justifyContent: "center", paddingTop: 4 }}>
                  {["No spam, guaranteed", "Mutual NDA available", "Response in < 4 hours"].map((t) => (
                    <span key={t} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.75rem", color: "#475569" }}>
                      <CheckCircle2 size={11} style={{ color: "#22C55E" }} />
                      {t}
                    </span>
                  ))}
                </div>
              </form>
            ) : (
              <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    fontSize: "1.75rem",
                  }}
                >
                  ✅
                </div>
                <h3 style={{ fontSize: "1.375rem", fontWeight: 800, color: "#F8FAFC", marginBottom: 12 }}>
                  Brief received — thank you!
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "#64748B", lineHeight: 1.7, maxWidth: 360, margin: "0 auto 1.5rem" }}>
                  We're reviewing your project now and will send a technical brief and cost estimate to{" "}
                  <strong style={{ color: "#E2E8F0" }}>{form.email}</strong> within 4 hours.
                </p>
                <div
                  style={{
                    padding: "14px 24px",
                    borderRadius: 12,
                    background: "rgba(34,197,94,0.06)",
                    border: "1px solid rgba(34,197,94,0.15)",
                    fontSize: "0.875rem",
                    color: "#86EFAC",
                    fontWeight: 600,
                  }}
                >
                  💬 Check your inbox — including spam / promotions tab
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

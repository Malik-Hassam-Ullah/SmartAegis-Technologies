"use client";

import React, { useState } from "react";
import { ArrowRight, Send } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    budget: "$15k – $30k",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 700);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 16px",
    borderRadius: 10,
    border: "1px solid var(--border-subtle)",
    background: "var(--surface-2)",
    color: "var(--text-primary)",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  };

  return (
    <section id="contact" className="section-padding" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container-lg">

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left: value props */}
          <div>
            <p className="label" style={{ marginBottom: 20, display: "inline-flex" }}>Get in touch</p>
            <h2 className="display-lg" style={{ color: "var(--text-primary)", marginBottom: 20 }}>
              Let's build something remarkable together.
            </h2>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 40 }}>
              Tell us about your project. We'll send back a preliminary architecture brief and a scope estimate within 4 hours.
            </p>

            {/* What to expect */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { step: "01", title: "You send us a brief", desc: "Takes about 2 minutes. No sales call required to start." },
                { step: "02", title: "We send an architecture brief", desc: "Within 4 hours — technical, specific to your project." },
                { step: "03", title: "We align on scope and timeline", desc: "One discovery call, 30 minutes, with the engineer who will build it." },
              ].map((s) => (
                <div key={s.step} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontFamily: "ui-monospace, monospace",
                      color: "#22d3ee",
                      background: "rgba(34,211,238,0.08)",
                      border: "1px solid rgba(34,211,238,0.15)",
                      padding: "3px 8px",
                      borderRadius: 6,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>{s.title}</p>
                    <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid var(--border-subtle)", display: "flex", flexDirection: "column", gap: 8 }}>
              <a
                href="mailto:contact@smartaegis.tech"
                style={{ fontSize: 14, color: "#22d3ee", textDecoration: "none" }}
              >
                contact@smartaegis.tech
              </a>
              <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
                Response SLA: &lt; 4 hours · US / UK / UAE / PK coverage
              </span>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {!done ? (
              <form
                onSubmit={handleSubmit}
                style={{
                  padding: 36,
                  borderRadius: 20,
                  background: "var(--surface-1)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 8 }}>
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 8 }}>
                      Work email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 8 }}>
                    Approximate budget
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    style={{ ...inputStyle, appearance: "none" as const }}
                  >
                    <option>Under $15k</option>
                    <option>$15k – $30k</option>
                    <option>$30k – $60k</option>
                    <option>$60k+</option>
                    <option>Ongoing retainer</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--text-muted)", marginBottom: 8 }}>
                    What are you building?
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your product, the core problem it solves, and any technical constraints we should know about."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" as const, lineHeight: 1.6 }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary"
                  style={{ justifyContent: "center", marginTop: 4, opacity: submitting ? 0.7 : 1 }}
                >
                  {submitting ? "Sending…" : (
                    <>
                      Send project brief
                      <Send size={14} />
                    </>
                  )}
                </button>

                <p style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center" }}>
                  Mutual NDA available on request. Zero spam, guaranteed.
                </p>
              </form>
            ) : (
              <div
                style={{
                  padding: 48,
                  borderRadius: 20,
                  background: "var(--surface-1)",
                  border: "1px solid rgba(52,211,153,0.2)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "rgba(52,211,153,0.08)",
                    border: "1px solid rgba(52,211,153,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: 22,
                    color: "#34d399",
                  }}
                >
                  ✓
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)", marginBottom: 10 }}>
                  Brief received.
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 320, margin: "0 auto" }}>
                  We'll review your project and send a preliminary architecture brief to <strong style={{ color: "var(--text-secondary)" }}>{form.email}</strong> within 4 hours.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

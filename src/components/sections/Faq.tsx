"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "What tech stack do you use for web applications?",
    a: "Our default for modern web apps is Next.js 15 (App Router) with TypeScript in strict mode, Tailwind CSS, and edge-rendering via Vercel or Cloudflare Workers. For high-throughput backends we use Go or Node.js microservices. We don't prescribe a stack without understanding your specific scaling requirements and team context.",
    tag: "Technical",
    tagColor: "#60A5FA",
    tagBg: "rgba(37,99,235,0.1)",
  },
  {
    q: "Who actually owns the code at the end of the project?",
    a: "You do — 100%. All code is committed to your private GitHub/GitLab from sprint one. Design assets are transferred to your Figma organisation. Infrastructure is provisioned entirely under your cloud accounts. We sign a mutual NDA before any technical disclosure, and there are zero royalties, licensing fees, or mechanisms to hold your product hostage.",
    tag: "Legal",
    tagColor: "#A78BFA",
    tagBg: "rgba(139,92,246,0.1)",
  },
  {
    q: "What does post-launch support and maintenance look like?",
    a: "Every production delivery includes a 30-day zero-bug warranty — any regression caused by our code is fixed at no cost. Beyond that, we offer monthly retainer plans covering 24/7 telemetry monitoring, automated security patching, performance tuning, and on-call SRE support. You're never left without a clear path to help.",
    tag: "Support",
    tagColor: "#86EFAC",
    tagBg: "rgba(34,197,94,0.08)",
  },
  {
    q: "How quickly can your team start on a new project?",
    a: "We maintain pre-vetted senior squads specialising in our core stack, so we can typically kick off discovery within 5–7 business days of NDA signing. Fast-track projects with a complete specification can begin within 72 hours. Our standard process starts with a paid Discovery Sprint to de-risk the engagement before full commitment.",
    tag: "Process",
    tagColor: "#FCD34D",
    tagBg: "rgba(245,158,11,0.08)",
  },
  {
    q: "How do you handle communication and project transparency?",
    a: "We integrate into your workflow. You get a private Slack channel with direct access to the lead engineer, a Jira board with live sprint velocity tracking, and bi-weekly demo calls where you test working software — never status decks or slides. We don't believe in 'check-in theatre.'",
    tag: "Process",
    tagColor: "#FCD34D",
    tagBg: "rgba(245,158,11,0.08)",
  },
  {
    q: "Do you work with clients across different time zones?",
    a: "Yes. Our engineering squads have full coverage across EST, GMT, GST (UAE/KSA), and PKT. We structure daily communication windows to ensure at least 4 hours of synchronous overlap with your team, regardless of location. For async-first clients, we provide detailed daily standups and progress reports.",
    tag: "General",
    tagColor: "#67E8F9",
    tagBg: "rgba(6,182,212,0.08)",
  },
  {
    q: "What's included in the Discovery Sprint?",
    a: "The Discovery Sprint (1–2 weeks) produces a complete technical specification: system architecture diagram, database schema, API contract, security threat model, and a sprint roadmap with velocity estimates. This becomes your project's north star — and if you choose not to proceed, you keep the entire specification document.",
    tag: "Process",
    tagColor: "#FCD34D",
    tagBg: "rgba(245,158,11,0.08)",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section" style={{ background: "#060A17", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container">

        {/* Header */}
        <div className="section-header center">
          <div className="eyebrow">FAQ</div>
          <h2 className="h2" style={{ marginBottom: "1.25rem", maxWidth: 520, margin: "0 auto 1.25rem" }}>
            Questions We Hear{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Every Day.
            </span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 460, margin: "0 auto" }}>
            Can't find your answer? Our team typically responds within 2 hours.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start" }}>

          {/* Left: sticky sidebar */}
          <div style={{ position: "sticky", top: 100 }}>
            <div
              style={{
                background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(99,102,241,0.07))",
                border: "1px solid rgba(37,99,235,0.2)",
                borderRadius: 20,
                padding: "2rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "linear-gradient(135deg, rgba(37,99,235,0.2), rgba(99,102,241,0.15))",
                  border: "1px solid rgba(37,99,235,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.25rem",
                }}
              >
                <MessageCircle size={22} style={{ color: "#60A5FA" }} />
              </div>
              <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#F8FAFC", marginBottom: 8 }}>
                Still have questions?
              </h4>
              <p style={{ fontSize: "0.875rem", color: "#64748B", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                Book a free 30-minute discovery call. No sales pressure — just honest answers about your project.
              </p>
              <a
                href="#contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "0.875rem 1.5rem",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.4)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(37,99,235,0.55)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 14px rgba(37,99,235,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Book Discovery Call
              </a>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Avg response time", value: "< 2 hours" },
                { label: "Client satisfaction", value: "4.9 / 5.0" },
                { label: "Projects delivered", value: "50+ worldwide" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: "14px 18px",
                    borderRadius: 12,
                    background: "#0D1630",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "0.8125rem", color: "#64748B" }}>{s.label}</span>
                  <span style={{ fontSize: "0.875rem", fontWeight: 800, color: "#E2E8F0", fontFamily: "ui-monospace, monospace" }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: accordion */}
          <div>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    transition: "background 0.2s",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: "1.5rem 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <span
                        style={{
                          padding: "2px 8px",
                          borderRadius: 100,
                          fontSize: "0.6875rem",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          color: faq.tagColor,
                          background: faq.tagBg,
                          display: "inline-flex",
                          alignSelf: "flex-start",
                        }}
                      >
                        {faq.tag}
                      </span>
                      <span
                        style={{
                          fontSize: "1rem",
                          fontWeight: 600,
                          color: isOpen ? "#F8FAFC" : "#CBD5E1",
                          lineHeight: 1.5,
                          transition: "color 0.15s",
                        }}
                      >
                        {faq.q}
                      </span>
                    </div>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        border: `1px solid ${isOpen ? "rgba(37,99,235,0.3)" : "rgba(255,255,255,0.08)"}`,
                        background: isOpen ? "rgba(37,99,235,0.1)" : "rgba(255,255,255,0.03)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                        transition: "all 0.2s",
                      }}
                    >
                      <ChevronDown
                        size={15}
                        style={{
                          color: isOpen ? "#60A5FA" : "#64748B",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s, color 0.2s",
                        }}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{ paddingBottom: "1.5rem" }}>
                      <p
                        style={{
                          fontSize: "0.9375rem",
                          color: "#64748B",
                          lineHeight: 1.8,
                          borderLeft: "2px solid rgba(37,99,235,0.4)",
                          paddingLeft: 16,
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

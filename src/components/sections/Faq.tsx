"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What tech stack do you recommend for high-scale products?",
    a: "For dynamic web apps, our default is Next.js 16 (App Router) with TypeScript and edge rendering. High-throughput backends get Go or Node.js microservices. Mobile is Flutter or React Native — single codebase, native 60fps. We never prescribe a stack without understanding your traffic pattern and team context first.",
  },
  {
    q: "How do you handle IP and source code ownership?",
    a: "You own everything from day one. Code is committed to your private repository, design assets are transferred to your Figma organisation, and infrastructure is provisioned under your cloud accounts. We sign a mutual NDA before any technical disclosure. There are no royalties, no licensing fees, and no mechanisms for us to hold your product hostage.",
  },
  {
    q: "What does post-launch support look like?",
    a: "Every production delivery includes a 30-day zero-bug warranty — any regression caused by our code is fixed at no cost. Beyond that, we offer monthly retainer packages covering 24/7 telemetry, security patching, performance tuning, and on-call SRE support. You're never left without a path to help.",
  },
  {
    q: "How quickly can you spin up a dedicated engineering squad?",
    a: "Because we maintain pre-vetted senior squads specialising in our core stack, we typically kick off discovery within 5 – 7 business days of NDA signing. Fast-track projects can begin within 72 hours for clients with a completed specification.",
  },
  {
    q: "How does communication and project tracking work?",
    a: "We integrate into your workflow, not the other way around. You get a private Slack channel with direct access to the lead engineer, a Jira board showing live sprint velocity, and bi-weekly demo calls where you test working software — not slides or status decks.",
  },
  {
    q: "Do you work with clients outside of your timezone?",
    a: "Yes. Our engineering squads have full coverage across EST, GMT, GST, and PKT. We structure communication windows so there's always at least 4 hours of daily overlap with your team, regardless of location.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--surface-1)" }}>
      <div className="container-lg">

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>

          {/* Left: fixed label */}
          <div style={{ position: "sticky" as const, top: 96 }}>
            <p className="label" style={{ marginBottom: 20, display: "inline-flex" }}>FAQ</p>
            <h2 className="display-md" style={{ color: "var(--text-primary)", marginBottom: 16 }}>
              Questions we hear often.
            </h2>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Can't find what you're looking for? Ask us directly.
            </p>
            <div style={{ marginTop: 24 }}>
              <a href="#contact" className="btn-secondary" style={{ fontSize: 13 }}>
                Contact us →
              </a>
            </div>
          </div>

          {/* Right: accordion */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  style={{
                    borderTop: "1px solid var(--border-subtle)",
                    paddingTop: 0,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: "24px 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: isOpen ? "var(--text-primary)" : "var(--text-secondary)",
                        lineHeight: 1.5,
                        transition: "color 0.15s",
                      }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      style={{
                        color: "var(--text-muted)",
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{ paddingBottom: 24 }}>
                      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, margin: 0 }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid var(--border-subtle)" }} />
          </div>

        </div>

      </div>
    </section>
  );
}

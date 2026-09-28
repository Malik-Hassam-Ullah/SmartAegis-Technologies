"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

interface FAQItem {
  id: string;
  category: "all" | "technical" | "legal" | "process";
  q: string;
  a: string;
}

const FAQS: FAQItem[] = [
  {
    id: "tech-stack",
    category: "technical",
    q: "What technical stack does SmartAegis recommend for new projects?",
    a: "Our core foundation is built on Next.js 15 (App Router) and React with strict TypeScript, Tailwind CSS, and edge caching for web portals. For native mobile applications, we leverage Flutter or React Native with Swift/Kotlin native bridges. On the backend, we implement Go, Node.js, and Python microservices with PostgreSQL, Redis, and Docker containers orchestrating on AWS/GCP.",
  },
  {
    id: "ip-ownership",
    category: "legal",
    q: "Who owns the intellectual property and source code upon completion?",
    a: "You retain 100% full ownership of all intellectual property, source code repositories, databases, design tokens, and cloud infrastructure from day one. All code is committed directly to your private company Git repositories under your organization’s control. We sign mutual NDAs before any technical discussion.",
  },
  {
    id: "kickoff-time",
    category: "process",
    q: "How quickly can a dedicated SmartAegis engineering squad assemble and start?",
    a: "Because we maintain pre-vetted full-stack squads, we typically launch technical discovery within 5 to 7 business days following contract and NDA execution. For time-sensitive MVP fast-tracks with predefined specs, kickoff can commence in as little as 72 hours.",
  },
  {
    id: "warranty",
    category: "legal",
    q: "What is your post-launch support and warranty coverage?",
    a: "Every project deployed by SmartAegis includes an ironclad 60-day complimentary bug warranty. If any regression or defect is identified in code we wrote, our engineers resolve it immediately with zero billable hours. We also offer continuous SLA retainers for 24/7 cloud telemetry, security audits, and continuous feature expansion.",
  },
  {
    id: "timezones",
    category: "process",
    q: "How do you coordinate with clients located in the US, Europe, or the Middle East?",
    a: "Our engineering pods provide multi-timezone coverage across US Eastern (EST), UK/European (GMT), Gulf Standard (GST), and Asia (PKT). We guarantee at least 4 hours of synchronous overlap each business day for live standups, demos, and instant Slack messaging.",
  },
  {
    id: "discovery-sprint",
    category: "process",
    q: "What does the initial Discovery Sprint deliver?",
    a: "The Discovery Sprint (1–2 weeks) de-risks your entire project before major capital expenditure. Our Principal Architect produces full entity relationship diagrams (ERD), API specifications, interactive Figma wireframes, risk threat matrices, and fixed-cost sprint roadmap commitments.",
  },
];

export function Faq() {
  const [openId, setOpenId] = useState<string | null>("tech-stack");
  const [activeCategory, setActiveCategory] = useState<"all" | "technical" | "legal" | "process">("all");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs =
    activeCategory === "all" ? FAQS : FAQS.filter((f) => f.category === activeCategory);

  return (
    <section
      id="faq"
      style={{
        background: "#06060E",
        padding: "6rem 0",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container-page" style={{ maxWidth: "860px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="eyebrow">
            <HelpCircle size={14} style={{ color: "#06B6D4" }} />
            FREQUENTLY ASKED QUESTIONS
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
            Clear Answers to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22D3EE, #0891B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Essential Questions
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
            Everything you need to know about our engineering standards, IP ownership, sprint velocity,
            and project onboarding.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { id: "all", label: "All Questions" },
            { id: "technical", label: "Technical & Stacks" },
            { id: "legal", label: "IP & Warranties" },
            { id: "process", label: "Process & Timelines" },
          ].map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: 100,
                  fontSize: "0.845rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: isSelected ? "#06B6D4" : "rgba(255,255,255,0.03)",
                  color: isSelected ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                  border: isSelected ? "1px solid #06B6D4" : "1px solid rgba(255,255,255,0.07)",
                  transition: "all 0.2s ease",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion Container */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                style={{
                  background: "#0D0D1A",
                  border: isOpen ? "1px solid rgba(6,182,212,0.35)" : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 16,
                  overflow: "hidden",
                  transition: "all 0.2s ease",
                  boxShadow: isOpen ? "0 8px 30px rgba(0,0,0,0.4)" : "none",
                }}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  style={{
                    width: "100%",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    color: isOpen ? "#FFFFFF" : "rgba(255,255,255,0.85)",
                    gap: 16,
                  }}
                >
                  <span style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: isOpen ? "rgba(6,182,212,0.15)" : "rgba(255,255,255,0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    <ChevronDown size={16} style={{ color: isOpen ? "#06B6D4" : "rgba(255,255,255,0.5)" }} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.5rem 1.5rem 1.5rem",
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.7,
                      borderTop: "1px solid rgba(255,255,255,0.04)",
                      paddingTop: "1rem",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Banner */}
        <div
          style={{
            marginTop: "3.5rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: "2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "rgba(6,182,212,0.1)",
                border: "1px solid rgba(6,182,212,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MessageSquare size={20} style={{ color: "#06B6D4" }} />
            </div>
            <div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#fff" }}>
                Have a specialized technical question?
              </div>
              <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>
                Our architects are happy to review your architecture specs directly.
              </div>
            </div>
          </div>

          <a href="#contact" className="btn-brand">
            Ask Our Architects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

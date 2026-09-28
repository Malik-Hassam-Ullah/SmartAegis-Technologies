"use client";

import React, { useState } from "react";
import {
  Compass,
  Layout,
  Code2,
  ShieldAlert,
  Rocket,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface Phase {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  accentColor: string;
  description: string;
  deliverables: string[];
  keyOutcome: string;
}

const PHASES: Phase[] = [
  {
    id: "discovery",
    step: "01",
    title: "Discovery & Architectural Blueprint",
    subtitle: "Define specifications, database schemas & compliance constraints before coding.",
    duration: "Week 1–2",
    icon: Compass,
    accentColor: "#06B6D4",
    description:
      "We unpack your business goals, user personas, third-party API dependencies, and infrastructure scaling criteria. Senior Solution Architects deliver an immutable technical specification document.",
    deliverables: [
      "System architecture diagram & data relationship modeling",
      "API contracts & OpenAPI / Swagger schemas",
      "Cloud infrastructure cost estimation & vendor selection",
      "Risk assessment & data privacy compliance roadmap",
      "Detailed bi-weekly sprint backlog with velocity commitments",
    ],
    keyOutcome: "A locked architectural blueprint preventing scope creep and costly rewrites.",
  },
  {
    id: "design",
    step: "02",
    title: "UI/UX & Design System Tokens",
    subtitle: "Create high-fidelity interactive prototypes in Figma mapped 1:1 to code tokens.",
    duration: "Week 2–3",
    icon: Layout,
    accentColor: "#8B5CF6",
    description:
      "We design an atomic design system with comprehensive component libraries, dark/light states, and responsive breakpoints. Stakeholders experience clickable prototypes before frontend build begins.",
    deliverables: [
      "Production-ready Figma token library (colors, typography, grid)",
      "Fully interactive clickable prototypes for mobile & desktop",
      "WCAG 2.1 AA accessibility & international usability audits",
      "Micro-interaction choreography & animation specs",
      "Direct code handoff to Tailwind CSS / CSS variable tokens",
    ],
    keyOutcome: "Zero discrepancy between approved Figma designs and deployed production software.",
  },
  {
    id: "sprint",
    step: "03",
    title: "Agile Sprint Build & Automated CI/CD",
    subtitle: "Bi-weekly sprint demos with working software deployed to staging environments.",
    duration: "Week 3–8+",
    icon: Code2,
    accentColor: "#3B82F6",
    description:
      "Senior full-stack engineers execute clean, modular code with strict typing. Every commit triggers automated build pipelines, unit tests, and continuous preview deployments for your team to test.",
    deliverables: [
      "TypeScript strict mode codebase with zero technical debt",
      "Automated GitHub Actions CI/CD with linting & test suites",
      "Isolated staging environments for client review and feedback",
      "Bi-weekly sprint demo meetings and progress velocity reports",
      "Direct Slack/Discord access to the engineering pod lead",
    ],
    keyOutcome: "Continuous visibility into working software with zero guesswork or radio silence.",
  },
  {
    id: "qa-security",
    step: "04",
    title: "QA, Security & Penetration Testing",
    subtitle: "Rigorous automated & manual verification to ensure defense-grade reliability.",
    duration: "Week 7–9",
    icon: ShieldAlert,
    accentColor: "#10B981",
    description:
      "Before production cutover, our dedicated QA engineers stress-test every workflow. We execute cross-browser matrix audits, simulated DDoS load tests, SQL/XSS vulnerability assessments, and edge cases.",
    deliverables: [
      "Automated End-to-End (E2E) testing with Playwright / Cypress",
      "High-concurrency load testing (k6) simulating 100k+ users",
      "OWASP Top 10 vulnerability remediation & dependency audits",
      "Cross-device mobile testing across 30+ physical device configurations",
      "Core Web Vitals & Lighthouse score optimization (95+ score target)",
    ],
    keyOutcome: "A bulletproof, production-verified system with 99.98% guaranteed uptime readiness.",
  },
  {
    id: "deployment",
    step: "05",
    title: "Zero-Downtime Launch & 24/7 SLA Scaling",
    subtitle: "Seamless DNS cutover, real-time observability & guaranteed post-launch warranty.",
    duration: "Ongoing",
    icon: Rocket,
    accentColor: "#F59E0B",
    description:
      "We orchestrate smooth blue/green DNS cutover with zero downtime. Post-launch, we activate Datadog/Grafana telemetry, 60-day complimentary bug warranty, and flexible maintenance agreements.",
    deliverables: [
      "Zero-downtime blue/green DNS switchover & SSL configuration",
      "Comprehensive Datadog / Sentry real-time error tracking",
      "60-day 100% complimentary bug warranty & developer support",
      "Full IP ownership, repository handover & documentation walkthrough",
      "Monthly SLA maintenance & autoscaling cloud management",
    ],
    keyOutcome: "Flawless launch execution with ongoing protection against downtime or regressions.",
  },
];

export function Process() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const activePhase = PHASES[activePhaseIndex];
  const Icon = activePhase.icon;

  return (
    <section
      id="process"
      style={{
        background: "#080812",
        padding: "6rem 0",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container-page">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto 3.5rem" }}>
          <div className="eyebrow">
            <Sparkles size={14} style={{ color: "#06B6D4" }} />
            ENGINEERING WORKFLOW
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
            How We Deliver{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22D3EE, #0891B2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Mission-Critical Software
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
            A disciplined, transparent 5-stage agile lifecycle engineered to remove risk, maintain
            predictable momentum, and launch products on schedule.
          </p>
        </div>

        {/* Phase Stepper Navigation */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          {PHASES.map((p, idx) => {
            const isCurrent = idx === activePhaseIndex;
            return (
              <button
                key={p.id}
                onClick={() => setActivePhaseIndex(idx)}
                style={{
                  background: isCurrent ? "#0D0D1A" : "rgba(255,255,255,0.02)",
                  border: isCurrent ? `1px solid ${p.accentColor}` : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 14,
                  padding: "1rem 1.25rem",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 900,
                    fontFamily: "ui-monospace, monospace",
                    color: isCurrent ? p.accentColor : "rgba(255,255,255,0.3)",
                  }}
                >
                  {p.step}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.845rem",
                      fontWeight: 700,
                      color: isCurrent ? "#FFFFFF" : "rgba(255,255,255,0.6)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {p.title.split("&")[0].trim()}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>
                    {p.duration}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div
          style={{
            background: "#0D0D1A",
            border: `1px solid ${activePhase.accentColor}33`,
            borderRadius: 24,
            padding: "2.5rem",
            boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 40px ${activePhase.accentColor}10`,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Details */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${activePhase.accentColor}18`,
                  border: `1px solid ${activePhase.accentColor}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon size={24} style={{ color: activePhase.accentColor }} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: activePhase.accentColor,
                    fontFamily: "ui-monospace, monospace",
                  }}
                >
                  PHASE {activePhase.step} • {activePhase.duration}
                </span>
                <h3 style={{ fontSize: "1.625rem", fontWeight: 800, color: "#fff" }}>
                  {activePhase.title}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
              {activePhase.description}
            </p>

            {/* Key Outcome Highlight */}
            <div
              style={{
                padding: "1rem 1.25rem",
                borderRadius: 12,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#22D3EE", marginBottom: 3 }}>
                Guaranteed Milestone Outcome
              </div>
              <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
                {activePhase.keyOutcome}
              </div>
            </div>

            <a href="#contact" className="btn-brand">
              Kickstart Phase 01 Discovery
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Deliverables List */}
          <div
            style={{
              background: "#080812",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 18,
              padding: "2rem",
            }}
          >
            <div
              style={{
                fontSize: "0.8125rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.5)",
                marginBottom: "1.25rem",
              }}
            >
              Documented Deliverables for Phase {activePhase.step}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {activePhase.deliverables.map((del, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "10px 12px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <CheckCircle2
                    size={16}
                    style={{ color: activePhase.accentColor, flexShrink: 0, marginTop: 3 }}
                  />
                  <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>
                    {del}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

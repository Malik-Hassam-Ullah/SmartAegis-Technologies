"use client";

import React, { useState } from "react";

const phases = [
  {
    number: "01",
    word: "Invent",
    title: "Discovery & architecture",
    duration: "1 – 2 weeks",
    description:
      "We dissect your business goals, data topology, scaling requirements, and compliance constraints. Our architects produce a comprehensive technical blueprint — before a single line of code is written.",
    deliverables: [
      "System architecture diagram",
      "Database schema & data model",
      "API contract & integration map",
      "Sprint roadmap with velocity estimates",
      "Security & threat model assessment",
    ],
    code: `// aegis-blueprint.ts
const blueprint = await system.architect({
  product: "EnterprisePortal",
  scale: "100k+ concurrent users",
  compliance: ["SOC2", "ISO27001"],
  sla: 99.98,
});

blueprint.validate();  // ✓ Architecture approved`,
  },
  {
    number: "02",
    word: "Design",
    title: "Design system & UX",
    duration: "1 – 3 weeks",
    description:
      "Our designers create a tokenised Figma system that maps directly to production CSS. Every component is validated for accessibility, tested across breakpoints, and approved by your stakeholders before we build.",
    deliverables: [
      "Tokenised Figma design system",
      "Interactive clickable prototype",
      "WCAG 2.1 AA accessibility audit",
      "Tailwind token configuration",
      "Component documentation in Storybook",
    ],
    code: `// design-tokens.ts
export const tokens = {
  color: { canvas: "#03070f", accent: "#22d3ee" },
  type:  { body: 14, heading: { base: 24, xl: 48 } },
  radius: { card: 16, button: 10 },
  shadow: { card: "0 0 0 1px rgba(255,255,255,0.08)" }
};`,
  },
  {
    number: "03",
    word: "Build",
    title: "Agile sprints & QA",
    duration: "4 – 10 weeks",
    description:
      "Senior engineers ship in 2-week sprints. Every commit triggers automated testing, static analysis, and vulnerability scanning. You review live staging previews and communicate directly on Slack.",
    deliverables: [
      "Clean TypeScript codebase (strict mode)",
      "85%+ test coverage (unit + integration)",
      "OWASP Top 10 security hardening",
      "Bi-weekly staging deployments",
      "PR-based code review with full audit trail",
    ],
    code: `$ npm test -- --coverage
✓ Test Suites: 48 passed
✓ Tests:       312 passed
✓ Coverage:    92.4%
✓ Security:    0 critical vulnerabilities

All checks passed. Ready for staging.`,
  },
  {
    number: "04",
    word: "Scale",
    title: "DevOps & global deployment",
    duration: "Continuous",
    description:
      "We deploy to globally distributed cloud infrastructure with zero-downtime rolling updates. Automated telemetry, autoscaling, and 24/7 SRE cover keep your product healthy at any traffic volume.",
    deliverables: [
      "Zero-downtime CI/CD pipeline",
      "Terraform infrastructure-as-code",
      "Multi-region database replicas",
      "24/7 Datadog / Prometheus monitoring",
      "Incident response & SLA guarantee",
    ],
    code: `resource "aws_ecs_service" "aegis" {
  name            = "aegis-production"
  cluster         = aws_ecs_cluster.main.id
  desired_count   = 6
  
  deployment_circuit_breaker {
    enable   = true
    rollback = true
  }
}`,
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const current = phases[active];

  return (
    <section id="process" className="section-padding" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container-lg">

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p className="label" style={{ marginBottom: 16, display: "inline-flex" }}>How we work</p>
          <h2 className="display-lg" style={{ color: "var(--text-primary)", marginBottom: 20 }}>
            A process you can hold us to.
          </h2>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 520 }}>
            Four phases, clear deliverables at every step, and direct access to the engineers doing the work.
          </p>
        </div>

        {/* Phase selector tabs */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 40,
            borderBottom: "1px solid var(--border-subtle)",
            overflowX: "auto" as const,
            paddingBottom: 1,
          }}
        >
          {phases.map((p, i) => (
            <button
              key={p.number}
              type="button"
              onClick={() => setActive(i)}
              style={{
                padding: "10px 20px",
                fontSize: 13,
                fontWeight: 600,
                color: active === i ? "var(--text-primary)" : "var(--text-muted)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                borderBottom: `2px solid ${active === i ? "#22d3ee" : "transparent"}`,
                marginBottom: -1,
                whiteSpace: "nowrap" as const,
                transition: "color 0.15s, border-color 0.15s",
              }}
            >
              <span style={{ color: active === i ? "#22d3ee" : "var(--text-muted)", marginRight: 8, fontFamily: "ui-monospace, monospace", fontSize: 11 }}>
                {p.number}
              </span>
              {p.word}
            </button>
          ))}
        </div>

        {/* Active phase content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Left: text + deliverables */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span
                style={{
                  fontSize: 11,
                  fontFamily: "ui-monospace, monospace",
                  color: "#22d3ee",
                  background: "rgba(34,211,238,0.08)",
                  border: "1px solid rgba(34,211,238,0.2)",
                  padding: "4px 10px",
                  borderRadius: 100,
                }}
              >
                {current.duration}
              </span>
            </div>

            <h3 className="display-md" style={{ color: "var(--text-primary)", marginBottom: 16 }}>
              {current.title}
            </h3>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 32 }}>
              {current.description}
            </p>

            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.09em",
                marginBottom: 16,
              }}
            >
              Deliverables
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {current.deliverables.map((d) => (
                <li
                  key={d}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    color: "var(--text-secondary)",
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#22d3ee",
                      flexShrink: 0,
                    }}
                  />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: code terminal */}
          <div
            style={{
              borderRadius: 14,
              background: "#020509",
              border: "1px solid rgba(255,255,255,0.07)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 18px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
              <span style={{ flex: 1, textAlign: "center", fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "ui-monospace, monospace" }}>
                Phase {current.number} — {current.word.toLowerCase()}.ts
              </span>
            </div>
            <pre
              style={{
                margin: 0,
                padding: "24px 22px",
                fontFamily: "ui-monospace, 'SF Mono', Consolas, monospace",
                fontSize: 12.5,
                lineHeight: 1.7,
                color: "#94a3b8",
                whiteSpace: "pre-wrap" as const,
                wordBreak: "break-word" as const,
              }}
            >
              {current.code}
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}

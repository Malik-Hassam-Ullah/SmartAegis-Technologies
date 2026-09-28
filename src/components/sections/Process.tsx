"use client";

import React, { useState } from "react";
import { FileSearch, Palette, Code2, Rocket, CheckCircle2 } from "lucide-react";

const phases = [
  {
    number: "01",
    icon: FileSearch,
    iconColor: "#60A5FA",
    iconBg: "rgba(37,99,235,0.15)",
    word: "Discover",
    title: "Discovery & Architecture Planning",
    duration: "1–2 weeks",
    description:
      "We dissect your business goals, data topology, scaling requirements, and compliance constraints. Our architects produce a comprehensive technical blueprint — before a single line of code is written.",
    deliverables: [
      "System architecture diagram & data flow",
      "Database schema & API contract design",
      "Technology stack recommendation",
      "Sprint roadmap with velocity estimates",
      "Security & threat model assessment",
    ],
    code: `// aegis-discovery.ts
const blueprint = await system.architect({
  product: "EnterprisePortal",
  scale: "100k+ concurrent users",
  compliance: ["SOC2", "ISO27001"],
  uptime: 99.98,
});

// ✅ Architecture approved & documented
blueprint.generateRoadmap({ sprints: 8 });
console.log("Blueprint ready — team kickoff in 48h");`,
  },
  {
    number: "02",
    icon: Palette,
    iconColor: "#A78BFA",
    iconBg: "rgba(139,92,246,0.15)",
    word: "Design",
    title: "UI/UX Design & Prototyping",
    duration: "1–3 weeks",
    description:
      "Our designers build a tokenised Figma system that maps directly to production CSS. Every component is validated for accessibility, tested across breakpoints, and approved before we build.",
    deliverables: [
      "Tokenised Figma component library",
      "Interactive clickable prototype",
      "WCAG 2.1 AA accessibility audit",
      "Tailwind CSS token configuration",
      "Storybook component documentation",
    ],
    code: `// design-tokens.ts
export const tokens = {
  color: {
    primary:  "#2563EB",
    surface:  "#0D1630",
    text:     "#F8FAFC",
  },
  radius: { card: "20px", btn: "12px" },
  shadow: {
    card: "0 20px 60px rgba(0,0,0,0.4)",
  },
  // ✅ Figma → Tailwind sync complete
};`,
  },
  {
    number: "03",
    icon: Code2,
    iconColor: "#86EFAC",
    iconBg: "rgba(34,197,94,0.12)",
    word: "Build",
    title: "Agile Development & QA",
    duration: "4–10 weeks",
    description:
      "Senior engineers ship in 2-week sprints. Every commit triggers automated testing, static analysis, and vulnerability scanning. You review live staging previews and communicate directly on Slack.",
    deliverables: [
      "Clean TypeScript codebase (strict mode)",
      "85%+ test coverage (unit + integration)",
      "OWASP Top 10 security hardening",
      "Bi-weekly staging deployments",
      "Full PR audit trail with code review",
    ],
    code: `$ npm run test:ci --coverage

✓ Test Suites:  48 passed, 0 failed
✓ Tests:        312 passed, 0 failed
✓ Statements:   92.4% coverage
✓ SAST scan:    0 critical vulnerabilities
✓ Performance:  Lighthouse 97/100

→ All checks passed. Deploying to staging...`,
  },
  {
    number: "04",
    icon: Rocket,
    iconColor: "#FCA5A5",
    iconBg: "rgba(239,68,68,0.12)",
    word: "Scale",
    title: "Launch, DevOps & Growth",
    duration: "Ongoing",
    description:
      "We deploy to globally distributed cloud infrastructure with zero-downtime rolling updates. Automated telemetry, autoscaling, and 24/7 SRE cover keep your product healthy at any traffic volume.",
    deliverables: [
      "Zero-downtime CI/CD pipeline",
      "Terraform infrastructure-as-code",
      "Multi-region database replication",
      "24/7 Datadog / Prometheus monitoring",
      "30-day post-launch warranty coverage",
    ],
    code: `# terraform/production.tf
resource "aws_ecs_service" "aegis_app" {
  name          = "aegis-prod"
  cluster       = aws_ecs_cluster.main.id
  desired_count = 6

  deployment_circuit_breaker {
    enable   = true
    rollback = true
  }
}
# ✅ Deployed — 6 replicas running globally`,
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const current = phases[active];
  const PhaseIcon = current.icon;

  return (
    <section id="process" className="section" style={{ background: "#070B19", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container">

        {/* Header */}
        <div className="section-header center">
          <div className="eyebrow">How We Work</div>
          <h2 className="h2" style={{ marginBottom: "1.25rem", maxWidth: 560, margin: "0 auto 1.25rem" }}>
            A Process You Can{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #818CF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hold Us To.
            </span>
          </h2>
          <p className="body-lg" style={{ maxWidth: 500, margin: "0 auto" }}>
            Four phases. Clear deliverables at each milestone. Direct Slack access to the engineer building your product.
          </p>
        </div>

        {/* Phase stepper tabs */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: "2.5rem",
            background: "#0C1226",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 16,
            padding: 6,
          }}
        >
          {phases.map((p, i) => {
            const Icon = p.icon;
            const isActive = active === i;
            return (
              <button
                key={p.number}
                type="button"
                onClick={() => setActive(i)}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "12px 16px",
                  borderRadius: 12,
                  border: "none",
                  cursor: "pointer",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(99,102,241,0.1))"
                    : "transparent",
                  borderColor: isActive ? "rgba(37,99,235,0.3)" : "transparent",
                  borderWidth: 1,
                  borderStyle: "solid",
                  transition: "all 0.2s",
                }}
              >
                <Icon size={16} style={{ color: isActive ? p.iconColor : "#475569", flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: isActive ? "#E2E8F0" : "#64748B",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p.word}
                </span>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontFamily: "ui-monospace, monospace",
                    color: isActive ? p.iconColor : "#475569",
                    fontWeight: 700,
                  }}
                >
                  {p.number}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            background: "#0D1630",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {/* Left: description */}
          <div style={{ padding: "2.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: current.iconBg,
                  border: `1px solid ${current.iconColor}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PhaseIcon size={22} style={{ color: current.iconColor }} />
              </div>
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: 100,
                  fontSize: "0.6875rem",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: current.iconColor,
                  background: current.iconBg,
                  border: `1px solid ${current.iconColor}30`,
                }}
              >
                {current.duration}
              </span>
            </div>

            <h3 className="h3" style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
              {current.title}
            </h3>
            <p className="body" style={{ marginBottom: "1.75rem", lineHeight: 1.75 }}>
              {current.description}
            </p>

            <p style={{ fontSize: "0.6875rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569", marginBottom: "1rem" }}>
              Key deliverables
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {current.deliverables.map((d) => (
                <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2 size={15} style={{ color: current.iconColor, flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: "0.9rem", color: "#94A3B8" }}>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: code terminal */}
          <div
            style={{
              background: "#020509",
              borderLeft: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Terminal chrome */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 20px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
                <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
              <span
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontSize: "0.6875rem",
                  color: "rgba(255,255,255,0.2)",
                  fontFamily: "ui-monospace, monospace",
                }}
              >
                aegis — phase-{current.number}.ts
              </span>
            </div>
            {/* Code content */}
            <pre
              style={{
                margin: 0,
                padding: "1.5rem",
                fontFamily: "'Fira Code', 'SF Mono', ui-monospace, monospace",
                fontSize: "0.8125rem",
                lineHeight: 1.75,
                color: "#94A3B8",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
                flexGrow: 1,
              }}
              dangerouslySetInnerHTML={{
                __html: current.code
                  .replace(/\/\/ ✅/g, '<span style="color:#86EFAC">// ✅</span>')
                  .replace(/#.*/g, (m) => `<span style="color:#64748B">${m}</span>`)
                  .replace(/→/g, '<span style="color:#60A5FA">→</span>')
                  .replace(/✓/g, '<span style="color:#86EFAC">✓</span>'),
              }}
            />
          </div>
        </div>

        {/* Timeline progress bar */}
        <div style={{ marginTop: "2rem", display: "flex", gap: 6 }}>
          {phases.map((p, i) => (
            <div
              key={p.number}
              onClick={() => setActive(i)}
              style={{
                flex: 1,
                height: 4,
                borderRadius: 100,
                background: i <= active ? "linear-gradient(90deg, #2563EB, #6366F1)" : "rgba(255,255,255,0.06)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

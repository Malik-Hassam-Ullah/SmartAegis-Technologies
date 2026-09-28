"use client";

import React, { useState } from "react";
import { ArrowRight, Globe, Smartphone, Layers, Figma, X } from "lucide-react";

const services = [
  {
    id: "web",
    icon: Globe,
    title: "Web applications",
    short: "Next.js · React · TypeScript",
    description:
      "From marketing sites to real-time trading dashboards — we architect web experiences that are fast by default, secure by design, and built to scale to millions of users.",
    capabilities: [
      "Next.js App Router with edge rendering",
      "Progressive Web Apps (PWA) with offline support",
      "GraphQL / REST API integration",
      "Headless CMS (Sanity, Contentful, Strapi)",
      "Micro-frontend architecture",
      "Core Web Vitals optimisation",
    ],
    tags: ["Next.js", "React", "TypeScript", "GraphQL", "Tailwind CSS"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile apps",
    short: "Flutter · React Native · iOS · Android",
    description:
      "Smooth, native-feeling apps shipped simultaneously to iOS and Android. Biometric auth, offline sync, geolocation, and push notifications handled end-to-end.",
    capabilities: [
      "Flutter & React Native cross-platform builds",
      "Offline-first sync with local encrypted storage",
      "Native biometric authentication",
      "Real-time geolocation & mapping",
      "App Store & Play Store CI/CD pipelines",
      "OTA update infrastructure",
    ],
    tags: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "saas",
    icon: Layers,
    title: "Enterprise SaaS",
    short: "Multi-tenant · Microservices · Cloud",
    description:
      "Purpose-built SaaS platforms with multi-tenant isolation, subscription billing, admin tooling, and elastic cloud infrastructure — ready for enterprise procurement.",
    capabilities: [
      "Multi-tenant architecture with schema partitioning",
      "Stripe / Lemon Squeezy billing & webhooks",
      "Role-based access control (RBAC)",
      "Event-driven microservices on Kafka / RabbitMQ",
      "SOC2 / ISO27001 compliance paths",
      "Automated Terraform infrastructure-as-code",
    ],
    tags: ["Go", "Python", "AWS", "Docker", "Kafka", "PostgreSQL"],
  },
  {
    id: "design",
    icon: Figma,
    title: "Product design",
    short: "UX · Figma · Design systems",
    description:
      "Design systems that translate directly to production code. We run discovery, wireframing, and UX audits — then hand off Figma tokens that map 1:1 to Tailwind.",
    capabilities: [
      "Figma component libraries and design tokens",
      "Interactive high-fidelity prototypes",
      "WCAG 2.1 AA accessibility compliance",
      "UX flow audits and journey mapping",
      "Direct Figma → Tailwind token sync",
      "Storybook component documentation",
    ],
    tags: ["Figma", "Design Tokens", "Storybook", "Framer"],
  },
];

export function CoreServices() {
  const [active, setActive] = useState<(typeof services)[0] | null>(null);

  return (
    <>
      <section id="services" className="section-padding">
        <div className="container-lg">

          {/* Section header */}
          <div style={{ maxWidth: 600, marginBottom: 56 }}>
            <p className="label" style={{ marginBottom: 20, display: "inline-flex" }}>Services</p>
            <h2 className="display-lg" style={{ color: "var(--text-primary)", marginBottom: 20 }}>
              Everything you need. Nothing you don't.
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Four focused engineering disciplines. Deep expertise in each. No fragmented generalists.
            </p>
          </div>

          {/* 2×2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  className="card card-hover"
                  style={{ padding: "32px", cursor: "default", display: "flex", flexDirection: "column" }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "rgba(34,211,238,0.08)",
                      border: "1px solid rgba(34,211,238,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} style={{ color: "#22d3ee" }} />
                  </div>

                  {/* Text */}
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: 8,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16, fontFamily: "ui-monospace, monospace" }}>
                    {svc.short}
                  </p>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 24, flexGrow: 1 }}>
                    {svc.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                    {svc.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => setActive(svc)}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#22d3ee",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    View capabilities
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Detail drawer / modal */}
      {active && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(12px)",
          }}
          onClick={() => setActive(null)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 560,
              background: "var(--surface-2)",
              border: "1px solid var(--border-default)",
              borderRadius: 20,
              padding: 40,
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--text-muted)",
              }}
            >
              <X size={16} />
            </button>

            <div style={{ marginBottom: 8 }}>
              <span className="tag" style={{ fontSize: 11 }}>{active.short}</span>
            </div>
            <h3
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.025em",
                marginBottom: 16,
              }}
            >
              {active.title}
            </h3>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 28 }}>
              {active.description}
            </p>

            <p style={{ fontSize: 11, fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 16 }}>
              What's included
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {active.capabilities.map((cap) => (
                <li
                  key={cap}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 14,
                    color: "var(--text-secondary)",
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: "rgba(34,211,238,0.1)",
                      border: "1px solid rgba(34,211,238,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 4l2 2 4-4" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {cap}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 32 }}>
              <a
                href="#contact"
                onClick={() => setActive(null)}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Discuss this service
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

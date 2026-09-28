"use client";

import React, { useState } from "react";
import { ArrowRight, Globe, Smartphone, Layers, Figma, CheckCircle2, X } from "lucide-react";

const services = [
  {
    id: "web",
    icon: Globe,
    iconBox: "blue",
    badgeColor: "#3B82F6",
    badgeBg: "rgba(37,99,235,0.12)",
    badgeBorder: "rgba(37,99,235,0.25)",
    title: "Custom Web Development",
    short: "Next.js · React · PWAs · High-Speed Portals",
    description:
      "We craft blazing-fast, SEO-optimised web applications from marketing sites to real-time SaaS platforms. Built on modern edge-ready infrastructure that scales with your growth.",
    features: [
      "Next.js App Router with edge rendering",
      "Progressive Web Apps (PWA) & offline support",
      "REST / GraphQL API integration layer",
      "Headless CMS (Sanity, Contentful, Strapi)",
      "Core Web Vitals & performance optimisation",
      "Micro-frontend & modular architecture",
    ],
    tags: ["Next.js", "React", "TypeScript", "GraphQL", "Tailwind"],
  },
  {
    id: "mobile",
    icon: Smartphone,
    iconBox: "violet",
    badgeColor: "#8B5CF6",
    badgeBg: "rgba(139,92,246,0.12)",
    badgeBorder: "rgba(139,92,246,0.25)",
    title: "Mobile App Engineering",
    short: "iOS · Android · React Native · Flutter",
    description:
      "Native-feeling apps shipped simultaneously to iOS and Android. We handle biometric auth, real-time sync, geolocation, push notifications, and App Store CI/CD pipelines.",
    features: [
      "Flutter & React Native cross-platform builds",
      "Offline-first encrypted local storage",
      "Native biometric authentication",
      "Real-time geolocation & live maps",
      "App Store & Play Store automated pipelines",
      "OTA update delivery & crash analytics",
    ],
    tags: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
  },
  {
    id: "saas",
    icon: Layers,
    iconBox: "green",
    badgeColor: "#22C55E",
    badgeBg: "rgba(34,197,94,0.1)",
    badgeBorder: "rgba(34,197,94,0.25)",
    title: "Enterprise Software & SaaS",
    short: "Custom ERPs · Workflows · Cloud Platforms",
    description:
      "Purpose-built SaaS platforms with multi-tenant isolation, subscription billing, admin tooling, and elastic cloud infrastructure — ready for enterprise procurement and compliance.",
    features: [
      "Multi-tenant architecture with schema isolation",
      "Stripe / Lemon Squeezy billing & webhooks",
      "Role-based access control (RBAC)",
      "Event-driven microservices on Kafka/RabbitMQ",
      "SOC2 / ISO27001 compliance pathways",
      "Terraform infrastructure-as-code (IaC)",
    ],
    tags: ["Go", "Python", "AWS", "Docker", "Kafka", "PostgreSQL"],
  },
  {
    id: "design",
    icon: Figma,
    iconBox: "indigo",
    badgeColor: "#6366F1",
    badgeBg: "rgba(99,102,241,0.12)",
    badgeBorder: "rgba(99,102,241,0.25)",
    title: "UI/UX & Product Design",
    short: "Figma Prototyping · Wireframes · Design Systems",
    description:
      "Design systems that translate directly to production code. We run discovery, wireframing, and UX audits — then hand off Figma tokens that map 1:1 to your component library.",
    features: [
      "Figma component library & design tokens",
      "Interactive high-fidelity prototypes",
      "WCAG 2.1 AA accessibility compliance",
      "UX flow audits & journey mapping",
      "Figma → Tailwind / CSS direct token sync",
      "Storybook component documentation",
    ],
    tags: ["Figma", "Design Tokens", "Storybook", "Framer", "WCAG"],
  },
];

const iconBoxStyles: Record<string, React.CSSProperties> = {
  blue: {
    background: "linear-gradient(135deg, rgba(37,99,235,0.2), rgba(99,102,241,0.1))",
    border: "1px solid rgba(37,99,235,0.25)",
  },
  violet: {
    background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(99,102,241,0.1))",
    border: "1px solid rgba(139,92,246,0.25)",
  },
  green: {
    background: "linear-gradient(135deg, rgba(34,197,94,0.15), rgba(6,182,212,0.08))",
    border: "1px solid rgba(34,197,94,0.2)",
  },
  indigo: {
    background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.1))",
    border: "1px solid rgba(99,102,241,0.25)",
  },
};

const iconColors = { blue: "#60A5FA", violet: "#A78BFA", green: "#86EFAC", indigo: "#818CF8" };

export function CoreServices() {
  const [active, setActive] = useState<(typeof services)[0] | null>(null);

  return (
    <>
      <section id="services" className="section" style={{ background: "#070B19" }}>
        <div className="container">

          {/* Section header */}
          <div className="section-header center">
            <div className="eyebrow">Services We Deliver</div>
            <h2 className="h2" style={{ marginBottom: "1.25rem", maxWidth: 600, margin: "0 auto 1.25rem" }}>
              Everything You Need to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #60A5FA, #818CF8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ship & Scale
              </span>
            </h2>
            <p className="body-lg" style={{ maxWidth: 560, margin: "0 auto" }}>
              Four focused engineering disciplines. Deep expertise in each. No fragmented generalists — just senior specialists who own the outcome.
            </p>
          </div>

          {/* 2×2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.25rem",
            }}
          >
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  style={{
                    background: "#0D1630",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 20,
                    padding: "2.25rem",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all 0.25s ease",
                    cursor: "default",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = `${svc.badgeColor}40`;
                    el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${svc.badgeColor}20`;
                    el.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "rgba(255,255,255,0.07)";
                    el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Icon + badge row */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        ...iconBoxStyles[svc.iconBox],
                      }}
                    >
                      <Icon size={24} style={{ color: iconColors[svc.iconBox as keyof typeof iconColors] }} />
                    </div>
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: 100,
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: svc.badgeColor,
                        background: svc.badgeBg,
                        border: `1px solid ${svc.badgeBorder}`,
                      }}
                    >
                      {svc.id === "web" ? "Most Popular" : svc.id === "saas" ? "Enterprise" : svc.id === "design" ? "Strategy" : ""}
                    </span>
                  </div>

                  {/* Title & stack */}
                  <h3 className="h4" style={{ marginBottom: 6, fontSize: "1.1875rem" }}>
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#64748B",
                      fontFamily: "ui-monospace, monospace",
                      marginBottom: "1rem",
                    }}
                  >
                    {svc.short}
                  </p>
                  <p className="body" style={{ marginBottom: "1.5rem", flexGrow: 1, fontSize: "0.9rem" }}>
                    {svc.description}
                  </p>

                  {/* Feature list — 3 items visible */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: "1.5rem" }}>
                    {svc.features.slice(0, 3).map((feat) => (
                      <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <CheckCircle2 size={14} style={{ color: svc.badgeColor, flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontSize: "0.875rem", color: "#94A3B8" }}>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.5rem" }}>
                    {svc.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => setActive(svc)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      padding: "10px 20px",
                      borderRadius: 10,
                      background: svc.badgeBg,
                      border: `1px solid ${svc.badgeBorder}`,
                      color: svc.badgeColor,
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      width: "100%",
                      justifyContent: "center",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = `${svc.badgeColor}20`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background = svc.badgeBg;
                    }}
                  >
                    Explore Architecture
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA strip */}
          <div
            style={{
              marginTop: "2.5rem",
              padding: "2rem 2.5rem",
              borderRadius: 16,
              background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(99,102,241,0.06))",
              border: "1px solid rgba(37,99,235,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h4 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#F8FAFC", marginBottom: 4 }}>
                Not sure which service fits your project?
              </h4>
              <p style={{ fontSize: "0.875rem", color: "#64748B" }}>
                Book a free 30-min discovery call — we'll map the right solution for you.
              </p>
            </div>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "0.875rem 2rem",
                borderRadius: 12,
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.9375rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(37,99,235,0.4)",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
                flexShrink: 0,
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
              Schedule Free Consultation
              <ArrowRight size={15} />
            </a>
          </div>

        </div>
      </section>

      {/* Modal */}
      {active && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            background: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(16px)",
          }}
          onClick={() => setActive(null)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 580,
              background: "#0D1630",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24,
              padding: "2.5rem",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 30px 80px rgba(0,0,0,0.7)",
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
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#64748B",
              }}
            >
              <X size={16} />
            </button>

            <div
              style={{
                padding: "4px 12px",
                borderRadius: 100,
                display: "inline-flex",
                fontSize: "0.6875rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: active.badgeColor,
                background: active.badgeBg,
                border: `1px solid ${active.badgeBorder}`,
                marginBottom: "1.25rem",
              }}
            >
              Architecture breakdown
            </div>

            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#F8FAFC", marginBottom: 8, letterSpacing: "-0.025em" }}>
              {active.title}
            </h3>
            <p style={{ fontSize: "0.75rem", color: "#64748B", fontFamily: "ui-monospace, monospace", marginBottom: "1.25rem" }}>
              {active.short}
            </p>
            <p style={{ fontSize: "0.9375rem", color: "#94A3B8", lineHeight: 1.75, marginBottom: "1.75rem" }}>
              {active.description}
            </p>

            <p style={{ fontSize: "0.6875rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#475569", marginBottom: "1rem" }}>
              Full capability set
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: "1.75rem" }}>
              {active.features.map((feat) => (
                <div key={feat} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle2 size={15} style={{ color: active.badgeColor, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9375rem", color: "#CBD5E1" }}>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "1.75rem" }}>
              {active.tags.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>

            <a
              href="#contact"
              onClick={() => setActive(null)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "1rem",
                borderRadius: 12,
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(37,99,235,0.4)",
              }}
            >
              Start this project now
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

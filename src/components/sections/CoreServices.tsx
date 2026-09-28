"use client";

import React, { useState } from "react";
import {
  Globe,
  Smartphone,
  Layers,
  Figma,
  Bot,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  metrics: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    icon: Globe,
    accentColor: "#E10600",
    badgeBg: "rgba(225, 6, 0, 0.12)",
    badgeBorder: "rgba(225, 6, 0, 0.28)",
    category: "Full-Stack Web",
    title: "Custom Web Applications",
    tagline: "Ultra-fast, responsive web apps built for high conversion & infinite scale.",
    description:
      "We design and build production-grade web applications from high-speed enterprise portals to interactive SaaS frontends. Leveraging Next.js App Router, React, and edge infrastructure to deliver sub-second load times and flawless SEO performance.",
    deliverables: [
      "Next.js 15 & React Server Components (RSC)",
      "High-performance REST & GraphQL API layers",
      "Progressive Web Apps (PWA) with offline capabilities",
      "Headless CMS integration (Sanity, Strapi, Contentful)",
      "Core Web Vitals 95+ score optimization",
      "Robust CI/CD deployment pipelines on Vercel & AWS",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "GraphQL"],
    metrics: "99.99% Uptime | Sub-800ms Page Loads",
  },
  {
    id: "mobile-apps",
    icon: Smartphone,
    accentColor: "#FF4D49",
    badgeBg: "rgba(255, 77, 73, 0.12)",
    badgeBorder: "rgba(255, 77, 73, 0.28)",
    category: "Mobile Engineering",
    title: "Mobile App Development",
    tagline: "Award-winning iOS & Android mobile apps engineered with single-codebase velocity.",
    description:
      "From zero to App Store and Google Play launch, we craft native-performing mobile experiences. We integrate biometric authentication, real-time websockets, background sync, dynamic geolocation, and push notification systems.",
    deliverables: [
      "Flutter & React Native cross-platform excellence",
      "Native Swift (iOS) and Kotlin (Android) modules",
      "Biometric FaceID/TouchID security protocols",
      "Real-time GPS tracking & interactive Mapbox integrations",
      "Offline-first SQLite/WatermelonDB data synchronization",
      "Automated Fastlane deployment to TestFlight & Google Play",
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "SQLite"],
    metrics: "4.8+ App Store Average Rating across 20+ apps",
  },
  {
    id: "enterprise-saas",
    icon: Layers,
    accentColor: "#FFC533",
    badgeBg: "rgba(255, 197, 51, 0.12)",
    badgeBorder: "rgba(255, 197, 51, 0.28)",
    category: "Cloud & SaaS",
    title: "Enterprise SaaS & Cloud Systems",
    tagline: "Multi-tenant cloud architectures designed to process millions of transactions securely.",
    description:
      "We architect enterprise platforms with robust multi-tenant isolation, complex subscription monetization, granular role-based permissions (RBAC), and automated audit logging engineered for SOC2 and ISO27001 readiness.",
    deliverables: [
      "Multi-tenant tenant schema & database isolation",
      "Stripe Billing & Lemon Squeezy recurring engine",
      "Granular RBAC & SAML/SSO enterprise authentication",
      "Asynchronous microservices with Kafka & Redis BullMQ",
      "Elastic autoscaling clusters with Docker & Kubernetes",
      "Automated compliance audit logs & disaster recovery plans",
    ],
    techStack: ["Go", "Python", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS"],
    metrics: "Processing $25M+ in annual client billing volume",
  },
  {
    id: "product-design",
    icon: Figma,
    accentColor: "#E10600",
    badgeBg: "rgba(225, 6, 0, 0.12)",
    badgeBorder: "rgba(225, 6, 0, 0.28)",
    category: "UI/UX & Product",
    title: "UI/UX & Design Systems",
    tagline: "Intuitive product design that captivates users and accelerates dev handover.",
    description:
      "Great software begins with human-centered research. We conduct user discovery, wireframing, interactive prototyping, and build living Figma design systems mapped 1:1 to code tokens, guaranteeing zero design-to-code drift.",
    deliverables: [
      "Complete design tokens library (colors, typography, spacing)",
      "Clickable, interactive high-fidelity Figma prototypes",
      "WCAG 2.1 AA international accessibility standards",
      "Comprehensive user journey & conversion funnel mapping",
      "Custom micro-interactions & motion design specs",
      "Direct code handoff with Tailwind/CSS variable parity",
    ],
    techStack: ["Figma", "Framer", "Storybook", "Adobe CC", "Tokens Studio"],
    metrics: "42% average increase in user onboarding completion",
  },
  {
    id: "ai-automation",
    icon: Bot,
    accentColor: "#FF4D49",
    badgeBg: "rgba(255, 77, 73, 0.12)",
    badgeBorder: "rgba(255, 77, 73, 0.28)",
    category: "Artificial Intelligence",
    title: "AI & Intelligent Automation",
    tagline: "Empower your business workflows with tailored LLM pipelines and automated agents.",
    description:
      "Transform static software into cognitive systems. We build production Retrieval-Augmented Generation (RAG) pipelines, intelligent customer support agents, automated document extraction, and predictive analytics models.",
    deliverables: [
      "Custom RAG pipelines powered by Pinecone & pgvector",
      "Fine-tuned OpenAI, Anthropic, and Llama 3 models",
      "Autonomous workflow agents for customer operations",
      "Intelligent OCR & structured document extraction",
      "Enterprise guardrails, prompt sanitization & privacy compliance",
      "Real-time semantic search and recommendation engines",
    ],
    techStack: ["OpenAI", "LangChain", "Llama 3", "Pinecone", "Python", "FastAPI"],
    metrics: "60%+ reduction in repetitive operational workflows",
  },
  {
    id: "devops-security",
    icon: ShieldCheck,
    accentColor: "#FFC533",
    badgeBg: "rgba(255, 197, 51, 0.12)",
    badgeBorder: "rgba(255, 197, 51, 0.28)",
    category: "DevOps & Security",
    title: "Cloud Infrastructure & Cybersecurity",
    tagline: "Bulletproof serverless and containerized infrastructure with continuous security.",
    description:
      "We build immutable, automated cloud platforms on AWS, GCP, and Azure. With automated Terraform configurations, vulnerability scanning, WAF protection, and 24/7 telemetry monitoring, your infrastructure remains resilient under pressure.",
    deliverables: [
      "Terraform Infrastructure as Code (IaC) architectures",
      "Zero-downtime blue/green CI/CD automation pipelines",
      "Automated WAF, DDoS mitigation & TLS 1.3 encryption",
      "Comprehensive Datadog, Prometheus & Grafana observability",
      "Quarterly penetration testing & vulnerability patch routines",
      "Multi-region failover & automated snapshot backups",
    ],
    techStack: ["AWS", "Google Cloud", "Terraform", "GitHub Actions", "Datadog", "Cloudflare"],
    metrics: "Zero security incidents across all client deployments",
  },
];

export function CoreServices() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section
      id="services"
      style={{
        background: "#0B0B0E",
        padding: "6rem 0",
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Background glow effects */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(circle, rgba(225, 6, 0, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-page" style={{ position: "relative" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 4rem" }}>
          <div className="eyebrow">
            <Sparkles size={14} style={{ color: "#E10600" }} />
            OUR SPECIALIZATIONS
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "#FFFFFF",
              marginBottom: "1.25rem",
            }}
          >
            Engineering What’s Next in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FFFFFF 20%, #FF4D49 60%, #E10600 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Digital Technology
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
            }}
          >
            From modern web applications and native mobile software to scalable cloud SaaS and AI
            integrations, our dedicated engineering teams turn complex technical hurdles into competitive
            market advantages.
          </p>
        </div>

        {/* 6 Services Grid (3x2 on desktop, 1 on mobile) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {SERVICES.map((svc) => {
            const IconComponent = svc.icon;
            return (
              <div
                key={svc.id}
                style={{
                  background: "#111116",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 20,
                  padding: "2.25rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
                onClick={() => setSelectedService(svc)}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.borderColor = svc.accentColor;
                  target.style.transform = "translateY(-4px)";
                  target.style.boxShadow = `0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px ${svc.accentColor}33`;
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.borderColor = "rgba(255,255,255,0.06)";
                  target.style.transform = "translateY(0)";
                  target.style.boxShadow = "none";
                }}
              >
                {/* Top: Icon + Category pill */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        background: svc.badgeBg,
                        border: `1px solid ${svc.badgeBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconComponent size={26} style={{ color: svc.accentColor }} />
                    </div>
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: 100,
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {svc.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    style={{
                      fontSize: "1.375rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {svc.tagline}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "1.75rem" }}>
                    {svc.deliverables.slice(0, 3).map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <CheckCircle2
                          size={15}
                          style={{ color: svc.accentColor, flexShrink: 0, marginTop: 3 }}
                        />
                        <span style={{ fontSize: "0.845rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.4 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom: Tech Tags & Explore Link */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: "1.5rem",
                      paddingTop: "1rem",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {svc.techStack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "3px 8px",
                          borderRadius: 6,
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          color: "rgba(255,255,255,0.45)",
                          fontFamily: "ui-monospace, monospace",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: svc.accentColor,
                    }}
                  >
                    <span>View Full Scope</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner to Estimator */}
        <div
          style={{
            marginTop: "3.5rem",
            background: "linear-gradient(135deg, rgba(225,6,0,0.1) 0%, rgba(17,17,22,0.95) 100%)",
            border: "1px solid rgba(225,6,0,0.25)",
            borderRadius: 20,
            padding: "2rem 2.5rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <div style={{ fontSize: "1.125rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>
              Need a personalized technical roadmap or custom architecture?
            </div>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
              Use our interactive estimator to calculate development timeline and transparent pricing instantly.
            </p>
          </div>
          <a href="#estimator" className="btn-brand">
            Try Cost Estimator
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
          onClick={() => setSelectedService(null)}
        >
          <div
            style={{
              background: "#111116",
              border: `1px solid ${selectedService.accentColor}55`,
              borderRadius: 24,
              maxWidth: "680px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "2.5rem",
              position: "relative",
              boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={18} />
            </button>

            {/* Header info */}
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: selectedService.badgeBg,
                  border: `1px solid ${selectedService.badgeBorder}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <selectedService.icon size={26} style={{ color: selectedService.accentColor }} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: selectedService.accentColor,
                  }}
                >
                  {selectedService.category}
                </span>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff" }}>
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "1.75rem" }}>
              {selectedService.description}
            </p>

            {/* Deliverables checklist */}
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "1rem",
                }}
              >
                Core Engineering Deliverables
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.75rem" }}>
                {selectedService.deliverables.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      padding: "10px 14px",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: selectedService.accentColor, flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: "0.875rem", color: "#F1F5F9" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "0.75rem",
                }}
              >
                Technologies Used
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {selectedService.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "#CBD5E1",
                      fontFamily: "ui-monospace, monospace",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Metric & Modal CTA */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>Standard Benchmark</div>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff" }}>
                  {selectedService.metrics}
                </div>
              </div>
              <a
                href="#contact"
                className="btn-brand"
                onClick={() => setSelectedService(null)}
              >
                Request Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

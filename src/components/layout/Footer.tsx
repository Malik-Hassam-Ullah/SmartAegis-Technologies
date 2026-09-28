"use client";

import React from "react";
import { Github, Linkedin, Twitter, ArrowRight, Shield, Zap } from "lucide-react";

const navCols = [
  {
    heading: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "Enterprise SaaS", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Work", href: "#portfolio" },
      { label: "Our Process", href: "#process" },
      { label: "Why SmartAegis", href: "#why-aegis" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Start a Project", href: "#contact" },
      { label: "Cost Estimator", href: "#estimator" },
      { label: "contact@smartaegis.tech", href: "mailto:contact@smartaegis.tech" },
      { label: "Book a Call", href: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#040810",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top CTA Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(99,102,241,0.08) 100%)",
          borderBottom: "1px solid rgba(37,99,235,0.15)",
          padding: "3rem 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.025em", marginBottom: 6 }}>
              Ready to start building?
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "#64748B" }}>
              Join 50+ companies that trust SmartAegis to engineer their most critical software.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
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
              Launch Your Project
              <ArrowRight size={15} />
            </a>
            <a
              href="#estimator"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "0.875rem 2rem",
                borderRadius: 12,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#E2E8F0",
                fontWeight: 600,
                fontSize: "0.9375rem",
                textDecoration: "none",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.09)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#E2E8F0";
              }}
            >
              Estimate Cost
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container" style={{ padding: "4rem 2.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.75fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand col */}
          <div>
            <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 12px rgba(37,99,235,0.4)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 6V12C20 16.4 16.9 20.5 12 22C7.1 20.5 4 16.4 4 12V6L12 2Z" fill="white" opacity="0.9"/>
                  <path d="M9 12.5L11 14.5L16 9.5" stroke="rgba(37,99,235,1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "1.0625rem", fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  Smart<span style={{ color: "#60A5FA" }}>Aegis</span>
                </div>
                <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#334155", lineHeight: 1, marginTop: 2 }}>
                  Technologies
                </div>
              </div>
            </a>

            <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.7, maxWidth: 280, marginBottom: "1.5rem" }}>
              Premier software development studio specialising in web, mobile, and enterprise software engineering for global startups and enterprises.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { icon: Github, href: "https://github.com/Malik-Hassam-Ullah", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com", label: "X / Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#475569",
                    textDecoration: "none",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#60A5FA";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(37,99,235,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,99,235,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#475569";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#334155",
                  marginBottom: "1rem",
                }}
              >
                {col.heading}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "#475569",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#CBD5E1")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#475569")}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: "0.8125rem", color: "#334155" }}>
              © {new Date().getFullYear()} SmartAegis Technologies. All rights reserved.
            </span>
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service", "Security"].map((t) => (
              <span
                key={t}
                style={{ fontSize: "0.8125rem", color: "#334155", cursor: "pointer", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "#94A3B8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLSpanElement).style.color = "#334155")}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Compliance badges */}
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { icon: Shield, label: "SOC2 Ready", color: "#60A5FA" },
              { icon: Zap, label: "OWASP Secure", color: "#86EFAC" },
            ].map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "4px 10px",
                  borderRadius: 6,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "#475569",
                }}
              >
                <Icon size={12} style={{ color }} />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

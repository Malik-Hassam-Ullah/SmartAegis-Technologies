"use client";

import React from "react";
import { ArrowRight, Mail, Phone, MapPin, Shield, Sparkles } from "lucide-react";

const SERVICES_LINKS = [
  { label: "Custom Web Applications", href: "#services" },
  { label: "iOS & Android Mobile Apps", href: "#services" },
  { label: "Enterprise SaaS & Cloud", href: "#services" },
  { label: "UI/UX & Product Design", href: "#services" },
  { label: "AI & Intelligent Automation", href: "#services" },
  { label: "Cloud DevOps & Cybersecurity", href: "#services" },
];

const COMPANY_LINKS = [
  { label: "Our Engineering Process", href: "#process" },
  { label: "Featured Case Studies", href: "#portfolio" },
  { label: "Why SmartAegis", href: "#why-aegis" },
  { label: "Project Cost Estimator", href: "#estimator" },
  { label: "Frequently Asked Questions", href: "#faq" },
  { label: "Client Consultation", href: "#contact" },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "#08080C",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top Pre-Footer Kickoff Banner (Elexoft-style) */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(225,6,0,0.12) 0%, rgba(17,17,22,0.98) 100%)",
          borderBottom: "1px solid rgba(225,6,0,0.2)",
          padding: "3.5rem 0",
        }}
      >
        <div
          className="container-page"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 12px",
                borderRadius: 100,
                background: "rgba(225,6,0,0.14)",
                border: "1px solid rgba(225,6,0,0.28)",
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "#FF4D49",
                marginBottom: "0.75rem",
              }}
            >
              <Sparkles size={12} />
              ACCELERATE TIME-TO-MARKET
            </div>
            <h3
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                marginBottom: 6,
              }}
            >
              Ready to engineer your next competitive advantage?
            </h3>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)" }}>
              Join 50+ visionary founders and enterprises that trust SmartAegis to build mission-critical products.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#contact" className="btn-brand btn-lg">
              Launch Your Project
              <ArrowRight size={16} />
            </a>
            <a href="#estimator" className="btn-outline btn-lg">
              Calculate Cost
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div style={{ padding: "5rem 0 3rem" }}>
        <div
          className="container-page"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Brand Col */}
          <div style={{ maxWidth: "340px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #E10600, #990400)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 20px rgba(225,6,0,0.45)",
                }}
              >
                <Shield size={20} style={{ color: "#fff" }} />
              </div>
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: "-0.03em",
                }}
              >
                SmartAegis<span style={{ color: "#E10600" }}>.</span>
              </span>
            </div>

            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Premier digital engineering firm specializing in bespoke web platforms, native mobile applications,
              and scalable enterprise cloud ecosystems.
            </p>

            <div style={{ fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "#FF4D49" }}>
              INVENT • BUILD • SCALE
            </div>
          </div>

          {/* Col 1: Services */}
          <div>
            <div
              style={{
                fontSize: "0.8125rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                marginBottom: "1.25rem",
              }}
            >
              Core Services
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {SERVICES_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4D49")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div
              style={{
                fontSize: "0.8125rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                      transition: "color 0.15s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4D49")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact info */}
          <div>
            <div
              style={{
                fontSize: "0.8125rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                marginBottom: "1.25rem",
              }}
            >
              Headquarters
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.55)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <MapPin size={16} style={{ color: "#E10600", flexShrink: 0, marginTop: 3 }} />
                <span>Lahore, Pakistan • Dubai, UAE • Wilmington, USA</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Mail size={16} style={{ color: "#E10600", flexShrink: 0 }} />
                <a
                  href="mailto:contact@smartaegis.tech"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4D49")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  contact@smartaegis.tech
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Phone size={16} style={{ color: "#E10600", flexShrink: 0 }} />
                <a
                  href="tel:+923001234567"
                  style={{ color: "inherit", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FF4D49")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  +92 300 1234567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1.75rem 0",
        }}
      >
        <div
          className="container-page"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            fontSize: "0.8125rem",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <div>
            © {new Date().getFullYear()} SmartAegis Technologies. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="#privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
            <a href="#terms" style={{ color: "inherit", textDecoration: "none" }}>Terms of Service</a>
            <a href="#security" style={{ color: "inherit", textDecoration: "none" }}>Security Whitepaper</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

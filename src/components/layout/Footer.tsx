"use client";

import React from "react";
import Link from "next/link";
import { AegisShieldLogo } from "../ui/AegisShieldLogo";
import { Github, Linkedin, Twitter } from "lucide-react";

const nav = [
  {
    heading: "Services",
    links: [
      { label: "Web applications", href: "#services" },
      { label: "Mobile apps", href: "#services" },
      { label: "Enterprise SaaS", href: "#services" },
      { label: "Product design", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our work", href: "#portfolio" },
      { label: "Process", href: "#process" },
      { label: "Why SmartAegis", href: "#why-aegis" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Start a project", href: "#contact" },
      { label: "Cost estimator", href: "#estimator" },
      { label: "contact@smartaegis.tech", href: "mailto:contact@smartaegis.tech" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--canvas)",
        paddingTop: 64,
        paddingBottom: 40,
      }}
    >
      <div className="container-lg">

        {/* Top row: brand + nav */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 64,
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", marginBottom: 20 }}>
              <AegisShieldLogo size="sm" showTagline={false} />
            </Link>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              Premier software development studio specialising in web, mobile, and enterprise software engineering.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
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
                    width: 34,
                    height: 34,
                    borderRadius: 8,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.15s, border-color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#22d3ee";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,211,238,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {nav.map((col) => (
            <div key={col.heading}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  marginBottom: 16,
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
                      fontSize: 13,
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-primary)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
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
            flexWrap: "wrap" as const,
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            paddingTop: 24,
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} SmartAegis Technologies. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Security"].map((t) => (
              <span
                key={t}
                style={{ fontSize: 12, color: "var(--text-muted)", cursor: "pointer" }}
              >
                {t}
              </span>
            ))}
          </div>
          <span
            style={{
              fontSize: 11,
              fontFamily: "ui-monospace, monospace",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "var(--text-muted)",
            }}
          >
            INVENT · BUILD · SCALE
          </span>
        </div>

      </div>
    </footer>
  );
}

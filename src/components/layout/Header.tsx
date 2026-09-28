"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Mail, Phone, ArrowRight } from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#why-aegis" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Malik-Hassam-Ullah", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/></svg> },
  { label: "LinkedIn", href: "https://linkedin.com", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: "Twitter", href: "https://x.com", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "Instagram", href: "https://instagram.com", icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const topBarStyle: React.CSSProperties = {
    background: "#0D0D1A",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    padding: "8px 0",
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.5)",
  };

  const navBarStyle: React.CSSProperties = {
    background: scrolled
      ? "rgba(8,8,18,0.95)"
      : "rgba(8,8,18,0.75)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"}`,
    transition: "all 0.3s ease",
    boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
  };

  const linkStyle = (active = false): React.CSSProperties => ({
    padding: "8px 16px",
    borderRadius: 100,
    fontSize: "0.875rem",
    fontWeight: 500,
    color: active ? "#fff" : "rgba(255,255,255,0.6)",
    transition: "all 0.15s",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
  });

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      {/* ── Top bar (Elexoft-style) ── */}
      <div style={topBarStyle}>
        <div className="container-page" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Left: contact info */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <a
              href="mailto:contact@smartaegis.tech"
              style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              <Mail size={12} style={{ color: "#06B6D4" }} />
              contact@smartaegis.tech
            </a>
            <span style={{ color: "rgba(255,255,255,0.12)" }}>|</span>
            <a
              href="tel:+923001234567"
              style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", transition: "color 0.15s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              <Phone size={12} style={{ color: "#06B6D4" }} />
              +92-300-1234567
            </a>
          </div>

          {/* Right: social icons + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                style={{
                  width: 26, height: 26, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(6,182,212,0.15)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#06B6D4";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
                }}
              >
                {s.icon}
              </a>
            ))}
            <span style={{ width: 1, height: 16, background: "rgba(255,255,255,0.12)", margin: "0 4px" }} />
            <a
              href="#contact"
              style={{
                padding: "5px 14px",
                background: "#06B6D4",
                color: "#fff",
                fontSize: "0.75rem",
                fontWeight: 700,
                borderRadius: 0,
                display: "flex",
                alignItems: "center",
                gap: 4,
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#0891B2")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#06B6D4")}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* ── Main navigation ── */}
      <nav style={navBarStyle}>
        <div
          className="container-page"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 70,
          }}
        >
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div
              style={{
                width: 38, height: 38, borderRadius: 10,
                background: "linear-gradient(135deg, #06B6D4 0%, #0E7490 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 12px rgba(6,182,212,0.4)",
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L20 6V12C20 16.4 16.9 20.5 12 22C7.1 20.5 4 16.4 4 12V6L12 2Z" fill="white" opacity="0.9"/>
                <path d="M9 12.5L11 14.5L16 9.5" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                Smart<span style={{ color: "#06B6D4" }}>Aegis</span>
              </div>
              <div style={{ fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", lineHeight: 1 }}>
                Technologies
              </div>
            </div>
          </a>

          {/* Nav links (desktop) */}
          <ul style={{ display: "flex", alignItems: "center", gap: 2, listStyle: "none" }}>
            {NAV.map((item, i) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={linkStyle(i === 0)}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = i === 0 ? "#fff" : "rgba(255,255,255,0.6)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <a
            href="#contact"
            className="btn-brand btn-sm"
            style={{
              background: "linear-gradient(135deg, #06B6D4, #0891B2)",
              color: "#fff",
              padding: "0.65rem 1.5rem",
              borderRadius: 100,
              fontWeight: 700,
              fontSize: "0.875rem",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              boxShadow: "0 3px 14px rgba(6,182,212,0.35)",
              transition: "all 0.2s",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 5px 20px rgba(6,182,212,0.55)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 3px 14px rgba(6,182,212,0.35)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Book Consultation
            <ArrowRight size={14} />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: 40, height: 40, borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.7)",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "#0D0D1A",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "1rem 1.5rem 1.5rem",
          }}
        >
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block", padding: "13px 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.75)",
                fontWeight: 500, fontSize: "1rem",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)")}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block", marginTop: "1rem",
              padding: "14px", textAlign: "center",
              background: "#06B6D4", color: "#fff",
              fontWeight: 700, borderRadius: 100,
              fontSize: "0.9375rem",
            }}
          >
            Get a Free Quote →
          </a>
        </div>
      )}
    </header>
  );
}

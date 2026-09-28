"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#estimator" },
  { label: "About", href: "#why-aegis" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #1D4ED8, #4F46E5)",
          padding: "8px 16px",
          textAlign: "center",
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: "#E0E7FF",
          letterSpacing: "0.01em",
          position: "relative",
          zIndex: 51,
        }}
      >
        <span>🚀 Now accepting Q4 2026 projects — </span>
        <a href="#contact" style={{ color: "#fff", textDecoration: "underline", fontWeight: 700 }}>
          Book a free discovery call →
        </a>
      </div>

      {/* Floating island navbar */}
      <header
        style={{
          position: "sticky",
          top: 12,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: "0 1.5rem",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 64,
            padding: "0 1.5rem",
            borderRadius: 16,
            background: scrolled
              ? "rgba(7, 11, 25, 0.92)"
              : "rgba(11, 17, 35, 0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(37,99,235,0.1)"
              : "0 4px 16px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
        >
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
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
                flexShrink: 0,
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
              <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#475569", lineHeight: 1, marginTop: 2 }}>
                Technologies
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  padding: "7px 13px",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#94A3B8",
                  borderRadius: 8,
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#F8FAFC";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a
              href="mailto:contact@smartaegis.tech"
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#64748B",
                padding: "6px 12px",
                borderRadius: 8,
                transition: "color 0.15s",
                display: "none",
              }}
              className="hidden lg:block"
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#E2E8F0")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#64748B")}
            >
              contact@smartaegis.tech
            </a>
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
              style={{
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                color: "#fff",
                padding: "0.6rem 1.25rem",
                borderRadius: 10,
                fontSize: "0.875rem",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                boxShadow: "0 3px 12px rgba(37,99,235,0.4)",
                transition: "all 0.2s",
                textDecoration: "none",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 5px 18px rgba(37,99,235,0.6)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 3px 12px rgba(37,99,235,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              }}
            >
              Book Consultation
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                color: "#94A3B8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            style={{
              maxWidth: 1240,
              margin: "8px auto 0",
              borderRadius: 14,
              background: "rgba(7,11,25,0.97)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#CBD5E1",
                  borderRadius: 10,
                  marginBottom: 4,
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(37,99,235,0.08)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#CBD5E1";
                }}
              >
                {item.label}
              </a>
            ))}
            <div style={{ paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 8 }}>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "12px",
                  background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                  color: "#fff",
                  fontWeight: 700,
                  borderRadius: 12,
                  fontSize: "0.9375rem",
                  boxShadow: "0 4px 14px rgba(37,99,235,0.4)",
                }}
              >
                Book a Free Consultation →
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

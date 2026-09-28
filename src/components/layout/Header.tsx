"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AegisShieldLogo } from "../ui/AegisShieldLogo";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#estimator" },
  { name: "About", href: "#why-aegis" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        background: scrolled ? "rgba(3, 7, 15, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="container-lg" style={{ height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <AegisShieldLogo size="sm" showTagline={false} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden md:flex">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              style={{
                padding: "7px 14px",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--text-secondary)",
                borderRadius: 8,
                textDecoration: "none",
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {l.name}
            </a>
          ))}
        </nav>

        {/* Right: Status + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* Live status indicator */}
          <div
            className="hidden lg:flex"
            style={{
              alignItems: "center",
              gap: 7,
              fontSize: 12,
              color: "var(--text-muted)",
              fontFamily: "ui-monospace, monospace",
            }}
          >
            <span className="pulse-dot">
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#34d399",
                  display: "block",
                }}
              />
            </span>
            <span>All systems operational</span>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex btn-primary"
            style={{ padding: "9px 20px", fontSize: 13 }}
          >
            Book a Call
            <ArrowRight size={14} />
          </a>

          {/* Mobile toggle */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              padding: 8,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
              color: "var(--text-secondary)",
              cursor: "pointer",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(3, 7, 15, 0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 24px 24px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 16 }}>
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "10px 12px",
                  fontSize: 15,
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                {l.name}
              </a>
            ))}
          </div>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
            Book a Discovery Call
          </a>
        </div>
      )}
    </header>
  );
}

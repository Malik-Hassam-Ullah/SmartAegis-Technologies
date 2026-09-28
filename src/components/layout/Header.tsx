"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AegisShieldLogo } from "../ui/AegisShieldLogo";
import { 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  PhoneCall, 
  Sparkles,
  ExternalLink
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Solutions", href: "#solutions" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Estimator", href: "#estimator" },
    { name: "Why Us", href: "#why-aegis" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050811]/85 backdrop-blur-xl border-b border-cyan-500/15 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="focus:outline-none">
          <AegisShieldLogo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-400 rounded-full hover:bg-white/5 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action & Status Area */}
        <div className="hidden md:flex items-center gap-4">
          {/* Live SLA System Status Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-[11px] text-cyan-300 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>SLA 99.98% • Systems Active</span>
          </div>

          {/* Book Discovery Call Button with Glowing Border */}
          <a
            href="#contact"
            className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs tracking-wide focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-500 group-hover:from-cyan-400 group-hover:via-cyan-500 group-hover:to-blue-600 transition-all duration-300"></span>
            <span className="relative flex items-center gap-2 px-4 py-2.5 rounded-[11px] bg-[#050811] text-white group-hover:bg-opacity-90 transition-all duration-200">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Book Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070c1a]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-5 pt-4 pb-6 space-y-3 transition-all animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <span className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Engineering Squad Ready
            </span>
            <span className="text-[10px] text-slate-500 font-mono">v2.4 LTS</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-800/90 text-cyan-300 text-xs font-semibold border border-cyan-500/30"
            >
              <span>Instant Scope & Cost Estimator</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/20"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book Discovery Call</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

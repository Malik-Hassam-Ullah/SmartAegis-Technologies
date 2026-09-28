"use client";

import React from "react";
import Link from "next/link";
import { AegisShieldLogo } from "../ui/AegisShieldLogo";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ArrowUp, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#03060f] border-t border-cyan-500/15 pt-16 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-cyan-600/10 via-blue-600/5 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier: Logo & Core Brand Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block focus:outline-none">
              <AegisShieldLogo size="lg" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Premier software development and digital engineering firm specializing in custom web applications, native &amp; cross-platform mobile apps, and scalable enterprise software solutions.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://github.com/Malik-Hassam-Ullah"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                aria-label="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links / Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Services &amp; Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#services" className="hover:text-cyan-300 transition">Custom Web Architecture</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition">Cross-Platform Mobile (Flutter)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition">Scalable Enterprise SaaS</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition">Cloud DevOps &amp; Microservices</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-300 transition">Product Design Systems (Figma)</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-cyan-300 transition text-cyan-400 font-semibold">Project Cost Estimator →</a>
              </li>
            </ul>
          </div>

          {/* Engineering / Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Methodology
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#process" className="hover:text-cyan-300 transition">1. Invent (Blueprint)</a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-300 transition">2. Design (Validation)</a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-300 transition">3. Build (Agile TDD)</a>
              </li>
              <li>
                <a href="#process" className="hover:text-cyan-300 transition">4. Scale (DevOps)</a>
              </li>
              <li>
                <a href="#why-aegis" className="hover:text-cyan-300 transition">The Aegis Factor</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-300 transition">Client FAQs</a>
              </li>
            </ul>
          </div>

          {/* Security & Global Locations (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Security &amp; Standards
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>ISO 27001 Standard</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>HIPAA Compliant Dev</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Zero single-point-of-failure guarantee on all architectures.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright, Tagline & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} SmartAegis Technologies. All rights reserved.</span>
            <span className="text-cyan-400/80 font-mono font-bold tracking-widest pl-2 border-l border-slate-800">
              INVENT | BUILD | SCALE
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition cursor-pointer">Security Policy</span>
            <span className="hover:text-slate-300 transition cursor-pointer">Privacy Notice</span>
            <span className="hover:text-slate-300 transition cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

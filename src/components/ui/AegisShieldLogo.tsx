"use client";

import React from "react";
import Image from "next/image";

interface AegisLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  withImage?: boolean;
}

export function AegisShieldIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="shieldBg" x1="10" y1="10" x2="90" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="50%" stopColor="#0B2366" />
          <stop offset="100%" stopColor="#050C24" />
        </linearGradient>
        <linearGradient id="neonCyan" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#0080FF" />
        </linearGradient>
        <linearGradient id="circuitAccent" x1="20" y1="30" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Outer Shield Frame with Beveled Depth */}
      <path
        d="M50 8L88 24V54C88 77 72 96 50 104C28 96 12 77 12 54V24L50 8Z"
        fill="url(#shieldBg)"
        stroke="url(#neonCyan)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Inner Metallic Bevel Rim */}
      <path
        d="M50 16L80 29V53C80 72 67 87 50 94C33 87 20 72 20 53V29L50 16Z"
        stroke="rgba(56, 189, 248, 0.4)"
        strokeWidth="1.5"
      />

      {/* Dynamic Stylized Circuit "S" & Upward Arrow */}
      {/* Upper Path */}
      <path
        d="M32 38H65L74 29"
        stroke="url(#neonCyan)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#glowFilter)"
      />
      {/* Central Arrow Diagonal */}
      <path
        d="M30 68L48 50L68 34"
        stroke="#FFFFFF"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Arrowhead Pointing Up & Right */}
      <polygon
        points="68,26 76,35 62,38"
        fill="url(#neonCyan)"
        filter="url(#glowFilter)"
      />
      {/* Bottom Circuit Fold */}
      <path
        d="M48 50L64 66H42L34 76"
        stroke="url(#circuitAccent)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Cybernetic Pulse Nodes */}
      <circle cx="32" cy="38" r="3" fill="#00F0FF" filter="url(#glowFilter)" />
      <circle cx="48" cy="50" r="3" fill="#38BDF8" />
      <circle cx="64" cy="66" r="3" fill="#00F0FF" filter="url(#glowFilter)" />
      <circle cx="34" cy="76" r="2.5" fill="#6366F1" />
    </svg>
  );
}

export function AegisShieldLogo({
  className = "",
  size = "md",
  showTagline = true,
}: AegisLogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };

  const titleSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      <div className="relative flex-shrink-0">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-300"></div>
        <AegisShieldIcon className={`${iconSizes[size]} relative transition-transform duration-300 group-hover:scale-105`} />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center tracking-wider">
          <span className={`font-black tracking-tight text-white ${titleSizes[size]}`}>
            SMART<span className="text-cyan-400">AEGIS</span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-slate-400 group-hover:text-cyan-300 transition-colors">
            TECHNOLOGIES
          </span>
          {showTagline && (
            <span className="hidden sm:inline-block text-[9px] font-semibold text-cyan-400/80 tracking-widest pl-1.5 border-l border-cyan-500/30">
              INVENT • BUILD • SCALE
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

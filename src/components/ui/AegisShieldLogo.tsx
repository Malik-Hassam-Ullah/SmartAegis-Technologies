"use client";

import React from "react";

interface AegisLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
}

export function AegisShieldIcon({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sbg" x1="10" y1="10" x2="90" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#0a1628" />
        </linearGradient>
        <linearGradient id="sborder" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Shield body */}
      <path
        d="M50 8L88 24V54C88 77 72 96 50 104C28 96 12 77 12 54V24L50 8Z"
        fill="url(#sbg)"
        stroke="url(#sborder)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Inner rim */}
      <path
        d="M50 18L80 30V54C80 73 67 89 50 96C33 89 20 73 20 54V30L50 18Z"
        stroke="rgba(34,211,238,0.2)"
        strokeWidth="1"
        fill="none"
      />

      {/* Clean "S" letterform — two horizontal bars + diagonal */}
      <path
        d="M36 42H62L58 56H38L34 70H62"
        stroke="#22d3ee"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function AegisShieldLogo({
  size = "md",
  showTagline = true,
}: AegisLogoProps) {
  const iconSize = size === "sm" ? 30 : size === "md" ? 38 : size === "lg" ? 48 : 60;
  const titleSize = size === "sm" ? 16 : size === "md" ? 18 : size === "lg" ? 22 : 28;
  const subSize = size === "sm" ? 9 : size === "md" ? 9 : size === "lg" ? 10 : 11;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, userSelect: "none" }}>
      <AegisShieldIcon size={iconSize} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontSize: titleSize,
            fontWeight: 800,
            color: "#f1f5f9",
            letterSpacing: "-0.025em",
            lineHeight: 1,
          }}
        >
          Smart<span style={{ color: "#22d3ee" }}>Aegis</span>
        </span>
        <span
          style={{
            fontSize: subSize,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#475569",
            marginTop: 4,
          }}
        >
          Technologies
          {showTagline && (
            <span style={{ marginLeft: 8, color: "rgba(34,211,238,0.5)" }}>
              · IBS
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

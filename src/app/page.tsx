import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { CoreServices } from "@/components/sections/CoreServices";
import { Estimator } from "@/components/sections/Estimator";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyAegis } from "@/components/sections/WhyAegis";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Sticky Frosted Header */}
      <Header />

      {/* Main Page Flow */}
      <main>
        {/* Section 2: High-Impact Hero with Floating 3D Preview & Live Marquee */}
        <Hero />

        {/* Section 3: Trust Metrics / Social Proof */}
        <TrustMetrics />

        {/* Section 4: Core Services (Bento Grid) */}
        <CoreServices />

        {/* Section 5: Interactive Project Cost Estimator */}
        <Estimator />

        {/* Section 6: The Engineering Lifecycle (INVENT | BUILD | SCALE) */}
        <Process />

        {/* Section 7: Featured Work & Case Studies */}
        <CaseStudies />

        {/* Section 8: Why SmartAegis (The Aegis Factor & Security) */}
        <WhyAegis />

        {/* Section 9: Frequently Asked Questions */}
        <Faq />

        {/* Section 10: Conversion-Focused Contact Form */}
        <Contact />
      </main>

      {/* Comprehensive Footer */}
      <Footer />
    </div>
  );
}

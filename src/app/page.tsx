import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CoreServices } from "@/components/sections/CoreServices";
import { Estimator } from "@/components/sections/Estimator";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { WhyAegis } from "@/components/sections/WhyAegis";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <main>
        <Hero />
        <CoreServices />
        <Estimator />
        <Process />
        <CaseStudies />
        <WhyAegis />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

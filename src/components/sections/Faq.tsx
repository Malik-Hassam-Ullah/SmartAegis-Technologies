"use client";

import React, { useState } from "react";
import { 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What tech stack do you recommend for high-scale products?",
      answer: "For dynamic web applications, our default golden standard is Next.js 16 (App Router) with TypeScript, Tailwind CSS, and edge rendering. For backends requiring extreme throughput, we implement Go (Golang) microservices or Node.js/Python Fastify. On mobile, Flutter or React Native allows for single-codebase velocity across iOS and Android without sacrificing native 60fps performance.",
    },
    {
      question: "How do we handle Intellectual Property (IP) and source code ownership?",
      answer: "You retain 100% full Intellectual Property rights and code ownership from day one. All code is committed directly to your private GitHub/GitLab organization or transferred immediately upon milestone acceptance. We do not retain proprietary lock-ins or hidden licensing fees.",
    },
    {
      question: "What does the post-launch maintenance & warranty look like?",
      answer: "Every production delivery comes with an inclusive 30-Day Zero-Bug Warranty. We also provide ongoing SLA-backed maintenance packages covering 24/7 cloud telemetry, dependency security patching, database optimization, and on-call emergency response.",
    },
    {
      question: "How quickly can we spin up a dedicated engineering squad?",
      answer: "Because we maintain pre-vetted senior engineering squads specializing in our core stack, we can initiate discovery and assign a dedicated squad within 5 to 7 business days following NDA signing and scope sign-off.",
    },
    {
      question: "What does daily communication and project tracking look like?",
      answer: "We integrate directly into your workflow. We set up a private Slack or Discord channel for daily async standups, a Jira/Linear board for real-time sprint velocity tracking, and bi-weekly live staging demonstration calls where you test working software.",
    },
    {
      question: "Do you sign Non-Disclosure Agreements (NDAs) before discovery?",
      answer: "Yes, absolutely. We treat confidentiality with defense-grade seriousness. We can execute your standard bilateral NDA or provide our enterprise mutual NDA prior to our initial technical blueprint review.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#060a17] border-b border-cyan-500/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TRANSPARENCY &amp; FAQS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our engineering standards, sprint velocity, and partnership terms.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#090f23] border-cyan-500/40 shadow-lg shadow-cyan-500/5"
                    : "bg-[#080d1e]/80 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? "text-cyan-300" : "text-white"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 text-cyan-400 border-cyan-500/30" : "text-slate-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Have a unique technical challenge?</h4>
              <p className="text-xs text-slate-400">Speak directly with our Chief Architect.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

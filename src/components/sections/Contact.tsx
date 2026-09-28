"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Send, 
  Check, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Globe2
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$15k - $30k",
    timeline: "1 - 2 Months",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#00D2FF", "#1D4ED8", "#6366F1", "#10B981"],
        });
      } catch (err) {
        // canvas fallback
      }
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050811] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INITIATE DISCOVERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let’s Engineer Your Next <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Digital Breakthrough</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Schedule a 30-minute technical architecture review with our Principal Engineers. Receive a custom roadmap and proposal within 24 hours.
          </p>
        </div>

        {/* Split Grid: Left Contact Info / Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Consultation Booking Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 rounded-3xl bg-[#090f22] border border-cyan-500/20 shadow-xl space-y-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold block">
                DIRECT CONSULTATION ACCESS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Principal Engineer &amp; Solutions Lead Office
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with experienced software architects who understand complex distributed systems, mobile performance, and rapid go-to-market execution.
              </p>

              {/* Contact Channels */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 text-xs text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Inquiries &amp; RFPs</span>
                    <a href="mailto:contact@smartaegis.tech" className="text-white hover:text-cyan-400 transition font-medium">
                      contact@smartaegis.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Response Time SLA</span>
                    <span className="text-white font-medium">&lt; 4 Hours during Business Cycles</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Global Timezone Coverage</span>
                    <span className="text-white font-medium">US (EST/PST), UK (GMT), UAE (GST) &amp; PK (PKT)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 text-xs text-slate-300">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Enterprise NDA Protection</span>
                    <span className="text-white font-medium">Mutual NDA executed before technical disclosure</span>
                  </div>
                </div>
              </div>

              {/* Live Status Tag */}
              <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between text-xs">
                <span className="text-cyan-300 font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Q3/Q4 Sprint Capacity Open
                </span>
                <span className="text-[10px] font-mono text-slate-400">2 Squads Available</span>
              </div>
            </div>

          </div>

          {/* Right Column: Fast Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#080d1e] border border-cyan-500/30 shadow-2xl backdrop-blur-xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold block mb-1">
                      PROJECT INITIATION FORM
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Tell Us About Your Vision
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill out the form below and our leadership will review your technical requirements.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Approximate Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-cyan-400 transition"
                      >
                        <option value="< $15k">&lt; $15,000 (MVP / Prototype)</option>
                        <option value="$15k - $30k">$15,000 – $30,000 (Full-Stack Web/Mobile)</option>
                        <option value="$30k - $60k">$30,000 – $60,000 (Enterprise SaaS / Multi-tenant)</option>
                        <option value="$60k+">$60,000+ (Continuous Squad / Core Re-platform)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Target Launch Timeline</label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-cyan-400 transition"
                      >
                        <option value="Fast Track (1 Month)">Fast Track (&lt; 4 Weeks)</option>
                        <option value="1 - 2 Months">Standard (1 – 2 Months)</option>
                        <option value="3 - 6 Months">Multi-Phase (3 – 6 Months)</option>
                        <option value="Flexible">Ongoing Advisory &amp; Development</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Project Brief &amp; Technical Requirements *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe what you want to invent, build or scale (e.g. Next.js SaaS, Flutter app, database migration)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(0,210,255,0.3)] hover:shadow-[0_0_40px_rgba(0,210,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                        Transmitting Scope...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Scope &amp; Book Discovery Review</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-6 pt-2 text-[11px] text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> NDA Guaranteed
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" /> Rapid 4h Reply
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Free Technical Blueprint
                    </span>
                  </div>

                </form>
              ) : (
                <div className="py-12 px-6 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Project Scope Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our Lead Solutions Architect will contact you at <strong className="text-cyan-400">{formData.email}</strong> within 4 hours to arrange your 30-minute discovery call and deliver your preliminary architecture spec.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-xs text-slate-300 hover:text-white font-semibold transition"
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import confetti from "canvas-confetti";
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Layers, 
  ShieldCheck, 
  DollarSign, 
  CheckCircle2,
  Calendar,
  Send
} from "lucide-react";

interface PlatformOption {
  id: string;
  name: string;
  desc: string;
  basePrice: number;
  baseWeeks: number;
}

interface FeatureOption {
  id: string;
  name: string;
  price: number;
  weeks: number;
  category: string;
}

interface TimelineOption {
  id: string;
  name: string;
  multiplier: number;
  weeksDesc: string;
}

export function Estimator() {
  const platforms: PlatformOption[] = [
    { id: "web", name: "Web Application", desc: "Next.js / React edge-rendered web platform", basePrice: 8500, baseWeeks: 4 },
    { id: "mobile", name: "Mobile App (iOS & Android)", desc: "Flutter / React Native cross-platform app", basePrice: 11500, baseWeeks: 5 },
    { id: "saas", name: "Full-Stack SaaS Platform", desc: "Multi-tenant backend, dashboard & billing", basePrice: 15000, baseWeeks: 6 },
    { id: "enterprise", name: "Enterprise Custom Software", desc: "High-throughput microservices & ERP", basePrice: 22000, baseWeeks: 8 },
  ];

  const features: FeatureOption[] = [
    { id: "auth", name: "Military-Grade Auth & RBAC", price: 1800, weeks: 1, category: "Security" },
    { id: "payments", name: "Stripe / Subscriptions / Invoicing", price: 2400, weeks: 1, category: "Billing" },
    { id: "chat", name: "Real-Time Chat & Notifications", price: 2800, weeks: 1.5, category: "Interactive" },
    { id: "admin", name: "Executive Analytics & Admin Portal", price: 3200, weeks: 1.5, category: "Management" },
    { id: "ai", name: "Custom AI / LLM & RAG Integration", price: 4500, weeks: 2, category: "AI & ML" },
    { id: "cloud", name: "Multi-Region Cloud (AWS / Docker)", price: 2900, weeks: 1.5, category: "DevOps" },
  ];

  const timelines: TimelineOption[] = [
    { id: "fast", name: "Fast-Track Sprint", multiplier: 1.25, weeksDesc: "Dedicated dual-engineer squad (4-6 weeks)" },
    { id: "standard", name: "Standard Agile Flow", multiplier: 1.0, weeksDesc: "Standard agile bi-weekly delivery (8-12 weeks)" },
    { id: "enterprise", name: "Continuous Dedicated Team", multiplier: 0.95, weeksDesc: "Ongoing monthly squad allocation" },
  ];

  const [selectedPlatform, setSelectedPlatform] = useState<string>("web");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["auth", "admin"]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard");

  // Lead capture state
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientBrief, setClientBrief] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Dynamic calculations
  const calculation = useMemo(() => {
    const platform = platforms.find((p) => p.id === selectedPlatform) || platforms[0];
    const timeline = timelines.find((t) => t.id === selectedTimeline) || timelines[1];
    
    let featurePrice = 0;
    let featureWeeks = 0;

    selectedFeatures.forEach((fId) => {
      const feat = features.find((f) => f.id === fId);
      if (feat) {
        featurePrice += feat.price;
        featureWeeks += feat.weeks;
      }
    });

    const rawTotal = (platform.basePrice + featurePrice) * timeline.multiplier;
    const lowEstimate = Math.round(rawTotal * 0.9);
    const highEstimate = Math.round(rawTotal * 1.15);
    const totalWeeks = Math.max(4, Math.round((platform.baseWeeks + featureWeeks) * (timeline.id === "fast" ? 0.75 : 1)));

    return {
      lowEstimate,
      highEstimate,
      totalWeeks,
      platformName: platform.name,
    };
  }, [selectedPlatform, selectedFeatures, selectedTimeline]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00D2FF", "#1D4ED8", "#6366F1", "#10B981"],
      });
    } catch (err) {
      // fallback if canvas not available
    }

    setSubmitted(true);
  };

  return (
    <section id="estimator" className="relative py-24 bg-[#060a18] border-y border-cyan-500/15 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT PROJECT ESTIMATION ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Configure Your Scope &amp; <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Instant Estimate</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Gain full budget and timeline clarity before kicking off discovery. No hidden markups, zero vendor lock-in.
          </p>
        </div>

        {/* Main Grid: Configurator (Left 7 Cols) + Live Output & Lead Capture (Right 5 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Stepper Configurator */}
          <div className="lg:col-span-7 space-y-8 p-6 sm:p-8 rounded-3xl bg-[#090f23]/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
            
            {/* Step 1: Select Platform */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 tracking-wider font-bold">
                  STEP 01 // PLATFORM ARCHITECTURE
                </span>
                <span className="text-[11px] text-slate-500">Select target runtime</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {platforms.map((plat) => {
                  const isSelected = selectedPlatform === plat.id;
                  return (
                    <button
                      key={plat.id}
                      type="button"
                      onClick={() => setSelectedPlatform(plat.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 relative ${
                        isSelected
                          ? "bg-cyan-950/40 border-cyan-400 shadow-[0_0_20px_rgba(0,210,255,0.15)]"
                          : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-sm font-bold ${isSelected ? "text-cyan-300" : "text-white"}`}>
                          {plat.name}
                        </span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />}
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">{plat.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Features & Scale */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 tracking-wider font-bold">
                  STEP 02 // MODULES &amp; ADVANCED CAPABILITIES
                </span>
                <span className="text-[11px] text-slate-500">Pick required modules</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`text-left p-3.5 rounded-xl border flex items-center justify-between transition-all duration-200 ${
                        isChecked
                          ? "bg-blue-950/40 border-cyan-400/80 shadow-[0_0_15px_rgba(0,210,255,0.1)]"
                          : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-semibold ${isChecked ? "text-white" : "text-slate-300"}`}>
                            {feat.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          {feat.category}
                        </span>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
                          isChecked ? "bg-cyan-500 border-cyan-400 text-slate-950" : "border-slate-700"
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Estimated Timeline */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 tracking-wider font-bold">
                  STEP 03 // TIMELINE &amp; SPRINT PACING
                </span>
                <span className="text-[11px] text-slate-500">Velocity schedule</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelines.map((tl) => {
                  const isSelected = selectedTimeline === tl.id;
                  return (
                    <button
                      key={tl.id}
                      type="button"
                      onClick={() => setSelectedTimeline(tl.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? "bg-indigo-950/50 border-indigo-400 text-white"
                          : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <span className={`block text-xs font-bold mb-1 ${isSelected ? "text-cyan-300" : "text-slate-200"}`}>
                        {tl.name}
                      </span>
                      <span className="text-[10px] text-slate-400 leading-tight block">
                        {tl.weeksDesc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Output Ticker & Claim Scope Lead Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Pricing Ticker Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0e1630] to-[#090f22] border border-cyan-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                DYNAMIC SCOPE CALCULATION
              </span>
              <h3 className="text-xl font-bold text-white mb-4">
                Estimated Project Investment
              </h3>

              {/* Price Range */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 mb-5">
                <div className="text-[11px] text-slate-400 font-mono mb-1">Estimated Budget Range</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300 font-mono">
                  ${calculation.lowEstimate.toLocaleString()} – ${calculation.highEstimate.toLocaleString()}
                </div>
                <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Target Sprint Duration: <strong className="text-white font-mono">{calculation.totalWeeks} Weeks</strong></span>
                </div>
              </div>

              {/* Selected Scope Badges */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] uppercase font-mono text-slate-400 block">
                  Configured Architecture Specs:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-[11px] text-cyan-300 font-medium">
                    {calculation.platformName}
                  </span>
                  {selectedFeatures.map((fId) => {
                    const feat = features.find((f) => f.id === fId);
                    return feat ? (
                      <span key={fId} className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                        {feat.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>

              {/* Lead Claim Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-3 pt-3 border-t border-slate-800">
                  <span className="text-xs font-bold text-white block">
                    Lock In This Scope &amp; Schedule Discovery Call
                  </span>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name / Organization"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Work Email (e.g. alex@company.com)"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Optional Brief (e.g., target launch in Q3)"
                      value={clientBrief}
                      onChange={(e) => setClientBrief(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Claim Scope &amp; Book Free Consultation</span>
                  </button>

                  <p className="text-[10px] text-slate-500 text-center pt-1">
                    🔒 Guaranteed Non-Disclosure Agreement (NDA) &amp; Zero Spam Policy
                  </p>
                </form>
              ) : (
                <div className="p-5 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-center space-y-2.5 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Scope &amp; Estimation Reserved!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you, <strong className="text-white">{clientName}</strong>. Our Lead Solutions Architect will reach out to <strong className="text-cyan-400">{clientEmail}</strong> within 4 hours with your detailed scope breakdown.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

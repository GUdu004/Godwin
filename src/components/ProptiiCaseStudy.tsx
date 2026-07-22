"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight,
  TrendingUp, 
  Clock, 
  Users, 
  ExternalLink, 
  Check, 
  AlertCircle,
  Smartphone,
  CheckCircle,
  Layers,
  ChevronRight,
  Copy,
  Info
} from "lucide-react";

export default function ProptiiCaseStudy() {
  const [onboardingTab, setOnboardingTab] = useState<"before" | "after">("after");
  const [copiedToken, setCopiedToken] = useState(false);

  const competitorData = [
    { name: "Rightmove", share: "36.8%", focus: "Consumer Search Portal", gap: "No transaction loops / disjointed third-party handoffs" },
    { name: "Zoopla", share: "11.6%", focus: "Valuations & Listings", gap: "Cramped mobile UI, slow viewing booking systems" },
    { name: "OpenRent", share: "2.0%", focus: "Direct Tenant-Landlord", gap: "Clunky referencing wizard, manual document uploads" },
    { name: "Proptii (Target)", share: "New Entrant", focus: "Unified B2B SaaS + API Engine", gap: "None — Eliminates multi-app context switching", highlight: true }
  ];

  const tokenCode = `{
  "colors": {
    "brand": "#10B981",
    "surface-primary": "#0A0A0A",
    "border-muted": "#262626"
  },
  "spacing": {
    "xs": "4px",
    "md": "16px",
    "xl": "32px"
  }
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenCode);
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-secondary">
      {/* Back Header */}
      <div className="max-w-7xl mx-auto px-6 pt-12 no-print">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-6 pt-8 pb-16 flex flex-col gap-6">
        <div className="flex items-center gap-2 px-3 py-1 w-fit rounded-full border border-accent-blue/30 bg-accent-blue/10 text-xs font-mono text-accent-blue">
          <span>Case Study: B2B PropTech SaaS</span>
        </div>
        <h1 className="font-geist text-4xl sm:text-6xl font-bold tracking-tight text-text-primary">
          Proptii
        </h1>
        <p className="font-geist text-xl sm:text-2xl text-text-primary max-w-4xl leading-snug font-medium">
          B2B PropTech SaaS &amp; Developer API Notification Platform
        </p>

        {/* Metadata grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border-muted max-w-4xl text-xs">
          <div className="flex flex-col gap-1.5">
            <span className="text-text-muted font-mono uppercase tracking-wider">My Role</span>
            <span className="text-text-primary font-bold">Lead Product Designer</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-text-muted font-mono uppercase tracking-wider">Timeline</span>
            <span className="text-text-primary font-bold">3 Months (Discovery to High-Fi)</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-text-muted font-mono uppercase tracking-wider">Toolkit</span>
            <span className="text-text-primary font-bold">Figma, Miro, Notion</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-text-muted font-mono uppercase tracking-wider">Target Domain</span>
            <span className="text-text-primary font-bold">B2B SaaS / Tenant Referencing</span>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <article className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Case Narrative (Left Column) */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          
          {/* Executive Summary Card */}
          <section className="p-8 rounded-2xl border border-accent-blue/20 bg-accent-blue/5 flex flex-col gap-6">
            <h2 className="font-geist font-bold text-text-primary text-xl">Executive Summary Card</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">The Business Challenge</h3>
                  <p className="text-xs leading-relaxed text-text-secondary">
                    The UK rental journey is heavily fragmented, slow, and stressful. Users routine balance multiple disjointed tools for searching, referencing, and signing contracts.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">My Role &amp; Collaboration</h3>
                  <p className="text-xs leading-relaxed text-text-secondary">
                    Led end-to-end product design, wireframes, high-fidelity prototypes, and component library overrides, collaborating closely with 1 Product Manager, 4 Engineers, and QA.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Quantified Business Impact</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-bg-secondary border border-border-muted text-accent-green">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-text-primary">85% Referencing Completion reduction</span>
                      <span className="text-[10px] text-text-muted">From 5 days down to 18 minutes</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-bg-secondary border border-border-muted text-accent-green">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-text-primary">+34% Search-to-Viewing conversion</span>
                      <span className="text-[10px] text-text-muted">By removing forced login checkpoints (PLG)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-bg-secondary border border-border-muted text-accent-green">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-text-primary">150+ Landlords Onboarded</span>
                      <span className="text-[10px] text-text-muted">Simplifying multi-party verification pipelines</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 1. Research & Market Discovery */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md border border-neutral-800 text-[10px] font-mono text-text-muted">SECTION 01</span>
              <h2 className="font-geist font-bold text-text-primary text-xl">Market Discovery &amp; Competitor Intelligence</h2>
            </div>
            <p className="text-sm leading-relaxed">
              To establish a baseline against existing UK rental portals, I evaluated Rightmove, Zoopla, and OpenRent. The quantitative analysis revealed a core friction point: 
            </p>
            <div className="p-4 rounded-xl border border-accent-orange/30 bg-accent-orange/5 text-xs text-text-secondary leading-relaxed flex gap-3 items-start">
              <Info className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-text-primary">Mobile-First Traffic:</strong> Across all key competitors, mobile web traffic dominates (averaging 70% to 81%). Proptii was optimized natively for on-the-go mobile interactions to guarantee high retention.
              </div>
            </div>

            {/* Matrix Table */}
            <div className="overflow-x-auto border border-border-muted rounded-xl bg-bg-secondary/20 mt-4">
              <table className="min-w-full divide-y divide-border-muted text-left text-xs">
                <thead className="bg-bg-secondary/60 text-text-primary font-mono text-[10px]">
                  <tr>
                    <th className="px-4 py-3">COMPETITOR</th>
                    <th className="px-4 py-3">MARKET SHARE</th>
                    <th className="px-4 py-3">PRODUCT FOCUS</th>
                    <th className="px-4 py-3">IDENTIFIED GAPS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-muted">
                  {competitorData.map((comp) => (
                    <tr key={comp.name} className={`${comp.highlight ? "bg-accent-blue/5 text-text-primary" : ""}`}>
                      <td className="px-4 py-4 font-bold">{comp.name}</td>
                      <td className="px-4 py-4 font-mono text-text-muted">{comp.share}</td>
                      <td className="px-4 py-4 text-text-secondary">{comp.focus}</td>
                      <td className="px-4 py-4 text-xs font-medium">{comp.gap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 2. Omnichannel Communication Engine */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md border border-neutral-800 text-[10px] font-mono text-text-muted">SECTION 02</span>
              <h2 className="font-geist font-bold text-text-primary text-xl">Omnichannel Notification Engine &amp; API Pipeline</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Crucial for Sinch’s evaluation, Proptii integrates Webhooks to ingest real-time listing leads (Rightmove/Zoopla) and route them into an automated B2B referencing workflow.
            </p>

            {/* SVG Logic Diagram */}
            <div className="p-8 rounded-xl border border-border-muted bg-bg-secondary/40 flex flex-col items-center gap-6 justify-center">
              <div className="w-full max-w-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="px-4 py-3 rounded-lg border border-border-muted bg-bg-primary text-center w-full font-mono text-[10px]">
                  <span className="block text-accent-blue font-bold">1. Webhook Ingest</span>
                  <span className="text-[9px] text-text-muted">Leads from portals</span>
                </div>
                <div className="text-text-muted rotate-90 sm:rotate-0">➔</div>
                <div className="px-4 py-3 rounded-lg border border-border-muted bg-bg-primary text-center w-full font-mono text-[10px]">
                  <span className="block text-accent-orange font-bold">2. Parsing Engine</span>
                  <span className="text-[9px] text-text-muted">Leads format checks</span>
                </div>
                <div className="text-text-muted rotate-90 sm:rotate-0">➔</div>
                <div className="px-4 py-3 rounded-lg border border-border-muted bg-bg-primary text-center w-full font-mono text-[10px]">
                  <span className="block text-accent-green font-bold">3. Verification</span>
                  <span className="text-[9px] text-text-muted">ID checks loop</span>
                </div>
              </div>
              
              <div className="h-[1px] w-full max-w-md bg-border-muted my-2" />
              
              <div className="px-4 py-3 rounded-lg border border-accent-blue/30 bg-bg-primary text-center w-full max-w-sm font-mono text-[10px]">
                <span className="block text-accent-blue font-bold">Omnichannel Dispatch (Sinch CPaaS Integration)</span>
                <span className="text-[9px] text-text-secondary mt-1 block">WhatsApp API ➔ SMS Fallback ➔ Push Notification</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs">
              <h4 className="font-geist font-bold text-text-primary">System Resilience &amp; Fallback Logic:</h4>
              <p className="leading-relaxed">
                If the primary WhatsApp notification fails to deliver or remains unread for 4 hours, the system triggers a **fallback webhook** that reroutes the verification link via SMS. This guarantees contract execution flows are never stalled by channel dropouts.
              </p>
            </div>
          </section>

          {/* 3. Key Iterations & PLG */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md border border-neutral-800 text-[10px] font-mono text-text-muted">SECTION 03</span>
              <h2 className="font-geist font-bold text-text-primary text-xl">Key Iterations &amp; Product-Led Growth</h2>
            </div>
            
            {/* Onboarding Toggle */}
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-border-muted pb-3">
                <span className="font-bold text-text-primary text-sm">Friction Iteration: Landing Path Onboarding</span>
                <div className="flex rounded-lg bg-bg-secondary p-1 border border-border-muted">
                  <button 
                    onClick={() => setOnboardingTab("before")} 
                    className={`px-3 py-1.5 rounded-md text-[10px] font-mono font-medium transition-colors ${onboardingTab === "before" ? "bg-bg-primary text-text-primary border border-border-muted" : "text-text-muted"}`}
                  >
                    BEFORE (Locked)
                  </button>
                  <button 
                    onClick={() => setOnboardingTab("after")} 
                    className={`px-3 py-1.5 rounded-md text-[10px] font-mono font-medium transition-colors ${onboardingTab === "after" ? "bg-bg-primary text-text-primary border border-border-muted" : "text-text-muted"}`}
                  >
                    AFTER (Un-gated)
                  </button>
                </div>
              </div>

              {onboardingTab === "before" ? (
                <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 text-xs flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-red-400 font-bold font-mono">
                    <AlertCircle className="w-4 h-4" />
                    <span>Before: High Friction Wall</span>
                  </div>
                  <p className="leading-relaxed">
                    Mandatory "Create Account" popup immediately blocked users from viewing listings. Testing showed 43% of initial leads abandoned the flow at this checkpoint due to privacy fears and login fatigue.
                  </p>
                </div>
              ) : (
                <div className="p-6 rounded-xl border border-accent-green/20 bg-accent-green/5 text-xs flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-accent-green font-bold font-mono">
                    <CheckCircle className="w-4 h-4" />
                    <span>After: PLG Acquisition Onboarding</span>
                  </div>
                  <p className="leading-relaxed">
                    Removed forced login. Users browse listings freely, only prompting registration when committing to "Book Viewing" or "Referencing Wizard". Search engagement increased by **34%** instantly.
                  </p>
                </div>
              )}
            </div>

            {/* Referencing wizard */}
            <div className="flex flex-col gap-3 text-xs leading-relaxed mt-4">
              <h4 className="font-geist font-bold text-text-primary">Referencing Micro-Steps Sequencing:</h4>
              <p>
                Long forms were segmented into modular progress-tracked components. By implementing progressive disclosures (disclosing banking and ID verification in discrete steps), we reduced cognitive load and eliminated form abandonment.
              </p>
            </div>
          </section>

          {/* 4. Design System & Dev Handoff */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md border border-neutral-800 text-[10px] font-mono text-text-muted">SECTION 04</span>
              <h2 className="font-geist font-bold text-text-primary text-xl">Design System Governance &amp; Dev Handoff</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Components were built using an auto-layout architecture in Figma, aligned with token systems. This allowed standardizing dark/light mode behavior, typography grids, and contrast verification (WCAG 2.1 AA) before handoff.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Code viewer */}
              <div className="p-5 rounded-xl border border-border-muted bg-bg-secondary/40 flex flex-col gap-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border-muted pb-3">
                  <span className="text-[10px] text-text-primary font-bold">Figma Tokens Payload</span>
                  <button 
                    onClick={copyToClipboard}
                    className="p-1 hover:bg-neutral-850 rounded text-text-muted hover:text-text-primary transition-colors flex items-center gap-1 text-[10px]"
                  >
                    <Copy className="w-3 h-3" />
                    <span>{copiedToken ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
                <pre className="overflow-x-auto text-[10px] text-neutral-400">{tokenCode}</pre>
              </div>

              <div className="flex flex-col gap-4 text-xs">
                <h4 className="font-geist font-bold text-text-primary">Handoff Specs Checklist:</h4>
                <ul className="flex flex-col gap-2.5">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <span>Annotated pixel variables and constraints on complex B2B tables.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <span>Light and Dark mode styles synced via token values.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <span>Contrast-checked color codes for WCAG AA compliance (4.5:1 ratio).</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>

        {/* Info Sidebar (Right Column) */}
        <aside className="lg:col-span-4 flex flex-col gap-8 no-print">
          <div className="p-6 rounded-xl border border-border-muted bg-bg-secondary/20 flex flex-col gap-6">
            <h3 className="font-geist font-bold text-text-primary text-sm uppercase tracking-wider border-b border-border-muted pb-3">
              Case Study Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-xs font-mono">
              <li className="flex items-center justify-between text-accent-blue font-bold">
                <span>01. Market Discovery</span>
                <span className="text-[10px] text-text-muted">Competitors Matrix</span>
              </li>
              <li className="flex items-center justify-between">
                <span>02. CPaaS Logic</span>
                <span className="text-[10px] text-text-muted">Webhook Engine</span>
              </li>
              <li className="flex items-center justify-between">
                <span>03. Onboarding Loops</span>
                <span className="text-[10px] text-text-muted">PLG Conversion</span>
              </li>
              <li className="flex items-center justify-between">
                <span>04. Figma Systems</span>
                <span className="text-[10px] text-text-muted">Tokens &amp; Handoff</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-border-muted bg-bg-secondary/20 flex flex-col gap-4">
            <h4 className="font-geist font-bold text-text-primary text-xs uppercase tracking-wider">Related Work</h4>
            <Link 
              href="/projects/myedufusion" 
              className="group flex flex-col gap-2 p-3 rounded-lg border border-border-muted hover:border-accent-green transition-all"
            >
              <span className="text-xs font-bold text-text-primary group-hover:text-accent-green transition-colors">MyEduFusion Case Study</span>
              <span className="text-[10px] text-text-muted">Fault-Tolerant SIS System Design</span>
            </Link>
          </div>
        </aside>
      </article>
    </div>
  );
}

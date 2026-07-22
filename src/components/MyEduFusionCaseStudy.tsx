"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight,
  TrendingUp, 
  Users, 
  Database,
  Layers,
  ShieldCheck,
  Check,
  Info,
  WifiOff,
  RefreshCw,
  Clock
} from "lucide-react";

export default function MyEduFusionCaseStudy() {
  const [syncState, setSyncState] = useState<"offline" | "validating" | "synced">("offline");

  const syncStateInfo = {
    offline: {
      title: "Offline Loop (Excel Entry)",
      desc: "Administrators edit grades and financials locally on formatted templates without network dependency, eliminating session time-outs.",
      color: "border-accent-orange/40 bg-accent-orange/5 text-accent-orange"
    },
    validating: {
      title: "Synchronization Wizard (Validation)",
      desc: "The import module parses Excel sheets and validates column schemas against active student structures before committing changes.",
      color: "border-accent-blue/40 bg-accent-blue/5 text-accent-blue animate-pulse"
    },
    synced: {
      title: "Successful Cloud Sync",
      desc: "Validated batch records commit to the remote database securely once stable connection is confirmed, updating dashboard metrics.",
      color: "border-accent-green/40 bg-accent-green/5 text-accent-green"
    }
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
        <div className="flex items-center gap-2 px-3 py-1 w-fit rounded-full border border-accent-green/30 bg-accent-green/10 text-xs font-mono text-accent-green">
          <span>Case Study: Enterprise SIS &amp; Offline Systems</span>
        </div>
        <h1 className="font-geist text-4xl sm:text-6xl font-bold tracking-tight text-text-primary">
          MyEduFusion
        </h1>
        <p className="font-geist text-xl sm:text-2xl text-text-primary max-w-4xl leading-snug font-medium">
          Fault-Tolerant Enterprise SIS &amp; Offline-First Design System
        </p>

        {/* Metadata grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border-muted max-w-4xl text-xs">
          <div className="flex flex-col gap-1.5">
            <span className="text-text-muted font-mono uppercase tracking-wider">My Role</span>
            <span className="text-text-primary font-bold">UI/UX Lead &amp; Systems Designer</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-text-muted font-mono uppercase tracking-wider">Timeline</span>
            <span className="text-text-primary font-bold">2 Months (Launch &amp; Iteration)</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-text-muted font-mono uppercase tracking-wider">Toolkit</span>
            <span className="text-text-primary font-bold">Figma, Miro, Notion, Tokens</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-text-muted font-mono uppercase tracking-wider">Domain</span>
            <span className="text-text-primary font-bold">Enterprise SaaS / Education Tech</span>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <article className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Case Narrative (Left Column) */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          
          {/* Executive Summary Card */}
          <section className="p-8 rounded-2xl border border-accent-green/20 bg-accent-green/5 flex flex-col gap-6">
            <h2 className="font-geist font-bold text-text-primary text-xl">Executive Summary Card</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">The Business Challenge</h3>
                  <p className="text-xs leading-relaxed text-text-secondary">
                    Nigerian educational institutions faced high drop-off and data losses during grade/fee logging because of frequent internet connectivity drops and manual paper processing loops.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-1">My Role &amp; Collaboration</h3>
                  <p className="text-xs leading-relaxed text-text-secondary">
                    Led system architecture, offline upload user flows, and brand design library. Collaborated directly with 1 Lead Engineer and 2 developers.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-2">Proven Metrics &amp; Outcome</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-bg-secondary border border-border-muted text-accent-green">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-text-primary">70+ Institutional Installations</span>
                      <span className="text-[10px] text-text-muted">Scaled from 12 initial test sites</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-bg-secondary border border-border-muted text-accent-green">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-text-primary">283% Revenue Growth Acceleration</span>
                      <span className="text-[10px] text-text-muted">Driven by automated fee-management portals</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-bg-secondary border border-border-muted text-accent-green">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-text-primary">8,000+ Active Students</span>
                      <span className="text-[10px] text-text-muted">60% retention rate across regional networks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 1. Resilient Offline Architecture */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md border border-neutral-800 text-[10px] font-mono text-text-muted">SECTION 01</span>
              <h2 className="font-geist font-bold text-text-primary text-xl">Fault-Tolerant Offline Sync Loop</h2>
            </div>
            <p className="text-sm leading-relaxed">
              To circumvent infrastructure barriers, I designed an offline-to-online data entry architecture. Administrators utilize a locally stored, pre-formatted Excel template. When network states normalize, they sync everything securely.
            </p>

            {/* Interactive Sync Simulator */}
            <div className="p-6 rounded-2xl border border-border-muted bg-bg-secondary/40 flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-border-muted pb-3">
                <span className="text-xs font-bold text-text-primary font-mono">Interactive Sync State Simulator</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSyncState("offline")}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors border ${syncState === "offline" ? "bg-accent-orange/10 border-accent-orange text-accent-orange" : "border-border-muted text-text-muted"}`}
                  >
                    1. Offline
                  </button>
                  <button 
                    onClick={() => setSyncState("validating")}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors border ${syncState === "validating" ? "bg-accent-blue/10 border-accent-blue text-accent-blue" : "border-border-muted text-text-muted"}`}
                  >
                    2. Validate
                  </button>
                  <button 
                    onClick={() => setSyncState("synced")}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors border ${syncState === "synced" ? "bg-accent-green/10 border-accent-green text-accent-green" : "border-border-muted text-text-muted"}`}
                  >
                    3. Synced
                  </button>
                </div>
              </div>

              {/* Simulator Card */}
              <div className={`p-5 rounded-xl border flex flex-col gap-3 transition-colors ${syncStateInfo[syncState].color}`}>
                <div className="flex items-center gap-2 font-bold text-xs font-mono">
                  {syncState === "offline" && <WifiOff className="w-4 h-4" />}
                  {syncState === "validating" && <RefreshCw className="w-4 h-4 animate-spin" />}
                  {syncState === "synced" && <ShieldCheck className="w-4 h-4" />}
                  <span>{syncStateInfo[syncState].title}</span>
                </div>
                <p className="text-xs leading-relaxed text-text-secondary">{syncStateInfo[syncState].desc}</p>
              </div>
            </div>
          </section>

          {/* 2. Accessibility Decisions */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md border border-neutral-800 text-[10px] font-mono text-text-muted">SECTION 02</span>
              <h2 className="font-geist font-bold text-text-primary text-xl">Accessibility &amp; Chart Optimization</h2>
            </div>
            <p className="text-sm leading-relaxed">
              Nigeria adopting schools commonly operated with low-end monitors and under various lighting conditions. Design requirements mandated high accessibility standards:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-border-muted bg-bg-secondary/40 flex flex-col gap-4">
                <h4 className="font-geist font-bold text-text-primary text-xs uppercase tracking-wider">A11y Principles Applied:</h4>
                <ul className="flex flex-col gap-3 text-xs">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-text-primary">Colorblind Friendly:</strong> Financial charts use distinct styling markers (shapes/dots) in addition to colors to guarantee readability.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-text-primary">Contrast Optimization:</strong> Screen elements contrast ratio exceeds WCAG 2.1 AA benchmarks, validated on 8-bit regional displays.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl border border-border-muted bg-bg-secondary/40 flex flex-col gap-4">
                <h4 className="font-geist font-bold text-text-primary text-xs uppercase tracking-wider">Infrastructure Constraints Met:</h4>
                <ul className="flex flex-col gap-3 text-xs">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-text-primary">Fault-Tolerant Forms:</strong> Ingestion upload progress-bars render validations and cached local recovery options upon sudden timeout.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-text-primary">Tabular Simplification:</strong> Result sheets compilation uses simplified layouts reducing cognitive weight on operators entering grades rapidly.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. Design Tokens Contribution */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md border border-neutral-800 text-[10px] font-mono text-text-muted">SECTION 03</span>
              <h2 className="font-geist font-bold text-text-primary text-xl">Figma Tokens &amp; Operational Sprints</h2>
            </div>
            <p className="text-sm leading-relaxed">
              To support the fast-evolving frontend, I organized the UI framework into components backed by Figma design tokens. Testing this unified layout library resulted in a **63% increase** in administrative bookkeeping and bookkeeping validation efficiency.
            </p>
          </section>

        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-8 no-print">
          <div className="p-6 rounded-xl border border-border-muted bg-bg-secondary/20 flex flex-col gap-6">
            <h3 className="font-geist font-bold text-text-primary text-sm uppercase tracking-wider border-b border-border-muted pb-3">
              Case Study Navigation
            </h3>
            <ul className="flex flex-col gap-3 text-xs font-mono">
              <li className="flex items-center justify-between text-accent-green font-bold">
                <span>01. Offline Ingestion</span>
                <span className="text-[10px] text-text-muted">Fault-Tolerant Loop</span>
              </li>
              <li className="flex items-center justify-between">
                <span>02. Accessibility</span>
                <span className="text-[10px] text-text-muted">WCAG 2.1 AA Charts</span>
              </li>
              <li className="flex items-center justify-between">
                <span>03. Figma Tokens</span>
                <span className="text-[10px] text-text-muted">63% Efficiency Gain</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-border-muted bg-bg-secondary/20 flex flex-col gap-4">
            <h4 className="font-geist font-bold text-text-primary text-xs uppercase tracking-wider">Related Work</h4>
            <Link 
              href="/projects/proptii" 
              className="group flex flex-col gap-2 p-3 rounded-lg border border-border-muted hover:border-accent-blue transition-all"
            >
              <span className="text-xs font-bold text-text-primary group-hover:text-accent-blue transition-colors">Proptii Case Study</span>
              <span className="text-[10px] text-text-muted">B2B PropTech Notification Engine</span>
            </Link>
          </div>
        </aside>
      </article>
    </div>
  );
}

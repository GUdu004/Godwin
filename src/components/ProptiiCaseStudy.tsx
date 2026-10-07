"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ZoomIn,
  CheckCircle2
} from "lucide-react";
import { ImageLightbox } from "./ImageLightbox";

export default function ProptiiCaseStudy() {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  const metrics = [
    { label: "Referencing Time", value: "85%", unit: "Reduction", desc: "Streamlined multi-step verification from 5 days to 18 minutes." },
    { label: "Search Conversion", value: "+34%", unit: "Boost", desc: "Un-gated PLG search model drove higher viewing bookings." },
    { label: "Active Landlords", value: "150+", unit: "Onboarded", desc: "Adopted across UK residential property managers." }
  ];

  const storyboardSlides = [
    {
      title: "1. B2B Property Search & Direct Viewing Booking",
      desc: "Un-gated search interface allowing prospective tenants to filter property attributes and schedule instant viewings without early paywalls.",
      image: "/images/projects/proptii/Slide_01a.png",
      tag: "PLG & Search UX"
    },
    {
      title: "2. Book Viewings Calendar Interface",
      desc: "Calendar slot selector eliminating back-and-forth scheduling emails. Tenants pick available slots; agents receive instant confirmations.",
      image: "/images/projects/proptii/slide_15.png",
      tag: "Scheduling UX"
    },
    {
      title: "3. Property Manager Dashboard & Portfolio Metrics",
      desc: "Centralized management dashboard providing property managers with real-time portfolio metrics, active lead tracking, and viewing request updates.",
      image: "/images/projects/proptii/slide_16.png",
      tag: "Dashboard Design"
    },
    {
      title: "4. Streamlined Tenant Referencing & Identity Verification",
      desc: "Multi-step verification wizard replacing paper forms with automated ID checks, credit checks, and landlord background validation.",
      image: "/images/projects/proptii/slide_06.png",
      tag: "Identity & Verification"
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-secondary">
      {/* Breadcrumb Back Link */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work Overview</span>
        </Link>
      </div>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
        <span className="section-label">Case Study: B2B PropTech SaaS & Notification Engine</span>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-text-primary">
          Proptii
        </h1>
        <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl leading-snug font-normal">
          A unified B2B PropTech platform and event-driven notification engine that reduced referencing time by 85%.
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-border-muted max-w-4xl text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono uppercase tracking-wider">Role</span>
            <span className="text-text-primary font-bold">Lead Product Designer</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono uppercase tracking-wider">Timeline</span>
            <span className="text-text-primary font-bold">3 Months (Discovery to High-Fi)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono uppercase tracking-wider">Domain</span>
            <span className="text-text-primary font-bold">B2B SaaS / Notification Architecture</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono uppercase tracking-wider">Impact</span>
            <span className="text-text-primary font-bold">85% Referencing Time Saved</span>
          </div>
        </div>
      </header>

      {/* Main Full-Bleed Hero Image Showcase */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div 
          className="fabrica-card relative group aspect-[16/9] w-full cursor-pointer"
          onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_02.png", alt: "Proptii High-Fidelity UI Design" })}
        >
          <img
            src="/images/projects/proptii/slide_02.png"
            alt="Proptii High-Fidelity UI Design"
            className="w-full h-full object-contain bg-white group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs">
            <ZoomIn className="w-4 h-4" />
            <span>Click to View High-Res Mockup</span>
          </div>
        </div>
      </section>

      {/* Key Metric Cards — split-card hover-merge layout */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="group flex flex-col">

              {/* Upper card: large stat value + unit on new line + index number */}
              <div className="
                border border-border-muted bg-bg-secondary fabrica-shadow
                rounded-2xl group-hover:rounded-b-none
                p-6 mb-[5px] group-hover:mb-0
                group-hover:[border-bottom-color:transparent]
                transition-all duration-300 ease-in-out
              ">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-4xl font-extrabold text-text-primary leading-none tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-4xl font-normal text-text-secondary leading-none tracking-tight">
                      {m.unit}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-text-muted">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Lower card: right-aligned label + left-aligned description */}
              <div className="
                border border-border-muted bg-bg-secondary fabrica-shadow
                rounded-2xl group-hover:rounded-t-none
                p-6 flex flex-col justify-between min-h-[260px]
                group-hover:[border-top-color:transparent]
                transition-all duration-300 ease-in-out
              ">
                <span className="text-xl font-semibold text-text-secondary text-right leading-snug">
                  {m.label}
                </span>
                <p className="text-[13.5px] text-text-muted leading-relaxed max-w-[90%]">
                  {(() => {
                    const pattern = /(\bn=\d+|\b\d+-(?:week|student|step|day|month)\b|\b\d+[–-]\d+\b|\b\d+\+\b|\b\d+D\b)/g;
                    const parts = m.desc.split(pattern);
                    return parts.map((part, i) =>
                      pattern.test(part) ? (
                        <span key={i} className="font-semibold text-text-secondary">
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    );
                  })()}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Main Visual Storyboard */}
      <article className="max-w-7xl mx-auto px-6 pb-24 flex flex-col gap-20">
        
        {/* Section 1: Problem & Strategic Approach */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="section-label">01. The Challenge & PLG Shift</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">Eliminating Friction in Tenant Referencing</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Traditional UK tenant referencing relied on manual paper forms, email back-and-forth, and fragmented third-party agencies, taking up to 5 business days per application.
            </p>

            <ul className="flex flex-col gap-3 pt-2">
              <li className="flex items-start gap-2 text-xs text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-text-primary shrink-0 mt-0.5" />
                <span><strong>Un-gated Search:</strong> Shifted to a Product-Led Growth model allowing upfront property exploration.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-text-primary shrink-0 mt-0.5" />
                <span><strong>Instant Verification:</strong> Integrated digital ID checks and credit score validation into a single 3-step wizard.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-text-primary shrink-0 mt-0.5" />
                <span><strong>Landlord Dashboard:</strong> Real-time status tracking for property managers with instant approval triggers.</span>
              </li>
            </ul>
          </div>

          <div 
            className="lg:col-span-7 relative group aspect-[16/9] rounded-2xl overflow-hidden border border-border-muted bg-white fabrica-shadow cursor-pointer"
            onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_02a.png", alt: "Property Search & Viewing Booking UI" })}
          >
            <img
              src="/images/projects/proptii/slide_02a.png"
              alt="Property Search UI"
              className="w-full h-full object-contain bg-white group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>
        </section>

        {/* Section 2: Market & User Research */}
        <section className="p-8 sm:p-12 rounded-3xl border border-border-muted bg-bg-secondary fabrica-shadow flex flex-col gap-8">
          <div>
            <span className="section-label">02. Market & User Research</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mt-1">
              UK Rental Market Discovery & Tenant Journey Analysis
            </h2>
            <p className="text-sm text-text-secondary max-w-3xl mt-2 leading-relaxed">
              We conducted qualitative user interviews and operational mapping across UK property managers, letting agents, and prospective tenants to identify critical friction points in traditional property search and tenant referencing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Market Research Discovery (Slide 03) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_03.png", alt: "Proptii Market Research & Discovery slide" })}
              >
                <img
                  src="/images/projects/proptii/slide_03.png"
                  alt="Proptii Market Discovery"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Discovery Slide</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">UK PropTech Market Insights</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Analysis of traditional UK letting workflows, identifying key bottlenecks in manual paper referencing, delayed deposit verification, and fragmented communication.
                </p>
              </div>
            </div>

            {/* Card 2: User Search & Viewing Intent (Slide 04) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_04.png", alt: "Proptii Tenant Search & Viewing Intent Discovery slide" })}
              >
                <img
                  src="/images/projects/proptii/slide_04.png"
                  alt="Proptii Tenant Search & Viewing Intent"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Search UX Slide</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Tenant Search & Viewing Intent</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Research into tenant decision-making patterns, highlighting the demand for upfront un-gated property search and instant viewing reservations.
                </p>
              </div>
            </div>

            {/* Card 3: Journey & Operational Friction (Slide 05) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_05.png", alt: "Proptii End-to-End Letting Journey & Pain Points slide" })}
              >
                <img
                  src="/images/projects/proptii/slide_05.png"
                  alt="Proptii User Journey & Pain Points"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Journey Slide</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">End-to-End Letting Journey Mapping</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Mapping multi-stakeholder interactions across tenants, letting agents, and landlords to eliminate drop-offs in the referencing funnel.
                </p>
              </div>
            </div>

            {/* Card 4: Verification & Identity Requirements (Slide 07) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_07.png", alt: "Proptii Automated Identity & Verification Flow slide" })}
              >
                <img
                  src="/images/projects/proptii/slide_07.png"
                  alt="Proptii Identity & Verification Flow"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Verification Slide</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Automated Identity & Verification Flow</h4>
                <p className="text-xs text-text-secondary mt-1">
                  User validation research establishing compliance criteria for Open Banking integration, digital ID checks, and instant background validation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Key User Flow & Wireframes */}
        <section className="p-8 sm:p-12 rounded-3xl border border-border-muted bg-bg-secondary fabrica-shadow flex flex-col gap-8">
          <div>
            <span className="section-label">03. Key User Flow & Wireframes</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mt-1">
              User Flow Architecture & Interface Wireframes
            </h2>
            <p className="text-sm text-text-secondary max-w-3xl mt-2 leading-relaxed">
              Translating tenant and landlord requirements into structured wireframe blueprints, task flows, and multi-step verification architectures before high-fidelity visual design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: User Flow Architecture (Slide 08) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_08.png", alt: "Proptii Tenant Onboarding & Viewing Booking User Flow slide" })}
              >
                <img
                  src="/images/projects/proptii/slide_08.png"
                  alt="Proptii User Flow Architecture"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Flow Slide</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Tenant Onboarding & Viewing Booking User Flow</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Architected step-by-step user journey mapping tenant search inputs, calendar availability selection, and instant viewing confirmation logic.
                </p>
              </div>
            </div>

            {/* Card 2: Referencing Wireframes (Slide 09) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_09.png", alt: "Proptii Multi-Step Referencing & Identity Wireframe Blueprints slide" })}
              >
                <img
                  src="/images/projects/proptii/slide_09.png"
                  alt="Proptii Wireframe Blueprints"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Wireframes</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Multi-Step Referencing & Identity Wireframe Blueprints</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Structural wireframe layouts defining form fields, verification progress indicators, and automated document submission states.
                </p>
              </div>
            </div>

            {/* Card 3: Landlord Dashboard Wireframes (Slide 11) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_11.png", alt: "Proptii Landlord Approval Dashboard & Lead Queue Wireframes slide" })}
              >
                <img
                  src="/images/projects/proptii/slide_11.png"
                  alt="Proptii Landlord Dashboard Wireframes"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Dashboard Wireframes</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Landlord Approval Dashboard Wireframes</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Wireframe architecture for property managers to review tenant reference scores, check background verifications, and trigger instant lease approvals.
                </p>
              </div>
            </div>

            {/* Card 4: Notification Webhook Logic Wireframes (Slide 13) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_13.png", alt: "Proptii Automated Notification & Webhook Logic Wireframes slide" })}
              >
                <img
                  src="/images/projects/proptii/slide_13.png"
                  alt="Proptii Webhook Wireframes"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Logic Wireframes</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Automated Notification & Webhook Logic Wireframes</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Structural wireframe blueprints detailing webhook status alerts, tenant SMS/Email reminder dialogs, and automated event triggers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Event-Driven & API Architecture */}
        <section className="p-8 sm:p-12 rounded-3xl border border-border-muted bg-bg-secondary fabrica-shadow flex flex-col gap-8">
          <div>
            <span className="section-label">04. Platform Architecture</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mt-1">
              Enterprise API Integration & Omnichannel Communication Engine
            </h2>
            <p className="text-sm text-text-secondary max-w-3xl mt-2 leading-relaxed">
              Designed the system architecture connecting tenant events (viewing requested, background check complete) with automated webhook triggers across SMS, WhatsApp, and Push Notification channels.
            </p>
          </div>

          <div 
            className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted cursor-pointer"
            onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_17.png", alt: "Enterprise API Integration & Notification Architecture Diagram" })}
          >
            <img
              src="/images/projects/proptii/slide_17.png"
              alt="Enterprise API & Notification Engine Architecture Diagram"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Zoom Architecture Diagram</span>
            </div>
          </div>
        </section>

        {/* Section 5: Visual UI Storyboard Grid */}
        <section className="flex flex-col gap-10">
          <div>
            <span className="section-label">05. High-Fidelity UI Gallery</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mt-1">Design System & Key User Journeys</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {storyboardSlides.map((slide, idx) => (
              <div key={idx} className="glass-card rounded-2xl border border-border-muted overflow-hidden fabrica-shadow flex flex-col">
                <div 
                  className="relative group aspect-[16/9] bg-bg-tertiary border-b border-border-muted cursor-pointer overflow-hidden"
                  onClick={() => setActiveImage({ src: slide.image, alt: slide.title })}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-text-primary border border-black/10">
                    {slide.tag}
                  </span>
                  <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-2 bg-bg-secondary flex-grow">
                  <h3 className="text-lg font-bold text-text-primary">{slide.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Testing & Impact */}
        <section className="p-8 sm:p-12 rounded-3xl border border-border-muted bg-bg-secondary fabrica-shadow flex flex-col gap-8">
          <div>
            <span className="section-label">06. Testing & Impact</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mt-1">
              Usability Validation, Conversion Gains & Scale Impact
            </h2>
            <p className="text-sm text-text-secondary max-w-3xl mt-2 leading-relaxed">
              Rigorous usability testing loops with property managers and prospective tenants demonstrated dramatic time savings, improved search conversion, and rapid platform adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Usability Testing (Slide 18) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_18.png", alt: "Proptii Usability Testing & Friction Validation slide" })}
              >
                <img
                  src="/images/projects/proptii/slide_18.png"
                  alt="Proptii Usability Testing"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Usability Slide</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Usability Testing & Friction Mapping</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Evaluated 3-step referencing wizards and viewing booking flows with real tenants and letting agents, resolving UX bottlenecks to achieve an 85% task completion speedup.
                </p>
              </div>
            </div>

            {/* Card 2: Conversion Metrics (Slide 19) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_19.png", alt: "Proptii Conversion & Growth Impact slide" })}
              >
                <img
                  src="/images/projects/proptii/slide_19.png"
                  alt="Proptii Conversion & Growth Impact"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Impact Slide</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Search Conversion & Growth Impact</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Un-gated search architecture and instant viewing reservations drove a +34% boost in search-to-viewing conversion and reduced tenant drop-offs.
                </p>
              </div>
            </div>

            {/* Card 3: Platform Scale (Slide 21) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_21.png", alt: "Proptii Platform Scale & Enterprise Adoption slide" })}
              >
                <img
                  src="/images/projects/proptii/slide_21.png"
                  alt="Proptii Scale & Adoption"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Scale Slide</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Enterprise Adoption & Scale</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Onboarded 150+ active UK residential landlords and processed thousands of automated API webhook notification triggers with zero fallback failures.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Lightbox Modal */}
      {activeImage && (
        <ImageLightbox
          src={activeImage.src}
          alt={activeImage.alt}
          isOpen={!!activeImage}
          onClose={() => setActiveImage(null)}
        />
      )}
    </div>
  );
}

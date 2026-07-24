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
  Info,
  ZoomIn,
  CheckCircle2,
  Zap,
  ShieldCheck
} from "lucide-react";
import { Navbar } from "./Navbar";
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
      image: "/images/projects/proptii/slide_04.png",
      tag: "PLG & Search UX"
    },
    {
      title: "2. Book Viewings Calendar Interface",
      desc: "Calendar slot selector eliminating back-and-forth scheduling emails. Tenants pick available slots; agents receive instant confirmations.",
      image: "/images/projects/proptii/slide_15.png",
      tag: "Scheduling UX"
    },
    {
      title: "3. Omnichannel CPaaS API & Webhook Architecture",
      desc: "Event-driven notification pipeline delivering automated SMS, Email, and WhatsApp verification triggers with fallback retry logic.",
      image: "/images/projects/proptii/slide_17.png",
      tag: "CPaaS & API System"
    },
    {
      title: "4. Streamlined Tenant Referencing & Identity Verification",
      desc: "Multi-step verification wizard replacing paper forms with automated ID checks, credit checks, and landlord background validation.",
      image: "/images/projects/proptii/slide_07.png",
      tag: "Identity & Verification"
    },
    {
      title: "5. Tokenized Design System & Figma Redline Specifications",
      desc: "Standardized UI component library with tokenized spacing, accessibility contrast badges, and redline annotations for engineering handoff.",
      image: "/images/projects/proptii/slide_20.png",
      tag: "Design Systems & DevEx"
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
        <span className="section-label">Case Study: B2B PropTech SaaS & CPaaS Engine</span>
        
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
            <span className="text-text-primary font-bold">B2B SaaS / CPaaS Architecture</span>
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
          onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_14.png", alt: "Proptii High-Fidelity UI Design" })}
        >
          <img
            src="/images/projects/proptii/slide_14.png"
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
                <p className="text-[17px] text-text-muted leading-relaxed max-w-[75%]">
                  {m.desc}
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
            onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_04.png", alt: "Property Search & Viewing Booking UI" })}
          >
            <img
              src="/images/projects/proptii/slide_04.png"
              alt="Property Search UI"
              className="w-full h-full object-contain bg-white group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>
        </section>

        {/* Section 2: CPaaS & API Architecture */}
        <section className="p-8 sm:p-12 rounded-3xl border border-border-muted bg-bg-secondary fabrica-shadow flex flex-col gap-8">
          <div>
            <span className="section-label">02. Platform Architecture</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mt-1">
              Enterprise API Integration & Omnichannel Communication Engine
            </h2>
            <p className="text-sm text-text-secondary max-w-3xl mt-2 leading-relaxed">
              Designed the system architecture connecting tenant events (viewing requested, background check complete) with automated webhook triggers across SMS, WhatsApp, and Push Notification channels.
            </p>
          </div>

          <div 
            className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted cursor-pointer"
            onClick={() => setActiveImage({ src: "/images/projects/proptii/slide_17.png", alt: "Enterprise API Integration & CPaaS Architecture Diagram" })}
          >
            <img
              src="/images/projects/proptii/slide_17.png"
              alt="Enterprise API & CPaaS Engine Architecture Diagram"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Zoom Architecture Diagram</span>
            </div>
          </div>
        </section>

        {/* Section 3: Visual UI Storyboard Grid */}
        <section className="flex flex-col gap-10">
          <div>
            <span className="section-label">03. High-Fidelity UI Gallery</span>
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
                    className="w-full h-full object-contain bg-white group-hover:scale-[1.03] transition-transform duration-500"
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

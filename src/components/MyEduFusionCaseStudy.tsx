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
  CheckCircle2,
  WifiOff,
  RefreshCw,
  Clock,
  ZoomIn
} from "lucide-react";
import { Navbar } from "./Navbar";
import { ImageLightbox } from "./ImageLightbox";

export default function MyEduFusionCaseStudy() {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  const metrics = [
    { label: "Adopted Schools", value: "70+", unit: "Institutions", desc: "Deployed across primary, secondary, and tertiary schools." },
    { label: "Revenue Impact", value: "+283%", unit: "Growth", desc: "Accelerated subscription revenue through offline compliance." },
    { label: "Active Students", value: "8,000+", unit: "Enrolled", desc: "Managing grades, attendance, and tuition records." }
  ];

  const storyboardSlides = [
    {
      title: "1. Tokenized Figma Design System & WCAG Accessibility",
      desc: "High-contrast accessible color tokens, screen-reader compatible component states, and dark/light mode variables built for low-bandwidth devices.",
      image: "/images/projects/myedufusion/slide_28.png",
      tag: "Design System & Tokens"
    },
    {
      title: "2. Student & Grade Management Portal Interfaces",
      desc: "High-fidelity UI screens for multi-tenant school administration, student profile management, and bulk grade entry verification.",
      image: "/images/projects/myedufusion/slide_29.png",
      tag: "High-Fi Interface"
    },
    {
      title: "3. Analytics, Reports & Certificate Generation Engine",
      desc: "Automated report card generation UI, attendance tracking dashboards, and exportable academic transcript matrices.",
      image: "/images/projects/myedufusion/slide_30.png",
      tag: "Analytics & Reporting"
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
        <span className="section-label">Case Study: Enterprise SIS & Offline Systems</span>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-text-primary">
          MyEduFusion
        </h1>
        <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl leading-snug font-normal">
          Fault-tolerant Student Information System (SIS) engineered for low-connectivity environments, scaling across 70+ institutions.
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border-muted max-w-4xl text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono uppercase tracking-wider">Role</span>
            <span className="text-text-primary font-bold">UI/UX Lead & Systems Designer</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono uppercase tracking-wider">Timeline</span>
            <span className="text-text-primary font-bold">2 Months (Launch & Iteration)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono uppercase tracking-wider">Domain</span>
            <span className="text-text-primary font-bold">Enterprise SaaS / Offline Sync</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono uppercase tracking-wider">Impact</span>
            <span className="text-text-primary font-bold">+283% Revenue Acceleration</span>
          </div>
        </div>
      </header>

      {/* Main Full-Bleed Hero Image Showcase */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div
          className="relative group aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border-muted bg-bg-tertiary fabrica-shadow cursor-pointer"
          onClick={() => setActiveImage({ src: "/images/projects/myedufusion/slide_23.png", alt: "MyEduFusion Overview Dashboard" })}
        >
          <img
            src="/images/projects/myedufusion/slide_23.png"
            alt="MyEduFusion Product Overview"
            className="w-full h-full object-contain bg-white group-hover:scale-[1.02] transition-transform duration-500"
          />
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

              {/* Upper card: large stat value + index number */}
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

        {/* Section 1: The Challenge */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="section-label">01. The Challenge & Offline-First Strategy</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">Designing for Unstable Connectivity</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              School administrators in emerging markets frequently experienced server timeouts while entering end-of-term grades for thousands of students, causing catastrophic data loss and delays.
            </p>

            <ul className="flex flex-col gap-3 pt-2">
              <li className="flex items-start gap-2 text-xs text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                <span><strong>Local Excel Editing:</strong> Offline data entry loop with automated column schema validation.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                <span><strong>Batch Sync Wizard:</strong> Single-click cloud synchronization once internet connection restores.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-text-muted shrink-0 mt-0.5" />
                <span><strong>Accessibility Standards:</strong> WCAG 2.1 AA compliant typography and high-contrast color scales.</span>
              </li>
            </ul>
          </div>

          <div
            className="lg:col-span-7 relative group aspect-[16/9] rounded-2xl overflow-hidden border border-border-muted bg-white fabrica-shadow cursor-pointer"
            onClick={() => setActiveImage({ src: "/images/projects/myedufusion/slide_01.png", alt: "MyEduFusion Challenge & Offline-First Strategy slide" })}
          >
            <img
              src="/images/projects/myedufusion/slide_01.png"
              alt="MyEduFusion Offline-First Strategy"
              className="w-full h-full object-contain bg-white group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>
        </section>

        {/* Section 2: Research & Market Discovery */}
        <section className="p-8 sm:p-12 rounded-3xl border border-border-muted bg-bg-secondary fabrica-shadow flex flex-col gap-8">
          <div>
            <span className="section-label">02. Market & User Research</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mt-1">
              Enterprise SIS Requirements & System Workflows
            </h2>
            <p className="text-sm text-text-secondary max-w-3xl mt-2 leading-relaxed">
              We analyzed administrative workflows across primary and secondary institutions, mapping offline-to-online data entry patterns and multi-role user access hierarchies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: System Workflows (Slide 23) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/myedufusion/slide_23.png", alt: "MyEduFusion System Workflows & User Journey slide" })}
              >
                <img
                  src="/images/projects/myedufusion/slide_23.png"
                  alt="MyEduFusion System Workflows"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Workflow Slide</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">System Workflows & Data Pipelines</h4>
                <p className="text-xs text-text-secondary mt-1">
                  End-to-end operational flow mapping student enrollment, grade entries, report generation, and offline sync triggers.
                </p>
              </div>
            </div>

            {/* Card 2: User Persona & Role Architecture (Slide 24) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/myedufusion/slide_24.png", alt: "MyEduFusion User Access & Role Architecture slide" })}
              >
                <img
                  src="/images/projects/myedufusion/slide_24.png"
                  alt="MyEduFusion User Roles & Architecture"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Architecture Slide</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">User Personas & Role Architecture</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Multi-role access hierarchy tailored for school administrators, teachers, financial officers, and district inspectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Key User Journeys & Wireframes */}
        <section className="p-8 sm:p-12 rounded-3xl border border-border-muted bg-bg-secondary fabrica-shadow flex flex-col gap-10">
          <div>
            <span className="section-label">03. Key User Journeys & Wireframes</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mt-1">
              User Journey Mapping & Structural Wireframing
            </h2>
            <p className="text-sm text-text-secondary max-w-3xl mt-2 leading-relaxed">
              Translating administrative requirements into structured wireframe blueprints, task flows, and system interaction architectures before high-fidelity visual styling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: User Flow Architecture (Slide 25) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/myedufusion/slide_25.png", alt: "MyEduFusion User Flow & Execution Loop slide" })}
              >
                <img
                  src="/images/projects/myedufusion/slide_25.png"
                  alt="MyEduFusion User Flow"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom User Flow</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Offline-to-Online User Flow</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Local execution loops and cloud synchronization pathways for grade inputs and administrative actions.
                </p>
              </div>
            </div>

            {/* Card 2: Low-Fidelity Wireframes Part 1 (Slide 27) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/myedufusion/slide_27.png", alt: "MyEduFusion Low-Fidelity Interface Wireframes slide" })}
              >
                <img
                  src="/images/projects/myedufusion/slide_27.png"
                  alt="MyEduFusion Wireframe Blueprints"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Wireframe Blueprints</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Structural Interface Wireframes</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Early-stage wireframe layouts mapping grade entry tables, batch action menus, and report cards.
                </p>
              </div>
            </div>

            {/* Card 3: Wireframe Component States (Slide 27b) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/myedufusion/slide_27b.png", alt: "MyEduFusion Wireframe Component Specs slide" })}
              >
                <img
                  src="/images/projects/myedufusion/slide_27b.png"
                  alt="MyEduFusion Component Specs"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Component Specs</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Component Layout & Navigation Wireframes</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Granular UI wireframe specifications for table headers, pagination, and multi-step modal dialogs.
                </p>
              </div>
            </div>

            {/* Card 4: Information Architecture (Slide 26) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/myedufusion/slide_26.png", alt: "MyEduFusion Information Architecture & Module Taxonomy slide" })}
              >
                <img
                  src="/images/projects/myedufusion/slide_26.png"
                  alt="MyEduFusion Information Architecture"
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom IA Diagram</span>
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Information Architecture & Module Taxonomy</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Hierarchical site map defining module navigation from student records to finance and reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Visual UI Storyboard Grid */}
        <section className="flex flex-col gap-10">
          <div>
            <span className="section-label">04. High-Fidelity UI Gallery</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mt-1">Design System & Deliverables</h2>
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

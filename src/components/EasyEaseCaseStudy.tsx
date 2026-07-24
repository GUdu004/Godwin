"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  CheckCircle2,
  ZoomIn,
  BookOpen,
  Sparkles,
  Award
} from "lucide-react";
import { ImageLightbox } from "./ImageLightbox";

export default function EasyEaseCaseStudy() {
  const [activeImage, setActiveImage] = useState<{ src: string; alt: string } | null>(null);

  const metrics = [
    { label: "Concept Retention", value: "+142%", unit: "Mastery Increase", desc: "Interactive 3D models and storytelling format improved post-lesson test scores in user trials." },
    { label: "Engagement Rate", value: "94%", unit: "Session Completion", desc: "Gamified reward loops (XP, Coins, Badges) kept learners active and reduced drop-off." },
    { label: "Target Audience", value: "Grades 7-9", unit: "Core Demographics", desc: "Tailored experience for junior secondary school learners in regional centers." }
  ];

  const storyboardSlides = [
    {
      title: "1. App Information Architecture",
      desc: "Hierarchical routing structure mapping core learner touchpoints from onboarding/paywall gates to STEM selectors, interactive 3D sandboxes, and reward matrices.",
      image: "/images/projects/easyease/slide_05.png",
      tag: "Information Architecture"
    },
    {
      title: "2. End-to-End User Flow",
      desc: "User flow mapping the complete student journey from account creation and paywall choices to concept lessons, 3D sandbox simulation, and quiz feedback loops.",
      image: "/images/projects/easyease/slide_06.png",
      tag: "User Journey & Flow"
    },
    {
      title: "3. Low-Fidelity Interactive Wireframes",
      desc: "Early-stage interface blueprints focusing on structural content layout, formula search, and subject card hierarchy before high-fidelity visual styling.",
      image: "/images/projects/easyease/slide_11.png",
      tag: "Wireframing & Lo-Fi"
    },
    {
      title: "4. High-Fidelity STEM Dashboard",
      desc: "Production-ready interfaces featuring the student dashboard, subject progress tracking cards, and the gamified performance/reward cabinet.",
      image: "/images/projects/easyease/slide_12.png",
      tag: "High-Fi Interface"
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
        <span className="section-label">Case Study: STEM EdTech & Gamified Interaction</span>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-text-primary">
          EasyEase
        </h1>
        <p className="text-xl sm:text-2xl text-text-secondary max-w-4xl leading-snug font-normal">
          An interactive STEM learning platform combining storytelling, 3D visualization, and gamification to teach abstract science subjects to high school students.
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-border-muted max-w-4xl text-xs">
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono uppercase tracking-wider">Role</span>
            <span className="text-text-primary font-bold">Lead Product Designer</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono uppercase tracking-wider">Timeline</span>
            <span className="text-text-primary font-bold">4 Months (Discovery to High-Fi)</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono uppercase tracking-wider">Domain</span>
            <span className="text-text-primary font-bold">STEM EdTech / Gamification</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono uppercase tracking-wider">Impact</span>
            <span className="text-text-primary font-bold">+142% Concept Retention</span>
          </div>
        </div>
      </header>

      {/* Main Full-Bleed Hero Image Showcase */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div
          className="fabrica-card relative group aspect-[16/9] w-full cursor-pointer bg-white"
          onClick={() => setActiveImage({ src: "/images/projects/easyease/slide_12.png", alt: "EasyEase High-Fidelity App UI Showcase" })}
        >
          <img
            src="/images/projects/easyease/slide_12.png"
            alt="EasyEase High-Fidelity App UI Showcase"
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
            <span className="section-label">01. The Challenge & Pedagogical Shift</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight">Making Abstract STEM Concepts Tangible</h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              Mathematics, Physics, Chemistry, and Biology form the foundations of scientific education. However, abstract concepts (like vector math or equation balancing) often fail to resonate when taught through standard textbooks. Qualified teachers are in short supply, leaving students frustrated and disengaged.
            </p>

            <ul className="flex flex-col gap-3 pt-2">
              <li className="flex items-start gap-2 text-xs text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-text-primary shrink-0 mt-0.5" />
                <span><strong>Storytelling & Animation:</strong> Introducing concepts through relatable visual narratives and animation frames to capture initial interest.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-text-primary shrink-0 mt-0.5" />
                <span><strong>3D Sandbox & AR Viewport:</strong> Real-time rendering modules enabling learners to interact directly with molecules, vector forces, and geometry models.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-text-primary shrink-0 mt-0.5" />
                <span><strong>Gamified Mastery Cabinet:</strong> Point loops (XP, Coins) paired with structural unlock badging to reward consistent learning streaks.</span>
              </li>
            </ul>
          </div>

          <div
            className="lg:col-span-7 relative group aspect-[16/9] rounded-2xl overflow-hidden border border-border-muted bg-white fabrica-shadow cursor-pointer"
            onClick={() => setActiveImage({ src: "/images/projects/easyease/slide_02.png", alt: "EasyEase Overview & Core Challenge" })}
          >
            <img
              src="/images/projects/easyease/slide_02.png"
              alt="EasyEase Project Overview"
              className="w-full h-full object-contain bg-white group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-4 h-4" />
            </div>
          </div>
        </section>

        {/* Section 2: Research & Market Discovery */}
        <section className="p-8 sm:p-12 rounded-3xl border border-border-muted bg-bg-secondary fabrica-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="section-label">02. Market & User Research</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mt-1">
              African E-Learning Market Insights & Learner Personas
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed">
              We researched the African e-learning landscape, uncovering high mobile reliance and data constraints. By building personas around high school learners, we designed a flow that balances gamified excitement with lean data footprints.
            </p>
          </div>

          <div
            className="lg:col-span-7 relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
            onClick={() => setActiveImage({ src: "/images/projects/easyease/slide_03.png", alt: "E-Learning Market Research & Discovery slide" })}
          >
            <img
              src="/images/projects/easyease/slide_03.png"
              alt="EasyEase Market Discovery"
              className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs flex items-center gap-1.5">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Zoom Discovery Slide</span>
            </div>
          </div>
        </section>

        {/* Section 3: Brand Identity, Shape Language & Motion Design */}
        <section className="p-8 sm:p-12 rounded-3xl border border-border-muted bg-bg-secondary fabrica-shadow flex flex-col gap-10">
          <div>
            <span className="section-label">03. Brand Identity & Motion Design</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mt-1">
              Shape Language Exploration & Animation Style Frames
            </h2>
            <p className="text-sm text-text-secondary max-w-3xl mt-2 leading-relaxed">
              Designed a child-friendly visual system using simple geometric forms. By establishing distinct shape vocabularies for core subjects—Geometry, Trigonometry, and Algebra—we created a relatable visual language, then structured storyboard frames to guide fluid motion transitions for key animations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: Subject Shape Language (Slide 09) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/easyease/slide_09.png", alt: "Subject Shape Language Exploration (Core Elements)" })}
              >
                <img
                  src="/images/projects/easyease/slide_09.png"
                  alt="Subject Shape Language"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Subject Shape Language</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Abstract geometric shape composition establishing the foundational visual elements, character styles, and form vocabulary used across STEM concepts.
                </p>
              </div>
            </div>

            {/* Card 2: Subject Shape Language (Slide 08) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/easyease/slide_08.png", alt: "Subject Shape Language Exploration (Geometry, Trigonometry, Algebra)" })}
              >
                <img
                  src="/images/projects/easyease/slide_08.png"
                  alt="Subject Shape Language"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Subject Shape Language</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Topic-specific graphic panel exploration defining visual motifs and core color palettes (purple, blue, green) for the primary Geometry, Trigonometry, and Algebra modules.
                </p>
              </div>
            </div>

            {/* Card 3: Animation Style Frames (Slide 10) */}
            <div className="flex flex-col gap-3">
              <div
                className="relative group aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-muted bg-white cursor-pointer"
                onClick={() => setActiveImage({ src: "/images/projects/easyease/slide_10.png", alt: "Style frames design for animation" })}
              >
                <img
                  src="/images/projects/easyease/slide_10.png"
                  alt="Style frames design for animation"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
              <div className="px-1">
                <h4 className="text-sm font-bold text-text-primary">Animation Style Frames</h4>
                <p className="text-xs text-text-secondary mt-1">
                  Sequential storyboard illustrations mapping transitions for interactive concepts (angles, lines, dimensions, depth) to guide frontend visual styling.
                </p>
              </div>
            </div>

            {/* Card 4: Interactive Concept Prototypes (Split GIFs) */}
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-4 border border-border-muted rounded-xl bg-white p-2 aspect-[16/9]">
                {/* Line GIF */}
                <div
                  className="relative group h-full w-full rounded-lg overflow-hidden cursor-pointer flex items-center justify-center"
                  onClick={() => setActiveImage({ src: "/images/projects/easyease/line.gif", alt: "Line Interaction Concept" })}
                >
                  <img
                    src="/images/projects/easyease/line.gif"
                    alt="Line Interaction Animation"
                    className="max-h-full max-w-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Angle GIF */}
                <div
                  className="relative group h-full w-full rounded-lg overflow-hidden cursor-pointer flex items-center justify-center"
                  onClick={() => setActiveImage({ src: "/images/projects/easyease/angle.gif", alt: "Angle Interaction Concept" })}
                >
                  <img
                    src="/images/projects/easyease/angle.gif"
                    alt="Angle Interaction Animation"
                    className="max-h-full max-w-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 px-1">
                {/* Line Meta */}
                <div>
                  <h4 className="text-sm font-bold text-text-primary">Line & Segment Concept</h4>
                  <p className="text-xs text-text-secondary mt-1">
                    Animation showing perpendicular constraint helpers and dimensional labels rendering dynamically.
                  </p>
                </div>
                {/* Angle Meta */}
                <div>
                  <h4 className="text-sm font-bold text-text-primary">Angle Interaction Concept</h4>
                  <p className="text-xs text-text-secondary mt-1">
                    Animation showing circular division guides and real-time degree updates as the user manipulates angle slices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Visual UI Storyboard Grid */}
        <section className="flex flex-col gap-10">
          <div>
            <span className="section-label">04. High-Fidelity UI Gallery</span>
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mt-1">Design System & Key User Journeys</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {storyboardSlides.map((slide, idx) => (
              <div key={idx} className="glass-card rounded-2xl border border-border-muted overflow-hidden fabrica-shadow flex flex-col">
                <div
                  className="relative group aspect-[16/9] bg-white border-b border-border-muted cursor-pointer overflow-hidden"
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

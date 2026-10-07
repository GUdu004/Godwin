import React from "react";
import Link from "next/link";
import {
  Mail,
  Database,
  Layers,
  Compass,
  Code,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { HeroCardFan } from "@/components/HeroCardFan";

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function HomePage() {
  const projects = [
    {
      id: "proptii",
      title: "Proptii",
      subtitle: "B2B PropTech SaaS & Notification Architecture",
      description:
        "A unified digital ecosystem and communication pipeline designed to streamline customer experiences across property search, viewing, and referencing verification.",
      tags: ["B2B SaaS", "Notification Systems", "Design Systems", "API Webhooks"],
      metrics: [
        { label: "Processing Time", value: "85% Reduction" },
        { label: "Search-to-Viewing", value: "+34% Conversion" },
        { label: "Landlords Onboarded", value: "150+" },
      ],
      imageSrc: "/images/projects/proptii/slide_02.png",
      link: "/projects/proptii",
      accentColor: "blue" as const,
      year: "2024",
    },
    {
      id: "myedufusion",
      title: "MyEduFusion",
      subtitle: "Fault-Tolerant Enterprise SIS & Offline-First Design System",
      description:
        "A comprehensive Student Information System (SIS) featuring an offline-to-online data entry architecture to support schools operating with unstable connectivity.",
      tags: ["Enterprise SaaS", "Offline-First Sync", "WCAG 2.1 AA", "Figma Tokens"],
      metrics: [
        { label: "Adopted Institutions", value: "70+" },
        { label: "Revenue Growth", value: "283% Acceleration" },
        { label: "Active Students", value: "8,000+" },
      ],
      imageSrc: "/images/projects/myedufusion/slide_01.png",
      link: "/projects/myedufusion",
      accentColor: "green" as const,
      year: "2023",
    },
    {
      id: "easyease",
      title: "EasyEase",
      subtitle: "Gamified STEM EdTech Platform & Interactive 3D Sandbox",
      description:
        "A learning platform combining storytelling, 3D visualization, and gamified reward loops to teach abstract STEM concepts to high schoolers.",
      tags: ["EdTech SaaS", "Gamification", "3D Sandbox", "Information Architecture"],
      metrics: [
        { label: "Concept Retention", value: "+142%" },
        { label: "Engagement Rate", value: "94%" },
        { label: "Target Audience", value: "Grades 7-9" },
      ],
      imageSrc: "/images/projects/easyease/slide_12.png",
      link: "/projects/easyease",
      accentColor: "orange" as const,
      year: "2022",
    },
  ];

  const capabilities = [
    {
      number: "01",
      category: "Product Strategy & PLG",
      icon: <Compass className="w-4 h-4" />,
      items: [
        "B2B SaaS Design",
        "Product-Led Growth (PLG)",
        "User Research",
        "Usability Testing",
        "Enterprise Workflows",
        "Data-Informed Iterations",
      ],
    },
    {
      number: "02",
      category: "Systems & Notification Architecture",
      icon: <Database className="w-4 h-4" />,
      items: [
        "Omnichannel Notification Engines",
        "Information Architecture",
        "Multi-State Logic Flows",
        "Offline-First Data Sync",
        "API Webhook Pipelines",
      ],
    },
    {
      number: "03",
      category: "Design Systems & Accessibility",
      icon: <Layers className="w-4 h-4" />,
      items: [
        "Component Tokenization",
        "Low-to-High-Fidelity Prototyping",
        "WCAG 2.1 AA Compliance",
        "Dark/Light Theme Variables",
        "Developer Handoff Redlines",
      ],
    },
    {
      number: "04",
      category: "Tools & Engineering Toolkit",
      icon: <Code className="w-4 h-4" />,
      items: [
        "Figma Enterprise",
        "Miro / FigJam",
        "Notion / JIRA / Confluence",
        "Agile/Lean",
        "Developer Experience (DevEx)",
        "Next.js / HTML5",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-secondary">
      <main className="flex-grow">

        {/* ═══════════════════════════════════════════════════
            1. HERO SECTION (avec anni Marquee Card Fan Layout)
        ════════════════════════════════════════════════════ */}
        <section className="relative pt-6 sm:pt-20 pb-8 sm:pb-16 border-b border-border-muted bg-bg-primary text-text-primary min-h-0 sm:min-h-[85vh] flex flex-col justify-between overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col gap-6 sm:gap-10">

            {/* Hero Headline — avec anni staircase shape: reduced by 20% for refined editorial scale */}
            <div className="w-full max-w-4xl">
              <h1 className="font-normal text-text-primary leading-[1.14] tracking-[-0.03em] text-2xl sm:text-3xl md:text-[2.125rem] lg:text-[2.6rem] xl:text-[2.9rem]">
                <span className="block pl-0 sm:pl-[24%] lg:pl-[30%] whitespace-normal sm:whitespace-nowrap">
                  Product designer who turns
                </span>
                <span className="block whitespace-normal sm:whitespace-nowrap">
                  complex platform workflows into
                </span>
                <span className="block whitespace-normal sm:whitespace-nowrap">
                  products people actually adopt.
                </span>
              </h1>
            </div>

            {/* Floating Horizontal Card Cascade / Fan */}
            <HeroCardFan />

            {/* Bottom Section: Split Colophon (Left) + Massive Watermark Logotype (Right) */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 pt-2 sm:pt-6">
              
              {/* Bottom Left — Fine-Print Colophon (2 columns, avec anni: all muted, no bold) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6 text-xs text-text-muted max-w-lg">
                <div className="flex flex-col gap-0.5">
                  <span>Process engineer by training.</span>
                  <span>Work behind an 85% cut in processing time</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span>and a student platform adopted</span>
                  <span>by 70+ institutions.</span>
                </div>
              </div>

              {/* Bottom Right — avec anni style logotype: right-aligned, ~33% width, no R sign, solid weight */}
              <div className="w-full md:w-auto flex justify-start sm:justify-end items-end text-left sm:text-right">
                <span className="hero-logotype text-4xl sm:text-5xl md:text-[3.75rem] lg:text-[4.75rem] xl:text-[5.25rem] select-none">
                  GodwinUdu
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            2. FEATURED WORK — Asymmetric grid
        ════════════════════════════════════════════════════ */}
        <section id="work" className="py-16 sm:py-28 border-b border-border-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-10 sm:gap-14">

            {/* Section header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="section-label">Case Studies</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-2">
                  Featured Product Work.
                </h2>
              </div>
              <p className="text-sm text-text-muted max-w-xs">
                Visual storyboards and high-fidelity mockups from design specifications.
              </p>
            </div>

            {/* Grid layout showcasing 3 featured projects */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
              {/* Card 1 — Proptii */}
              <div className="lg:col-span-3">
                <ProjectCard {...projects[0]} />
              </div>
              {/* Card 2 — MyEduFusion */}
              <div className="lg:col-span-2">
                <ProjectCard {...projects[1]} />
              </div>
              {/* Card 3 — EasyEase */}
              <div className="lg:col-span-5">
                <ProjectCard {...projects[2]} />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            3. CAPABILITIES — Dark full-bleed panel (Fabrica Services)
        ════════════════════════════════════════════════════ */}
        <section id="skills" className="py-16 sm:py-28 border-b border-border-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="dark-panel px-6 sm:px-12 py-10 sm:py-20 flex flex-col gap-10 sm:gap-14">

              {/* Panel header */}
              <div className="flex flex-col gap-4">
                <span className="inline-flex flex-col items-start gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/40">
                  <span className="w-5 h-5 rounded-full bg-white/40 flex-shrink-0 inline-flex items-center justify-center relative">
                    <span className="absolute w-2.5 h-[2px] bg-bg-dark"></span>
                    <span className="absolute h-2.5 w-[2px] bg-bg-dark"></span>
                  </span>
                  What I Bring
                </span>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">
                    Capabilities.
                  </h2>
                  <span className="text-2xl sm:text-5xl font-light text-white/30">({capabilities.length})</span>
                </div>
                <p className="text-white/50 text-sm max-w-md">
                  A systems-first approach combining product strategy, interaction design, and engineering fluency.
                </p>
              </div>

              {/* Accordion-style rows */}
              <div className="flex flex-col divide-y divide-white/10">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4 py-6">
                    <span className="text-xs font-mono text-white/30 w-8 pt-0.5 flex-shrink-0">{cap.number}</span>
                    <div className="flex-1 flex flex-col gap-3">
                      <h3 className="text-lg font-bold text-white">{cap.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {cap.items.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-md bg-white/[0.06] border border-white/10 text-xs font-medium text-white/70 hover:text-white hover:border-white/20 transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20 hidden sm:block mt-1 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            4. ABOUT & CONTACT
        ════════════════════════════════════════════════════ */}
        <section id="about" className="py-16 sm:py-28 border-b border-border-muted">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left — bio */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              <div>
                <span className="section-label">About Godwin</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-2">
                  Product Designer
                </h2>
              </div>
              <p className="text-base text-text-secondary leading-relaxed">
                With years of experience taking multi-tenant SaaS systems, property technology
                platforms, and educational management tools from discovery to live deployment, I take
                ownership of a product domain end-to-end from user research and low-fidelity
                exploration through to shipped, accessible UI, partnering closely with PMs and engineers
                rather than just handing off files.
              </p>

              {/* Stat chips */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { value: "85%", label: "Workflow Time Saved" },
                  { value: "WCAG 2.1", label: "AA Compliant" },
                ].map((s, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-bg-secondary border border-border-muted flex flex-col gap-1"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-text-primary">{s.value}</div>
                    <div className="text-[11px] text-text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — contact card */}
            <div className="lg:col-span-5 flex flex-col gap-5 p-6 sm:p-8 rounded-2xl border border-border-muted bg-bg-secondary">
              <div>
                <h3 className="text-xl font-bold text-text-primary">Get In Touch</h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                  Currently discussing Product Designer roles. Feel free to reach out.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:godwinudu01@gmail.com"
                  className="flex items-center gap-3 p-3.5 rounded-xl border border-border-muted text-text-primary font-medium text-sm hover:border-border-active hover:bg-bg-tertiary transition-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>Email Godwin</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/godwin-udu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-text-primary text-bg-primary font-medium text-sm hover:bg-black/80 transition-all"
                >
                  <Linkedin className="w-4 h-4 fill-current flex-shrink-0" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════════════════════════════════════════════
          FOOTER — Fabrica logotype footer
      ════════════════════════════════════════════════════ */}
      <footer className="bg-bg-primary pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-0">

          {/* Nav links row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-muted text-xs text-text-muted">
            <div className="flex items-center gap-6">
              <Link href="/#work" className="hover:text-text-primary transition-colors">Cases</Link>
              <Link href="/#skills" className="hover:text-text-primary transition-colors">Services</Link>
              <Link href="/#about" className="hover:text-text-primary transition-colors">About</Link>
            </div>
          </div>

          {/* Large logotype — Fabrica "fabrica® Studio" style */}
          <div className="py-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <span className="text-4xl sm:text-7xl lg:text-8xl font-extrabold text-text-primary tracking-tight leading-none select-none">
              GodwinUdu<span className="font-light text-text-muted">®</span>
            </span>
            <span className="text-sm text-text-muted self-end pb-1">Studio</span>
          </div>

          {/* Copyright line */}
          <div className="pt-4 border-t border-border-muted text-[11px] text-text-muted">
            © {new Date().getFullYear()} GodwinUdu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

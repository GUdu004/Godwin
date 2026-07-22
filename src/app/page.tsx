import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Mail, 
  Download, 
  Sparkles, 
  Smartphone, 
  Database, 
  Layers, 
  Compass, 
  Code,
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from "lucide-react";

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
      subtitle: "B2B PropTech SaaS & Developer API Notification Platform",
      description: "A unified digital ecosystem and communication pipeline designed to streamline customer experiences across property search, viewing, and referencing.",
      tags: ["B2B SaaS", "CPaaS", "Design Systems", "API Webhooks"],
      metrics: [
        { label: "Processing Time", value: "85% Reduction" },
        { label: "Search-to-Viewing", value: "+34% Conversion" },
        { label: "Landlords Onboarded", value: "150+" }
      ],
      link: "/projects/proptii",
      accent: "border-accent-blue/30 hover:border-accent-blue"
    },
    {
      id: "myedufusion",
      title: "MyEduFusion",
      subtitle: "Fault-Tolerant Enterprise SIS & Offline-First Design System",
      description: "A comprehensive Student Information System (SIS) with offline-to-online data entry architecture to support schools with unstable internet.",
      tags: ["Enterprise", "Offline-First", "Accessibility (A11y)", "Figma Tokens"],
      metrics: [
        { label: "Adopted Institutions", value: "70+" },
        { label: "Revenue Growth", value: "283% Acceleration" },
        { label: "Active Students", value: "8,000+" }
      ],
      link: "/projects/myedufusion",
      accent: "border-accent-green/30 hover:border-accent-green"
    }
  ];

  const skills = [
    {
      category: "Product Strategy",
      icon: <Compass className="w-5 h-5 text-accent-blue" />,
      items: ["B2B SaaS Design", "Product-Led Growth (PLG)", "Enterprise Workflows", "Developer Experience (DevEx)", "Data-Informed Iterations"]
    },
    {
      category: "Systems & Architecture",
      icon: <Database className="w-5 h-5 text-accent-green" />,
      items: ["Omnichannel Notification Engines", "Information Architecture", "Multi-State Logic Flows", "Offline-First Sync", "API Webhook Pipelines"]
    },
    {
      category: "Design Systems",
      icon: <Layers className="w-5 h-5 text-accent-orange" />,
      items: ["Component Tokenization", "Figma Auto-Layout", "WCAG 2.1 AA Compliance", "Dark/Light Theme Variables", "Developer Handoff Redlines"]
    },
    {
      category: "Tools & Toolkit",
      icon: <Code className="w-5 h-5 text-text-primary" />,
      items: ["Figma Enterprise", "Miro / FigJam", "Notion / JIRA / Confluence", "Next.js / HTML5", "Tailwind CSS"]
    }
  ];

  return (
    <main className="flex-grow flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-24 sm:py-32 border-b border-border-muted flex items-center justify-center min-h-[80vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-bg-secondary),_transparent)] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-start gap-8 z-10">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-border-muted bg-bg-secondary text-xs font-mono text-text-primary">
            <Sparkles className="w-3.5 h-3.5 text-accent-orange animate-pulse" />
            <span>Available for Senior Product Designer Roles</span>
          </div>

          <div className="max-w-4xl flex flex-col gap-6">
            <h1 className="font-geist text-5xl sm:text-7xl font-bold tracking-tight text-text-primary">
              Godwin Udu
            </h1>
            <p className="font-geist text-2xl sm:text-3xl text-text-primary font-medium tracking-tight leading-tight">
              Senior Product Designer — B2B SaaS, Platform Architecture &amp; Design Systems
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
              I design scalable enterprise SaaS platforms, developer-first API workflows, and robust design systems that bridge complex backend logic with intuitive, accessible user experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link 
              href="#projects" 
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-text-primary text-bg-primary font-medium hover:bg-neutral-200 transition-colors"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="/GodwinUdu_Portfolio_ProductDesign.pdf" 
              download 
              className="flex items-center gap-2 px-5 py-3 rounded-lg bg-bg-secondary border border-border-muted text-text-primary font-medium hover:bg-neutral-950 hover:border-neutral-700 transition-all"
            >
              <Download className="w-4 h-4 text-accent-green" />
              <span>Download ATS Portfolio PDF</span>
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-border-muted w-full max-w-2xl text-xs font-mono text-text-muted">
            <span>GET IN TOUCH:</span>
            <a href="mailto:godwinudu01@gmail.com" className="hover:text-text-primary transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>godwinudu01@gmail.com</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. SKILLS MATRIX SECTION */}
      <section id="about" className="py-24 border-b border-border-muted bg-bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 mb-16 max-w-3xl">
            <span className="font-mono text-xs text-accent-orange uppercase tracking-wider">Expertise &amp; Capabilities</span>
            <h2 className="font-geist text-3xl sm:text-4xl font-bold text-text-primary">Skills Matrix</h2>
            <p className="text-text-secondary leading-relaxed">
              Curated capabilities built over 6+ years of designing complex B2B systems, developer pipelines, and high-adoption SaaS layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-6 p-6 rounded-xl border border-border-muted bg-bg-secondary/40 hover:border-neutral-700 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-bg-secondary border border-border-muted">
                    {skill.icon}
                  </div>
                  <h3 className="font-geist font-bold text-text-primary text-sm tracking-tight">{skill.category}</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-xs text-text-secondary flex items-start gap-2">
                      <span className="text-accent-green mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECTS GRID SECTION */}
      <section id="projects" className="py-24 border-b border-border-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 mb-16 max-w-3xl">
            <span className="font-mono text-xs text-accent-blue uppercase tracking-wider">Selected Case Studies</span>
            <h2 className="font-geist text-3xl sm:text-4xl font-bold text-text-primary">Recent Work</h2>
            <p className="text-text-secondary leading-relaxed">
              Deep dives into complex architectural design challenges, demonstrating end-to-end UX process, system resilience, and business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`flex flex-col justify-between p-8 rounded-2xl border bg-bg-secondary/30 transition-all duration-300 ${project.accent}`}
              >
                <div className="flex flex-col gap-6">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-geist text-2xl font-bold text-text-primary mb-1">{project.title}</h3>
                      <p className="text-xs font-mono text-text-muted">{project.subtitle}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-text-muted" />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 rounded-md border border-border-muted bg-bg-secondary/60 text-[10px] font-mono text-text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-border-muted my-2" />

                  {/* Key Metrics */}
                  <div>
                    <h4 className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-3">Key Project Outcomes:</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="p-3 rounded-lg bg-bg-secondary border border-border-muted flex flex-col gap-1">
                          <span className="text-xs text-text-muted leading-none">{metric.label}</span>
                          <span className="text-sm sm:text-base font-bold text-accent-green leading-tight">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Link 
                    href={project.link}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-secondary border border-border-muted text-xs font-medium text-text-primary hover:bg-neutral-950 hover:border-neutral-700 transition-all"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DESIGN SYSTEMS & ACCESSIBILITY SECTION */}
      <section id="design-systems" className="py-24 border-b border-border-muted bg-bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs text-accent-orange uppercase tracking-wider">Design Operations &amp; Standards</span>
              <h2 className="font-geist text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
                Design System Governance &amp; Accessibility (A11y)
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Consistency, tokenization, and accessibility are central to my product design workflow. Rather than designing static components, I construct scalable UI libraries mapped to engineering design tokens.
              </p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-bg-secondary border border-border-muted text-accent-green">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-geist font-bold text-text-primary text-sm mb-1">WCAG 2.1 AA Compliance</h4>
                    <p className="text-xs text-text-secondary">
                      Ensuring high contrast, descriptive screen-reader elements, focus states, and accessible keyboard navigation in all interactive wizards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-bg-secondary border border-border-muted text-accent-blue">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-geist font-bold text-text-primary text-sm mb-1">Figma Token Architecture</h4>
                    <p className="text-xs text-text-secondary">
                      Standardizing components using nested variables for spacing, color tokens, dark/light theme overrides, and automated developer spec handoffs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border-muted bg-bg-secondary/40 flex flex-col gap-6 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-border-muted pb-4">
                <span className="text-text-primary font-bold">Nectary Integration: Design Tokens</span>
                <span className="text-[10px] text-text-muted">figma-tokens.json</span>
              </div>
              <div className="flex flex-col gap-4 text-text-muted">
                <div>
                  <span className="text-accent-blue">"colors":</span> &#123;
                  <div className="pl-4">
                    <span className="text-accent-green">"brand":</span> &#123; <span className="text-text-secondary">"value": "#10B981"</span> &#125;,
                    <br />
                    <span className="text-accent-green">"surface-primary":</span> &#123; <span className="text-text-secondary">"value": "#0A0A0A"</span> &#125;,
                    <br />
                    <span className="text-accent-green">"border-muted":</span> &#123; <span className="text-text-secondary">"value": "#262626"</span> &#125;
                  </div>
                  &#125;,
                </div>
                <div>
                  <span className="text-accent-blue">"spacing":</span> &#123;
                  <div className="pl-4">
                    <span className="text-accent-green">"xs":</span> &#123; <span className="text-text-secondary">"value": "4px"</span> &#125;,
                    <br />
                    <span className="text-accent-green">"md":</span> &#123; <span className="text-text-secondary">"value": "16px"</span> &#125;,
                    <br />
                    <span className="text-accent-green">"xl":</span> &#123; <span className="text-text-secondary">"value": "32px"</span> &#125;
                  </div>
                  &#125;
                </div>
              </div>
              <div className="border-t border-border-muted pt-4 flex items-center justify-between text-[10px] text-text-muted">
                <span>Theme: Dark Mode Config</span>
                <span className="text-accent-green">// Token-mapped React values</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER & CONTACT */}
      <footer className="border-t border-border-muted bg-bg-primary py-12 no-print">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2 items-center sm:items-start">
            <span className="font-geist font-bold text-lg text-text-primary">Godwin Udu</span>
            <span className="text-xs text-text-muted">© {new Date().getFullYear()} All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="mailto:godwinudu01@gmail.com" 
              className="text-xs text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="/GodwinUdu_Portfolio_ProductDesign.pdf" 
              download 
              className="text-xs text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5 text-accent-green" />
              <span>PDF Portfolio</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

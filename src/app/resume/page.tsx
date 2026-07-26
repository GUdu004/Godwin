import React from "react";
import type { Metadata } from "next";
import { Download, Mail, ArrowLeft, ExternalLink, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "Resume — Godwin Udu Portfolio",
  description: "Godwin Udu's professional Product Design resume, optimized for B2B SaaS, Platform Architecture, and Design Systems.",
};

export default function ResumePage() {
  const experiences = [
    {
      role: "Lead Product Designer",
      company: "Proptii",
      period: "May 2025 - Present",
      location: "London, UK (Remote)",
      description: [
        "Architected an omnichannel communication engine and API webhook notification pipeline for Rightmove/Zoopla leads, streamlining multi-party onboarding loops.",
        "Redesigned the referencing verification flow using micro-step validation wizard sequences, reducing processing completion time by 85% (from 5 days to 18 minutes).",
        "Pioneered a product-led growth (PLG) onboarding flow by removing mandatory registration checkpoints, boosting search-to-viewing conversion by 34%.",
        "Collaborated with 1 PM and 4 engineers, delivering interactive component libraries, automated redlines, and annotated handoff files in Figma."
      ]
    },
    {
      role: "UI/UX Designer / Product Design Lead",
      company: "MyEduFusion",
      period: "2024 (2 Months Contract & Iteration)",
      location: "Lagos, Nigeria (Hybrid)",
      description: [
        "Led system design and UI/UX for a fault-tolerant Student Information System (SIS) optimized for offline-first spreadsheet ingestion to mitigate unstable internet constraints.",
        "Designed real-time bookkeeping systems, result compilation dashboards, and student registers, achieving a 283% revenue acceleration and 63% lift in admin bookkeeping efficiency.",
        "Built and managed a reusable brand component library using Figma tokens (spacing, type, overrides) for high-performance frontend implementation.",
        "Conducted extensive user research and usability testing with school administrators and teachers, achieving a 60% engagement retention rate across 70+ institutions."
      ]
    },
    {
      role: "Senior UX Designer",
      company: "SocialSynapse",
      period: "2023 - 2024",
      location: "Remote",
      description: [
        "Designed dashboard metrics and complex transactional loops for B2B analytics portals, mapping multi-branch user flows and state transitions.",
        "Conducted usability testing boards with cross-functional product squads, identifying UX friction points and scheduling bug-fix sprints in JIRA/Confluence."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Sc. in Computer Science / Information Systems",
      school: "University of Lagos",
      period: "Graduated 2019"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12">
      {/* Back to home / Print header */}
      <div className="flex items-center justify-between border-b border-border-muted pb-6 no-print">
        <Link href="/" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
        <a 
          href="/GodwinUdu_Portfolio_ProductDesign.pdf" 
          download
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-text-primary text-bg-primary text-xs font-semibold hover:bg-neutral-200 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF CV</span>
        </a>
      </div>

      {/* Main Resume Content (Selectable & Print Optimized) */}
      <div className="flex flex-col gap-10 text-text-secondary print:text-black">
        {/* Name and Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-muted print:border-neutral-300 pb-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-geist text-4xl font-bold text-text-primary print:text-black tracking-tight">Godwin Udu</h1>
            <p className="font-geist text-lg font-medium text-text-primary print:text-neutral-700">Product Designer</p>
            <p className="text-xs max-w-xl leading-relaxed">
              B2B SaaS, Platform Architecture, and Design Systems specialist. Proven record of optimizing complex digital workflows, engineering resilient data integration interfaces, and driving conversion via PLG models.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-xs font-mono text-text-muted print:text-neutral-600">
            <a href="mailto:godwinudu01@gmail.com" className="hover:text-text-primary print:hover:text-black flex items-center gap-1.5 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>godwinudu01@gmail.com</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary print:hover:text-black flex items-center gap-1.5 transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
              <span>linkedin.com/in/godwinudu</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>London, United Kingdom</span>
            </span>
          </div>
        </div>

        {/* Skills Section */}
        <div className="flex flex-col gap-4">
          <h2 className="font-geist text-lg font-bold text-text-primary print:text-black uppercase tracking-wider">Skills &amp; Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs border-b border-border-muted print:border-neutral-300 pb-8">
            <div className="flex flex-col gap-1.5">
              <span className="font-bold text-text-primary print:text-neutral-800">Design &amp; Strategy</span>
              <span>B2B SaaS Design, PLG, User Personas, Journey Maps, Wireframing, High-Fidelity Prototyping</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-bold text-text-primary print:text-neutral-800">Systems &amp; Handoff</span>
              <span>Design Systems, Figma Tokenization, Developer Specification Redlines, WCAG 2.1 AA (Accessibility)</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-bold text-text-primary print:text-neutral-800">Tools &amp; Code</span>
              <span>Figma, Miro, FigJam, JIRA, Confluence, Next.js, HTML5, CSS3, Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex flex-col gap-6">
          <h2 className="font-geist text-lg font-bold text-text-primary print:text-black uppercase tracking-wider">Professional Experience</h2>
          
          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-geist font-bold text-text-primary print:text-black text-sm">{exp.role}</h3>
                    <span className="text-xs text-text-muted print:text-neutral-700 font-medium">{exp.company}</span>
                  </div>
                  <div className="flex flex-row items-center gap-4 text-xs font-mono text-text-muted print:text-neutral-600">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>
                
                <ul className="list-disc pl-5 flex flex-col gap-2 text-xs leading-relaxed">
                  {exp.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-border-muted print:bg-neutral-300" />

        {/* Education Section */}
        <div className="flex flex-col gap-4 pb-12">
          <h2 className="font-geist text-lg font-bold text-text-primary print:text-black uppercase tracking-wider">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="flex justify-between items-start text-xs">
              <div>
                <h3 className="font-bold text-text-primary print:text-black">{edu.degree}</h3>
                <span className="text-text-muted print:text-neutral-600">{edu.school}</span>
              </div>
              <span className="font-mono text-text-muted print:text-neutral-600">{edu.period}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

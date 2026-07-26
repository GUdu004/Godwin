"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImageLightbox } from "./ImageLightbox";

interface Metric {
  label: string;
  value: string;
}

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: Metric[];
  imageSrc: string;
  link: string;
  accentColor?: "blue" | "green" | "orange";
  year?: string;
}

export function ProjectCard({
  id,
  title,
  subtitle,
  description,
  tags,
  metrics,
  imageSrc,
  link,
  accentColor = "blue",
  year = "2024",
}: ProjectCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className="group flex flex-col gap-0">
        {/* ── Full-bleed image frame ─────────────────────────── */}
        <div className="fabrica-card relative aspect-[16/9] w-full overflow-hidden">
          <img
            src={imageSrc}
            alt={`${title} UI Mockup`}
            className="w-full h-full object-contain bg-white group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />

          {/* Dark scrim on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />

          {/* Centred identity badge (Fabrica style) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-black/10">
              <span className="w-2 h-2 rounded-full bg-text-primary" />
              <span className="text-sm font-semibold text-text-primary tracking-tight">{title}</span>
            </div>
          </div>

          {/* Expand button */}
          <button
            onClick={(e) => { e.preventDefault(); setIsLightboxOpen(true); }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-md text-text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-md"
            title="Expand Preview"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* ── Below-card metadata (Fabrica's title + year + dots) */}
        <div className="flex items-start justify-between pt-4 px-1 gap-4">
          <div className="flex flex-col gap-1">
            {/* Title + year — Fabrica pattern */}
            <div className="flex items-baseline gap-3">
              <Link href={link} className="text-base font-bold text-text-primary tracking-tight hover:underline">
                {title}.
              </Link>
              <span className="text-sm text-text-muted font-normal">/{year}</span>
            </div>
            {/* Subtitle */}
            <p className="text-xs text-text-secondary leading-relaxed max-w-sm">{subtitle}</p>
          </div>

          {/* Action button — navigate to case study */}
          <Link
            href={link}
            className="mt-0.5 px-3 py-1.5 rounded-full bg-bg-tertiary border border-border-muted text-text-primary hover:bg-text-primary hover:text-bg-secondary transition-all duration-200 shadow-sm flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold group/link"
            title={`View ${title} case study`}
          >
            <span>View Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* ── Tags row */}
        <div className="flex flex-wrap gap-1.5 mt-2.5 px-1">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full bg-bg-tertiary border border-border-muted text-[10px] font-medium text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Metric strip */}
        <div className="flex flex-wrap gap-4 mt-3 px-1 pt-3 border-t border-border-muted">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col gap-0.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">{m.label}</span>
              <span className="text-sm font-bold text-text-primary">{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      <ImageLightbox
        src={imageSrc}
        alt={`${title} Full UI Preview`}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
}

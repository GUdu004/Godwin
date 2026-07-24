import React from "react";
import type { Metadata } from "next";
import EasyEaseCaseStudy from "@/components/EasyEaseCaseStudy";

export const metadata: Metadata = {
  title: "EasyEase Case Study — Godwin Udu Portfolio",
  description: "Detailed case study of EasyEase: Gamified STEM EdTech Platform & Interactive 3D Learning Sandbox.",
};

export default function EasyEasePage() {
  return <EasyEaseCaseStudy />;
}

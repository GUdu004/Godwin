import React from "react";
import type { Metadata } from "next";
import MyEduFusionCaseStudy from "@/components/MyEduFusionCaseStudy";

export const metadata: Metadata = {
  title: "MyEduFusion Case Study — Godwin Udu Portfolio",
  description: "Detailed case study of MyEduFusion: Fault-Tolerant Enterprise SIS & Offline-First Design System.",
};

export default function MyEduFusionPage() {
  return <MyEduFusionCaseStudy />;
}

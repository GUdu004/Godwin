import React from "react";
import type { Metadata } from "next";
import ProptiiCaseStudy from "@/components/ProptiiCaseStudy";

export const metadata: Metadata = {
  title: "Proptii Case Study — Godwin Udu Portfolio",
  description: "Detailed case study of Proptii: B2B PropTech SaaS & Developer API Notification Platform.",
};

export default function ProptiiPage() {
  return <ProptiiCaseStudy />;
}

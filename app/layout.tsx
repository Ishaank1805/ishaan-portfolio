import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { NO_FLASH_SCRIPT } from "@/lib/theme";
import "./globals.css";

const url = "https://ishaank1805.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Ishaan Karan · NLP & Interpretability Researcher",
  description:
    "Ishaan Karan is a student researcher at IIIT Hyderabad working on NLP, interpretable deep learning, long-document understanding, and information retrieval. EMNLP 2026 oral paper; second place at SemEval 2026 Task 10.",
  authors: [{ name: "Ishaan Karan" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url,
    title: "Ishaan Karan · NLP & Interpretability Researcher",
    description:
      "Student researcher at IIIT Hyderabad. EMNLP 2026 oral paper and second place at SemEval 2026 Task 10.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishaan Karan · NLP & Interpretability Researcher",
    description: "NLP, interpretable deep learning, long-document understanding, and information retrieval.",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080B",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ishaan Karan",
  url,
  jobTitle: "Student Researcher, NLP & Interpretability",
  affiliation: { "@type": "CollegeOrUniversity", name: "International Institute of Information Technology, Hyderabad" },
  knowsAbout: ["Natural Language Processing", "Interpretable Deep Learning", "Information Retrieval", "Long-Document Understanding", "Machine Learning"],
  sameAs: [
    "https://github.com/Ishaank1805",
    "https://www.linkedin.com/in/ishaan-karan-16432a2a7",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..560&family=Hanken+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

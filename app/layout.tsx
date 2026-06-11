import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { NO_FLASH_SCRIPT } from "@/lib/theme";
import "./globals.css";

const url = "https://ishaank1805.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Ishaan Karan · NLP & Interpretability Researcher",
  description:
    "Undergraduate researcher at IIIT Hyderabad (LTRC) working on NLP, mechanistic interpretability, and efficient retrieval. 2nd place at SemEval-2026; per-query Matryoshka retrieval under review.",
  authors: [{ name: "Ishaan Karan" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url,
    title: "Ishaan Karan · NLP & Interpretability Researcher",
    description:
      "Undergraduate researcher at IIIT Hyderabad (LTRC). NLP, interpretability, retrieval. 2nd at SemEval-2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishaan Karan · NLP & Interpretability Researcher",
    description: "Undergraduate researcher at IIIT Hyderabad (LTRC). NLP, interpretability, retrieval.",
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
  jobTitle: "Undergraduate Researcher, NLP & Interpretability",
  affiliation: { "@type": "CollegeOrUniversity", name: "International Institute of Information Technology, Hyderabad" },
  alumniOf: ["Whitmore High School, London", "The Shishukunj International School, Indore"],
  knowsAbout: ["Natural Language Processing", "Mechanistic Interpretability", "Information Retrieval", "Machine Learning"],
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

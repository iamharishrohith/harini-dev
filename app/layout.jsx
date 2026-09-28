import "./globals.css";
import { PortfolioProvider } from "./context/PortfolioContext";

export const metadata = {
  metadataBase: new URL("https://harini-k.dev"),
  title: {
    default: "Harini K | Forward Deployed Engineer & AI Systems Architect",
    template: "%s | Harini K - Forward Deployed Engineer"
  },
  description: "Portfolio of Harini K – Forward Deployed AI Engineer specializing in LLM Agent Orchestration, Asynchronous High-Throughput APIs, and Full-Stack Systems.",
  keywords: [
    "Forward Deployed Engineer",
    "Harini K",
    "AI Engineer",
    "Generative AI",
    "Agentic AI",
    "LLM Prompt Engineering",
    "Asynchronous Python",
    "FastAPI",
    "Next.js Developer",
    "Full Stack Developer",
    "MySQL Database Optimization",
    "Docker",
    "Azure AZ-104",
    "Coimbatore AI Developer"
  ],
  authors: [{ name: "Harini K", url: "https://harini-k.dev" }],
  creator: "Harini K",
  publisher: "Harini K",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://harini-k.dev",
    title: "Harini K | Forward Deployed Engineer & AI Systems Architect",
    description: "Forward Deployed AI Engineer building high-throughput LLM agents, async REST architectures, and production platforms.",
    siteName: "Harini K Portfolio",
    images: [
      {
        url: "/developer-avatar.svg",
        width: 1200,
        height: 630,
        alt: "Harini K - Forward Deployed Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harini K | Forward Deployed Engineer & AI Systems Architect",
    description: "Forward Deployed AI Engineer building high-throughput LLM agents, async REST architectures, and production platforms.",
    images: ["/developer-avatar.svg"],
    creator: "@harinik",
  },
  alternates: {
    canonical: "https://harini-k.dev",
  },
};

export default function RootLayout({ children }) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Harini K",
    "jobTitle": "Forward Deployed Engineer",
    "description": "AI & Full-Stack Developer skilled in building LLM-powered assistants, asynchronous REST APIs, and data-driven web platforms.",
    "url": "https://harini-k.dev",
    "sameAs": [
      "https://linkedin.com/in/harini-k-ai",
      "https://github.com/harini-k-dev"
    ],
    "email": "harinik37@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Rathinam Global Deemed to be University"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Microsoft Azure Administrator Associate (AZ-104)",
        "credentialCategory": "Cloud Infrastructure"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Generative AI: Introduction & Application",
        "recognizedBy": {
          "@type": "Organization",
          "name": "IBM"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Java Certified Foundations Associate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Oracle"
        }
      }
    ],
    "award": [
      "Overall Winner (1st Place) - Inter-College Mini-Hackathon 2026",
      "Runner-Up - Technical Paper Presentation, Rathinam Grand Fest 2026",
      "National Finalist - National Conference on Emerging Technologies 2026"
    ],
    "knowsAbout": [
      "Forward Deployed Engineering",
      "Generative AI & LLMs",
      "Agentic AI Workflows",
      "Asynchronous REST APIs",
      "Python & FastAPI",
      "Next.js & React",
      "MySQL & PostgreSQL Relational Schema Design",
      "Docker & Cloud Computing"
    ]
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Harini K - Forward Deployed Engineer Portfolio",
    "url": "https://harini-k.dev",
    "author": {
      "@type": "Person",
      "name": "Harini K"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body>
        <PortfolioProvider>
          <div className="page-wrapper">
            {children}
          </div>
        </PortfolioProvider>
      </body>
    </html>
  );
}

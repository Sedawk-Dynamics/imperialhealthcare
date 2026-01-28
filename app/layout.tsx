import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Chatbot from "@/components/Chatbot"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.imperialhealthsystems.com"),
  title: {
    default:
      "Imperial Healthcare Systems | 99% Clean Claims & Revenue Cycle Intelligence",
    template: "%s | Imperial Healthcare Systems",
  },
  description:
    "Imperial Healthcare Systems (IHS) delivers enterprise-grade Revenue Cycle Management powered by the proprietary IRRF framework. Achieve 99% clean claim rates, up to 60% cost reduction, and measurable Clinical EBITDA growth.",
  generator: "Next.js",
  keywords: [
    "medical billing services",
    "revenue cycle management",
    "RCM services USA",
    "healthcare revenue optimization",
    "denial management",
    "AR follow up",
    "medical coding and auditing",
    "healthcare analytics",
    "clinical EBITDA",
    "IRRF framework",
    "HIPAA compliant RCM",
    "US healthcare billing company",
    "hospital RCM services",
    "clinic billing services",
    "healthcare automation",
  ],
  authors: [{ name: "Imperial Healthcare Systems" }],
  creator: "Imperial Healthcare Systems",
  publisher: "Imperial Healthcare Systems",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.imperialhealthsystems.com",
  },
  openGraph: {
    title:
      "Imperial Healthcare Systems | The Intelligence Layer for Revenue Sovereignty",
    description:
      "Replace legacy billing with IRRF—an intelligence-driven RCM framework delivering 99% net collection rates, zero blind write-offs, and enterprise-grade financial control.",
    url: "https://www.imperialhealthsystems.com",
    siteName: "Imperial Healthcare Systems",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/ihs-og.png",
        width: 1200,
        height: 630,
        alt: "Imperial Healthcare Systems – Revenue Cycle Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Imperial Healthcare Systems | Precision RCM. Measurable EBITDA.",
    description:
      "Enterprise healthcare RCM powered by IRRF. 99% clean claims, 60% cost reduction, zero write-offs.",
    images: ["/images/ihs-og.png"],
  },
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
    apple: "/favicon.png",
  },
  verification: {
    google: "ADD_GOOGLE_SEARCH_CONSOLE_CODE",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Imperial Healthcare Systems",
    url: "https://www.imperialhealthsystems.com",
    logo: "https://www.imperialhealthsystems.com/images/logo.png",
    description:
      "Imperial Healthcare Systems provides intelligence-driven Revenue Cycle Management using the proprietary IRRF framework to maximize net collections and clinical EBITDA.",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "212 N. 2nd St. STE 100",
        addressLocality: "Richmond",
        addressRegion: "KY",
        postalCode: "40475",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress:
          "Unit No. 219 2F, ILD Trade Centre, Sector 47, Sohna Road",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122018",
        addressCountry: "IN",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@imperialhealthsystems.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/imperial-healthcare-systems",
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
  {children}

  {/* Global Chatbot */}
  <Chatbot />

  <Analytics />
</body>

    </html>
  )
}

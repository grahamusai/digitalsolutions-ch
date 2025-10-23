import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://digitalsolutions.ch/",
    name: "Digital Solutions | Swiss Digital Agency - Web, Mobile & Cloud Solutions",
    description:
      "Swiss-based digital agency specializing in web development, mobile applications, cloud architecture, cybersecurity, and custom business software.",
    url: "https://digitalsolutions.ch/",
    mainEntity: {
      "@type": "Organization",
      name: "Digital Solutions",
      url: "https://digitalsolutions.ch",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CH",
        addressLocality: "Zurich",
      },
    },
  }

  return (
    <>
      <main className="min-h-dvh text-white">
        <SiteHeader />
        <Hero />
        <Services />
        <Portfolio />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}

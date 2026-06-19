import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LenisProvider from "@/components/lenis-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Concessionaire Insurance | Event Vendor & Food Vendor Coverage | CCA",
  description:
    "Specialized insurance for concessionaires, food vendors, fair operators, food trucks, and event vendors. Get a free quote in 15 minutes. Licensed in all 50 states. Call 844-967-5247.",
  keywords:
    "concessionaire insurance, food vendor insurance, event vendor insurance, fair vendor insurance, food truck insurance, concession stand insurance",
  openGraph: {
    title: "Concessionaire Insurance — Contractors Choice Agency",
    description:
      "Expert insurance coverage for food vendors, event concessionaires, fair operators, and food trucks. 20+ years experience. Get a quote in 15 minutes.",
    url: "https://concessionaireinsurance.com",
    siteName: "ConcessionaireInsurance.com",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concessionaire Insurance — Contractors Choice Agency",
    description:
      "Expert insurance coverage for food vendors, event concessionaires, fair operators, and food trucks.",
    images: ["/images/og-image.jpg"],
  },
  metadataBase: new URL("https://concessionaireinsurance.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Contractors Choice Agency",
  url: "https://concessionaireinsurance.com",
  logo: "https://concessionaireinsurance.com/images/og-image.jpg",
  telephone: "844-967-5247",
  email: "josh@contractorschoiceagency.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12220 E Riggs Rd",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85249",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.2864,
    longitude: -111.7891,
  },
  openingHours: "Mo-Fr 08:00-18:00",
  priceRange: "$$",
  description:
    "Specialized insurance agency serving concessionaires, food vendors, event operators, and food trucks nationwide. Founded 2005, licensed in all 50 states.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "Concessionaire Insurance",
    "Food Vendor Insurance",
    "Event Vendor Insurance",
    "General Liability Insurance",
    "Product Liability Insurance",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

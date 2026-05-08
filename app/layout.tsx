import type React from "react"
import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#0C1510",
  colorScheme: "dark",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://ukbestcasinosites.com"),
  title: {
    default: "UK Best Casino Sites — Independent Casino Rankings 2026",
    template: "%s | UK Best Casino Sites",
  },
  description:
    "Independent editorial guide to the UK's foremost licensed casino platforms. Expert analysis of welcome offers, game quality, payout speed, and player protection.",
  keywords: ["best casino sites UK", "top UK casinos 2026", "uk best casino sites", "UK online casinos", "licensed casinos UK", "UKGC licensed"],
  authors: [{ name: "ukbestcasinosites.com" }],
  creator: "ukbestcasinosites.com",
  publisher: "ukbestcasinosites.com",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "UK Best Casino Sites",
    url: "https://ukbestcasinosites.com",
    title: "UK Best Casino Sites — Independent Casino Rankings 2026",
    description: "Independent editorial guide to the UK's foremost licensed casino platforms.",
    locale: "en_GB",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${inter.variable}`} style={{ backgroundColor: "#0C1510" }}>
      <body style={{ backgroundColor: "#0C1510", color: "#FFFFFF", fontFamily: "var(--font-inter), system-ui, sans-serif" }} className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

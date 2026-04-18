import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://elitebettingsiteslistuk.com"),
  title: {
    default: "Elite Betting Sites UK — Premier Bookmaker Rankings 2025",
    template: "%s | Elite Betting Sites UK",
  },
  description:
    "elitebettingsiteslistuk.com compares the finest UK-licensed bookmakers: exclusive welcome offers, odds quality, and expert ratings curated for discerning punters.",
  keywords: [
    "best betting sites UK",
    "top UK bookmakers 2025",
    "elite betting sites",
    "UK online bookmakers",
    "best bookmakers UK",
    "sports betting UK",
    "UK gambling sites",
    "betting site reviews UK",
    "licensed bookmakers UK",
    "UK Gambling Commission approved",
    "welcome offers UK bookmakers",
    "best odds UK",
    "horse racing betting UK",
    "football betting sites UK",
    "online betting UK",
  ],
  authors: [{ name: "elitebettingsiteslistuk.com" }],
  creator: "elitebettingsiteslistuk.com",
  publisher: "elitebettingsiteslistuk.com",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    siteName: "Elite Betting Sites UK",
    url: "https://elitebettingsiteslistuk.com",
    title: "Elite Betting Sites UK — Premier Bookmaker Rankings 2025",
    description:
      "Independent comparison of the UK's finest licensed bookmakers: welcome offers, odds quality, and expert ratings for discerning punters.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Betting Sites UK — Premier Bookmaker Rankings 2025",
    description:
      "Independent comparison of the UK's finest licensed bookmakers: welcome offers, odds quality, and expert ratings.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-[#0D1B2A]`}>
      <body className="font-sans bg-[#0D1B2A] text-[#F5F0E8] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

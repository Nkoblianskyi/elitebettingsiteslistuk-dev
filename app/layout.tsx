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
  metadataBase: new URL("https://elitecasinossitesuk.com"),
  title: {
    default: "Elite Casinos Sites UK — Premier Casino Rankings 2026",
    template: "%s | Elite Casinos Sites UK",
  },
  description:
    "elitecasinossitesuk.com curates the finest UK-licensed casinos: exclusive welcome bonuses, game selection, and expert ratings for the discerning player.",
  keywords: [
    "best casino sites UK",
    "top UK casinos 2026",
    "elite casino sites",
    "UK online casinos",
    "best casinos UK",
    "casino games UK",
    "UK gambling sites",
    "casino site reviews UK",
    "licensed casinos UK",
    "UK Gambling Commission approved",
    "welcome bonuses UK casinos",
    "best slots UK",
    "live casino UK",
    "online casino UK",
    "casino bonus UK",
  ],
  authors: [{ name: "elitecasinossitesuk.com" }],
  creator: "elitecasinossitesuk.com",
  publisher: "elitecasinossitesuk.com",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    siteName: "Elite Casinos Sites UK",
    url: "https://elitecasinossitesuk.com",
    title: "Elite Casinos Sites UK — Premier Casino Rankings 2026",
    description:
      "Independent comparison of the UK's finest licensed casinos: welcome bonuses, game variety, and expert ratings for discerning players.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Casinos Sites UK — Premier Casino Rankings 2026",
    description:
      "Independent comparison of the UK's finest licensed casinos: welcome bonuses, game variety, and expert ratings.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-[#0D0D0D]`}>
      <body className="font-sans bg-[#0D0D0D] text-[#F5F0E8] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

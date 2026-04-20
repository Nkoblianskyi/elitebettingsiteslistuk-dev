import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Lato } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://trustedcasinossitesuk.com"),
  title: {
    default: "Trusted Casinos Sites UK — Premier Casino Rankings 2026",
    template: "%s | Trusted Casinos Sites UK",
  },
  description:
    "trustedcasinossitesuk.com compares the finest UK-licensed casinos: exclusive welcome offers, game selection, and expert ratings curated for discerning players.",
  keywords: [
    "best casino sites UK",
    "top UK casinos 2026",
    "trusted casino sites",
    "UK online casinos",
    "best casinos UK",
    "casino reviews UK",
    "licensed casinos UK",
    "UK Gambling Commission approved",
    "welcome offers UK casinos",
    "online casino UK",
  ],
  authors: [{ name: "trustedcasinossitesuk.com" }],
  creator: "trustedcasinossitesuk.com",
  publisher: "trustedcasinossitesuk.com",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    siteName: "Trusted Casinos Sites UK",
    url: "https://trustedcasinossitesuk.com",
    title: "Trusted Casinos Sites UK — Premier Casino Rankings 2026",
    description:
      "Independent comparison of the UK's finest licensed casinos: welcome offers, game quality, and expert ratings for discerning players.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted Casinos Sites UK — Premier Casino Rankings 2026",
    description:
      "Independent comparison of the UK's finest licensed casinos: welcome offers, game quality, and expert ratings.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable} bg-[#0F2318]`}>
      <body className="font-sans bg-[#0F2318] text-[#F2ECD9] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

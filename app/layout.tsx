import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Lato } from "next/font/google"
import "./globals.css"
import { Footer } from "../components/footer"
import { Header } from "../components/header"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
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
    default: "Trusted Casinos Sites UK — Independent Casino Rankings 2026",
    template: "%s | Trusted Casinos Sites UK",
  },
  description:
    "An independent editorial guide to the UK's foremost licensed casino platforms. Expert analysis of welcome offers, game quality, and player protection.",
  keywords: [
    "best casino sites UK",
    "top UK casinos 2026",
    "trusted casino sites",
    "UK online casinos",
    "casino reviews UK",
    "licensed casinos UK",
    "UK Gambling Commission approved",
    "online casino UK",
  ],
  authors: [{ name: "trustedcasinossitesuk.com" }],
  creator: "trustedcasinossitesuk.com",
  publisher: "trustedcasinossitesuk.com",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    siteName: "Trusted Casinos Sites UK",
    url: "https://trustedcasinossitesuk.com",
    title: "Trusted Casinos Sites UK — Independent Casino Rankings 2026",
    description:
      "Independent editorial guide to the UK's foremost licensed casino platforms.",
    locale: "en_GB",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable} bg-[#0C0F0D]`}>
      <body className="font-sans bg-[#0C0F0D] text-[#EDE4CC] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

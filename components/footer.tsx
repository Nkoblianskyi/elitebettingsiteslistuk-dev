"use client"

import Link from "next/link"
import { SiteWordmark } from "@/components/site-wordmark"

const LEGAL_NAV = [
  { href: "/terms",           label: "Terms of Use" },
  { href: "/privacy-policy",  label: "Privacy Policy" },
  { href: "/cookie-policy",   label: "Cookie Policy" },
]

const SITE_NAV = [
  { href: "/",                   label: "Rankings" },
  { href: "/about",              label: "About" },
  { href: "/responsible-gaming", label: "Responsible Play" },
]

const RG_LINKS = [
  { href: "https://www.gamstop.co.uk/",            img: "/gamstop.svg",                    alt: "GamStop" },
  { href: "https://www.begambleaware.org/",         img: "/gamble-aware.png",               alt: "BeGambleAware" },
  { href: "https://www.gamcare.org.uk/",            img: "/gamcare.png",                    alt: "GamCare" },
  { href: "https://www.gamblingtherapy.org/",       img: "/gordon.png",                     alt: "Gambling Therapy" },
  { href: "https://www.gamblingcommission.gov.uk/", img: "/Gambling_Commission_logo.png",   alt: "UK Gambling Commission" },
]

export function Footer() {
  return (
    <footer
      className="w-full"
      style={{ backgroundColor: "#080B09", borderTop: "1px solid rgba(201,168,76,0.13)" }}
    >
      {/* Gold top rule */}
      <div style={{ height: "2px", backgroundColor: "#C9A84C", width: "100%" }} />

      {/* Three-column editorial layout */}
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">

          {/* Col 1: Brand + description */}
          <div>
            <SiteWordmark variant="footer" className="block mb-6" />
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "12px",
                lineHeight: 1.8,
                color: "rgba(237,228,204,0.38)",
                marginBottom: "20px",
              }}
            >
              An independent editorial comparison platform for UK-licensed casino operators.
              We do not accept wagers or hold player funds.
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "8px",
                textTransform: "uppercase",
                letterSpacing: "0.4em",
                color: "rgba(201,168,76,0.32)",
              }}
            >
              ukbestcasinosites.com
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="flex gap-12 md:gap-8 md:justify-center">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "8px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.42em",
                  color: "rgba(201,168,76,0.42)",
                  marginBottom: "18px",
                }}
              >
                Site
              </p>
              <nav className="flex flex-col gap-3" aria-label="Footer site navigation">
                {SITE_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="footer-link"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "8px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.42em",
                  color: "rgba(201,168,76,0.42)",
                  marginBottom: "18px",
                }}
              >
                Legal
              </p>
              <nav className="flex flex-col gap-3" aria-label="Footer legal navigation">
                {LEGAL_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="footer-link"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Col 3: Responsible gambling */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "8px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.42em",
                color: "rgba(201,168,76,0.42)",
                marginBottom: "18px",
              }}
            >
              Responsible Play
            </p>
            <div className="flex flex-wrap gap-3">
              {RG_LINKS.map((rg) => (
                <Link
                  key={rg.href}
                  href={rg.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", padding: "8px 10px", opacity: 0.72 }}
                >
                  <img src={rg.img} alt={rg.alt} style={{ height: "24px", width: "auto", objectFit: "contain" }} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "rgba(201,168,76,0.08)", margin: "40px 0" }} />

        {/* Bottom row: disclaimer + copyright */}
        <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between">
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "10px",
              lineHeight: 1.9,
              color: "rgba(237,228,204,0.26)",
              maxWidth: "680px",
            }}
          >
            Commercial links may generate affiliate revenue which does not influence editorial rankings.
            All casino activity takes place on licensed third-party platforms under their own terms.
            Identity and location verification applies. 18+ only. UK residents.
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "9px",
              textTransform: "uppercase",
              letterSpacing: "0.32em",
              color: "rgba(201,168,76,0.28)",
              flexShrink: 0,
            }}
          >
            &copy; {new Date().getFullYear()} ukbestcasinosites.com
          </p>
        </div>
      </div>
    </footer>
  )
}

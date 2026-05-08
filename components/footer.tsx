"use client"

import type React from "react"
import Link from "next/link"
import { SiteWordmark } from "@/components/site-wordmark"

const SITE_NAV = [
  { href: "/",                   label: "Rankings"         },
  { href: "/about",              label: "About"            },
  { href: "/responsible-gaming", label: "Responsible Play" },
]

const LEGAL_NAV = [
  { href: "/terms",          label: "Terms of Use"   },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy",  label: "Cookie Policy"  },
]

const RG_LINKS = [
  { href: "https://www.gamstop.co.uk/",            img: "/gamstop.svg",                  alt: "GamStop"               },
  { href: "https://www.begambleaware.org/",         img: "/gamble-aware.png",             alt: "BeGambleAware"         },
  { href: "https://www.gamcare.org.uk/",            img: "/gamcare.png",                  alt: "GamCare"               },
  { href: "https://www.gamblingtherapy.org/",       img: "/gordon.png",                   alt: "Gambling Therapy"      },
  { href: "https://www.gamblingcommission.gov.uk/", img: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission"},
]

const NAV_LABEL_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-inter),sans-serif",
  fontSize: 8,
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.46em",
  color: "rgba(201,168,76,0.36)",
  marginBottom: 18,
  display: "block",
}

const NAV_LINK_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-inter),sans-serif",
  fontSize: 12,
  color: "rgba(237,228,204,0.38)",
  textDecoration: "none",
  display: "block",
  lineHeight: 1,
  transition: "color 0.15s",
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#090909", borderTop: "1px solid rgba(201,168,76,0.10)" }}>

      {/* Thin gold top rule */}
      <div style={{ height: 1, backgroundColor: "#C9A84C", opacity: 0.65 }} />

      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16" style={{ paddingTop: 72, paddingBottom: 64 }}>

        {/* ── Main four-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand — 4 cols */}
          <div className="md:col-span-4">
            <SiteWordmark variant="footer" className="block mb-7" />
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 12,
              lineHeight: 1.88,
              color: "rgba(237,228,204,0.28)",
              marginBottom: 24,
            }}>
              An independent editorial comparison platform for UK-licensed casino operators.
              We hold no player funds and accept no wagers. Rankings reflect editorial merit
              across licensing, game quality, bonuses, payout speed, and player protection.
            </p>
            <div style={{
              display: "inline-flex",
              border: "1px solid rgba(201,168,76,0.14)",
              padding: "6px 14px",
            }}>
              <span style={{
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: 8,
                textTransform: "uppercase",
                letterSpacing: "0.44em",
                color: "rgba(201,168,76,0.3)",
              }}>18+ · UKGC Licensed Only</span>
            </div>
          </div>

          {/* Site nav — 2 cols */}
          <div className="md:col-span-2">
            <span style={NAV_LABEL_STYLE}>Site</span>
            <nav className="flex flex-col gap-3" aria-label="Footer site navigation">
              {SITE_NAV.map((item) => (
                <Link key={item.href} href={item.href} className="footer-link" style={NAV_LINK_STYLE}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal nav — 2 cols */}
          <div className="md:col-span-2">
            <span style={NAV_LABEL_STYLE}>Legal</span>
            <nav className="flex flex-col gap-3" aria-label="Footer legal navigation">
              {LEGAL_NAV.map((item) => (
                <Link key={item.href} href={item.href} className="footer-link" style={NAV_LINK_STYLE}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Responsible play — 4 cols */}
          <div className="md:col-span-4">
            <span style={NAV_LABEL_STYLE}>Responsible Play</span>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 11,
              lineHeight: 1.72,
              color: "rgba(237,228,204,0.24)",
              marginBottom: 18,
            }}>
              Gambling can be addictive. Please play responsibly and only within your means.
              Free confidential support is available 24/7.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {RG_LINKS.map((rg) => (
                <Link
                  key={rg.href}
                  href={rg.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rg-logo-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "7px 10px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <img src={rg.img} alt={rg.alt} style={{ height: 22, width: "auto", objectFit: "contain", opacity: 0.68 }} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, backgroundColor: "rgba(201,168,76,0.07)", margin: "52px 0 36px" }} />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row gap-5 items-start md:items-end justify-between">
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 10,
            lineHeight: 1.95,
            color: "rgba(237,228,204,0.2)",
            maxWidth: 660,
          }}>
            Commercial links on this site may generate affiliate revenue. This does not influence our editorial
            rankings or scoring methodology. All casino activity takes place on licensed third-party platforms
            under their own terms and conditions. Identity and age verification applies. 18+ · UK residents only.
          </p>
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 9,
            textTransform: "uppercase",
            letterSpacing: "0.36em",
            color: "rgba(201,168,76,0.22)",
            flexShrink: 0,
          }}>
            &copy; {new Date().getFullYear()} ukbestcasinosites.com
          </p>
        </div>

      </div>
    </footer>
  )
}

import Link from "next/link"
import { SiteWordmark } from "@/components/site-wordmark"

const GOLD = "#C9A84C"
const BLACK = "#0D0D0D"
const BLACK_CARD = "#141414"
const CRIMSON = "#8B1A1A"
const IVORY = "#F5F0E8"

const nav = [
  { href: "/about", label: "About" },
  { href: "/responsible-gaming", label: "Responsible Gambling" },
  { href: "/terms", label: "Terms" },
  { href: "/cookie-policy", label: "Cookies" },
  { href: "/privacy-policy", label: "Privacy" },
]

export function Footer() {
  return (
    <footer
      className="mt-16 border-t"
      style={{ backgroundColor: BLACK_CARD, borderColor: "rgba(139,26,26,0.3)" }}
    >
      {/* Top crimson bar */}
      <div className="h-[3px]" style={{ background: CRIMSON }} />
      {/* Gold hairline */}
      <div className="h-px" style={{ background: "rgba(201,168,76,0.25)" }} />

      <div className="mx-auto max-w-5xl px-4 py-12 xl:max-w-6xl">

        {/* Brand block */}
        <div className="flex flex-col items-center gap-3 mb-10">
          {/* Casino crest */}
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Spade left */}
            <path d="M10 15L13.5 21H11L13.5 26H9L10 31L11 26H7L9.5 21H7L10 15Z" fill={CRIMSON} opacity="0.9"/>
            {/* Crown centre */}
            <path d="M22 4L27 16L35 9L32 28H12L9 9L17 16L22 4Z" stroke={GOLD} strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
            <rect x="11" y="29" width="22" height="4" rx="0.5" fill={GOLD} opacity="0.55"/>
            {/* Diamond right */}
            <path d="M34 15L40 22L34 29L28 22L34 15Z" fill={GOLD} opacity="0.75"/>
          </svg>

          <SiteWordmark variant="footer" />

          <p className="text-[9px] font-sans uppercase tracking-[0.32em]" style={{ color: "rgba(201,168,76,0.45)" }}>
            elitecasinossitesuk.com
          </p>

          {/* Ornamental divider */}
          <div className="flex items-center gap-3 mt-1">
            <div className="w-16 h-px" style={{ background: "rgba(201,168,76,0.2)" }} />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M5 0.5L9.5 5L5 9.5L0.5 5L5 0.5Z" fill={GOLD} opacity="0.5"/>
            </svg>
            <div className="w-16 h-px" style={{ background: "rgba(201,168,76,0.2)" }} />
          </div>
        </div>

        {/* Nav */}
        <nav
          className="mb-10 flex flex-wrap justify-center gap-6 text-[10px] font-sans uppercase tracking-[0.2em]"
          aria-label="Footer navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#C9A84C]"
              style={{ color: "rgba(245,240,232,0.45)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Gold hairline */}
        <div className="h-px mb-8" style={{ background: "rgba(201,168,76,0.12)" }} />

        {/* Responsible Gambling logos */}
        <div className="mb-8 text-center">
          <p
            className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] mb-4"
            style={{ color: "rgba(139,26,26,0.8)" }}
          >
            Responsible Gambling
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7">
            {[
              { href: "https://www.gamstop.co.uk/", src: "/gamstop.svg", alt: "GamStop" },
              { href: "https://www.begambleaware.org/", src: "/gamble-aware.png", alt: "BeGambleAware" },
              { href: "https://www.gamcare.org.uk/", src: "/gamcare.png", alt: "GamCare" },
              { href: "https://www.gamblingtherapy.org/", src: "/gordon.png", alt: "Gambling Therapy" },
              { href: "https://www.gamblingcommission.gov.uk/", src: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission" },
            ].map((logo) => (
              <Link
                key={logo.href}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block opacity-60 hover:opacity-90 transition-opacity"
              >
                <img src={logo.src} alt={logo.alt} className="h-8 rounded px-2 py-0.5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Crimson hairline */}
        <div className="h-px mb-5" style={{ background: "rgba(139,26,26,0.3)" }} />

        {/* Copyright */}
        <p
          className="text-center text-[10px] font-sans uppercase tracking-wider"
          style={{ color: "rgba(201,168,76,0.3)" }}
        >
          &copy; {new Date().getFullYear()} elitecasinossitesuk.com &nbsp;&middot;&nbsp; 18+ &nbsp;&middot;&nbsp; United Kingdom
        </p>
      </div>
    </footer>
  )
}

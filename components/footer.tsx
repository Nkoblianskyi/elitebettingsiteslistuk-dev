import Link from "next/link"
import { SiteWordmark } from "@/components/site-wordmark"

const GOLD = "#C9A84C"
const NAVY = "#0D1B2A"
const NAVY_CARD = "#131E2B"
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
      style={{ backgroundColor: NAVY_CARD, borderColor: "rgba(201,168,76,0.2)" }}
    >
      {/* Top gold rule */}
      <div className="h-[2px]" style={{ background: GOLD }} />

      <div className="mx-auto max-w-5xl px-4 py-10 xl:max-w-6xl">

        {/* Brand */}
        <div className="flex flex-col items-center gap-2 mb-8">
          {/* Crown icon */}
          <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M18 3L23 13L31 7L28.5 21H7.5L5 7L13 13L18 3Z" stroke="#C9A84C" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
            <rect x="7" y="22" width="22" height="4" rx="0.5" fill="#C9A84C" opacity="0.6"/>
          </svg>
          <SiteWordmark variant="footer" />
          <p className="text-[9px] font-sans uppercase tracking-[0.3em]" style={{ color: "rgba(201,168,76,0.5)" }}>
            elitebettingsiteslistuk.com
          </p>
        </div>

        {/* Gold divider */}
        <div className="h-px mb-6" style={{ background: "rgba(201,168,76,0.15)" }} />

        {/* Nav */}
        <nav className="mb-8 flex flex-wrap justify-center gap-6 text-xs font-sans uppercase tracking-widest" aria-label="Footer navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-100"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Gold divider */}
        <div className="h-px mb-8" style={{ background: "rgba(201,168,76,0.1)" }} />

        {/* Responsible Gambling logos */}
        <div className="mb-8 text-center">
          <p className="text-[9px] font-sans font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "rgba(201,168,76,0.5)" }}>
            Responsible Gambling
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="/gamble-aware.png" alt="BeGambleAware" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
            <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="/gamcare.png" alt="GamCare" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
            <Link href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="/gordon.png" alt="Gambling Therapy" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
            <Link href="https://www.gamblingcommission.gov.uk/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="/Gambling_Commission_logo.png" alt="UK Gambling Commission" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
            <Link href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <img src="/gamstop.svg" alt="GamStop" className="h-8 rounded bg-white px-2 py-1" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="border-t pt-5 text-center"
          style={{ borderColor: "rgba(201,168,76,0.12)" }}
        >
          <p className="text-[10px] font-sans uppercase tracking-wider" style={{ color: "rgba(201,168,76,0.35)" }}>
            &copy; {new Date().getFullYear()} elitebettingsiteslistuk.com &nbsp;&middot;&nbsp; 18+ &nbsp;&middot;&nbsp; United Kingdom
          </p>
        </div>
      </div>
    </footer>
  )
}

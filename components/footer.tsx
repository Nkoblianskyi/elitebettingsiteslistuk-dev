import Link from "next/link"
import { SiteWordmark } from "@/components/site-wordmark"

const GOLD = "#B8965A"
const FOREST = "#0F2318"
const FOREST_CARD = "#152B1E"
const PARCHMENT = "#F2ECD9"

const nav = [
  { href: "/about", label: "About" },
  { href: "/responsible-gaming", label: "Responsible Play" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/privacy-policy", label: "Privacy Policy" },
]

export function Footer() {
  return (
    <footer
      className="mt-16 border-t"
      style={{ backgroundColor: FOREST_CARD, borderColor: "rgba(184,150,90,0.15)" }}
    >
      {/* Gold top bar */}
      <div className="h-[3px]" style={{ background: GOLD }} />

      <div className="mx-auto max-w-5xl px-4 py-12 xl:max-w-6xl">

        {/* Brand centre */}
        <div className="flex flex-col items-center gap-3 mb-10">
          {/* Crest */}
          <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M22 2 L39 7.5 L39 22 Q39 33 22 38 Q5 33 5 22 L5 7.5 Z" stroke="#B8965A" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
            <path d="M22 6 L35 10 L35 21 Q35 30 22 34 Q9 30 9 21 L9 10 Z" fill="rgba(184,150,90,0.07)" stroke="#B8965A" strokeWidth="0.6"/>
            <line x1="22" y1="10" x2="22" y2="30" stroke="#B8965A" strokeWidth="0.8" strokeOpacity="0.5"/>
            <line x1="13" y1="20" x2="31" y2="20" stroke="#B8965A" strokeWidth="0.8" strokeOpacity="0.5"/>
            <path d="M13 9 L17 14 L22 6 L27 14 L31 9" stroke="#B8965A" strokeWidth="1" fill="none" strokeLinejoin="round"/>
          </svg>

          <SiteWordmark variant="footer" />

          <p className="font-sans text-[9px] uppercase tracking-[0.35em]" style={{ color: "rgba(184,150,90,0.4)" }}>
            trustedcasinossitesuk.com
          </p>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: "rgba(184,150,90,0.12)" }} />

        {/* Nav */}
        <nav
          className="mb-10 flex flex-wrap justify-center gap-x-7 gap-y-3 text-[10px] font-sans uppercase tracking-[0.22em]"
          aria-label="Footer navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-100"
              style={{ color: "rgba(242,236,217,0.42)" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: "rgba(184,150,90,0.08)" }} />

        {/* Responsible gambling logos */}
        <div className="mb-10 text-center">
          <p className="font-sans text-[8px] font-bold uppercase tracking-[0.35em] mb-5" style={{ color: "rgba(184,150,90,0.45)" }}>
            Responsible Play
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer">
              <img src="/gamstop.svg" alt="GamStop" className="h-7 rounded opacity-70 hover:opacity-100 transition-opacity px-2 py-1" />
            </Link>
            <Link href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer">
              <img src="/gamble-aware.png" alt="BeGambleAware" className="h-7 rounded opacity-70 hover:opacity-100 transition-opacity px-2 py-1" />
            </Link>
            <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
              <img src="/gamcare.png" alt="GamCare" className="h-7 rounded opacity-70 hover:opacity-100 transition-opacity px-2 py-1" />
            </Link>
            <Link href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener noreferrer">
              <img src="/gordon.png" alt="Gambling Therapy" className="h-7 rounded opacity-70 hover:opacity-100 transition-opacity px-2 py-1" />
            </Link>
            <Link href="https://www.gamblingcommission.gov.uk/" target="_blank" rel="noopener noreferrer">
              <img src="/Gambling_Commission_logo.png" alt="UK Gambling Commission" className="h-7 rounded opacity-70 hover:opacity-100 transition-opacity px-2 py-1" />
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="border-t pt-6 text-center space-y-2"
          style={{ borderColor: "rgba(184,150,90,0.1)" }}
        >
          <p className="font-sans text-[10px] leading-relaxed max-w-3xl mx-auto" style={{ color: "rgba(242,236,217,0.32)" }}>
            trustedcasinossitesuk.com is an independent editorial comparison platform. We do not accept wagers or hold player funds.
            All casino activity takes place on licensed third-party platforms under their own terms. Commercial links may generate affiliate revenue which does not influence our editorial rankings.
          </p>
          <p className="font-sans text-[10px] uppercase tracking-wider" style={{ color: "rgba(184,150,90,0.3)" }}>
            &copy; {new Date().getFullYear()} trustedcasinossitesuk.com &nbsp; 18+ &nbsp; United Kingdom
          </p>
        </div>
      </div>
    </footer>
  )
}

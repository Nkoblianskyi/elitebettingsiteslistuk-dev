import Link from "next/link"
import { SiteWordmark } from "@/components/site-wordmark"

const GOLD = "#B8965A"
const FOREST = "#0F2318"

const nav = [
  { href: "/about", label: "About" },
  { href: "/responsible-gaming", label: "Responsible Play" },
  { href: "/terms", label: "Terms" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40" style={{ backgroundColor: FOREST, borderBottom: "1px solid rgba(184,150,90,0.18)" }}>
      {/* Thin gold top line */}
      <div className="h-[3px] w-full" style={{ background: GOLD }} />

      <div className="mx-auto max-w-5xl px-4 xl:max-w-6xl">
        <div className="flex items-center justify-between py-4 gap-6">

          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation left">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] transition-opacity hover:opacity-100"
                style={{ color: "rgba(242,236,217,0.45)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Centre logo */}
          <Link
            href="/"
            className="flex flex-col items-center gap-1 transition-opacity hover:opacity-80 mx-auto md:mx-0"
          >
            {/* Hunt-club crest */}
            <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              {/* Shield outline */}
              <path d="M17 2 L30 6 L30 18 Q30 26 17 30 Q4 26 4 18 L4 6 Z" stroke="#B8965A" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
              {/* Inner field */}
              <path d="M17 5 L27 8.5 L27 17.5 Q27 24 17 27 Q7 24 7 17.5 L7 8.5 Z" fill="rgba(184,150,90,0.08)" stroke="#B8965A" strokeWidth="0.6"/>
              {/* Cross */}
              <line x1="17" y1="8" x2="17" y2="24" stroke="#B8965A" strokeWidth="0.8" strokeOpacity="0.6"/>
              <line x1="10" y1="16" x2="24" y2="16" stroke="#B8965A" strokeWidth="0.8" strokeOpacity="0.6"/>
              {/* Crown points */}
              <path d="M10 7 L13 11 L17 4 L21 11 L24 7" stroke="#B8965A" strokeWidth="1" fill="none" strokeLinejoin="round"/>
            </svg>
            <SiteWordmark variant="header-hero" className="hidden md:inline" />
            <SiteWordmark variant="header-compact" className="md:hidden" />
          </Link>

          {/* Right: tagline / mobile placeholder */}
          <div className="hidden md:flex flex-col items-end gap-1">
            <p className="font-sans text-[9px] uppercase tracking-[0.3em]" style={{ color: "rgba(184,150,90,0.45)" }}>
              United Kingdom
            </p>
            <p className="font-sans text-[9px] uppercase tracking-[0.22em]" style={{ color: "rgba(242,236,217,0.28)" }}>
              GC Licensed Operators
            </p>
          </div>

          {/* Mobile spacer */}
          <div className="md:hidden w-8" />
        </div>

        {/* Tagline bar */}
        <div className="hidden md:flex items-center justify-center gap-4 pb-3">
          <div className="h-px flex-1 opacity-15" style={{ background: GOLD }} />
          <p className="font-sans text-[8px] uppercase tracking-[0.4em]" style={{ color: "rgba(184,150,90,0.4)" }}>
            Curated Rankings · Licensed Operators · United Kingdom
          </p>
          <div className="h-px flex-1 opacity-15" style={{ background: GOLD }} />
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="h-px w-full opacity-12" style={{ background: `linear-gradient(to right, transparent, ${GOLD} 30%, ${GOLD} 70%, transparent)` }} />
    </header>
  )
}

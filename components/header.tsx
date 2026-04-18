import Link from "next/link"
import { SiteWordmark } from "@/components/site-wordmark"

const GOLD = "#C9A84C"
const BLACK = "#0D0D0D"
const CRIMSON = "#8B1A1A"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b" style={{ backgroundColor: BLACK, borderColor: "rgba(139,26,26,0.4)" }}>
      {/* Top crimson bar */}
      <div className="h-[3px] w-full" style={{ background: CRIMSON }} />

      <div className="mx-auto max-w-5xl px-4 py-4 xl:max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Left decorative rule */}
          <div
            className="hidden md:block flex-1 h-px opacity-20"
            style={{ background: `linear-gradient(to right, transparent, ${GOLD})` }}
          />

          <Link
            href="/"
            className="flex flex-col items-center gap-1.5 transition-opacity hover:opacity-80 mx-4 md:mx-10"
          >
            {/* Casino crest icon — spade + diamond */}
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7 1L9.5 5.5C10.5 5 11.5 5.5 11.5 6.5C11.5 8 9.5 9 7 11C4.5 9 2.5 8 2.5 6.5C2.5 5.5 3.5 5 4.5 5.5L7 1Z" fill={CRIMSON} />
                <path d="M5.5 11L7 13L8.5 11H5.5Z" fill={CRIMSON} />
              </svg>
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M9 1L17 8H13L17 14H10L9 21L8 14H1L5 8H1L9 1Z" stroke={GOLD} strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
                <rect x="5" y="17.5" width="8" height="2" rx="0.3" fill={GOLD} opacity="0.5"/>
              </svg>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M7 1.5L13 7L7 12.5L1 7L7 1.5Z" fill={GOLD} opacity="0.8"/>
              </svg>
            </div>

            <SiteWordmark variant="header-compact" className="md:hidden" />
            <SiteWordmark variant="header-hero" className="hidden md:inline" />
          </Link>

          {/* Right decorative rule */}
          <div
            className="hidden md:block flex-1 h-px opacity-20"
            style={{ background: `linear-gradient(to left, transparent, ${GOLD})` }}
          />
        </div>

        {/* Tagline */}
        <p
          className="text-center text-[9px] tracking-[0.32em] uppercase font-sans mt-1.5 hidden md:block"
          style={{ color: "rgba(201,168,76,0.55)" }}
        >
          Curated Casino Rankings &nbsp;&middot;&nbsp; Licensed Operators &nbsp;&middot;&nbsp; United Kingdom
        </p>
      </div>

      {/* Bottom double rule — crimson then gold hairline */}
      <div className="h-px w-full" style={{ background: "rgba(139,26,26,0.35)" }} />
      <div
        className="h-px w-full opacity-15"
        style={{ background: `linear-gradient(to right, transparent, ${GOLD} 30%, ${GOLD} 70%, transparent)` }}
      />
    </header>
  )
}

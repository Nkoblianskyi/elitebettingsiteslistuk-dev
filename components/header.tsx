import Link from "next/link"
import { SiteWordmark } from "@/components/site-wordmark"

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-[#0D1B2A]" style={{ borderColor: "rgba(201,168,76,0.25)" }}>
      {/* Thin gold top line */}
      <div className="h-px w-full bg-[#C9A84C] opacity-60" />

      <div className="mx-auto max-w-5xl px-4 py-4 xl:max-w-6xl">
        <div className="flex items-center justify-between">
          {/* Left decorative line */}
          <div className="hidden md:block flex-1 h-px opacity-20" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />

          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80 mx-4 md:mx-8"
          >
            {/* Crown / crest icon */}
            <div className="flex flex-col items-center gap-0.5 shrink-0">
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M14 2L18 10L24 5L22 16H6L4 5L10 10L14 2Z" stroke="#C9A84C" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
                <rect x="5" y="17" width="18" height="3" rx="0.5" fill="#C9A84C" opacity="0.7"/>
              </svg>
            </div>
            <SiteWordmark variant="header-compact" className="md:hidden" />
            <SiteWordmark variant="header-hero" className="hidden md:inline" />
          </Link>

          {/* Right decorative line */}
          <div className="hidden md:block flex-1 h-px opacity-20" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
        </div>

        {/* Tagline */}
        <p className="text-center text-[10px] tracking-[0.3em] uppercase text-[#C9A84C]/60 font-sans mt-1 hidden md:block">
          Curated Rankings · Licensed Operators · United Kingdom
        </p>
      </div>

      {/* Bottom gold hairline */}
      <div className="h-px w-full opacity-20" style={{ background: "linear-gradient(to right, transparent, #C9A84C 30%, #C9A84C 70%, transparent)" }} />
    </header>
  )
}

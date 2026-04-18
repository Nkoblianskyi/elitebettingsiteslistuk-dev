"use client"

import { ShieldCheck, Clock, Award } from "lucide-react"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

function getRatingsRevisedDate() {
  const d = new Date()
  return {
    iso: d.toISOString().slice(0, 10),
    label: d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  }
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getRatingsRevisedDate()

  return (
    <div className="w-full mb-6 relative overflow-hidden" style={{ borderBottom: "2px solid #C9A84C" }}>
      {/* Sports background image */}
      <img
        src="/hero-sports-bg.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Deep navy overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, rgba(13,27,42,0.97) 0%, rgba(13,27,42,0.88) 50%, rgba(13,27,42,0.55) 100%)" }}
        aria-hidden
      />
      {/* Gold top rule */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "#C9A84C" }} aria-hidden />

      {/* Content */}
      <div className="relative px-5 py-7 md:px-10 md:py-8 lg:px-14">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p
            className="font-sans text-[9px] font-bold uppercase tracking-[0.38em] mb-3"
            style={{ color: "#C9A84C" }}
          >
            elitebettingsiteslistuk.com &nbsp;·&nbsp; United Kingdom
          </p>

          {/* Headline — compact serif */}
          <h1
            className="font-serif font-bold leading-[1.1] tracking-tight mb-3 text-balance"
            style={{ color: "#F5F0E8", fontSize: "clamp(1.5rem, 3.5vw, 2.15rem)" }}
          >
            Britain&apos;s Elite Betting Sites —{" "}
            <span style={{ color: "#C9A84C" }}>Ranked &amp; Rated</span>
          </h1>

          {/* Subtitle — one tight line */}
          <p
            className="font-sans text-xs leading-relaxed mb-5 max-w-lg"
            style={{ color: "rgba(245,240,232,0.72)" }}
          >
            Six UK-licensed bookmakers compared by bonus value, platform quality and withdrawal speed.
            Always verify terms directly with each operator before depositing.
          </p>

          {/* Trust pills + disclosure row */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Trust chips */}
            {[
              { icon: <img src="/flag-uk.svg" alt="" width={18} height={11} aria-hidden />, label: "UK Licensed" },
              { icon: <ShieldCheck className="w-3 h-3" style={{ color: "#C9A84C" }} aria-hidden />, label: "GC Regulated" },
              { icon: <Award className="w-3 h-3" style={{ color: "#C9A84C" }} aria-hidden />, label: "Expert Rated" },
              { icon: <Clock className="w-3 h-3" style={{ color: "#C9A84C" }} aria-hidden />, label: "Fast Payouts" },
            ].map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 border px-2.5 py-1"
                style={{
                  borderColor: "rgba(201,168,76,0.35)",
                  backgroundColor: "rgba(13,27,42,0.55)",
                }}
              >
                {chip.icon}
                <span
                  className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "#C9A84C" }}
                >
                  {chip.label}
                </span>
              </span>
            ))}

            {/* Thin divider */}
            <span className="hidden md:block w-px h-4 mx-1" style={{ background: "rgba(201,168,76,0.3)" }} />

            {/* Disclosure buttons */}
            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              className="font-sans text-[9px] font-semibold uppercase tracking-wider underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              Advertiser Disclosure
            </button>
            <span style={{ color: "rgba(245,240,232,0.25)" }} aria-hidden>·</span>
            <button
              type="button"
              onClick={onTermsModalOpen}
              className="font-sans text-[9px] font-semibold uppercase tracking-wider underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: "rgba(245,240,232,0.5)" }}
            >
              18+ · T&amp;Cs Apply
            </button>
          </div>

          {/* Revised date */}
          <p
            className="font-sans text-[9px] mt-3"
            style={{ color: "rgba(245,240,232,0.35)" }}
          >
            Ratings last revised:{" "}
            <time dateTime={iso} style={{ color: "rgba(245,240,232,0.5)" }}>
              {label}
            </time>
          </p>
        </div>
      </div>
    </div>
  )
}

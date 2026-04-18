"use client"

import { ShieldCheck, Award, Gem, Clock } from "lucide-react"

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
    <div
      className="w-full mb-6 relative overflow-hidden"
      style={{ borderBottom: "2px solid #8B1A1A" }}
    >
      {/* Background image */}
      <img
        src="/hero-sports-bg.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Deep black overlay with crimson tint on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(13,13,13,0.98) 0%, rgba(13,13,13,0.93) 45%, rgba(60,8,8,0.70) 100%)",
        }}
        aria-hidden
      />

      {/* Crimson top rule */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "#8B1A1A" }} aria-hidden />
      {/* Gold hairline below crimson */}
      <div className="absolute top-[3px] left-0 right-0 h-px" style={{ background: "rgba(201,168,76,0.35)" }} aria-hidden />

      {/* Content */}
      <div className="relative px-5 py-8 md:px-10 md:py-10 lg:px-14">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            {/* Diamond ornament */}
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 0.5L7.5 4L4 7.5L0.5 4L4 0.5Z" fill="#C9A84C" opacity="0.7"/>
            </svg>
            <p
              className="font-sans text-[9px] font-bold uppercase tracking-[0.38em]"
              style={{ color: "#C9A84C" }}
            >
              elitecasinossitesuk.com &nbsp;&middot;&nbsp; United Kingdom
            </p>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4 0.5L7.5 4L4 7.5L0.5 4L4 0.5Z" fill="#C9A84C" opacity="0.7"/>
            </svg>
          </div>

          {/* Headline */}
          <h1
            className="font-serif font-bold leading-[1.08] tracking-tight mb-4 text-balance"
            style={{ color: "#F5F0E8", fontSize: "clamp(1.65rem, 3.8vw, 2.35rem)" }}
          >
            England&apos;s Premier Casino Sites —{" "}
            <span style={{ color: "#C9A84C" }}>Ranked &amp; Curated</span>
          </h1>

          {/* Sub-headline with crimson accent line */}
          <div className="flex items-start gap-3 mb-5">
            <div className="w-0.5 h-10 shrink-0 mt-0.5" style={{ background: "#8B1A1A" }} />
            <p
              className="font-sans text-sm leading-relaxed max-w-lg"
              style={{ color: "rgba(245,240,232,0.72)" }}
            >
              Six UK-licensed casino operators assessed by bonus clarity, game depth, platform experience, and payout reliability.
              Verify terms directly with each operator before depositing.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {[
              { icon: <img src="/flag-uk.svg" alt="" width={18} height={11} aria-hidden />, label: "UK Licensed" },
              { icon: <ShieldCheck className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} aria-hidden />, label: "GC Regulated" },
              { icon: <Gem className="w-3 h-3" style={{ color: "#C9A84C" }} aria-hidden />, label: "Expert Rated" },
              { icon: <Clock className="w-3 h-3" style={{ color: "#C9A84C" }} aria-hidden />, label: "Fast Payouts" },
              { icon: <Award className="w-3 h-3" style={{ color: "#C9A84C" }} aria-hidden />, label: "Top Bonuses" },
            ].map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 border px-2.5 py-1"
                style={{
                  borderColor: "rgba(139,26,26,0.55)",
                  backgroundColor: "rgba(13,13,13,0.60)",
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

            <span className="hidden md:block w-px h-4 mx-1" style={{ background: "rgba(201,168,76,0.25)" }} />

            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              className="font-sans text-[9px] font-semibold uppercase tracking-wider underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: "rgba(245,240,232,0.45)" }}
            >
              Advertiser Disclosure
            </button>
            <span style={{ color: "rgba(245,240,232,0.2)" }} aria-hidden>·</span>
            <button
              type="button"
              onClick={onTermsModalOpen}
              className="font-sans text-[9px] font-semibold uppercase tracking-wider underline underline-offset-2 transition-opacity hover:opacity-70"
              style={{ color: "rgba(245,240,232,0.45)" }}
            >
              18+ · T&amp;Cs Apply
            </button>
          </div>

          {/* Revised date */}
          <p className="font-sans text-[9px]" style={{ color: "rgba(245,240,232,0.3)" }}>
            Rankings last revised:{" "}
            <time dateTime={iso} style={{ color: "rgba(245,240,232,0.45)" }}>
              {label}
            </time>
          </p>
        </div>
      </div>

      {/* Bottom crimson rule */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "rgba(139,26,26,0.6)" }} aria-hidden />
    </div>
  )
}

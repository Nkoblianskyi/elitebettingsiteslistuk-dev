"use client"

import { ShieldCheck, Award, CheckSquare } from "lucide-react"

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

const GOLD = "#B8965A"
const PARCHMENT = "#F2ECD9"
const FOREST = "#0F2318"

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getRatingsRevisedDate()

  return (
    <div className="w-full mb-8 relative overflow-hidden" style={{ borderBottom: `2px solid ${GOLD}` }}>
      {/* Background image */}
      <img
        src="/hero-casino-bg.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Layered overlay: left panel opaque, right more transparent */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(105deg, rgba(15,35,24,0.97) 0%, rgba(15,35,24,0.90) 45%, rgba(15,35,24,0.55) 80%, rgba(15,35,24,0.20) 100%)`,
        }}
        aria-hidden
      />
      {/* Gold top rule */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: GOLD }} aria-hidden />

      {/* Content */}
      <div className="relative px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 opacity-60" style={{ background: GOLD }} />
            <p
              className="font-sans text-[9px] font-bold uppercase tracking-[0.42em]"
              style={{ color: GOLD }}
            >
              trustedcasinossitesuk.com &nbsp; United Kingdom
            </p>
          </div>

          {/* Headline */}
          <h1
            className="font-serif font-semibold leading-[1.08] tracking-tight mb-4 text-balance"
            style={{ color: PARCHMENT, fontSize: "clamp(1.75rem, 4vw, 2.8rem)" }}
          >
            Britain&apos;s Most Trusted{" "}
            <span style={{ color: GOLD, fontStyle: "italic" }}>Casino Sites</span>
            <br />
            <span style={{ color: `${PARCHMENT}CC`, fontWeight: 300 }}>Ranked by Independent Experts</span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-sans text-sm leading-relaxed mb-6 max-w-lg"
            style={{ color: "rgba(242,236,217,0.65)" }}
          >
            Six UK-licensed casinos compared by bonus value, game library quality, payout reliability,
            and player protection standards. Always verify terms directly with each operator before depositing.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {[
              { icon: <img src="/flag-uk.svg" alt="" width={18} height={11} aria-hidden />, label: "UK Licensed" },
              { icon: <ShieldCheck className="w-3.5 h-3.5" style={{ color: GOLD }} aria-hidden />, label: "GC Regulated" },
              { icon: <Award className="w-3.5 h-3.5" style={{ color: GOLD }} aria-hidden />, label: "Expert Rated" },
              { icon: <CheckSquare className="w-3.5 h-3.5" style={{ color: GOLD }} aria-hidden />, label: "Verified Offers" },
            ].map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-1.5 border px-3 py-1.5"
                style={{
                  borderColor: "rgba(184,150,90,0.3)",
                  backgroundColor: "rgba(15,35,24,0.6)",
                }}
              >
                {chip.icon}
                <span
                  className="font-sans text-[9px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: GOLD }}
                >
                  {chip.label}
                </span>
              </span>
            ))}
          </div>

          {/* Disclosure row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              className="font-sans text-[9px] font-semibold uppercase tracking-wider underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: "rgba(242,236,217,0.42)" }}
            >
              Advertiser Disclosure
            </button>
            <span style={{ color: "rgba(242,236,217,0.2)" }} aria-hidden>|</span>
            <button
              type="button"
              onClick={onTermsModalOpen}
              className="font-sans text-[9px] font-semibold uppercase tracking-wider underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: "rgba(242,236,217,0.42)" }}
            >
              18+ T&amp;Cs Apply
            </button>
            <span style={{ color: "rgba(242,236,217,0.2)" }} aria-hidden>|</span>
            <p className="font-sans text-[9px]" style={{ color: "rgba(242,236,217,0.3)" }}>
              Rankings revised:{" "}
              <time dateTime={iso} style={{ color: "rgba(242,236,217,0.45)" }}>
                {label}
              </time>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

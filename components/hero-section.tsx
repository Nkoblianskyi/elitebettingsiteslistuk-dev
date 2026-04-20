"use client"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

function getRatingDate() {
  const d = new Date()
  return {
    iso: d.toISOString().slice(0, 10),
    label: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
  }
}

const TRUST_STATS = [
  { value: "6", label: "Reviewed Sites" },
  { value: "18+", label: "Age Requirement" },
  { value: "UKGC", label: "Licensed Only" },
  { value: "2025", label: "Updated Ratings" },
]

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getRatingDate()

  return (
    <section className="w-full relative overflow-hidden" style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }}>

      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-casino.jpg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.88) 55%, rgba(13,13,13,0.55) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">

        {/* Top eyebrow row */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-6" style={{ background: "#C9A84C" }} />
          <p className="font-sans text-[9px] font-bold uppercase tracking-[0.45em]" style={{ color: "rgba(201,168,76,0.6)" }}>
            trustedcasinossitesuk.com &nbsp;·&nbsp; United Kingdom
          </p>
        </div>

        {/* Main headline */}
        <h1
          className="font-serif font-light leading-[0.9] mb-6 text-balance"
          style={{
            color: "#EDE4CC",
            fontSize: "clamp(2.6rem, 5.5vw, 4.8rem)",
            letterSpacing: "-0.01em",
          }}
        >
          Britain&apos;s&nbsp;Most&nbsp;Trusted
          <br />
          <em style={{ color: "#C9A84C" }}>Casino</em>{" "}Rankings
        </h1>

        {/* Date updated */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-3 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
          <span className="font-sans text-[9px] uppercase tracking-[0.35em]" style={{ color: "rgba(201,168,76,0.45)" }}>
            Rankings Updated
          </span>
          <time
            dateTime={iso}
            className="font-sans text-[9px] uppercase tracking-[0.25em]"
            style={{ color: "rgba(237,228,204,0.5)" }}
          >
            {label}
          </time>
        </div>

        {/* Subtext */}
        <p
          className="font-sans text-sm leading-relaxed max-w-md mb-10"
          style={{ color: "rgba(237,228,204,0.48)" }}
        >
          Independently assessed UK-licensed casino platforms, ranked by editorial experts
          across game quality, bonus transparency, payout reliability and player protection.
        </p>

        {/* Trust indicator strip */}
        <div
          className="inline-flex flex-wrap gap-0 mb-8"
          style={{ border: "1px solid rgba(201,168,76,0.18)" }}
        >
          {TRUST_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-5 py-3"
              style={{
                borderRight: i < TRUST_STATS.length - 1 ? "1px solid rgba(201,168,76,0.18)" : "none",
                backgroundColor: "rgba(13,13,13,0.7)",
              }}
            >
              <span
                className="font-serif font-light text-xl leading-none mb-0.5"
                style={{ color: "#C9A84C" }}
              >
                {stat.value}
              </span>
              <span
                className="font-sans text-[7px] uppercase tracking-[0.3em]"
                style={{ color: "rgba(237,228,204,0.38)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Disclosure links */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <button
            type="button"
            onClick={onAdvertiserModalOpen}
            className="font-sans text-[8px] font-bold uppercase tracking-[0.3em] underline underline-offset-2 transition-opacity hover:opacity-80"
            style={{ color: "rgba(201,168,76,0.42)" }}
          >
            Advertiser Disclosure
          </button>
          <span style={{ color: "rgba(201,168,76,0.2)", fontSize: "10px" }}>|</span>
          <button
            type="button"
            onClick={onTermsModalOpen}
            className="font-sans text-[8px] font-bold uppercase tracking-[0.3em] underline underline-offset-2 transition-opacity hover:opacity-80"
            style={{ color: "rgba(201,168,76,0.42)" }}
          >
            18+ Terms Apply
          </button>
        </div>
      </div>
    </section>
  )
}

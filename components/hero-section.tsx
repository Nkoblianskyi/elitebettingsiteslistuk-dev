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
    <section
      className="hero-root w-full relative overflow-hidden"
      style={{
        height: "250px",
        maxHeight: "250px",
        borderBottom: "1px solid rgba(201,168,76,0.12)",
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          .hero-root {
            height: 350px !important;
            max-height: 350px !important;
          }
        }
      `}</style>

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

      {/* Content — flex column, full height, justify between so items fill the space */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-5 sm:px-10 flex flex-col justify-between py-4 sm:py-6">

        {/* Row 1: eyebrow + date */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <div className="flex items-center gap-2">
            <div className="h-px w-5 shrink-0" style={{ background: "#C9A84C" }} />
            <p className="font-sans text-[8px] font-bold uppercase tracking-[0.4em]" style={{ color: "rgba(201,168,76,0.6)" }}>
              trustedcasinossitesuk.com
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-sans text-[8px] uppercase tracking-[0.3em]" style={{ color: "rgba(201,168,76,0.45)" }}>
              Updated
            </span>
            <time
              dateTime={iso}
              className="font-sans text-[8px] uppercase tracking-[0.2em]"
              style={{ color: "rgba(237,228,204,0.45)" }}
            >
              {label}
            </time>
          </div>
        </div>

        {/* Row 2: main headline */}
        <div>
          <h1
            className="font-serif font-light leading-[0.88] text-balance"
            style={{
              color: "#EDE4CC",
              fontSize: "clamp(1.55rem, 4vw, 3rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Britain&apos;s Most Trusted
            <br />
            <em style={{ color: "#C9A84C" }}>Casino</em>{" "}Rankings
          </h1>
          <p
            className="font-sans leading-relaxed mt-1.5"
            style={{ color: "rgba(237,228,204,0.44)", fontSize: "clamp(10px, 1.3vw, 13px)", maxWidth: "38rem" }}
          >
            Independently assessed UK-licensed platforms, ranked across game quality,
            bonus transparency, payout reliability and player protection.
          </p>
        </div>

        {/* Row 3: trust strip + disclosures */}
        <div className="flex flex-wrap items-center justify-between gap-y-2">
          {/* Trust indicators */}
          <div
            className="inline-flex gap-0"
            style={{ border: "1px solid rgba(201,168,76,0.18)" }}
          >
            {TRUST_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-3 sm:px-4 py-1.5"
                style={{
                  borderRight: i < TRUST_STATS.length - 1 ? "1px solid rgba(201,168,76,0.18)" : "none",
                  backgroundColor: "rgba(13,13,13,0.7)",
                }}
              >
                <span
                  className="font-serif font-light leading-none"
                  style={{ color: "#C9A84C", fontSize: "clamp(0.9rem, 2vw, 1.2rem)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-sans uppercase tracking-[0.25em] mt-0.5"
                  style={{ color: "rgba(237,228,204,0.35)", fontSize: "6px" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Disclosure links */}
          <div className="flex items-center gap-x-3">
            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              className="font-sans text-[8px] font-bold uppercase tracking-[0.25em] underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: "rgba(201,168,76,0.42)" }}
            >
              Advertiser Disclosure
            </button>
            <span style={{ color: "rgba(201,168,76,0.2)", fontSize: "9px" }}>|</span>
            <button
              type="button"
              onClick={onTermsModalOpen}
              className="font-sans text-[8px] font-bold uppercase tracking-[0.25em] underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: "rgba(201,168,76,0.42)" }}
            >
              18+ Terms Apply
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

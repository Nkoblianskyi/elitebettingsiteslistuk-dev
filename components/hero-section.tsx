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

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getRatingDate()

  return (
    <section
      className="w-full"
      style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }}
    >
      {/* Split layout: 55% text / 45% image on large screens, stacked on mobile */}
      <div className="flex flex-col lg:flex-row min-h-[520px] lg:min-h-[600px]">

        {/* LEFT TEXT PANEL */}
        <div
          className="flex flex-col justify-between px-8 py-14 sm:px-12 lg:px-16 lg:py-20 lg:w-[55%]"
          style={{
            backgroundColor: "#0C0F0D",
            borderRight: "1px solid rgba(201,168,76,0.1)",
          }}
        >
          {/* Top eyebrow */}
          <div>
            <p
              className="font-sans text-[9px] font-bold uppercase tracking-[0.5em] mb-10"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              trustedcasinossitesuk.com &nbsp; / &nbsp; United Kingdom
            </p>

            {/* Main headline — very large Cormorant */}
            <h1
              className="font-serif font-light leading-[0.92] mb-8"
              style={{
                color: "#EDE4CC",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                letterSpacing: "-0.01em",
              }}
            >
              Britain&apos;s
              <br />
              <em style={{ color: "#C9A84C" }}>Premier</em>
              <br />
              Casino Guide
            </h1>

            {/* Thin gold rule */}
            <div className="w-16 h-px mb-8" style={{ background: "#C9A84C" }} />

            {/* Body copy */}
            <p
              className="font-sans text-sm leading-loose max-w-sm"
              style={{ color: "rgba(237,228,204,0.52)" }}
            >
              Six independently assessed UK-licensed casino platforms, ranked by
              our editorial panel across game quality, bonus transparency, payout
              reliability, and player protection standards.
            </p>
          </div>

          {/* Bottom meta row */}
          <div className="flex flex-wrap items-end gap-x-6 gap-y-2 mt-12">
            <div>
              <span className="block font-sans text-[8px] font-bold uppercase tracking-[0.4em] mb-1" style={{ color: "rgba(201,168,76,0.45)" }}>
                Rankings Updated
              </span>
              <time
                dateTime={iso}
                className="font-serif text-sm"
                style={{ color: "rgba(237,228,204,0.55)" }}
              >
                {label}
              </time>
            </div>

            <div className="h-8 w-px" style={{ background: "rgba(201,168,76,0.15)" }} />

            <button
              type="button"
              onClick={onAdvertiserModalOpen}
              className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: "rgba(201,168,76,0.45)" }}
            >
              Advertiser Disclosure
            </button>

            <button
              type="button"
              onClick={onTermsModalOpen}
              className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] underline underline-offset-2 transition-opacity hover:opacity-80"
              style={{ color: "rgba(201,168,76,0.45)" }}
            >
              18+ Terms Apply
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE PANEL */}
        <div className="relative lg:w-[45%] h-64 lg:h-auto overflow-hidden" style={{ minHeight: "260px" }}>
          <img
            src="/hero-main.jpg"
            alt="Casino atmosphere"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Subtle overlay fade to left on desktop */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(12,15,13,0.5) 0%, transparent 40%)",
            }}
            aria-hidden
          />
          {/* Overlay fade to bottom on mobile */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background: "linear-gradient(to top, rgba(12,15,13,0.7) 0%, transparent 60%)",
            }}
            aria-hidden
          />

          {/* Floating stat */}
          <div
            className="absolute bottom-6 right-6 border px-5 py-4 text-right"
            style={{
              backgroundColor: "rgba(12,15,13,0.82)",
              borderColor: "rgba(201,168,76,0.25)",
            }}
          >
            <span className="block font-serif font-light text-4xl leading-none" style={{ color: "#C9A84C" }}>6</span>
            <span className="block font-sans text-[9px] uppercase tracking-[0.3em] mt-1" style={{ color: "rgba(237,228,204,0.45)" }}>
              Licensed Sites
              <br />
              Reviewed
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

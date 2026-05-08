"use client"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

function getDate() {
  const d = new Date()
  return {
    iso: d.toISOString().slice(0, 10),
    label: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
  }
}

const TRUST_BADGES = [
  { icon: "🛡", label: "UKGC Licensed" },
  { icon: "✔", label: "Expert Verified" },
  { icon: "🔒", label: "No Paid Rankings" },
  { icon: "18+", label: "Responsible Play" },
]

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getDate()

  return (
    <>
      <style>{`
        .h-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .h-section { height: clamp(300px, 36vw, 400px); }
        }

        .h-eyebrow {
          font-family: var(--font-inter), sans-serif;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5em;
          color: #C8A86B;
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .h-eyebrow::before, .h-eyebrow::after {
          content: "";
          display: block;
          height: 1px;
          width: 32px;
          background: #C8A86B;
          opacity: 0.5;
          flex-shrink: 0;
        }

        .h-title {
          font-family: var(--font-playfair), Georgia, serif;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.0;
          font-size: clamp(2rem, 6vw, 4rem);
        }
        .h-title em {
          font-style: italic;
          color: #C8A86B;
        }

        .h-sub {
          display: none;
        }
        @media (min-width: 640px) {
          .h-sub {
            display: block;
            font-family: var(--font-inter), sans-serif;
            font-size: 13px;
            color: rgba(255,255,255,0.55);
            line-height: 1.7;
            margin-top: 14px;
          }
        }

        .h-badges {
          display: none;
        }
        @media (min-width: 560px) {
          .h-badges {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            margin-top: 18px;
          }
        }

        .h-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border: 1px solid rgba(200,168,107,0.35);
          background: rgba(200,168,107,0.06);
          font-family: var(--font-inter), sans-serif;
          font-size: 9px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: rgba(255,255,255,0.82);
        }
        .h-badge-icon {
          font-size: 10px;
          color: #C8A86B;
          font-style: normal;
        }

        .h-bottom {
          position: absolute;
          bottom: 14px;
          left: 0;
          right: 0;
          display: none;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }
        @media (min-width: 480px) {
          .h-bottom { display: flex; }
        }
        .h-disc-btn {
          font-family: var(--font-inter), sans-serif;
          font-size: 9px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.26em;
          color: rgba(200,168,107,0.45);
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
          padding: 0;
        }
        .h-disc-btn:hover { color: rgba(200,168,107,0.75); }
        .h-date-txt {
          font-family: var(--font-inter), sans-serif;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.26em;
          color: rgba(255,255,255,0.22);
        }
      `}</style>

      <section className="h-section">

        {/* Background */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="/hero-casino.jpg"
            alt=""
            aria-hidden
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 35%",
              filter: "brightness(0.20) saturate(0.55)",
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(12,21,16,0.55) 0%, rgba(12,21,16,0.80) 60%, rgba(12,21,16,1) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(12,21,16,0) 0%, rgba(12,21,16,0.65) 100%)",
          }} />
        </div>

        {/* Gold top line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 2,
          background: "linear-gradient(to right, transparent 0%, #C8A86B 30%, #C8A86B 70%, transparent 100%)",
          opacity: 0.7,
        }} />

        {/* Centered content */}
        <div style={{
          position: "relative", zIndex: 10,
          width: "100%", maxWidth: 720,
          padding: "0 24px",
          textAlign: "center",
          display: "flex", flexDirection: "column", alignItems: "center",
        }}>

          <p className="h-eyebrow">
            UK&apos;s #1 Casino Comparison 2026
          </p>

          <h1 className="h-title">
            Best <em>Casino</em> Sites in the UK
          </h1>

          <p className="h-sub">
            Hand-picked, independently verified operators — ranked by licensing,
            bonuses, game quality, and payout reliability.
          </p>

          <div className="h-badges">
            {TRUST_BADGES.map((b) => (
              <span key={b.label} className="h-badge">
                <em className="h-badge-icon">{b.icon}</em>
                {b.label}
              </span>
            ))}
          </div>

        </div>

        {/* Bottom: disclosures + date */}
        <div className="h-bottom">
          <button type="button" onClick={onAdvertiserModalOpen} className="h-disc-btn">
            Advertiser Disclosure
          </button>
          <span style={{ color: "rgba(200,168,107,0.2)", fontSize: 12 }}>|</span>
          <button type="button" onClick={onTermsModalOpen} className="h-disc-btn">
            18+ Terms Apply
          </button>
          <span style={{ color: "rgba(200,168,107,0.2)", fontSize: 12 }}>|</span>
          <time dateTime={iso} className="h-date-txt">Updated {label}</time>
        </div>

        {/* Bottom border */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          height: 1,
          background: "linear-gradient(to right, transparent 0%, rgba(200,168,107,0.25) 50%, transparent 100%)",
        }} />
      </section>
    </>
  )
}

"use client"

import { X } from "lucide-react"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

const CRITERIA = [
  "Valid UK Gambling Commission licence",
  "Game library breadth and software quality",
  "Bonus transparency and clear wagering requirements",
  "Payout speed and reliability",
  "Platform stability and customer support quality",
  "Player protection tools and responsible gaming features",
]

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: 0,
        backgroundColor: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(6px)",
      }}
      className="sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="adv-disclosure-title"
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          maxHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          backgroundColor: "#131313",
          border: "1px solid rgba(201,168,76,0.22)",
        }}
        className="sm:max-h-[86vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top rule */}
        <div style={{ height: 2, backgroundColor: "#C9A84C", flexShrink: 0 }} />

        {/* Header */}
        <div style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 16,
          padding: "22px 28px",
          borderBottom: "1px solid rgba(201,168,76,0.10)",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 8,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.46em",
              color: "rgba(201,168,76,0.46)",
              marginBottom: 8,
            }}>Transparency Notice</p>
            <h2
              id="adv-disclosure-title"
              style={{
                fontFamily: "var(--font-playfair),Georgia,serif",
                fontWeight: 700,
                fontSize: "1.55rem",
                color: "#EDE4CC",
                lineHeight: 1.1,
              }}
            >
              Advertiser Disclosure
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              border: "1px solid rgba(201,168,76,0.20)",
              backgroundColor: "transparent",
              color: "rgba(237,228,204,0.40)",
              cursor: "pointer",
              marginTop: 4,
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.55)" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.20)" }}
          >
            <X style={{ width: 13, height: 13 }} />
          </button>
        </div>

        {/* Body */}
        <div style={{
          flex: 1,
          overflowY: "auto",
          padding: "24px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}>

          {/* Highlighted notice */}
          <div style={{
            padding: "14px 18px",
            borderLeft: "2px solid #C9A84C",
            backgroundColor: "rgba(201,168,76,0.05)",
          }}>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 13,
              lineHeight: 1.75,
              color: "rgba(237,228,204,0.62)",
            }}>
              <strong style={{ color: "#EDE4CC" }}>ukbestcasinosites.com</strong> may receive remuneration when
              you navigate to an operator via our links. That revenue supports our editorial research, hosting,
              and operational costs — it does not influence ranking order or scores.
            </p>
          </div>

          {/* Editorial independence */}
          <div>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 8,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.42em",
              color: "rgba(201,168,76,0.44)",
              marginBottom: 14,
            }}>Editorial Independence</p>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 13,
              lineHeight: 1.75,
              color: "rgba(237,228,204,0.58)",
              marginBottom: 14,
            }}>Rankings are determined exclusively by the following criteria:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {CRITERIA.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    flexShrink: 0,
                    width: 1,
                    height: 16,
                    backgroundColor: "#C9A84C",
                    opacity: 0.55,
                    marginTop: 2,
                  }} />
                  <span style={{
                    fontFamily: "var(--font-inter),sans-serif",
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: "rgba(237,228,204,0.58)",
                  }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibility */}
          <div>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 8,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.42em",
              color: "rgba(201,168,76,0.44)",
              marginBottom: 14,
            }}>Your Responsibility</p>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 13,
              lineHeight: 1.75,
              color: "rgba(237,228,204,0.58)",
            }}>
              Always verify the current offer directly on the operator&apos;s own website before depositing.
              Offers and terms change without notice. Play only within limits you are comfortable with.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div style={{
          flexShrink: 0,
          padding: "12px 28px",
          textAlign: "center",
          borderTop: "1px solid rgba(201,168,76,0.09)",
          backgroundColor: "rgba(10,10,10,0.5)",
        }}>
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 8,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.36em",
            color: "rgba(201,168,76,0.36)",
          }}>
            18+ &nbsp;·&nbsp; United Kingdom &nbsp;·&nbsp; Responsible Play
          </p>
        </div>

      </div>
    </div>
  )
}

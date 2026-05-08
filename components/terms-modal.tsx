"use client"

import { X } from "lucide-react"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

const PLAY_TIPS = [
  "Set clear time and financial limits before you deposit.",
  "Never chase losses — accepting that losing is a normal part of casino play.",
  "Seek help early. GambleAware, GamCare, and Gambling Therapy offer free confidential support.",
  "Use self-exclusion tools provided by licensed operators if you feel at risk.",
]

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
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
      aria-labelledby="terms-modal-title"
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
          border: "1px solid rgba(184,147,90,0.22)",
        }}
        className="sm:max-h-[86vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top rule */}
        <div style={{ height: 2, backgroundColor: "#B8935A", flexShrink: 0 }} />

        {/* Header */}
        <div style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 16,
          padding: "22px 28px",
          borderBottom: "1px solid rgba(184,147,90,0.10)",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 8,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.46em",
              color: "rgba(184,147,90,0.46)",
              marginBottom: 8,
            }}>Age Restriction &amp; Rules</p>
            <h2
              id="terms-modal-title"
              style={{
                fontFamily: "var(--font-playfair),Georgia,serif",
                fontWeight: 700,
                fontSize: "1.55rem",
                color: "#EEE5D0",
                lineHeight: 1.1,
              }}
            >
              18+ Terms Apply
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
              border: "1px solid rgba(184,147,90,0.20)",
              backgroundColor: "transparent",
              color: "rgba(238,229,208,0.40)",
              cursor: "pointer",
              marginTop: 4,
              transition: "border-color 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(184,147,90,0.55)" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(184,147,90,0.20)" }}
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

          {/* Age restriction callout */}
          <div style={{
            padding: "14px 18px",
            borderLeft: "2px solid #B8935A",
            backgroundColor: "rgba(184,147,90,0.05)",
          }}>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 8,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.40em",
              color: "rgba(184,147,90,0.50)",
              marginBottom: 8,
            }}>Age Restriction</p>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 13,
              lineHeight: 1.75,
              color: "rgba(238,229,208,0.62)",
            }}>
              You must be <strong style={{ color: "#EEE5D0" }}>18 years of age or older</strong> to use this site.
              This platform discusses real-money casino play. Persons under 18 must leave immediately.
            </p>
          </div>

          {/* Responsible play */}
          <div>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 8,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.42em",
              color: "rgba(184,147,90,0.44)",
              marginBottom: 14,
            }}>Responsible Play</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {PLAY_TIPS.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div style={{
                    flexShrink: 0,
                    width: 1,
                    height: 16,
                    backgroundColor: "#B8935A",
                    opacity: 0.55,
                    marginTop: 2,
                  }} />
                  <span style={{
                    fontFamily: "var(--font-inter),sans-serif",
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: "rgba(238,229,208,0.58)",
                  }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* General terms */}
          <div>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 8,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.42em",
              color: "rgba(184,147,90,0.44)",
              marginBottom: 14,
            }}>General Terms</p>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 13,
              lineHeight: 1.75,
              color: "rgba(238,229,208,0.58)",
              marginBottom: 12,
            }}>
              Operator offers change without notice. Always verify current bonus terms on the operator&apos;s
              own website before depositing. Third-party sites linked from this page operate under their own
              terms and conditions.
            </p>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 11,
              lineHeight: 1.7,
              color: "rgba(238,229,208,0.32)",
            }}>
              This site provides no legal or financial advice. Refer to our full Terms page for comprehensive
              rules governing use of ukbestcasinosites.com.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div style={{
          flexShrink: 0,
          padding: "12px 28px",
          textAlign: "center",
          borderTop: "1px solid rgba(184,147,90,0.09)",
          backgroundColor: "rgba(7,7,15,0.5)",
        }}>
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 8,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.36em",
            color: "rgba(184,147,90,0.36)",
          }}>
            18+ &nbsp;·&nbsp; Wagering &amp; T&amp;Cs apply &nbsp;·&nbsp; Play responsibly
          </p>
        </div>

      </div>
    </div>
  )
}

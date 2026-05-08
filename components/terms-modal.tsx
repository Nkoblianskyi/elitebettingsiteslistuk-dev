"use client"

import { X } from "lucide-react"

const GOLD = "#C9A84C"
const BG = "#0D0D0D"
const CARD = "#141414"
const PARCHMENT = "#EDE4CC"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.82)", backdropFilter: "blur(4px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg max-h-[92vh] sm:max-h-[86vh] flex flex-col overflow-hidden"
        style={{ backgroundColor: CARD, border: "1px solid rgba(201,168,76,0.22)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top rule */}
        <div className="h-[2px] shrink-0" style={{ background: GOLD }} />

        {/* Header */}
        <div
          className="shrink-0 flex items-center justify-between gap-3 px-6 py-5 sm:px-8"
          style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }}
        >
          <div>
            <p className="font-sans text-[8px] font-semibold uppercase tracking-[0.45em] mb-1" style={{ color: "rgba(201,168,76,0.5)" }}>
              Age Restriction &amp; Rules
            </p>
            <h2 id="terms-modal-title" className="font-serif font-semibold text-2xl" style={{ color: PARCHMENT }}>
              18+ Terms Apply
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center transition-opacity hover:opacity-60"
            style={{ border: "1px solid rgba(201,168,76,0.22)", color: "rgba(237,228,204,0.45)" }}
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Body */}
        <div
          className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-6 font-sans text-sm leading-relaxed"
          style={{ color: "rgba(237,228,204,0.62)" }}
        >
          {/* Age warning */}
          <div
            className="px-5 py-4"
            style={{ borderLeft: `2px solid ${GOLD}`, backgroundColor: "rgba(201,168,76,0.05)" }}
          >
            <p className="font-sans text-[9px] font-bold uppercase tracking-[0.4em] mb-2" style={{ color: "rgba(201,168,76,0.55)" }}>
              Age Restriction
            </p>
            <p>
              You must be <strong style={{ color: PARCHMENT }}>18 years of age or older</strong> to use this site.
              This platform discusses real-money casino play. Persons under 18 must leave immediately.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-[9px] font-bold uppercase tracking-[0.4em] mb-3" style={{ color: "rgba(201,168,76,0.5)" }}>
              Responsible Play
            </h3>
            <div className="space-y-2.5">
              {[
                "Set clear time and financial limits before you deposit.",
                "Never chase losses — accept that losing is a normal part of casino play.",
                "Seek help early. GambleAware, GamCare, and Gambling Therapy offer free confidential support.",
                "Use self-exclusion tools provided by licensed operators if you feel at risk.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="shrink-0 w-px h-4 mt-0.5" style={{ background: GOLD, opacity: 0.6 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-sans text-[9px] font-bold uppercase tracking-[0.4em] mb-3" style={{ color: "rgba(201,168,76,0.5)" }}>
              General Terms
            </h3>
            <p className="mb-3">
              Operator offers change without notice. Always verify current bonus terms on the operator&apos;s own
              website before depositing. Third-party sites linked from this page operate under their own terms and
              conditions.
            </p>
            <p className="text-xs" style={{ color: "rgba(237,228,204,0.35)" }}>
              This site provides no legal or financial advice. Refer to our full Terms page for comprehensive rules
              governing use of ukbestcasinosites.com.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className="shrink-0 px-6 py-3 sm:px-8 text-center"
          style={{ borderTop: "1px solid rgba(201,168,76,0.12)", backgroundColor: BG }}
        >
          <p className="font-sans text-[9px] font-bold uppercase tracking-[0.35em]" style={{ color: "rgba(201,168,76,0.4)" }}>
            18+ &nbsp;·&nbsp; Wagering and T&amp;Cs apply &nbsp;·&nbsp; Play responsibly
          </p>
        </div>
      </div>
    </div>
  )
}

"use client"

import { X, ShieldAlert } from "lucide-react"

const GOLD = "#B8965A"
const FOREST = "#0F2318"
const FOREST_CARD = "#152B1E"
const PARCHMENT = "#F2ECD9"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(15,35,24,0.9)", backdropFilter: "blur(6px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg max-h-[92vh] sm:max-h-[88vh] flex flex-col overflow-hidden border"
        style={{ backgroundColor: FOREST_CARD, borderColor: "rgba(184,150,90,0.32)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top rule */}
        <div className="h-[3px] shrink-0" style={{ background: GOLD }} />

        {/* Header */}
        <div
          className="shrink-0 flex items-start justify-between gap-3 px-5 py-5 sm:px-7 border-b"
          style={{ borderColor: "rgba(184,150,90,0.15)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center border"
              style={{ borderColor: "rgba(184,150,90,0.38)", backgroundColor: "rgba(184,150,90,0.07)" }}
            >
              <ShieldAlert className="w-5 h-5" style={{ color: GOLD }} strokeWidth={1.5} />
            </div>
            <div>
              <h2 id="terms-modal-title" className="font-serif font-semibold text-xl" style={{ color: PARCHMENT }}>
                Site Rules &amp; 18+
              </h2>
              <p className="font-sans text-[9px] uppercase tracking-[0.28em] mt-0.5" style={{ color: "rgba(184,150,90,0.55)" }}>
                Terms of Use
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center border transition-opacity hover:opacity-70"
            style={{ borderColor: "rgba(184,150,90,0.3)", color: "rgba(242,236,217,0.55)" }}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div
          className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 space-y-4 font-sans text-sm leading-relaxed"
          style={{ color: "rgba(242,236,217,0.68)" }}
        >
          <p>
            Using <strong style={{ color: PARCHMENT }}>trustedcasinossitesuk.com</strong> means you accept these rules.
            They apply across all devices and sessions.
          </p>

          <div
            className="border px-4 py-3"
            style={{ borderColor: "rgba(184,150,90,0.22)", backgroundColor: "rgba(184,150,90,0.05)" }}
          >
            <p className="font-semibold mb-1" style={{ color: GOLD }}>Age Restriction</p>
            <p>
              You must be 18 years of age or older. This site discusses gambling; persons under 18 must leave immediately.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-2" style={{ color: PARCHMENT }}>Responsible Play</p>
            <ul className="space-y-1.5">
              {[
                "Set clear time and financial limits before depositing.",
                "Never chase losses — accept that losing is part of casino play.",
                "Seek help early: organisations such as GambleAware, GamCare, and Gambling Therapy are available free.",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="shrink-0 mt-0.5 w-1 h-1 rounded-full mt-2" style={{ backgroundColor: GOLD }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p>
            Operator offers change without notice. Always verify current terms on the operator&apos;s own website before depositing.
            Third-party sites linked from this page operate under their own terms.
          </p>
          <p className="text-xs" style={{ color: "rgba(242,236,217,0.38)" }}>
            This site provides no legal or financial advice. Refer to our full Terms page for comprehensive rules.
          </p>
        </div>

        {/* Footer */}
        <div
          className="shrink-0 border-t px-5 py-3 sm:px-7 text-center"
          style={{ borderColor: "rgba(184,150,90,0.18)", backgroundColor: FOREST }}
        >
          <p className="font-sans text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(184,150,90,0.65)" }}>
            18+ · Wagering and T&amp;Cs apply · Play responsibly
          </p>
        </div>
      </div>
    </div>
  )
}

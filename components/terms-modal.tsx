"use client"

import { X, ShieldAlert } from "lucide-react"

const GOLD = "#C9A84C"
const BLACK = "#0D0D0D"
const BLACK_CARD = "#141414"
const CRIMSON = "#8B1A1A"
const IVORY = "#F5F0E8"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(13,13,13,0.92)", backdropFilter: "blur(6px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg max-h-[92vh] sm:max-h-[88vh] flex flex-col overflow-hidden border"
        style={{ backgroundColor: BLACK_CARD, borderColor: "rgba(139,26,26,0.4)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Crimson top bar */}
        <div className="h-[3px] shrink-0" style={{ background: CRIMSON }} />
        <div className="h-px shrink-0" style={{ background: "rgba(201,168,76,0.25)" }} />

        {/* Header */}
        <div
          className="shrink-0 flex items-start justify-between gap-3 px-5 py-5 sm:px-7 border-b"
          style={{ borderColor: "rgba(139,26,26,0.2)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center border"
              style={{ borderColor: "rgba(201,168,76,0.35)", backgroundColor: "rgba(139,26,26,0.1)" }}
            >
              <ShieldAlert className="w-5 h-5" style={{ color: GOLD }} strokeWidth={2} />
            </div>
            <div>
              <h2 id="terms-modal-title" className="font-serif font-bold text-xl" style={{ color: IVORY }}>
                Site Rules &amp; 18+
              </h2>
              <p
                className="text-[9px] font-sans uppercase tracking-[0.25em] mt-0.5"
                style={{ color: "rgba(201,168,76,0.55)" }}
              >
                Terms of Use
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center border transition-opacity hover:opacity-70"
            style={{ borderColor: "rgba(139,26,26,0.4)", color: "rgba(245,240,232,0.6)" }}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div
          className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 space-y-4 font-sans text-sm leading-relaxed"
          style={{ color: "rgba(245,240,232,0.7)" }}
        >
          <p>
            Using <strong style={{ color: IVORY }}>elitecasinossitesuk.com</strong> means you accept these rules.
            They apply across all devices and sessions.
          </p>

          <div
            className="border px-4 py-3"
            style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: "rgba(139,26,26,0.07)" }}
          >
            <p className="font-semibold mb-1" style={{ color: GOLD }}>
              Age Restriction
            </p>
            <p>
              You must be 18 years of age or older to use this site. This site discusses casino gambling; persons
              under 18 must leave immediately.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-2" style={{ color: IVORY }}>
              Responsible Gambling
            </p>
            <ul className="space-y-1.5 list-none">
              {[
                "Set clear session time limits and a fixed budget before playing.",
                "Never chase losses — treat every session as a leisure expense.",
                "Wagering requirements apply to all casino bonuses without exception.",
                "GambleAware, GamCare, and GAMSTOP are available 24/7 for free support.",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span style={{ color: CRIMSON }}>&#9670;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p>
            We cannot guarantee that offers remain accurate at all times; casino operators revise terms without prior
            notice. Third-party sites linked from this page operate under their own terms and conditions — we bear
            no responsibility for their content or conduct.
          </p>
          <p className="text-xs" style={{ color: "rgba(245,240,232,0.38)" }}>
            This site provides no legal or financial advice. Refer to our full Terms page for comprehensive rules.
          </p>
        </div>

        {/* Footer */}
        <div
          className="shrink-0 border-t px-5 py-3 sm:px-7 text-center"
          style={{ borderColor: "rgba(139,26,26,0.2)", backgroundColor: BLACK }}
        >
          <p
            className="font-sans text-xs font-semibold uppercase tracking-wider"
            style={{ color: "rgba(201,168,76,0.65)" }}
          >
            18+ &nbsp;&middot;&nbsp; Wagering T&amp;Cs apply &nbsp;&middot;&nbsp; Play responsibly
          </p>
        </div>
      </div>
    </div>
  )
}

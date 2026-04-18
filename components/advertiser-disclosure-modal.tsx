"use client"

import { X, Megaphone } from "lucide-react"

const GOLD = "#C9A84C"
const BLACK = "#0D0D0D"
const BLACK_CARD = "#141414"
const CRIMSON = "#8B1A1A"
const IVORY = "#F5F0E8"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(13,13,13,0.92)", backdropFilter: "blur(6px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="adv-disclosure-title"
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
              <Megaphone className="w-5 h-5" style={{ color: GOLD }} strokeWidth={2} />
            </div>
            <div>
              <h2 id="adv-disclosure-title" className="font-serif font-bold text-xl" style={{ color: IVORY }}>
                Advertiser Disclosure
              </h2>
              <p
                className="text-[9px] font-sans uppercase tracking-[0.25em] mt-0.5"
                style={{ color: "rgba(201,168,76,0.55)" }}
              >
                How We Are Funded
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
          className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 space-y-5 font-sans text-sm leading-relaxed"
          style={{ color: "rgba(245,240,232,0.7)" }}
        >
          <div
            className="border px-4 py-4"
            style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: "rgba(139,26,26,0.06)" }}
          >
            <h3 className="font-semibold mb-2" style={{ color: IVORY }}>
              Commercial Links
            </h3>
            <p>
              elitecasinossitesuk.com may receive remuneration when you navigate to a casino operator via our links.
              That revenue supports our hosting, editorial research, and operational costs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2" style={{ color: IVORY }}>
              Editorial Independence
            </h3>
            <p className="mb-3">Affiliate fees do not influence the order of merit. Rankings are determined by:</p>
            <ul className="space-y-1.5 list-none">
              {[
                "Valid UK Gambling Commission licence",
                "Game library quality and software provider depth",
                "Bonus transparency and wagering fairness",
                "Platform stability and payout speed",
                "Responsible gambling tool accessibility",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span style={{ color: CRIMSON }}>&#9670;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="border px-4 py-4"
            style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: "rgba(139,26,26,0.06)" }}
          >
            <h3 className="font-semibold mb-2" style={{ color: IVORY }}>
              Your Responsibility
            </h3>
            <p>
              Always verify the current offer directly on the casino operator&apos;s own website before depositing.
              Stake only what you can comfortably afford to lose. Wagering requirements apply to all bonuses.
            </p>
          </div>
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
            18+ &nbsp;&middot;&nbsp; United Kingdom Audience &nbsp;&middot;&nbsp; Gamble Responsibly
          </p>
        </div>
      </div>
    </div>
  )
}

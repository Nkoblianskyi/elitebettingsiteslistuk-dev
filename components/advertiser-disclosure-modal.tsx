"use client"

import { X, Megaphone } from "lucide-react"

const GOLD = "#C9A84C"
const NAVY = "#0D1B2A"
const NAVY_CARD = "#131E2B"
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
      style={{ backgroundColor: "rgba(13,27,42,0.88)", backdropFilter: "blur(6px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="adv-disclosure-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg max-h-[92vh] sm:max-h-[88vh] flex flex-col overflow-hidden border"
        style={{ backgroundColor: NAVY_CARD, borderColor: "rgba(201,168,76,0.35)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top rule */}
        <div className="h-[2px] shrink-0" style={{ background: GOLD }} />

        {/* Header */}
        <div className="shrink-0 flex items-start justify-between gap-3 px-5 py-5 sm:px-7 border-b" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border" style={{ borderColor: "rgba(201,168,76,0.4)", backgroundColor: "rgba(201,168,76,0.08)" }}>
              <Megaphone className="w-5 h-5" style={{ color: GOLD }} strokeWidth={2} />
            </div>
            <div>
              <h2 id="adv-disclosure-title" className="font-serif font-bold text-xl" style={{ color: IVORY }}>
                Advertiser Disclosure
              </h2>
              <p className="text-[9px] font-sans uppercase tracking-[0.25em] mt-0.5" style={{ color: "rgba(201,168,76,0.6)" }}>
                How We Are Funded
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center border transition-opacity hover:opacity-70"
            style={{ borderColor: "rgba(201,168,76,0.3)", color: "rgba(245,240,232,0.6)" }}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 space-y-5 font-sans text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.72)" }}>
          <div className="border px-4 py-4" style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: "rgba(201,168,76,0.04)" }}>
            <h3 className="font-semibold mb-2" style={{ color: IVORY }}>Commercial Links</h3>
            <p>
              elitebettingsiteslistuk.com may receive remuneration when you navigate to a bookmaker via our links. That
              revenue supports our hosting, editorial research, and operational costs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2" style={{ color: IVORY }}>Editorial Independence</h3>
            <p className="mb-3">Affiliate fees do not influence the order of merit. Rankings are determined by:</p>
            <ul className="space-y-1.5 list-none">
              {[
                "Appropriately licensed for UK customers",
                "Odds competitiveness and market depth",
                "Promotional transparency and payout speed",
                "Platform stability and support quality",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span style={{ color: GOLD }}>·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border px-4 py-4" style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: "rgba(201,168,76,0.04)" }}>
            <h3 className="font-semibold mb-2" style={{ color: IVORY }}>Your Responsibility</h3>
            <p>
              Always verify the current offer directly on the operator&apos;s own website before depositing. Stake only
              what you can comfortably afford to lose.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className="shrink-0 border-t px-5 py-3 sm:px-7 text-center"
          style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: NAVY }}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-wider" style={{ color: "rgba(201,168,76,0.7)" }}>
            18+ · United Kingdom Audience · Responsible Gambling
          </p>
        </div>
      </div>
    </div>
  )
}

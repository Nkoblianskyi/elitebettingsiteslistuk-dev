"use client"

import { X } from "lucide-react"

const GOLD = "#C9A84C"
const BG = "#0D0D0D"
const CARD = "#141414"
const PARCHMENT = "#EDE4CC"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.82)", backdropFilter: "blur(4px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="adv-disclosure-title"
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
            <p className="font-sans text-[8px] font-bold uppercase tracking-[0.45em] mb-1" style={{ color: "rgba(201,168,76,0.5)" }}>
              Transparency Notice
            </p>
            <h2 id="adv-disclosure-title" className="font-serif font-light text-2xl" style={{ color: PARCHMENT }}>
              Advertiser Disclosure
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
          {/* Highlighted notice */}
          <div
            className="px-5 py-4"
            style={{ borderLeft: `2px solid ${GOLD}`, backgroundColor: "rgba(201,168,76,0.05)" }}
          >
            <p>
              <strong style={{ color: PARCHMENT }}>trustedcasinossitesuk.com</strong> may receive remuneration when
              you navigate to an operator via our links. That revenue supports our editorial research, hosting, and
              operational costs — it does not influence ranking order.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-[9px] font-bold uppercase tracking-[0.4em] mb-3" style={{ color: "rgba(201,168,76,0.5)" }}>
              Editorial Independence
            </h3>
            <p className="mb-4">Rankings are determined exclusively by the following criteria:</p>
            <div className="space-y-2.5">
              {[
                "Valid licence issued by the UK Gambling Commission",
                "Game library breadth and software quality",
                "Bonus transparency and payout speed",
                "Platform stability and customer support quality",
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
              Your Responsibility
            </h3>
            <p>
              Always verify the current offer directly on the operator&apos;s own website before depositing. Offers
              and terms change without notice. Play only within limits you are comfortable with.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className="shrink-0 px-6 py-3 sm:px-8 text-center"
          style={{ borderTop: "1px solid rgba(201,168,76,0.12)", backgroundColor: BG }}
        >
          <p className="font-sans text-[9px] font-bold uppercase tracking-[0.35em]" style={{ color: "rgba(201,168,76,0.4)" }}>
            18+ &nbsp;·&nbsp; United Kingdom &nbsp;·&nbsp; Responsible Play
          </p>
        </div>
      </div>
    </div>
  )
}

"use client"

import { X, Info } from "lucide-react"

const GOLD = "#B8965A"
const FOREST = "#0F2318"
const FOREST_CARD = "#152B1E"
const PARCHMENT = "#F2ECD9"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(15,35,24,0.9)", backdropFilter: "blur(6px)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="adv-disclosure-title"
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
              <Info className="w-5 h-5" style={{ color: GOLD }} strokeWidth={1.5} />
            </div>
            <div>
              <h2 id="adv-disclosure-title" className="font-serif font-semibold text-xl" style={{ color: PARCHMENT }}>
                Advertiser Disclosure
              </h2>
              <p className="font-sans text-[9px] uppercase tracking-[0.28em] mt-0.5" style={{ color: "rgba(184,150,90,0.55)" }}>
                How We Are Funded
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
          className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 space-y-5 font-sans text-sm leading-relaxed"
          style={{ color: "rgba(242,236,217,0.68)" }}
        >
          <div
            className="border px-4 py-4"
            style={{ borderColor: "rgba(184,150,90,0.2)", backgroundColor: "rgba(184,150,90,0.04)" }}
          >
            <h3 className="font-semibold mb-2" style={{ color: PARCHMENT }}>Commercial Links</h3>
            <p>
              trustedcasinossitesuk.com may receive remuneration when you navigate to an operator via our links. That
              revenue supports our hosting, editorial research, and operational costs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2" style={{ color: PARCHMENT }}>Editorial Independence</h3>
            <p className="mb-3">Affiliate fees do not influence the order of merit. Rankings are determined by:</p>
            <ul className="space-y-2">
              {[
                "Holding an appropriate licence for UK customers",
                "Game library breadth and software quality",
                "Promotional transparency and payout speed",
                "Platform stability and customer support quality",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="shrink-0 w-1 h-1 rounded-full mt-2" style={{ backgroundColor: GOLD }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="border px-4 py-4"
            style={{ borderColor: "rgba(184,150,90,0.2)", backgroundColor: "rgba(184,150,90,0.04)" }}
          >
            <h3 className="font-semibold mb-2" style={{ color: PARCHMENT }}>Your Responsibility</h3>
            <p>
              Always verify the current offer directly on the operator&apos;s own website before depositing. Play only
              within limits you are comfortable with.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          className="shrink-0 border-t px-5 py-3 sm:px-7 text-center"
          style={{ borderColor: "rgba(184,150,90,0.18)", backgroundColor: FOREST }}
        >
          <p className="font-sans text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(184,150,90,0.65)" }}>
            18+ · United Kingdom Audience · Responsible Play
          </p>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const GOLD = "#B8965A"
const FOREST = "#0F2318"
const FOREST_CARD = "#152B1E"
const PARCHMENT = "#F2ECD9"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) setIsVisible(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{ backgroundColor: FOREST_CARD, borderTop: `1px solid rgba(184,150,90,0.25)` }}
    >
      {/* Gold top accent */}
      <div className="h-[3px]" style={{ background: GOLD }} />

      <div className="mx-auto max-w-5xl px-5 py-4 xl:max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          {/* Text block */}
          <div className="flex-1 min-w-0">
            <p className="font-sans text-[8px] font-bold uppercase tracking-[0.3em] mb-1.5" style={{ color: "rgba(184,150,90,0.6)" }}>
              Cookie Notice
            </p>
            <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(242,236,217,0.62)" }}>
              trustedcasinossitesuk.com uses essential cookies to operate this site and, with your permission, analytics
              cookies to improve the experience. Declining restricts non-essential scripts only.{" "}
              <Link
                href="/cookie-policy"
                className="underline underline-offset-2 font-medium transition-opacity hover:opacity-80"
                style={{ color: GOLD }}
              >
                Cookie Policy
              </Link>
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={handleDecline}
              className="border px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider transition-opacity hover:opacity-70"
              style={{
                borderColor: "rgba(184,150,90,0.32)",
                color: "rgba(242,236,217,0.58)",
                backgroundColor: "transparent",
              }}
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-85"
              style={{ backgroundColor: GOLD, color: FOREST }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

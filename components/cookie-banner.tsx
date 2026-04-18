"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const GOLD = "#C9A84C"
const BLACK = "#0D0D0D"
const BLACK_CARD = "#141414"
const CRIMSON = "#8B1A1A"
const IVORY = "#F5F0E8"

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
      style={{ backgroundColor: BLACK_CARD, borderTop: `3px solid ${CRIMSON}` }}
    >
      {/* Gold hairline */}
      <div className="h-px" style={{ background: "rgba(201,168,76,0.3)" }} />

      <div className="mx-auto max-w-5xl px-4 py-4 xl:max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

          {/* Icon + text */}
          <div className="flex items-start gap-3 flex-1">
            {/* Diamond ornament */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 shrink-0" aria-hidden="true">
              <path d="M7 1L13 7L7 13L1 7L7 1Z" fill={CRIMSON} opacity="0.9"/>
            </svg>
            <div>
              <p
                className="text-[9px] font-sans font-bold uppercase tracking-[0.28em] mb-1"
                style={{ color: "rgba(201,168,76,0.7)" }}
              >
                Cookie Notice
              </p>
              <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.65)" }}>
                elitecasinossitesuk.com uses essential cookies to operate this site and, with your permission,
                analytics cookies to improve your experience. Declining restricts non-essential scripts only.{" "}
                <Link
                  href="/cookie-policy"
                  className="font-semibold underline transition-opacity hover:opacity-75"
                  style={{ color: GOLD }}
                >
                  Cookie Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={handleDecline}
              className="border px-5 py-2.5 text-[10px] font-sans font-semibold uppercase tracking-wider transition-opacity hover:opacity-75"
              style={{
                borderColor: "rgba(139,26,26,0.5)",
                color: "rgba(245,240,232,0.6)",
                backgroundColor: "transparent",
              }}
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-5 py-2.5 text-[10px] font-sans font-bold uppercase tracking-wider transition-opacity hover:opacity-85"
              style={{ backgroundColor: CRIMSON, color: IVORY, borderTop: `1px solid rgba(201,168,76,0.3)` }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* Bottom crimson accent */}
      <div className="h-0.5 w-full" style={{ background: "rgba(139,26,26,0.4)" }} />
    </div>
  )
}

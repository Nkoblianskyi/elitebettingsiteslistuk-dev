"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const GOLD = "#C9A84C"
const NAVY = "#0D1B2A"
const NAVY_CARD = "#131E2B"
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
      className="fixed bottom-0 left-0 right-0 z-50 border-t"
      style={{ backgroundColor: NAVY_CARD, borderColor: "rgba(201,168,76,0.3)" }}
    >
      {/* Gold top line */}
      <div className="h-[2px]" style={{ background: GOLD }} />

      <div className="mx-auto max-w-5xl px-4 py-4 xl:max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text */}
          <div className="flex-1">
            <p className="text-[9px] font-sans font-bold uppercase tracking-[0.25em] mb-1" style={{ color: "rgba(201,168,76,0.6)" }}>
              Cookie Notice
            </p>
            <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(245,240,232,0.7)" }}>
              elitebettingsiteslistuk.com uses essential cookies to operate this site and, with your permission, analytics
              cookies to improve the experience. Declining restricts non-essential scripts only.{" "}
              <Link
                href="/cookie-policy"
                className="underline font-medium"
                style={{ color: GOLD }}
              >
                Read our Cookie Policy
              </Link>
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={handleDecline}
              className="border px-5 py-2 text-xs font-sans font-semibold uppercase tracking-wider transition-opacity hover:opacity-75"
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "rgba(245,240,232,0.65)", backgroundColor: "transparent" }}
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-5 py-2 text-xs font-sans font-bold uppercase tracking-wider transition-opacity hover:opacity-85"
              style={{ backgroundColor: GOLD, color: NAVY }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

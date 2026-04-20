"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

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
      style={{
        backgroundColor: "#0A0D0B",
        borderTop: "1px solid rgba(201,168,76,0.2)",
      }}
    >
      {/* Gold rule */}
      <div className="top-rule w-full" />

      <div className="mx-auto max-w-5xl xl:max-w-6xl px-6 md:px-10 lg:px-0 py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p
              className="font-sans text-[8px] font-bold uppercase tracking-[0.4em] mb-1.5"
              style={{ color: "rgba(201,168,76,0.5)" }}
            >
              Cookie Notice
            </p>
            <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(237,228,204,0.52)" }}>
              This site uses essential cookies to function and, with your consent, analytics cookies to improve the
              experience. Declining restricts non-essential scripts only.{" "}
              <Link
                href="/cookie-policy"
                className="underline underline-offset-2 transition-opacity hover:opacity-80"
                style={{ color: "#C9A84C" }}
              >
                Cookie Policy
              </Link>
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 shrink-0">
            <button
              type="button"
              onClick={handleDecline}
              className="border px-5 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.25em] transition-opacity hover:opacity-70"
              style={{
                borderColor: "rgba(201,168,76,0.2)",
                color: "rgba(237,228,204,0.5)",
                backgroundColor: "transparent",
              }}
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-6 py-2.5 font-sans text-[10px] font-bold uppercase tracking-[0.25em] transition-opacity hover:opacity-85"
              style={{ backgroundColor: "#C9A84C", color: "#0C0F0D" }}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

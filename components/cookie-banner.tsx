"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) setVisible(true)
  }, [])

  const accept = () => { localStorage.setItem("cookieConsent", "accepted"); setVisible(false) }
  const decline = () => { localStorage.setItem("cookieConsent", "declined"); setVisible(false) }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "#0C0C0C",
        borderTop: "1px solid rgba(212,168,83,0.18)",
      }}
    >
      {/* Gold top accent */}
      <div style={{ height: 1, backgroundColor: "#D4A853", opacity: 0.6 }} />

      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-16" style={{ paddingTop: 18, paddingBottom: 18 }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 8,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.44em",
              color: "rgba(212,168,83,0.48)",
              marginBottom: 6,
            }}>
              Cookie Notice
            </p>
            <p style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 12,
              lineHeight: 1.7,
              color: "rgba(245,240,232,0.46)",
            }}>
              We use essential cookies to operate this site and, with your consent, analytics cookies to measure
              performance. Declining restricts non-essential scripts only.{" "}
              <Link
                href="/cookie-policy"
                style={{ color: "#D4A853", textDecoration: "underline", textUnderlineOffset: 3 }}
              >
                Cookie Policy
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <button
              type="button"
              onClick={decline}
              style={{
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: 9,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.26em",
                color: "rgba(245,240,232,0.40)",
                border: "1px solid rgba(212,168,83,0.18)",
                backgroundColor: "transparent",
                padding: "10px 18px",
                cursor: "pointer",
                transition: "border-color 0.15s, color 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement
                b.style.borderColor = "rgba(212,168,83,0.4)"
                b.style.color = "rgba(245,240,232,0.65)"
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement
                b.style.borderColor = "rgba(212,168,83,0.18)"
                b.style.color = "rgba(245,240,232,0.40)"
              }}
            >
              Essential Only
            </button>
            <button
              type="button"
              onClick={accept}
              style={{
                fontFamily: "var(--font-inter),sans-serif",
                fontSize: 9,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.26em",
                color: "#0A0A0A",
                backgroundColor: "#D4A853",
                border: "1px solid #D4A853",
                padding: "10px 22px",
                cursor: "pointer",
                transition: "background-color 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#E8BF6E" }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#D4A853" }}
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={decline}
              aria-label="Dismiss"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 32,
                height: 32,
                border: "1px solid rgba(212,168,83,0.16)",
                backgroundColor: "transparent",
                color: "rgba(212,168,83,0.45)",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <X style={{ width: 13, height: 13 }} />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

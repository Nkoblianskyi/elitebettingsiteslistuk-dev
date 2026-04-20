"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

function StarRating({ score }: { score: number }) {
  // score is out of 10, map to 5 stars
  const filled = Math.round((score / 10) * 5)
  return (
    <div className="flex items-center justify-center gap-1" aria-label={`Rating ${score} out of 10`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18" height="18" viewBox="0 0 18 18" fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="9,1 11.5,6.5 17.5,7.3 13,11.6 14.3,17.5 9,14.5 3.7,17.5 5,11.6 0.5,7.3 6.5,6.5"
            fill={i < filled ? "#C9A84C" : "none"}
            stroke="#C9A84C"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}

export function Modal({ bettingSites, casinoSites: _casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const site = bettingSites[0]
  if (!site) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ backgroundColor: "rgba(13,13,13,0.93)", backdropFilter: "blur(12px)" }}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center border transition-colors hover:border-[#C9A84C]"
        style={{ borderColor: "rgba(201,168,76,0.22)", backgroundColor: "#111111", color: "#C9A84C" }}
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Modal card */}
      <div
        className="relative w-full max-w-sm sm:max-w-md"
        style={{ backgroundColor: "#111111", border: "1px solid rgba(201,168,76,0.35)" }}
      >
        {/* Top accent line */}
        <div className="h-0.5 w-full" style={{ background: "#C9A84C" }} />

        {/* Header */}
        <div
          className="px-8 py-5 text-center"
          style={{ borderBottom: "1px solid rgba(201,168,76,0.12)" }}
        >
          <p className="font-sans text-[8px] font-bold uppercase tracking-[0.5em] mb-2" style={{ color: "rgba(201,168,76,0.45)" }}>
            trustedcasinossitesuk.com
          </p>
          <h2
            className="font-serif font-light leading-tight"
            style={{ color: "#EDE4CC", fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Today&apos;s Top&nbsp;<em style={{ color: "#C9A84C" }}>Offer</em>
          </h2>
        </div>

        {/* Logo */}
        <div className="flex justify-center px-8 pt-6 pb-4" style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
          <div
            className="flex items-center justify-center rounded-sm overflow-hidden"
            style={{ background: "#fff", height: "64px", width: "160px" }}
          >
            <img
              src={site.logo}
              alt={site.name}
              className="max-h-12 max-w-[148px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Stars + score */}
        <div className="flex flex-col items-center gap-1.5 px-8 pt-5 pb-3">
          <StarRating score={site.score} />
          <span
            className="font-serif font-light leading-none"
            style={{ color: "#C9A84C", fontSize: "1.6rem" }}
          >
            {site.score.toFixed(1)}
          </span>
          <span className="font-sans text-[8px] uppercase tracking-[0.35em]" style={{ color: "rgba(201,168,76,0.45)" }}>
            out of 10
          </span>
        </div>

        {/* Offer block */}
        <div className="px-8 pt-2 pb-6 text-center" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
          <p className="font-sans text-[9px] font-bold uppercase tracking-[0.4em] mb-3 mt-4" style={{ color: "rgba(201,168,76,0.45)" }}>
            Welcome Offer
          </p>
          <p
            className="font-serif font-semibold leading-tight mb-2"
            style={{ color: "#EDE4CC", fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}
          >
            {site.bonus}
          </p>
          <p className="font-sans text-sm" style={{ color: "rgba(237,228,204,0.45)" }}>
            {site.welcomeOffer ?? site.bonus}
          </p>
        </div>

        {/* CTA */}
        <div className="px-8 pb-6">
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center font-sans font-bold text-sm uppercase tracking-[0.3em] py-4 transition-all hover:opacity-90"
            style={{ backgroundColor: "#C9A84C", color: "#0D0D0D" }}
          >
            Claim Offer Now
          </Link>
        </div>

        {/* Terms */}
        <div
          className="px-8 py-3 text-center"
          style={{ borderTop: "1px solid rgba(201,168,76,0.08)", backgroundColor: "rgba(13,13,13,0.4)" }}
        >
          <p className="font-sans text-[8px] leading-relaxed" style={{ color: "rgba(237,228,204,0.22)" }}>
            {site.terms}
          </p>
          <p className="font-sans text-[8px] mt-1" style={{ color: "rgba(237,228,204,0.3)" }}>
            18+ &nbsp;|&nbsp; T&amp;Cs apply &nbsp;|&nbsp;{" "}
            <a href="https://www.gambleaware.org" target="_blank" rel="noreferrer" className="underline underline-offset-2" style={{ color: "rgba(201,168,76,0.5)" }}>
              BeGambleAware.org
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

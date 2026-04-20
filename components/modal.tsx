"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

function ScoreArc({ score }: { score: number }) {
  const radius = 30
  const circumference = 2 * Math.PI * radius
  const dash = (score / 10) * circumference
  return (
    <svg width="76" height="76" viewBox="0 0 76 76" fill="none" aria-label={`Score ${score} out of 10`}>
      <circle cx="38" cy="38" r={radius} stroke="rgba(201,168,76,0.12)" strokeWidth="1.5" fill="none" />
      <circle
        cx="38" cy="38" r={radius}
        stroke="#C9A84C" strokeWidth="1.5" fill="none"
        strokeDasharray={`${dash} ${circumference}`}
        strokeLinecap="butt"
        transform="rotate(-90 38 38)"
      />
      <text x="38" y="43" textAnchor="middle" fill="#C9A84C" fontSize="15" fontFamily="Georgia, serif" fontWeight="300">
        {score.toFixed(1)}
      </text>
    </svg>
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

        {/* Logo + rank strip */}
        <div
          className="flex items-center justify-between px-8 py-4"
          style={{ borderBottom: "1px solid rgba(201,168,76,0.1)" }}
        >
          {/* Logo */}
          <div
            className="flex items-center justify-center rounded-sm overflow-hidden"
            style={{ background: "#fff", height: "44px", width: "110px" }}
          >
            <img
              src={site.logo}
              alt={site.name}
              className="max-h-8 max-w-[100px] w-auto object-contain"
            />
          </div>

          {/* Rank badge */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="font-sans text-[8px] uppercase tracking-[0.3em] mb-0.5" style={{ color: "rgba(201,168,76,0.4)" }}>
                Rank
              </p>
              <span className="font-serif font-light text-3xl leading-none" style={{ color: "#C9A84C" }}>
                1
              </span>
            </div>
            <ScoreArc score={site.score} />
          </div>
        </div>

        {/* Offer block */}
        <div className="px-8 py-6 text-center">
          <p className="font-sans text-[9px] font-bold uppercase tracking-[0.4em] mb-3" style={{ color: "rgba(201,168,76,0.45)" }}>
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

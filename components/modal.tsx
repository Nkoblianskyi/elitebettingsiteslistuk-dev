"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

function ScoreDots({ score }: { score: number }) {
  const filled = Math.round((score / 10) * 5)
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }} aria-label={`Rating ${score} out of 10`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i < filled ? 8 : 5,
            height: i < filled ? 8 : 5,
            backgroundColor: i < filled ? "#C9A84C" : "rgba(201,168,76,0.15)",
            transition: "all 0.1s",
          }}
        />
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
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "rgba(10,10,10,0.94)",
        backdropFilter: "blur(14px)",
      }}
      onClick={() => setIsOpen(false)}
    >
      {/* Close — top right */}
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        aria-label="Close modal"
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 36,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(201,168,76,0.20)",
          backgroundColor: "#111111",
          color: "rgba(201,168,76,0.55)",
          cursor: "pointer",
          transition: "border-color 0.15s",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#C9A84C" }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.20)" }}
      >
        <X style={{ width: 14, height: 14 }} />
      </button>

      {/* Card */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 400,
          backgroundColor: "#111111",
          border: "1px solid rgba(201,168,76,0.32)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top line */}
        <div style={{ height: 2, backgroundColor: "#C9A84C" }} />

        {/* Header */}
        <div style={{
          padding: "22px 32px 20px",
          textAlign: "center",
          borderBottom: "1px solid rgba(201,168,76,0.10)",
        }}>
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 8,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.50em",
            color: "rgba(201,168,76,0.42)",
            marginBottom: 10,
          }}>
            ukbestcasinosites.com
          </p>
          <h2 style={{
            fontFamily: "var(--font-playfair),Georgia,serif",
            fontWeight: 700,
            fontSize: "clamp(1.5rem,3.5vw,2rem)",
            lineHeight: 1.1,
            color: "#EDE4CC",
          }}>
            Today&apos;s Top <em style={{ color: "#C9A84C" }}>Offer</em>
          </h2>
        </div>

        {/* Logo */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          padding: "22px 32px 18px",
          borderBottom: "1px solid rgba(201,168,76,0.09)",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 64,
            width: 168,
            backgroundColor: "#ffffff",
          }}>
            <img
              src={site.logo}
              alt={site.name}
              style={{ maxHeight: 50, maxWidth: 152, width: "auto", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Score */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          padding: "20px 32px 16px",
          borderBottom: "1px solid rgba(201,168,76,0.09)",
        }}>
          <ScoreDots score={site.score} />
          <div style={{ textAlign: "center" }}>
            <span style={{
              fontFamily: "var(--font-playfair),Georgia,serif",
              fontWeight: 700,
              fontSize: "1.7rem",
              color: "#C9A84C",
              lineHeight: 1,
            }}>{site.score.toFixed(1)}</span>
            <span style={{
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 8,
              textTransform: "uppercase",
              letterSpacing: "0.35em",
              color: "rgba(201,168,76,0.38)",
              marginLeft: 8,
            }}>/ 10</span>
          </div>
        </div>

        {/* Offer */}
        <div style={{
          padding: "18px 32px 22px",
          textAlign: "center",
          borderBottom: "1px solid rgba(201,168,76,0.09)",
        }}>
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 8,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.42em",
            color: "rgba(201,168,76,0.42)",
            marginBottom: 12,
          }}>Welcome Offer</p>
          <p style={{
            fontFamily: "var(--font-playfair),Georgia,serif",
            fontWeight: 700,
            fontSize: "clamp(1.6rem,4vw,2.2rem)",
            color: "#EDE4CC",
            lineHeight: 1.05,
            marginBottom: 7,
          }}>{site.bonus}</p>
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 12,
            color: "rgba(237,228,204,0.40)",
          }}>{site.welcomeOffer ?? site.bonus}</p>
        </div>

        {/* CTA */}
        <div style={{ padding: "20px 32px" }}>
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              backgroundColor: "#C9A84C",
              color: "#0A0A0A",
              fontFamily: "var(--font-inter),sans-serif",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.30em",
              padding: "15px 0",
              textDecoration: "none",
              transition: "background-color 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#DDB95E" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#C9A84C" }}
          >
            Claim Offer Now
          </Link>
        </div>

        {/* Legal footer */}
        <div style={{
          padding: "12px 32px",
          textAlign: "center",
          borderTop: "1px solid rgba(201,168,76,0.08)",
          backgroundColor: "rgba(10,10,10,0.5)",
        }}>
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 8,
            lineHeight: 1.65,
            color: "rgba(237,228,204,0.20)",
            marginBottom: 4,
          }}>{site.terms}</p>
          <p style={{
            fontFamily: "var(--font-inter),sans-serif",
            fontSize: 8,
            color: "rgba(237,228,204,0.28)",
          }}>
            18+ &nbsp;·&nbsp; T&amp;Cs apply &nbsp;·&nbsp;{" "}
            <a
              href="https://www.gambleaware.org"
              target="_blank"
              rel="noreferrer"
              style={{ color: "rgba(201,168,76,0.48)", textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              BeGambleAware.org
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

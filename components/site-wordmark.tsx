type WordmarkVariant = "header" | "footer" | "hero"

export function SiteWordmark({ variant = "header", className }: { variant?: WordmarkVariant; className?: string }) {
  const sizes: Record<WordmarkVariant, { fontSize: string; letterSpacing: string }> = {
    header: { fontSize: "15px",                           letterSpacing: "0.14em" },
    footer: { fontSize: "18px",                           letterSpacing: "0.12em" },
    hero:   { fontSize: "clamp(2.2rem, 5vw, 4.5rem)",    letterSpacing: "0.06em" },
  }
  const s = sizes[variant]
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--font-playfair), Georgia, serif",
        fontWeight: 700,
        textTransform: "uppercase",
        fontSize: s.fontSize,
        letterSpacing: s.letterSpacing,
        lineHeight: 1,
        display: "inline-block",
      }}
    >
      <span style={{ color: "#C8A86B" }}>UK</span>
      <span style={{ color: "#FFFFFF" }}> Best</span>
      <span style={{ color: "#C8A86B" }}> Casino</span>
      <span style={{ color: "#FFFFFF" }}> Sites</span>
    </span>
  )
}

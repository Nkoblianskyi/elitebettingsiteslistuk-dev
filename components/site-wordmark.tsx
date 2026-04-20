import { cn } from "@/lib/utils"

type WordmarkVariant = "header" | "footer" | "hero"

export function SiteWordmark({ variant = "header", className }: { variant?: WordmarkVariant; className?: string }) {
  const sizeMap = {
    header: "text-base tracking-[0.12em]",
    hero:   "text-4xl sm:text-5xl lg:text-6xl tracking-[0.06em]",
    footer: "text-lg tracking-[0.14em]",
  }
  return (
    <span className={cn("font-serif font-light uppercase", sizeMap[variant], className)}>
      <span style={{ color: "#EDE4CC" }}>Trusted</span>
      <span style={{ color: "#C9A84C" }}> Casinos</span>
      <span style={{ color: "#EDE4CC" }}> Sites</span>
      <span style={{ color: "rgba(237,228,204,0.4)" }}> UK</span>
    </span>
  )
}

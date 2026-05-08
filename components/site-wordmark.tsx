import { cn } from "@/lib/utils"

type WordmarkVariant = "header" | "footer" | "hero"

export function SiteWordmark({ variant = "header", className }: { variant?: WordmarkVariant; className?: string }) {
  const sizeMap = {
    header: "text-base tracking-[0.10em]",
    hero:   "text-4xl sm:text-5xl lg:text-6xl tracking-[0.05em]",
    footer: "text-lg tracking-[0.12em]",
  }
  return (
    <span className={cn("font-serif font-semibold uppercase", sizeMap[variant], className)}>
      <span style={{ color: "#C9A84C" }}>UK</span>
      <span style={{ color: "#EDE4CC" }}> Best</span>
      <span style={{ color: "#C9A84C" }}> Casino</span>
      <span style={{ color: "#EDE4CC" }}> Sites</span>
    </span>
  )
}

import { cn } from "@/lib/utils"

type WordmarkVariant = "header-compact" | "header-hero" | "footer"

export function SiteWordmark({ variant, className }: { variant: WordmarkVariant; className?: string }) {
  return (
    <span
      className={cn(
        "font-serif tracking-tight",
        variant === "header-compact" && "text-lg sm:text-xl",
        variant === "header-hero" && "text-2xl sm:text-3xl",
        variant === "footer" && "text-2xl sm:text-3xl",
        className,
      )}
    >
      <span className="text-[#F5F0E8] font-bold">Elite</span>
      <span className="text-[#C9A84C] font-semibold"> Casinos</span>
      <span className="text-[#F5F0E8] font-bold"> Sites</span>
      <span className="text-[#F5F0E8]/50 font-light text-[0.8em]"> UK</span>
    </span>
  )
}

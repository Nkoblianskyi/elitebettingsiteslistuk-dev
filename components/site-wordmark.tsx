import { cn } from "@/lib/utils"

type WordmarkVariant = "header-compact" | "header-hero" | "footer"

export function SiteWordmark({ variant, className }: { variant: WordmarkVariant; className?: string }) {
  return (
    <span
      className={cn(
        "font-serif tracking-tight",
        variant === "header-compact" && "text-xl sm:text-2xl",
        variant === "header-hero" && "text-2xl sm:text-3xl",
        variant === "footer" && "text-2xl sm:text-3xl",
        className,
      )}
    >
      <span className="text-[#F2ECD9] font-semibold">Trusted</span>
      <span className="text-[#B8965A] font-light italic"> Casinos</span>
      <span className="text-[#F2ECD9] font-semibold"> Sites</span>
      <span className="text-[#F2ECD9]/50 font-light text-[0.8em]"> UK</span>
    </span>
  )
}

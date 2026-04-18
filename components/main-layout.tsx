"use client"

import type React from "react"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 max-w-5xl xl:max-w-6xl relative">
        {children}
      </div>
    </div>
  )
}

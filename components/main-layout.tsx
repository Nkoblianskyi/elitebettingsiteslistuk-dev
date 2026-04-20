"use client"

import type React from "react"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="mx-auto w-full max-w-5xl xl:max-w-6xl">
        {children}
      </div>
    </div>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "Front page", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Activity", href: "/activity" },
    { name: "About", href: "/about" },
  ]

  return (
    <header className="w-full border-b border-gray-800">
      <div className="max-w-screen-xl mx-auto flex h-16 items-center justify-between px-4">
        <nav className="flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive ? "text-white" : "text-gray-400 hover:text-white",
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <Button className="rounded-full bg-white hover:bg-gray-200 text-black text-sm px-4">Log in or sign up</Button>
      </div>
    </header>
  )
}

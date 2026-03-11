"use client"

import Link from "next/link"
import { Brain, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavbarProps {
  activeTab?: string
}

export function Navbar({ activeTab = "Inicio" }: NavbarProps) {
  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Reportes", href: "/reportes" },
  ]

  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-lg bg-foreground">
              <Brain className="size-5 text-background" />
            </div>
            <span className="text-lg font-semibold">NeuroDatics</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      activeTab === item.name
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* User Icon */}
        <Link
          href="/login"
          className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <User className="size-5" />
          <span className="sr-only">Iniciar sesión</span>
        </Link>
      </div>
    </header>
  )
}

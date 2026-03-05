"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Menu, X } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { CartDrawer } from "@/components/cart-drawer"

export function Navbar() {
  const { totalItems, setIsCartOpen } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">
              SEFIROTS
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#catalogo"
              className="font-mono text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Catalogo
            </Link>
            <Link
              href="#sefirots"
              className="font-mono text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Aceites Esenciales
            </Link>
            <Link
              href="#beeha"
              className="font-mono text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Beeha
            </Link>
            <Link
              href="#arindelle"
              className="font-mono text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              Arindelle
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-accent rounded-full transition-colors"
              aria-label="Abrir carrito"
            >
              <ShoppingBag className="h-5 w-5 text-foreground" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs font-mono flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-accent rounded-full transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 px-6 py-6">
            <div className="flex flex-col gap-4">
              <Link
                href="#catalogo"
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                Catalogo
              </Link>
              <Link
                href="#sefirots"
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                Aceites Esenciales
              </Link>
              <Link
                href="#beeha"
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                Beeha
              </Link>
              <Link
                href="#arindelle"
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                Arindelle
              </Link>
            </div>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  )
}

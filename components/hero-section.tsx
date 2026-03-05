"use client"

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with soft pastel gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdf6ec] via-[#fef9f3] to-background" />
      
      {/* Soft glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c8a96e]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#5dade2]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-[#8e44ad]/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Mezclas de Aceites Esenciales
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-foreground mb-6 text-balance">
          Activa tu energia.
          <br />
          <span className="text-primary">Eleva tu esencia.</span>
        </h1>

        <p className="font-mono text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Aceites esenciales inspirados en la Cabala, creados para elevar
          tu bienestar, activar tu poder interior y armonizar tu energia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#sefirots"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-mono text-sm tracking-wide text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Descubrir Esencias
          </Link>
          <Link
            href="#catalogo"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 font-mono text-sm tracking-wide text-foreground hover:bg-accent transition-all"
          >
            Ver Catalogo
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

"use client"

import Image from "next/image"
import Link from "next/link"

const brands = [
  {
    name: "SEFIROTS",
    subtitle: "Aceites Esenciales Energeticos",
    description:
      "Mezclas unicas de aceites esenciales inspiradas en la Cabala. Cada esencia activa una energia especifica para elevar tu bienestar.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sefirots%2030ml%20completa%20envase-0SSrA5KnjPFfrrziAGYj9NXdqErAdG.png",
    href: "#sefirots",
    color: "#c8a96e",
  },
  {
    name: "Beeha",
    subtitle: "Cosmetica Herbal Artesanal Hibrida",
    description:
      "Tonicos, geles, shampoo y cuidado facial y corporal. Cosmetica natural, organica y artesanal para tu ritual de belleza consciente.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sefirots%2030ml%20completa%20caja-CWlfd8ruvUOFz5kIDFhQN6rNJEJJDc.png",
    href: "#beeha",
    color: "#8b9a46",
  },
  {
    name: "Arindelle",
    subtitle: "Bisuteria Fina",
    description:
      "Joyas delicadas con estilo de lujo silencioso. Detalles dorados y disenos elegantes para complementar tu energia.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%202%20mar%202026%2C%2012_03_54%20a.m.-s5GfXPqVDBTRm5lfcXG94euh7GmoIj.png",
    href: "#arindelle",
    color: "#c8a96e",
  },
]

export function CatalogSection() {
  return (
    <section id="catalogo" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Nuestras Colecciones
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground text-balance">
            Catalogo General
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.href}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={brand.image}
                  alt={`Coleccion ${brand.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <p
                  className="font-mono text-xs tracking-[0.2em] uppercase mb-2"
                  style={{ color: brand.color }}
                >
                  {brand.subtitle}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                  {brand.name}
                </h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
                  {brand.description}
                </p>
                <span className="inline-flex items-center font-mono text-sm tracking-wide text-primary group-hover:gap-3 gap-2 transition-all">
                  Ver coleccion
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

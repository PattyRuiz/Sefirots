import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-background">
              SEFIROTS
            </h3>
            <p className="font-mono text-sm text-background/60 leading-relaxed max-w-md">
              Aceites esenciales energeticos inspirados en la Cabala. Mezclas
              unicas creadas para elevar tu bienestar, activar tu poder
              interior y armonizar tu energia.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-background/40 mb-4">
              Colecciones
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="#sefirots"
                className="font-mono text-sm text-background/70 hover:text-background transition-colors"
              >
                Aceites Esenciales
              </Link>
              <Link
                href="#beeha"
                className="font-mono text-sm text-background/70 hover:text-background transition-colors"
              >
                Beeha
              </Link>
              <Link
                href="#arindelle"
                className="font-mono text-sm text-background/70 hover:text-background transition-colors"
              >
                Arindelle
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-background/40 mb-4">
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5215512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-background/70 hover:text-background transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:contacto@sefirots.com"
                className="font-mono text-sm text-background/70 hover:text-background transition-colors"
              >
                contacto@sefirots.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-background/40">
            SEFIROTS. Todos los derechos reservados.
          </p>
          <p className="font-mono text-xs text-background/40">
            Activa tu energia. Eleva tu esencia.
          </p>
        </div>
      </div>
    </footer>
  )
}

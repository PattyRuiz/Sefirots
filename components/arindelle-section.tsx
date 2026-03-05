"use client"

const pieces = [
  { name: "Collar Sefira", type: "Collar" },
  { name: "Pulsera Luz", type: "Pulsera" },
  { name: "Aretes Armonia", type: "Aretes" },
  { name: "Anillo Esencia", type: "Anillo" },
]

export function ArindelleSection() {
  return (
    <section id="arindelle" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Bisuteria Fina
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4 text-balance">
            Arindelle
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Joyas delicadas con estilo de lujo silencioso. Detalles dorados
            y disenos elegantes que complementan tu energia interior.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pieces.map((piece) => (
            <div
              key={piece.name}
              className="group bg-card rounded-2xl border border-border/50 p-8 text-center hover:border-primary/30 transition-all hover:shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/5 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                  />
                </svg>
              </div>
              <p className="font-mono text-xs tracking-wide text-primary mb-2">
                {piece.type}
              </p>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                {piece.name}
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                Proximamente
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

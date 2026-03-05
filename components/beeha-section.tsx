"use client"

const products = [
  { name: "Tonico Facial Herbal", type: "Cuidado Facial" },
  { name: "Gel Hidratante Botanico", type: "Cuidado Corporal" },
  { name: "Shampoo de Hierbas", type: "Cuidado Capilar" },
  { name: "Serum Restaurador", type: "Cuidado Facial" },
]

export function BeehaSection() {
  return (
    <section id="beeha" className="py-24 md:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-sefirots-green mb-4">
            Cosmetica Herbal Artesanal Hibrida
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4 text-balance">
            Beeha
          </h2>
          <p className="font-mono text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Productos naturales y organicos para tu ritual de belleza
            consciente. Tonicos, geles, shampoo y cuidado facial y corporal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card rounded-2xl border border-border/50 p-8 text-center hover:border-sefirots-green/30 transition-all hover:shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sefirots-green/5 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-sefirots-green/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c.34 0 .67.03 1 .08C16.89 3.66 20 7.58 20 12c0 4.97-4.03 9-9 9a9.003 9.003 0 01-8-4.87C3 16.12 3 12 6.5 9.5S12 3 12 3z"
                  />
                </svg>
              </div>
              <p className="font-mono text-xs tracking-wide text-sefirots-green mb-2">
                {product.type}
              </p>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                {product.name}
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

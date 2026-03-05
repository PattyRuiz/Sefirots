"use client"

import { useState } from "react"
import Image from "next/image"
import { useCart } from "@/components/cart-provider"
import { OilDetailModal } from "@/components/oil-detail-modal"

export interface Oil {
  id: string
  name: string
  color: string
  colorHex: string
  ingredients: string
  description: string
  image: string
  lifestyleImage: string
}

export const oils: Oil[] = [
  {
    id: "entendimiento",
    name: "Entendimiento",
    color: "Verde",
    colorHex: "#4a8c5c",
    ingredients: "Lavanda, Sandalo, Ylang Ylang, Vetiver, Coco",
    description:
      "Abre tu mente y conecta con la claridad interior. Una mezcla que invita a la reflexion profunda y al entendimiento espiritual.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2028%20feb%202026%2C%2012_19_05%20a.m.-5fLRYMnTrJAEvJTSq1PoKSJ8MjZ1Kb.png",
    lifestyleImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2028%20feb%202026%2C%2012_19_22%20a.m.-iTbHUVs2nU3ewM1mxvN2j1GRSHEAxW.png",
  },
  {
    id: "bondad",
    name: "Bondad",
    color: "Verde claro",
    colorHex: "#8b9a46",
    ingredients: "Cipres, Clavel, Gardenia, Manzanilla, Pepino",
    description:
      "Despierta la compasion y la generosidad. Una esencia que activa la bondad natural de tu corazon y expande tu capacidad de dar y recibir amor.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sefirots%2030ml%20completa%20envase-0SSrA5KnjPFfrrziAGYj9NXdqErAdG.png",
    lifestyleImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sefirots%2030ml%20completa%20caja-CWlfd8ruvUOFz5kIDFhQN6rNJEJJDc.png",
  },
  {
    id: "poder",
    name: "Poder",
    color: "Rojo",
    colorHex: "#c0392b",
    ingredients: "Limon, Lima, Naranja, Toronjil, Sandalo, Pachuli, Menta",
    description:
      "Activa tu fuerza interior y determinacion. Una mezcla poderosa que enciende la pasion, el coraje y la voluntad de transformar tu realidad.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2028%20feb%202026%2C%2012_32_20%20a.m.-0beyKOQiH4p9FgkNfXAAeQQpaPkfyf.png",
    lifestyleImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2028%20feb%202026%2C%2012_33_56%20a.m.-qDrxp7OxXmKEcdoDkvrw7iLTlhdMI3.png",
  },
  {
    id: "sabiduria",
    name: "Sabiduria",
    color: "Morado",
    colorHex: "#8e44ad",
    ingredients:
      "Clavo, Rosas, Pino silvestre, Lavanda, Mandarina, Limon, Ylang Ylang, Lima, Romero, Bergamota",
    description:
      "Conecta con la sabiduria universal. Una esencia compleja y profunda que armoniza cuerpo, mente y espiritu para alcanzar la plenitud.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%202%20mar%202026%2C%2012_03_54%20a.m.-s5GfXPqVDBTRm5lfcXG94euh7GmoIj.png",
    lifestyleImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%202%20mar%202026%2C%2012_03_54%20a.m.-s5GfXPqVDBTRm5lfcXG94euh7GmoIj.png",
  },
  {
    id: "esplendor",
    name: "Esplendor",
    color: "Naranja",
    colorHex: "#e67e22",
    ingredients: "Lilas, Lavanda, Rosas, Jazmin, Clavo, Albahaca",
    description:
      "Ilumina tu presencia y magnetismo. Una mezcla radiante que potencia tu brillo interior, atrae la abundancia y manifiesta tu esplendor unico.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%201%20mar%202026%2C%2011_48_33%20p.m.-X4ENArYYOyefAnnLXNGZqGZ2WR6AkN.png",
    lifestyleImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%201%20mar%202026%2C%2011_48_33%20p.m.-X4ENArYYOyefAnnLXNGZqGZ2WR6AkN.png",
  },
  {
    id: "paz",
    name: "Paz",
    color: "Azul",
    colorHex: "#5dade2",
    ingredients: "Lavanda, Vetiver, Rosas, Cedro",
    description:
      "Encuentra la serenidad absoluta. Una esencia tranquilizadora que restaura la calma, equilibra las emociones y te envuelve en paz profunda.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2028%20feb%202026%2C%2012_38_55%20a.m.-8diuWaXtYTSVgJnV2VWRfnAgzLPB55.png",
    lifestyleImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2028%20feb%202026%2C%2012_38_55%20a.m.-8diuWaXtYTSVgJnV2VWRfnAgzLPB55.png",
  },
]

export function OilsSection() {
  const { addItem } = useCart()
  const [selectedOil, setSelectedOil] = useState<Oil | null>(null)

  const handleAddToCart = (oil: Oil) => {
    addItem({
      id: oil.id,
      name: oil.name,
      color: oil.colorHex,
      image: oil.image,
    })
  }

  const handleWhatsApp = (oil: Oil) => {
    const message = encodeURIComponent(
      `Hola! Me interesa el aceite esencial "${oil.name}" de Sefirots 30ml. Me gustaria conocer disponibilidad y opciones de envio.`
    )
    window.open(`https://wa.me/525530702640?text=${message}`, "_blank")
  }

  return (
    <>
      <section id="sefirots" className="py-24 md:py-32 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-4">
              6 Esencias Energeticas
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-4 text-balance">
              Aceites Esenciales SEFIROTS
            </h2>
            <p className="font-mono text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Cada esencia esta inspirada en una Sefira de la Cabala. Elige la
              energia que necesitas activar en tu vida.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {oils.map((oil) => (
              <div
                key={oil.id}
                className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl transition-all duration-500"
                style={{
                  borderColor: `${oil.colorHex}10`,
                }}
              >
                {/* Image */}
                <button
                  onClick={() => setSelectedOil(oil)}
                  className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer"
                >
                  <Image
                    src={oil.image}
                    alt={`Aceite esencial ${oil.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to top, ${oil.colorHex}15, transparent)`,
                    }}
                  />
                </button>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: oil.colorHex }}
                    />
                    <p
                      className="font-mono text-xs tracking-[0.15em] uppercase"
                      style={{ color: oil.colorHex }}
                    >
                      {oil.color}
                    </p>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
                    {oil.name}
                  </h3>

                  <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-4">
                    {oil.description}
                  </p>

                  {/* Ingredients */}
                  <div className="mb-6">
                    <p className="font-mono text-[10px] tracking-wide uppercase text-muted-foreground/60 mb-1">
                      Ingredientes
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {oil.ingredients}
                    </p>
                  </div>

                  {/* Info */}
                  <p className="font-mono text-[10px] text-muted-foreground/60 mb-4">
                    Consulta disponibilidad y envio por WhatsApp
                  </p>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => handleWhatsApp(oil)}
                      className="w-full flex items-center justify-center gap-2 rounded-full py-3 font-mono text-xs tracking-wide text-white transition-all hover:shadow-lg"
                      style={{ backgroundColor: oil.colorHex }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Ordenar por WhatsApp
                    </button>
                    <button
                      onClick={() => handleAddToCart(oil)}
                      className="w-full rounded-full border py-3 font-mono text-xs tracking-wide transition-all hover:shadow-md"
                      style={{
                        borderColor: `${oil.colorHex}40`,
                        color: oil.colorHex,
                      }}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedOil && (
        <OilDetailModal
          oil={selectedOil}
          onClose={() => setSelectedOil(null)}
          onAddToCart={handleAddToCart}
          onWhatsApp={handleWhatsApp}
        />
      )}
    </>
  )
}

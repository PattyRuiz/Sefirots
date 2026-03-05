"use client"

import Image from "next/image"
import { X } from "lucide-react"
import type { Oil } from "@/components/oils-section"

interface OilDetailModalProps {
  oil: Oil
  onClose: () => void
  onAddToCart: (oil: Oil) => void
  onWhatsApp: (oil: Oil) => void
}

export function OilDetailModal({
  oil,
  onClose,
  onAddToCart,
  onWhatsApp,
}: OilDetailModalProps) {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-card/80 backdrop-blur-sm rounded-full hover:bg-accent transition-colors"
          aria-label="Cerrar detalle"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto">
            <Image
              src={oil.lifestyleImage}
              alt={`Aceite esencial ${oil.name} - estilo de vida`}
              fill
              className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: oil.colorHex }}
              />
              <p
                className="font-mono text-xs tracking-[0.2em] uppercase"
                style={{ color: oil.colorHex }}
              >
                Sefirots - {oil.color}
              </p>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              {oil.name}
            </h2>

            <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
              {oil.description}
            </p>

            <div className="mb-6">
              <p className="font-mono text-[10px] tracking-wide uppercase text-muted-foreground/60 mb-2">
                Ingredientes
              </p>
              <p className="font-mono text-sm text-foreground">
                {oil.ingredients}
              </p>
            </div>

            <div className="mb-6">
              <p className="font-mono text-[10px] tracking-wide uppercase text-muted-foreground/60 mb-2">
                Contenido
              </p>
              <p className="font-mono text-sm text-foreground">
                30 ml - Mezcla de Aceites Esenciales
              </p>
            </div>

            <p className="font-mono text-xs text-muted-foreground/60 mb-6">
              Consulta disponibilidad y envio por WhatsApp
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onWhatsApp(oil)
                  onClose()
                }}
                className="w-full flex items-center justify-center gap-2 rounded-full py-3.5 font-mono text-sm tracking-wide text-white transition-all hover:shadow-lg"
                style={{ backgroundColor: oil.colorHex }}
              >
                Ordenar por WhatsApp
              </button>
              <button
                onClick={() => {
                  onAddToCart(oil)
                  onClose()
                }}
                className="w-full rounded-full border py-3.5 font-mono text-sm tracking-wide transition-all hover:shadow-md"
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
      </div>
    </div>
  )
}

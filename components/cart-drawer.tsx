"use client"

import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { useState } from "react"

const SHIPPING_RATES: Record<string, number> = {
  CDMX: 99,
  "Estado de Mexico": 120,
  Jalisco: 150,
  "Nuevo Leon": 150,
  Puebla: 130,
  Queretaro: 130,
  Guanajuato: 140,
  Nacional: 180,
  Express: 250,
}

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    isCartOpen,
    setIsCartOpen,
  } = useCart()

  const [selectedShipping, setSelectedShipping] = useState("Nacional")
  const [address, setAddress] = useState("")

  const shippingCost = SHIPPING_RATES[selectedShipping] || 180

  const generateWhatsAppMessage = () => {
    const itemsList = items
      .map((item) => `- ${item.name} x${item.quantity}`)
      .join("\n")

    const message = `Hola! Me gustaria ordenar:\n\n${itemsList}\n\nEnvio: ${selectedShipping} ($${shippingCost} MXN)\nTotal envio: $${shippingCost} MXN\n${address ? `Direccion: ${address}` : ""}\n\nGracias!`

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/525530702640?text=${encoded}`, "_blank")
  }

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="font-serif text-xl font-semibold text-foreground">
            Tu Carrito ({totalItems})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-accent rounded-full transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-lg text-muted-foreground mb-2">
                Tu carrito esta vacio
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                Explora nuestras esencias y agrega tus favoritas
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50"
                >
                  <div
                    className="w-14 h-14 rounded-lg flex-shrink-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-semibold text-foreground truncate">
                      {item.name}
                    </h3>
                    <p
                      className="font-mono text-xs"
                      style={{ color: item.color }}
                    >
                      Sefirots 30ml
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="p-1 hover:bg-accent rounded transition-colors"
                      aria-label="Reducir cantidad"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="font-mono text-sm w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="p-1 hover:bg-accent rounded transition-colors"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1 hover:bg-destructive/10 rounded transition-colors ml-1"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 className="h-3 w-3 text-destructive" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Shipping & Checkout */}
        {items.length > 0 && (
          <div className="border-t border-border px-6 py-5 flex flex-col gap-4">
            {/* Shipping selector */}
            <div>
              <label className="font-mono text-xs tracking-wide text-muted-foreground block mb-2">
                Envio
              </label>
              <select
                value={selectedShipping}
                onChange={(e) => setSelectedShipping(e.target.value)}
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 font-mono text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {Object.entries(SHIPPING_RATES).map(([region, price]) => (
                  <option key={region} value={region}>
                    {region} - ${price} MXN
                  </option>
                ))}
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="font-mono text-xs tracking-wide text-muted-foreground block mb-2">
                Direccion de envio (opcional)
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Tu direccion completa"
                className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            {/* Summary */}
            <div className="flex items-center justify-between pt-2 border-t border-border/50">
              <span className="font-mono text-xs text-muted-foreground">
                Envio estimado
              </span>
              <span className="font-mono text-sm font-medium text-foreground">
                ${shippingCost} MXN
              </span>
            </div>

            <p className="font-mono text-xs text-muted-foreground text-center">
              Consulta disponibilidad y precio final por WhatsApp
            </p>

            {/* WhatsApp button */}
            <button
              onClick={generateWhatsAppMessage}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-mono text-sm tracking-wide text-white hover:bg-[#25D366]/90 transition-all hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Finalizar Pedido por WhatsApp
            </button>

            <button
              onClick={clearCart}
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors text-center"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

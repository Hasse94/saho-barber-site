"use client"

import { useEffect, useRef, useState } from "react"
import { Phone } from "lucide-react"

const categories = [
  {
    name: "Klippning",
    items: [
      { service: "Herrklippning", price: "350 kr" },
      { service: "Skin Fade", price: "350 kr" },
      { service: "Barnklippning (under 12 år)", price: "280 kr" },
    ],
  },
  {
    name: "Skägg & Rakning",
    items: [
      { service: "Skäggtrimning & Formning", price: "400 kr" },
      { service: "Traditionell Rakning", price: "350 kr" },
      { service: "Skägg & Styling", price: "300 kr" },
    ],
  },
  {
    name: "Kombinationer",
    items: [
      { service: "Klippning & Skägg", price: "450 kr" },
      { service: "Klippning & Rakning", price: "500 kr" },
      { service: "Klippning & Barnklippning", price: "580 kr" },
    ],
  },
  {
    name: "Premium Paket",
    items: [
      { service: "Deluxe Paket", price: "900 kr" },
      { service: "Platinum Paket", price: "999 kr" },
      { service: "Varm Handduk & Ansiktsvård", price: "150 kr" },
    ],
  },
  {
    name: "Färgning",
    items: [
      { service: "Skäggtoning", price: "200 kr" },
      { service: "Hårfärg (kort)", price: "400 kr" },
      { service: "Keratin Behandling", price: "600 kr" },
    ],
  },
  {
    name: "Tillägg & Övrigt",
    items: [
      { service: "Black Mask", price: "150 kr" },
      { service: "Vaxning (näsa/öron)", price: "100 kr" },
      { service: "Ögonbrynsformning", price: "100 kr" },
    ],
  },
]

export function Prislista() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="prislista" ref={sectionRef} className="py-24 md:py-32 bg-card relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-[0.72rem] tracking-[0.2em] uppercase font-semibold">
            Prislista
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-3">
            Våra Priser
          </h2>
          <p className="text-muted-foreground text-sm">
            Transparent prissättning – inga dolda kostnader. Alla priser inkl. moms.
          </p>
        </div>

        {/* Price grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {categories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className={`bg-background border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/30 hover:shadow-[0_4px_32px_rgba(200,168,75,0.07)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${catIdx * 80}ms` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-border/60 bg-primary/[0.04]">
                <div className="w-1.5 h-4 rounded-full bg-primary/60 flex-shrink-0" />
                <h3 className="font-serif font-semibold text-foreground text-[0.95rem]">
                  {cat.name}
                </h3>
              </div>

              {/* Items */}
              <div className="px-6 py-2">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex items-center justify-between py-3.5 border-b border-white/[0.04] last:border-b-0 group"
                  >
                    <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200">
                      {item.service}
                    </span>
                    <span className="font-bold text-primary text-sm tabular-nums ml-4 flex-shrink-0 flex items-baseline gap-1">
                      <span className="text-primary font-semibold text-sm mr-1">fr</span>
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note + CTA */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-background border border-white/[0.06] transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="text-sm text-foreground font-medium mb-1">Har du frågor om priser?</p>
            <p className="text-xs text-muted-foreground">
              Drop-in välkomnas. Ring oss för att boka tid eller för mer information.
            </p>
          </div>
          <a
            href="tel:087776800"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm tracking-wide hover:brightness-110 hover:shadow-[0_6px_24px_rgba(200,168,75,0.35)] transition-all duration-300 flex-shrink-0"
          >
            <Phone className="w-4 h-4" />
            Ring 08-777 68 00
          </a>
        </div>
      </div>
    </section>
  )
}

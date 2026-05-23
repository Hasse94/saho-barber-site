"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, ChevronRight } from "lucide-react"

export function CTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 relative z-10">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-[0.72rem] tracking-[0.2em] uppercase font-semibold">
            Boka Din Tid
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
            Redo för en ny look?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
            Ring oss idag och boka din tid. Drop-in välkomnas också!
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="tel:087776800"
              className="group relative inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-5 rounded-full font-semibold text-lg tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_48px_rgba(200,168,75,0.4)] hover:-translate-y-0.5 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <div className="relative flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-black/15 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Ring 08-777 68 00</span>
              </div>
            </a>

            <a
              href="#prislista"
              className="inline-flex items-center gap-2 border border-primary/30 text-primary px-8 py-5 rounded-full font-semibold text-base tracking-wide transition-all duration-300 hover:bg-primary/10 hover:border-primary/60 hover:-translate-y-0.5 active:scale-95"
            >
              <span>Se Prislista</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <p
            className={`mt-7 text-xs text-muted-foreground tracking-wide transition-all duration-700 delay-350 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Bokning via telefon &nbsp;·&nbsp; Två salonger i södra Stockholm
          </p>
        </div>
      </div>
    </section>
  )
}

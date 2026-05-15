"use client"

import { useEffect, useState, useRef } from "react"
import { Phone, MapPin, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 80)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Subtle radial glow behind logo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(200,168,75,0.07) 0%, transparent 70%)`,
          transition: "background 0.8s ease",
        }}
      />

      {/* Thin gold lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">

        {/* Medallion logo — the hero centerpiece */}
        <div
          className={`relative mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              boxShadow: "0 0 80px rgba(200,168,75,0.18), 0 0 160px rgba(200,168,75,0.07)",
              transform: `translate(${mousePosition.x * 6 - 3}px, ${mousePosition.y * 6 - 3}px)`,
              transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          />
          <div
            className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border border-primary/25"
            style={{
              transform: `translate(${mousePosition.x * 6 - 3}px, ${mousePosition.y * 6 - 3}px)`,
              transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <Image
              src="/saho-logo.jpeg"
              alt="Saho Barbershop"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 208px, 256px"
              priority
            />
          </div>
        </div>

        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/25 bg-black/40 backdrop-blur-sm mb-7 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary" style={{ boxShadow: "0 0 6px rgba(200,168,75,0.8)" }} />
          <span className="text-[0.72rem] text-muted-foreground tracking-[0.18em] uppercase font-medium">
            Sedan 1999
          </span>
        </div>

        {/* Main Title */}
        <h1
          className={`font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-bold mb-4 tracking-tight transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="block text-foreground leading-none">Salong</span>
          <span
            className="block mt-2 leading-none"
            style={{ color: "#c8a84b", textShadow: "0 0 60px rgba(200,168,75,0.2)" }}
          >
            SAHO
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed transition-all duration-700 delay-[400ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Premium barberare i södra Stockholm. Klassiskt hantverk möter modern stil i våra två salonger.
        </p>

        {/* Location Badges */}
        <div
          className={`flex flex-wrap justify-center gap-5 mb-10 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {["Tyresö", "Handen"].map((loc) => (
            <div key={loc} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>{loc}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 delay-[580ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="tel:087776800"
            className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-base tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_40px_rgba(200,168,75,0.35)] hover:-translate-y-0.5 active:scale-95"
          >
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            <span>Boka tid: 08-777 68 00</span>
          </a>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/[0.07] transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            { number: "25+", label: "Års erfarenhet" },
            { number: "10k+", label: "Nöjda kunder" },
            { number: "5.0", label: "Betyg" },
            { number: "2", label: "Salonger" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold text-primary leading-none">
                {stat.number}
              </div>
              <div className="text-xs text-muted-foreground mt-2 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#tjanster"
          className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors group"
          aria-label="Scrolla ned"
        >
          <span className="text-[0.65rem] tracking-[0.15em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">Utforska</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}

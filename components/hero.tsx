"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Phone, Star, ChevronRight } from "lucide-react"

const prices = [
  { service: "Klippning",           price: "350 kr" },
  { service: "Skin Fade",           price: "350 kr" },
  { service: "Klippning & Skägg",   price: "450 kr" },
  { service: "Skäggtrimning",       price: "400 kr" },
  { service: "Traditionell Rakning",price: "350 kr" },
  { service: "Deluxe Paket",        price: "900 kr" },
]

const stats = [
  { number: "25+",  label: "Års erfarenhet" },
  { number: "10k+", label: "Nöjda kunder" },
  { number: "5.0",  label: "Betyg på Barberhead" },
  { number: "2",    label: "Salonger i Stockholm" },
]

// Duplicated for seamless infinite loop
const stylingBrands = [
  "Hey Joe", "DR Jackson", "Mon Platin", "Proraso", "Slick Gorilla",
  "Barburys", "Beardburys", "EuroStil", "Astra Superior", "Borotalco",
  "The Inglorious Mariner", "Sibel", "MicAge Barbers", "Caliber Professional", "Dorco",
  "Hey Joe", "DR Jackson", "Mon Platin", "Proraso", "Slick Gorilla",
  "Barburys", "Beardburys", "EuroStil", "Astra Superior", "Borotalco",
  "The Inglorious Mariner", "Sibel", "MicAge Barbers", "Caliber Professional", "Dorco",
]

const machineBrands = [
  "Andis", "Babyliss", "BabylissPRO", "JRL Professional", "WAHL",
  "Comair", "Derby Razor Blades", "Jaguar", "ItalWax", "StyleCraft",
  "Andis", "Babyliss", "BabylissPRO", "JRL Professional", "WAHL",
  "Comair", "Derby Razor Blades", "Jaguar", "ItalWax", "StyleCraft",
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const visible = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg.jpeg" alt="Salong Saho" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-24 pb-10 w-full">
          <div className="max-w-2xl">

            {/* Badge */}
            <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-primary/30 bg-black/50 backdrop-blur-sm mb-7 transition-all duration-700 ${visible}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" style={{ boxShadow: "0 0 6px rgba(200,168,75,0.9)" }} />
              <span className="text-[0.72rem] text-white/70 tracking-[0.18em] uppercase font-medium">
                Sedan 1999 — Tyresö &amp; Haninge
              </span>
            </div>

            {/* Logo */}
            <div className={`mt-2.5 mb-6 transition-all duration-700 delay-150 ${visible}`}>
              <div
                className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/40"
                style={{ boxShadow: "0 0 60px rgba(200,168,75,0.25), 0 0 120px rgba(200,168,75,0.1)" }}
              >
                <Image src="/saho-logo.jpeg" alt="Salong Saho logotyp" fill className="object-cover object-center scale-110" sizes="(max-width: 768px) 160px, 192px" priority />
              </div>
            </div>

            {/* Rating */}
            <div className={`flex items-center gap-2 mb-7 transition-all duration-700 delay-[250ms] ${visible}`}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <span className="text-sm text-white font-semibold">5.0</span>
              <span className="text-xs text-white/50">på Barberhead</span>
            </div>

            {/* Price list */}
            <div className={`mb-8 transition-all duration-700 delay-[320ms] ${visible}`}>
              {prices.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 py-1.5 border-b border-white/[0.06] last:border-b-0"
                  style={{ transition: `opacity 0.4s ease ${320 + i * 55}ms, transform 0.4s ease ${320 + i * 55}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(8px)" }}
                >
                  <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                  <span className="text-white/60 text-sm w-40 flex-shrink-0">{p.service}</span>
                  <span className="flex items-baseline gap-1 text-primary font-semibold text-sm tabular-nums">
                    <span className="mr-0.5">fr</span>{p.price}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-[500ms] ${visible}`}>
              <a
                href="tel:087776800"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_40px_rgba(200,168,75,0.45)] hover:-translate-y-0.5 active:scale-95"
              >
                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                Ring 08-777 68 00
              </a>
              <a href="#prislista" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-primary transition-colors duration-200 font-medium">
                Se alla priser
                <span className="text-primary font-semibold ml-0.5">PRISLISTA</span>
                <ChevronRight className="w-3.5 h-3.5 text-primary" />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={`relative z-10 border-t border-white/[0.07] bg-black/65 backdrop-blur-md transition-all duration-700 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className={`text-center py-5 border-white/[0.06] ${i < stats.length - 1 ? (i % 2 === 0 ? "border-r" : "md:border-r") : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}>
                <div className="text-2xl font-serif font-bold text-primary leading-none">{stat.number}</div>
                <div className="text-[0.7rem] text-white/45 mt-1.5 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker label */}
      <div className="relative z-10 text-center py-[5px] border-t border-primary/[0.12]">
        <span className="text-[0.75rem] text-white/55 tracking-[0.25em] uppercase font-medium">
          Produkter vi samarbetar med
        </span>
      </div>

      {/* Styling brands — scrolls left */}
      <div className="relative z-10 overflow-hidden bg-primary/[0.06] border-t border-primary/[0.15] py-2 mt-[5px]">
        <div className="flex animate-ticker whitespace-nowrap">
          {stylingBrands.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4">
              <span className="text-[0.65rem] text-white/50 tracking-[0.2em] uppercase font-medium">{item}</span>
              <span className="text-primary/35 text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Machine brands — scrolls right */}
      <div className="relative z-10 overflow-hidden bg-primary/[0.03] border-t border-primary/[0.10] py-2">
        <div className="flex animate-ticker-reverse whitespace-nowrap">
          {machineBrands.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-4">
              <span className="text-[0.65rem] text-primary/60 tracking-[0.2em] uppercase font-medium">{item}</span>
              <span className="text-primary/30 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}

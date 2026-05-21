"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Star, Users, Instagram, Scissors, MapPin, Quote } from "lucide-react"

const highlights = [
  { icon: Award, label: "Medlem i Frisörföretagarna" },
  { icon: Star, label: "5.0 i betyg på Barberhead" },
  { icon: Users, label: "Sponsor för IFK Haninge" },
  { icon: Instagram, label: "2 400+ följare på Instagram" },
]

const quickStats = [
  { value: "25+", label: "Års erfarenhet" },
  { value: "10k+", label: "Nöjda kunder" },
  { value: "2", label: "Salonger" },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="om-oss" ref={sectionRef} className="py-24 md:py-36 bg-card relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      <div className="absolute -top-60 right-0 w-[500px] h-[500px] bg-primary/[0.025] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="h-px w-8 bg-primary flex-shrink-0" />
          <span className="text-primary text-[0.72rem] tracking-[0.25em] uppercase font-semibold">Om Salong Saho</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-14 xl:gap-24 items-start">

          {/* ── LEFT: Image + floating stats ── */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Decorative offset frame */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-primary/20 rounded-2xl" />

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#0d0d0d]">
                {!imageError && (
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2013.07.17111-mVAeTVo0p1h4cm18VIHNwj2YGiyasL.jpeg"
                    alt="Saho Salong team"
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                  />
                )}

                {/* Fallback when no image */}
                {(imageError || !imageLoaded) && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center">
                      <Scissors className="w-7 h-7 text-primary/30" />
                    </div>
                    <span className="font-serif text-xl text-primary/20 tracking-widest">SAHO</span>
                  </div>
                )}

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Year stamp at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                      style={{ boxShadow: "0 0 6px rgba(200,168,75,0.8)" }}
                    />
                    <span className="text-white/50 text-[0.65rem] tracking-[0.2em] uppercase">Grundad</span>
                  </div>
                  <div className="font-serif text-4xl font-bold text-white leading-none">1999</div>
                </div>
              </div>

              {/* Floating rating badge — top right */}
              <div className="absolute -top-5 -right-5 bg-background border border-border rounded-2xl px-4 py-3 shadow-2xl shadow-black/60">
                <div className="flex gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-primary fill-primary" />
                  ))}
                </div>
                <div className="font-serif text-2xl font-bold text-primary leading-none">5.0</div>
                <div className="text-[0.62rem] text-muted-foreground mt-0.5 tracking-wide">Barberhead</div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-8">
              {quickStats.map((stat, i) => (
                <div
                  key={i}
                  className={`bg-background border border-white/[0.06] rounded-xl p-4 text-center hover:border-primary/30 transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${380 + i * 80}ms` }}
                >
                  <div className="font-serif text-2xl font-bold text-primary leading-none">{stat.value}</div>
                  <div className="text-[0.68rem] text-muted-foreground mt-1.5 tracking-wide leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Headline */}
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-[1.05] mb-8">
              Mer än<br />
              <span className="text-primary">en klippning.</span>
            </h2>

            {/* Story */}
            <div className="space-y-5 text-muted-foreground leading-[1.9] text-[0.95rem] mb-10">
              <p>
                Sedan 1999 har Salong Saho byggt ett rykte som en av de bästa barberarsalongerna i södra Stockholm. Med salonger i Haninge och Tyresö välkomnar vi kunder från hela Stockholmsområdet.
              </p>
              <p>
                Vårt team brinner för detaljer. Varje klippning, varje fade, varje skäggtrim utförs med precision och omsorg – alltid med professionella produkter och rätt teknik.
              </p>
            </div>

            {/* Gold divider */}
            <div className="h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent mb-10" />

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-xl bg-background border border-white/[0.05] hover:border-primary/25 transition-all duration-300 group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${480 + index * 70}ms` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-foreground/80">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Quote card */}
            <div
              className={`relative bg-background rounded-2xl p-6 border border-white/[0.06] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "750ms" }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="font-serif italic text-[1.05rem] text-foreground/75 leading-relaxed">
                Vi lägger ner oerhört mycket tid på detaljer – det är vad som skiljer oss från alla andra.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div className="h-px w-6 bg-primary/50" />
                <span className="text-xs text-muted-foreground tracking-wide">Kund via Reco.se</span>
              </div>
            </div>

            {/* CTA */}
            <div
              className={`mt-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "850ms" }}
            >
              <a
                href="#salonger"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-primary/90 transition-all duration-200 hover:shadow-[0_6px_24px_rgba(200,168,75,0.35)]"
              >
                <MapPin className="w-4 h-4" />
                Hitta till oss
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

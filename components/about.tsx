"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Star, Users, Instagram, Scissors, Clock } from "lucide-react"

const highlights = [
  { icon: Award, label: "Medlem i Frisörföretagarna" },
  { icon: Star, label: "5.0 i betyg på Barberhead" },
  { icon: Users, label: "Sponsor för IFK Haninge" },
  { icon: Instagram, label: "2 400+ följare på Instagram" },
]

const stats = [
  { value: "25+", label: "Års erfarenhet", icon: Clock },
  { value: "10k+", label: "Nöjda kunder", icon: Users },
  { value: "2", label: "Salonger", icon: Scissors },
  { value: "5.0", label: "Snittbetyg", icon: Star },
]

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="om-oss" ref={sectionRef} className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.04] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section label + heading */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-primary text-[0.72rem] tracking-[0.2em] uppercase font-semibold">
            Om Salong Saho
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            Mer än bara en klippning
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT COLUMN */}
          <div className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>

            {/* Image with fallback visual */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-8 bg-[#0d0d0d]">
              {!imageError ? (
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2013.07.17111-mVAeTVo0p1h4cm18VIHNwj2YGiyasL.jpeg"
                  alt="Saho Salong teamet"
                  className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              ) : null}

              {/* Decorative fallback / overlay visible when image hasn't loaded */}
              {(!imageLoaded || imageError) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full border border-primary/20 flex items-center justify-center">
                    <Scissors className="w-8 h-8 text-primary/40" />
                  </div>
                  <span className="font-serif text-2xl text-primary/30 tracking-widest">SAHO</span>
                </div>
              )}

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-transparent to-transparent" />

              {/* Floating label inside image */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" style={{ boxShadow: "0 0 6px rgba(200,168,75,0.8)" }} />
                  <span className="text-xs text-white/80 tracking-widest uppercase font-medium">Sedan 1999</span>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-primary/10 rounded-3xl -z-10" />
            </div>

            {/* Stats grid below image */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`bg-background border border-white/[0.06] rounded-xl p-4 transition-all duration-500 hover:border-primary/30 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + i * 80}ms` }}
                >
                  <stat.icon className="w-4 h-4 text-primary mb-2 opacity-80" />
                  <div className="font-serif text-2xl font-bold text-primary leading-none">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>

            {/* Story text */}
            <div className="space-y-5 text-muted-foreground leading-[1.85] text-[0.95rem] mb-10">
              <p>
                Sedan 1999 har Salong Saho byggt ett rykte som en av de bästa barberarsalongerna i södra Stockholm. Med två salonger i Haninge och Tyresö serverar vi kunder som kommer från hela Stockholmsområdet.
              </p>
              <p>
                Vårt team brinner för detaljer. Varje klippning, varje fade, varje skäggtrim utförs med precision och omsorg. Vi lyssnar på vad du vill ha och levererar resultat som överträffar dina förväntningar.
              </p>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-primary/40 mb-10" />

            {/* Highlights */}
            <div className="space-y-3 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-background border border-white/[0.05] hover:border-primary/25 transition-all duration-300 group ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{ transitionDelay: `${400 + index * 80}ms` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{item.label}</span>
                  <span className="ml-auto text-primary/40 group-hover:text-primary transition-colors text-xs">→</span>
                </div>
              ))}
            </div>

            {/* Quote pull */}
            <div className="relative pl-5 border-l-2 border-primary/40">
              <p className="font-serif italic text-[1.05rem] text-foreground/70 leading-relaxed">
                "Vi lägger ner oerhört mycket tid på detaljer – det är vad som skiljer oss från alla andra."
              </p>
              <span className="block mt-3 text-xs text-muted-foreground tracking-wide">— Kund via Reco.se</span>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#salonger"
                className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors font-semibold group text-sm tracking-wide"
              >
                <span>Besök oss</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

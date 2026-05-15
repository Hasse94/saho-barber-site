"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Akrem M.",
    source: "Reco.se",
    text: "Världens bästa frisör, jag blir supernöjd varje gång. Jag skulle verkligen rekommendera!",
    rating: 5,
  },
  {
    name: "Musti K.",
    source: "Reco.se",
    text: "Rakade skägget, fixade håret – finns ingen bättre frisör! Billigt också.",
    rating: 5,
  },
  {
    name: "Kund via Reco",
    source: "Reco.se",
    text: "Grymt bra helt enkelt! Bra bemötande, noggranna när de klipper och bra pris!",
    rating: 5,
  },
  {
    name: "Trogen kund",
    source: "Reco.se",
    text: "Jag bor i Jakobsberg och åker ca 4 mil enbart för denna salong. Saho lägger ner oerhört mycket tid på detaljer.",
    rating: 5,
  },
  {
    name: "Nöjd kund",
    source: "Reco.se",
    text: "Åsa levererar alltid! Hon är lyhörd och klipper så snyggt och noggrant. Håret blir lättstylat och frisyren håller sig fin länge.",
    rating: 5,
  },
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const goTo = (index: number) => {
    if (isTransitioning || index === activeIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveIndex(index)
      setIsTransitioning(false)
    }, 250)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((activeIndex + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-[0.72rem] tracking-[0.2em] uppercase font-semibold">
            Kundrecensioner
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Vad våra kunder säger
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-[0.95rem]">
            Vi är stolta över vårt 5.0 betyg. Här är vad några av våra kunder tycker.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div
          className={`max-w-2xl mx-auto mb-12 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-background border border-white/[0.06] rounded-2xl p-8 md:p-12">
            <Quote className="absolute top-7 left-7 w-10 h-10 text-primary/15" />

            <div
              className="relative z-10 transition-all duration-250"
              style={{ opacity: isTransitioning ? 0 : 1, transform: isTransitioning ? "translateY(6px)" : "translateY(0)" }}
            >
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-foreground text-center leading-relaxed font-serif italic">
                &ldquo;{testimonials[activeIndex].text}&rdquo;
              </p>

              <div className="mt-7 text-center">
                <div className="inline-flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonials[activeIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground text-sm">{testimonials[activeIndex].name}</div>
                    <div className="text-xs text-muted-foreground">{testimonials[activeIndex].source}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    index === activeIndex
                      ? "w-7 bg-primary"
                      : "w-1.5 bg-white/15 hover:bg-white/30"
                  }`}
                  aria-label={`Gå till recension ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Rating Badge */}
        <div
          className={`text-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-4 bg-background border border-white/[0.06] rounded-full px-6 py-3">
            <div className="text-xl font-serif font-bold text-foreground">5.0 / 5.0</div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="text-xs text-muted-foreground leading-tight">
              på Barberhead<br />
              <span className="opacity-70">10+ verifierade besökare</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

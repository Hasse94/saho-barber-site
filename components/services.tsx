"use client"

import { useEffect, useRef, useState } from "react"
import { Phone } from "lucide-react"

const services = [
  {
    image: "/herrklippning.jpg.jpeg",
    title: "Herrklippning",
    description: "Klassisk eller modern klippning anpassad efter ditt ansiktes form och stil. Vi tar oss tid för varje kund.",
    price: "från 350 kr",
  },
  {
    image: "/fade-taper.jpg.jpeg",
    title: "Fade & Taper",
    description: "Skarpa, rena fades – från skin fade till taper. Exakt precision med maskin och sax.",
    price: "från 350 kr",
  },
  {
    image: "/skaggvard.jpg.jpeg",
    title: "Skäggvård",
    description: "Professionell skäggtrimning och formning. Vi hjälper dig hitta den perfekta stilen för ditt skägg.",
    price: "från 250 kr",
  },
  {
    image: "/rakning.jpg.jpeg",
    title: "Rakning med Rakblad",
    description: "Traditionell rakning med varmt handduk och rakblad. En upplevelse utöver det vanliga.",
    price: "från 250 kr",
  },
  {
    image: "/varm-handduk.jpg.jpeg",
    title: "Varm Handduk & Ansiktsvård",
    description: "Avkopplande behandling med varma och kalla handdukar, black mask och vaxning.",
    price: "från 150 kr",
  },
  {
    image: "/barnklippning.jpg.jpeg",
    title: "Barnklippning",
    description: "Trygga och professionella klippningar för de yngsta. Barnvänlig atmosfär med toppresultat.",
    price: "från 280 kr",
  },
]

export function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )
    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="tjanster" ref={sectionRef} className="py-24 md:py-32 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-primary text-[0.72rem] tracking-[0.2em] uppercase font-semibold">
            Våra Tjänster
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Vad kan vi göra för dig?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-[0.95rem] leading-relaxed">
            Från klassiska klippningar till moderna fades – vi levererar alltid med precision och stil.
          </p>
        </div>

        {/* Photo Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:shadow-[0_8px_40px_rgba(200,168,75,0.12)] hover:-translate-y-1 ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-[1.1rem] font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-muted-foreground text-sm mb-3">Ring oss för att boka din tid</p>
          <a
            href="tel:087776800"
            className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors font-semibold tracking-wide group"
          >
            <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>08-777 68 00</span>
          </a>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"

const brands = [
  {
    name: "Hey Joe",
    tagline: "Barber Products",
    nameStyle: "font-sans font-black text-2xl tracking-tight italic",
  },
  {
    name: "DR JACKSON",
    tagline: "Since 1976",
    nameStyle: "font-sans font-black text-xl tracking-tight",
  },
  {
    name: "MONPLATIN",
    tagline: "Professional",
    nameStyle: "font-sans font-light text-lg tracking-[0.28em] uppercase",
  },
  {
    name: "Proraso",
    tagline: "Firenze · Dal 1948",
    nameStyle: "font-serif font-bold text-2xl tracking-wide",
  },
  {
    name: "UPPERCUT",
    tagline: "Deluxe",
    nameStyle: "font-sans font-black text-xl tracking-widest",
  },
  {
    name: "Jokebarber",
    tagline: "Modern Grooming",
    nameStyle: "font-sans font-bold text-xl tracking-tight",
  },
]

export function Brands() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section ref={sectionRef} className="py-20 md:py-28 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary text-[0.72rem] tracking-[0.25em] uppercase font-semibold">
            Varumärken vi litar på
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Professionella produkter — varje dag
          </h2>
          <p className="text-muted-foreground text-[0.9rem] max-w-md mx-auto leading-relaxed">
            Vi arbetar uteslutande med marknadens mest respekterade märken inom barber och grooming.
          </p>
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {brands.map((brand, i) => (
            <div
              key={i}
              className={`group relative flex flex-col items-center justify-center gap-1.5 bg-card px-6 py-10 text-center
                hover:bg-card/60 transition-all duration-300 cursor-default
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${100 + i * 80}ms` }}
            >
              {/* Gold accent bar on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

              <span
                className={`text-foreground/70 group-hover:text-primary transition-colors duration-300 leading-tight ${brand.nameStyle}`}
              >
                {brand.name}
              </span>
              <span className="text-muted-foreground text-[0.62rem] tracking-[0.15em] uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                {brand.tagline}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className={`text-center text-muted-foreground text-[0.78rem] mt-8 tracking-wide transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Oavsett om du är barberare eller frisör — vi har produkterna du behöver.
        </p>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Star, Users, Instagram, MapPin } from "lucide-react"

const highlights = [
  { icon: Award, label: "Medlem i Frisörföretagarna" },
  { icon: Star, label: "5.0 på Barberhead" },
  { icon: Users, label: "Sponsor för IFK Haninge" },
  { icon: Instagram, label: "2 400+ följare på Instagram" },
]

const stats = [
  { value: "25+", label: "Års erfarenhet" },
  { value: "10k+", label: "Nöjda kunder" },
  { value: "2", label: "Salonger" },
  { value: "5.0", label: "Betyg" },
]

export function About() {
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
    <section id="om-oss" ref={sectionRef} className="py-16 md:py-20 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Stats bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center py-5 px-3 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors"
            >
              <div className="font-serif text-2xl md:text-3xl font-bold text-primary leading-none">{stat.value}</div>
              <div className="text-[0.68rem] text-muted-foreground mt-1.5 tracking-wide leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main content: 2 columns */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* LEFT: Text */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            <span className="text-primary text-[0.72rem] tracking-[0.2em] uppercase font-semibold">Om Salong Saho</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mt-3 mb-5">
              Mer än bara<br />
              <span className="text-primary">en klippning.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-[0.93rem] mb-5">
              Sedan 1999 har Salong Saho byggt ett rykte som en av de bästa barberarsalongerna i södra Stockholm. Med salonger i Haninge och Tyresö välkomnar vi kunder från hela Stockholmsområdet.
            </p>
            <p className="text-muted-foreground leading-relaxed text-[0.93rem] mb-8">
              Varje klippning utförs med precision och omsorg – alltid med professionella produkter och rätt teknik.
            </p>

            <a
              href="#salonger"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide hover:brightness-110 hover:shadow-[0_6px_24px_rgba(200,168,75,0.35)] transition-all duration-300"
            >
              <MapPin className="w-4 h-4" />
              Hitta till oss
            </a>
          </div>

          {/* RIGHT: Highlights */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center text-center gap-2.5 py-5 px-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + i * 70}ms` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs text-foreground/75 leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

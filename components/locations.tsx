"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react"

const locations = [
  {
    name: "Salong Saho Tyresö",
    address: "Vårflodsgatan 23, 135 40 Tyresö",
    phone: "08-777 68 00",
    hours: [
      { day: "Måndag – Fredag", time: "10:00 – 19:00" },
      { day: "Lördag", time: "10:00 – 16:00" },
      { day: "Söndag", time: "Stängt" },
    ],
    mapUrl: "https://maps.google.com/?q=Vårflodsgatan+23,+135+40+Tyresö",
    tag: "Tyresö",
  },
  {
    name: "Salong Saho Handen",
    address: "Vikingavägen 19, 136 43 Handen",
    phone: "08-777 68 00",
    hours: [
      { day: "Måndag – Fredag", time: "09:00 – 18:00" },
      { day: "Lördag", time: "09:00 – 15:00" },
      { day: "Söndag", time: "Stängt" },
    ],
    mapUrl: "https://maps.google.com/?q=Vikingavägen+19,+136+43+Handen",
    tag: "Haninge",
  },
]

export function Locations() {
  const [isVisible, setIsVisible] = useState(false)
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
    <section id="salonger" ref={sectionRef} className="py-24 md:py-32 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary text-[0.72rem] tracking-[0.2em] uppercase font-semibold">
            Våra Salonger
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Hitta Oss
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-[0.95rem]">
            Två salonger i södra Stockholm – alltid nära dig.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/35 hover:shadow-[0_4px_32px_rgba(200,168,75,0.1)] hover:-translate-y-0.5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Tag */}
              <div className="absolute top-5 right-5">
                <span className="px-2.5 py-1 bg-primary/10 text-primary text-[0.7rem] font-semibold rounded-full tracking-wide">
                  {location.tag}
                </span>
              </div>

              <div className="p-8">
                <h3 className="font-serif text-[1.3rem] font-semibold text-foreground mb-6 group-hover:text-primary transition-colors duration-300 pr-16">
                  {location.name}
                </h3>

                <div className="flex items-start gap-3 mb-5">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground text-sm">{location.address}</p>
                    <a
                      href={location.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
                    >
                      Öppna i Google Maps
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-5">
                  <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-2.5 font-semibold uppercase tracking-wide">Öppettider</p>
                    <div className="space-y-1.5">
                      {location.hours.map((hour, hourIndex) => (
                        <div key={hourIndex} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{hour.day}</span>
                          <span className={`font-medium ${hour.time === "Stängt" ? "text-muted-foreground/50" : "text-foreground"}`}>
                            {hour.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a
                    href={`tel:${location.phone.replace(/[-\s]/g, "")}`}
                    className="text-foreground hover:text-primary transition-colors font-medium text-sm"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Map */}
        <div
          className={`mt-10 rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative aspect-[21/9] bg-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130231.0799374!2d18.06173!3d59.21631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77fe2b0be5f7%3A0x500b294c33b97a0!2sHanden!5e0!3m2!1ssv!2sse!4v1620000000000!5m2!1ssv!2sse"
              className="absolute inset-0 w-full h-full grayscale contrast-110 opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karta över våra salonger"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

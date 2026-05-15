"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram, X } from "lucide-react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2013.07.1744-eWxJ1TdalufDUoR9xQWBDP4F7N9Tmw.jpeg",
    alt: "Barberare på jobbet",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2013.07.1722-W0yaWMdOi4Lcgom93b9GyhSLZMOITn.jpeg",
    alt: "Salongen i action",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2013.07.15-lq1CDUrqAUKkRqCumpHr8Wv6qp0t9B.jpeg",
    alt: "Skäggtrimning",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2013.07.13-JzL4fvxjsi4PO21AINNbeNtBEfGxLX.jpeg",
    alt: "Professionell styling",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2013.07.17-zqm6iCLhNmnvwOUwloAMTD9ZCH9QY0.jpeg",
    alt: "Produkter för skägg och hår",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2013.07.171-veQZUUBVQt72Bgr0T0cKGg0kBbpFYo.jpeg",
    alt: "Premium hårvårdsprodukter",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2013.07.1717-gF4ZryUjUfdD15jFqYvwKmFsp5u3VG.jpeg",
    alt: "Kundservice",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-10%20at%2013.07.17222-wFQcOyO2VjyAQJ3QfbuICZ4N0upSpK.jpeg",
    alt: "Modern barbershop",
  },
]

export function Gallery() {
  const [visibleImages, setVisibleImages] = useState<number[]>([])
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleImages((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const images = sectionRef.current?.querySelectorAll("[data-index]")
    images?.forEach((img) => observer.observe(img))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null)
      if (selectedImage !== null) {
        if (e.key === "ArrowRight") {
          setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null))
        }
        if (e.key === "ArrowLeft") {
          setSelectedImage((prev) =>
            prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
          )
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  return (
    <section id="galleri" ref={sectionRef} className="py-24 md:py-32 bg-background relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm tracking-widest uppercase font-medium">
            Galleri
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance">
            Vårt Hantverk
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Följ oss på Instagram{" "}
            <a
              href="https://instagram.com/salong_saho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @salong_saho
            </a>{" "}
            för daglig inspiration.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ${
                visibleImages.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/salong_saho"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors font-medium group"
          >
            <Instagram className="w-5 h-5" />
            <span>Följ oss på Instagram</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Stäng"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-full object-contain rounded-lg"
            />

            {/* Navigation */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) =>
                  prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
                )
              }}
              aria-label="Föregående"
            >
              ←
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null))
              }}
              aria-label="Nästa"
            >
              →
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

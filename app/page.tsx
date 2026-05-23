import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Prislista } from "@/components/prislista"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Locations } from "@/components/locations"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <Prislista />
      <About />
      <Gallery />
      <Testimonials />
      <Locations />
      <CTA />
      <Footer />

      {/* Floating CTA */}
      <a
        href="tel:087776800"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-transparent text-primary border border-primary/60 backdrop-blur-sm px-5 py-3 rounded-full font-semibold text-sm tracking-wide hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-[0_8px_32px_rgba(200,168,75,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
      >
        <span className="w-2 h-2 rounded-full bg-primary-foreground/80 animate-pulse flex-shrink-0" />
        Boka tid
      </a>
    </main>
  )
}

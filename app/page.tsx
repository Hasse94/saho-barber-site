import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Brands } from "@/components/brands"
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
      <About />
      <Brands />
      <Gallery />
      <Testimonials />
      <Locations />
      <CTA />
      <Footer />
    </main>
  )
}

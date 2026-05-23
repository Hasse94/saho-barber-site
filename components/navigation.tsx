"use client"

import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#prislista", label: "Prislista" },
  { href: "#om-oss", label: "Om Oss" },
  { href: "#galleri", label: "Galleri" },
  { href: "#salonger", label: "Kontakt" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
      const sections = navLinks.map((l) => l.href.replace("#", ""))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#080808]/96 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.05)] border-b border-white/[0.04]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">

            <a href="#" className="flex items-center gap-3 group" aria-label="Salong Saho – hem">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/30 group-hover:border-primary/70 transition-colors duration-300 flex-shrink-0"
                style={{ boxShadow: "0 0 12px rgba(200,168,75,0.15)" }}>
                <Image
                  src="/saho-logo.jpeg"
                  alt="Saho Barbershop logotyp"
                  fill
                  className="object-cover object-center scale-110"
                  sizes="40px"
                />
              </div>
              <span className="font-serif text-[1.2rem] font-bold tracking-tight">
                <span className="text-foreground">SALONG</span>
                <span className="text-primary ml-[0.2em]">SAHO</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "")
                const isActive = activeSection === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative text-[0.82rem] tracking-wide transition-colors duration-300 group ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                )
              })}
            </div>

            <div className="hidden md:block">
              <a
                href="tel:087776800"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-[0.8rem] font-semibold tracking-wide transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_rgba(200,168,75,0.35)] active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Ring &amp; Boka</span>
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Öppna meny"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808] transition-opacity duration-400 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="flex flex-col items-center justify-center h-full gap-9 relative z-10">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/40 mb-2">
            <Image
              src="/saho-logo.jpeg"
              alt="Saho Barbershop logotyp"
              fill
              className="object-cover object-center scale-110"
              sizes="80px"
            />
          </div>
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-serif text-foreground hover:text-primary transition-colors duration-200"
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s ease ${index * 0.07 + 0.1}s, transform 0.4s ease ${index * 0.07 + 0.1}s, color 0.2s`,
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:087776800"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.4s ease 0.38s, transform 0.4s ease 0.38s",
            }}
          >
            <Phone className="w-4 h-4" />
            <span>08-777 68 00</span>
          </a>
        </div>
      </div>
    </>
  )
}

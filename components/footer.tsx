"use client"

import { Instagram, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#om-oss", label: "Om oss" },
  { href: "#galleri", label: "Galleri" },
  { href: "#salonger", label: "Våra salonger" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="font-serif text-[1.25rem] font-bold tracking-tight">
                <span className="text-foreground">Salong</span>
                <span className="text-primary ml-[0.2em]">SAHO</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-[220px]">
              Premium barberare i södra Stockholm sedan 1999. Klassiskt hantverk möter modern stil.
            </p>
            <a
              href="https://instagram.com/salong_saho"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/8 inline-flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[0.8rem] font-semibold text-foreground mb-4 tracking-wide uppercase">Snabblänkar</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tyresö */}
          <div>
            <h4 className="text-[0.8rem] font-semibold text-foreground mb-4 tracking-wide uppercase">Tyresö</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                <span>Vårflodsgatan 23, 135 40 Tyresö</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <a href="tel:087776800" className="hover:text-primary transition-colors">
                  08-777 68 00
                </a>
              </li>
              <li className="text-xs text-muted-foreground/70 pl-5">Mån–Fre: 10–19 &nbsp;|&nbsp; Lör: 10–16</li>
            </ul>
          </div>

          {/* Handen */}
          <div>
            <h4 className="text-[0.8rem] font-semibold text-foreground mb-4 tracking-wide uppercase">Handen</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                <span>Vikingavägen 19, 136 43 Handen</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <a href="tel:087776800" className="hover:text-primary transition-colors">
                  08-777 68 00
                </a>
              </li>
              <li className="text-xs text-muted-foreground/70 pl-5">Mån–Fre: 09–18 &nbsp;|&nbsp; Lör: 09–15</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/60">
            © {currentYear} Salong Saho. Alla rättigheter förbehållna.
          </p>
          <p className="text-xs text-muted-foreground/60 inline-flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            Bokning via telefon
          </p>
        </div>
      </div>
    </footer>
  )
}

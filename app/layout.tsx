import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Salong Saho | Frisör & Barberare i Tyresö & Haninge',
  description: 'Professionell barberare och frisör i södra Stockholm. Två salonger i Tyresö och Handen. Herrklippning, fade, skäggvård och traditionell rakning. Boka via telefon!',
  keywords: 'frisör, barberare, herrklippning, fade, skägg, Tyresö, Handen, Haninge, Stockholm',
  icons: {
    icon: [
      { url: '/saho-logo.jpeg', type: 'image/jpeg' },
    ],
    apple: '/saho-logo.jpeg',
    shortcut: '/saho-logo.jpeg',
  },
  openGraph: {
    title: 'Salong Saho | Frisör & Barberare',
    description: 'Professionell barberare i södra Stockholm sedan 1999',
    type: 'website',
    images: [{ url: '/saho-logo.jpeg' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" className={`${playfair.variable} ${inter.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

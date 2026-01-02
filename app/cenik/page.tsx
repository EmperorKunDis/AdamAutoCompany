"use client"

import { Check, Info } from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const pricingData = [
  {
    category: "Exteriér",
    items: [
      { name: "Ruční mytí & Vosk", price: "od 1 500 Kč", desc: "Šetrné mytí, dekontaminace, tekutý vosk" },
      { name: "1-krokové leštění", price: "od 5 500 Kč", desc: "Odstranění lehkých škrábanců, zvýšení lesku" },
      { name: "2-krokové leštění", price: "od 8 500 Kč", desc: "Hlubší korekce laku, odstranění hologramů" },
      { name: "Keramická ochrana (3 roky)", price: "od 8 900 Kč", desc: "Gyeon Pure EVO, vč. přípravy laku" },
      { name: "Keramická ochrana (5 let)", price: "od 14 900 Kč", desc: "Gyeon Infinite, certifikovaná aplikace" },
    ]
  },
  {
    category: "Interiér",
    items: [
      { name: "Základní čištění", price: "od 1 900 Kč", desc: "Vysátí, utření prachu, okna" },
      { name: "Hloubkové tepování", price: "od 3 500 Kč", desc: "Mokré čištění sedaček a koberců" },
      { name: "Čištění kůže & Impregnace", price: "od 2 900 Kč", desc: "Šetrné čištění, výživa kůže" },
      { name: "Kompletní detailing", price: "od 4 900 Kč", desc: "Vše výše uvedené + detaily" },
    ]
  },
  {
    category: "Doplňkové služby",
    items: [
      { name: "Tekuté stěrače", price: "od 1 200 Kč", desc: "Výdrž až 12 měsíců" },
      { name: "Renovace světlometů", price: "1 500 Kč / pár", desc: "Broušení, leštění, UV ochrana" },
      { name: "Čištění motoru", price: "od 900 Kč", desc: "Pára + impregnace plastů" },
      { name: "Ozonizace", price: "500 Kč", desc: "Dezinfekce klimatizace a interiéru" },
    ]
  }
]

export default function PricingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-16 container px-4 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">Ceník Služeb</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparentní ceny bez skrytých poplatků. Konečná cena se může lišit dle velikosti a znečištění vozu.
          </p>
        </div>

        <div className="grid gap-8">
          {pricingData.map((section, idx) => (
            <Card key={idx} className="bg-card/30 border-white/5 overflow-hidden">
              <CardHeader className="bg-secondary/50 border-b border-white/5">
                <CardTitle className="text-2xl text-primary">{section.category}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-white/5">
                  {section.items.map((item, i) => (
                    <div key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                      <div className="space-y-1">
                        <div className="font-bold text-lg">{item.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <Info size={14} />
                          {item.desc}
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                        <span className="text-xl font-bold font-space-grotesk whitespace-nowrap">{item.price}</span>
                        <Button asChild size="sm" variant="outline" className="border-primary/20 hover:bg-primary hover:text-white">
                          <Link href="/objednavka">Objednat</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
          <h3 className="text-xl font-bold mb-4">Máte specifický požadavek?</h3>
          <p className="text-muted-foreground mb-6">
            Rádi vám připravíme individuální cenovou nabídku pro firemní flotily nebo nestandardní projekty.
          </p>
          <Button asChild>
            <Link href="/kontakt">Kontaktujte nás</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}

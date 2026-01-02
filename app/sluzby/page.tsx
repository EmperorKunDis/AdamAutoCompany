"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { id: "all", name: "Všechny služby" },
  { id: "exterior", name: "Exteriér" },
  { id: "interior", name: "Interiér" },
  { id: "packages", name: "Balíčky" },
]

const services = [
  {
    id: 1,
    title: "Keramická ochrana 3 roky",
    category: "exterior",
    price: "od 8 900 Kč",
    description: "Profesionální aplikace keramiky Gyeon. Tvrdost 9H, hydrofobní efekt, UV ochrana.",
    features: ["Ruční mytí a dekontaminace", "1-krokové leštění", "Aplikace keramiky", "Ošetření oken"],
  },
  {
    id: 2,
    title: "Hloubkové čištění interiéru",
    category: "interior",
    price: "od 3 500 Kč",
    description: "Kompletní tepování sedaček, koberců a čištění všech plastů. Dezinfekce ozonem.",
    features: ["Tepování mokrou cestou", "Čištění kůže", "Detailing palubní desky", "Ozonizace"],
  },
  {
    id: 3,
    title: "Premium Care Balíček",
    category: "packages",
    price: "od 12 500 Kč",
    description: "Kombinace keramické ochrany a detailního čištění interiéru za zvýhodněnou cenu.",
    features: ["Vše z Exteriéru", "Vše z Interiéru", "Sleva 15%", "Doprava v rámci Prahy"],
  },
  {
    id: 4,
    title: "Renovace světlometů",
    category: "exterior",
    price: "od 1 500 Kč",
    description: "Broušení a leštění zašlých světlometů + aplikace ochranné keramické vrstvy.",
    features: ["Odstranění oxidace", "Broušení pod vodou", "Leštění do čira", "UV ochrana"],
  },
  {
    id: 5,
    title: "PPF Ochranná fólie (Front)",
    category: "exterior",
    price: "od 25 000 Kč",
    description: "Neviditelný štít proti kamínkům. Aplikace na nárazník, kapotu, blatníky a zrcátka.",
    features: ["Samo-zacelovací schopnost", "Záruka 10 let", "Neviditelná aplikace", "Ochrana proti oděrkám"],
  },
  {
    id: 6,
    title: "Příprava na prodej",
    category: "packages",
    price: "od 6 500 Kč",
    description: "Maximalizujte prodejní cenu vozu. Důkladné vyčištění a naleštění pro perfektní fotky.",
    features: ["Kompletní mytí", "Základní leštění", "Interiér detailing", "Focení vozu"],
  }
]

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(s => s.category === activeCategory)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">Naše Služby</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Vyberte si z naší nabídky profesionálních detailingových služeb.
            Ke každému vozu přistupujeme individuálně s maximální pečlivostí.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-[0_0_15px_rgba(230,57,70,0.3)]"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col bg-card/50 border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="text-sm text-primary font-medium mb-2 uppercase tracking-wider">
                      {categories.find(c => c.id === service.category)?.name}
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between border-t border-white/5 pt-6">
                    <div className="text-xl font-bold">{service.price}</div>
                    <Button asChild size="sm">
                      <Link href={`/objednavka?service=${service.id}`}>Objednat</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}

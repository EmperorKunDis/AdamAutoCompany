"use client"

import { motion } from "framer-motion"
import { Award, Calendar, Car, Heart, Shield, Star } from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <div className="pt-32 pb-20 container px-4 mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6"
        >
          O Nás
        </motion.h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Jsme tým nadšenců, kteří věří, že auto není jen dopravní prostředek. 
          Je to vizitka, radost a investice, která si zaslouží tu nejlepší péči.
        </p>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-secondary/30">
        <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-space-grotesk text-primary">Náš Příběh</h2>
            <p className="text-muted-foreground leading-relaxed">
              Začalo to v roce 2015 v malé garáži s jednou leštičkou a velkým snem. 
              Dnes jsme jedním z nejmodernějších detailingových center v Praze.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Za ta léta nám rukama prošly tisíce vozů – od rodinných kombíků přes 
              sportovní speciály až po vzácné veterány. Ke každému přistupujeme se 
              stejnou vášní a precizností, jako by šlo o naše vlastní auto.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Shield size={20} />
                </div>
                <span className="font-medium">Pojištěná dílna</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Award size={20} />
                </div>
                <span className="font-medium">Certifikovaný tým</span>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
            {/* Placeholder for Team Photo */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
               <Car className="w-24 h-24 opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 container px-4 mx-auto">
        <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">Naše Hodnoty</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Preciznost", 
              desc: "Detailing není o rychlosti, ale o trpělivosti a smyslu pro detail. Nikdy nespěcháme na úkor kvality.",
              icon: Star 
            },
            { 
              title: "Technologie", 
              desc: "Používáme jen tu nejmodernější chemii a vybavení (Gyeon, Rupes, Scangrip) pro nejlepší výsledky.",
              icon: Car 
            },
            { 
              title: "Transparentnost", 
              desc: "Vždy víte, za co platíte. Předem konzultujeme stav vozu a navrhujeme nejvhodnější řešení.",
              icon: Heart 
            },
          ].map((val, i) => (
            <div key={i} className="p-8 rounded-2xl bg-card border border-white/5 text-center hover:border-primary/50 transition-colors">
              <val.icon className="w-12 h-12 mx-auto mb-6 text-primary" />
              <h3 className="text-xl font-bold mb-4">{val.title}</h3>
              <p className="text-muted-foreground">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="py-20 border-t border-white/5">
        <div className="container px-4 mx-auto">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div>
               <div className="text-4xl font-bold font-space-grotesk text-white mb-2">10+</div>
               <div className="text-sm text-muted-foreground uppercase tracking-widest">Let na trhu</div>
             </div>
             <div>
               <div className="text-4xl font-bold font-space-grotesk text-white mb-2">2500+</div>
               <div className="text-sm text-muted-foreground uppercase tracking-widest">Aut</div>
             </div>
             <div>
               <div className="text-4xl font-bold font-space-grotesk text-white mb-2">15</div>
               <div className="text-sm text-muted-foreground uppercase tracking-widest">Certifikátů</div>
             </div>
             <div>
               <div className="text-4xl font-bold font-space-grotesk text-white mb-2">100%</div>
               <div className="text-sm text-muted-foreground uppercase tracking-widest">Hodnocení</div>
             </div>
           </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

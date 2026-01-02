"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Shield, Sparkles, Timer } from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient / Placeholder for Video */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0A0A0A] to-black z-0" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-0" />
        
        {/* Content */}
        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6 backdrop-blur-sm">
              Premium Auto Detailing Studio
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-space-grotesk tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              DOKONALOST<br /> V KAŽDÉM DETAILU
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Posouváme péči o vozy na úroveň umění. Certifikovaná aplikace keramických ochran,
              PPF fólií a precizní renovace laku.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(230,57,70,0.4)] transition-all hover:scale-105">
                <Link href="/objednavka">
                  Rezervovat termín <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-white/10 hover:bg-white/5 backdrop-blur-sm">
                <Link href="/sluzby">Prohlédnout služby</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent" />
        </motion.div>
      </section>

      {/* Why Us / Stats Section */}
      <section className="py-24 bg-secondary/50 border-y border-white/5 relative">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Spokojených klientů", value: "2,500+", icon: Sparkles },
              { label: "Let zkušeností", value: "10+", icon: Shield },
              { label: "Certifikací", value: "15+", icon: CheckCircle2 },
              { label: "Dní v roce", value: "365", icon: Timer },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-colors group"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold font-space-grotesk text-white mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-4">Naše Služby</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nabízíme komplexní péči o exteriér i interiér vašeho vozu s důrazem na maximální kvalitu a trvanlivost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Keramická ochrana",
              desc: "Maximální lesk a ochrana laku až na 5 let. Odolnost vůči chemikáliím a UV.",
              price: "od 8 900 Kč",
              href: "/sluzby/keramika"
            },
            {
              title: "Renovace laku",
              desc: "Odstranění škrábanců a hologramů. Vícestupňové leštění pro zrcadlový lesk.",
              price: "od 5 500 Kč",
              href: "/sluzby/lesteni"
            },
            {
              title: "Detailing interiéru",
              desc: "Hloubkové čištění kůže, tepování a ozonizace. Vůně nového vozu.",
              price: "od 3 500 Kč",
              href: "/sluzby/interier"
            }
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="h-full bg-card border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="font-bold text-lg">{service.price}</span>
                    <Button variant="link" className="text-primary p-0 h-auto">
                      Zjistit více <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-white/10">
            <Link href="/sluzby">Zobrazit všechny služby</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
        
        <div className="container relative z-10 px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8">
            Připraveni na proměnu?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Dopřejte svému vozu péči, kterou si zaslouží. Termíny se rychle plní.
          </p>
          <Button asChild size="lg" className="h-16 px-10 text-xl bg-white text-black hover:bg-white/90">
            <Link href="/objednavka">
              Objednat nezávazně
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

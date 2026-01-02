"use client"

import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-20 container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-8">Kontaktujte nás</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Máte dotaz ohledně našich služeb nebo si chcete rezervovat termín? 
              Jsme tu pro vás každý všední den.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Kde nás najdete</h3>
                  <p className="text-muted-foreground">Pražská 123<br />110 00 Praha 1</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Zavolejte nám</h3>
                  <p className="text-muted-foreground mb-1">+420 123 456 789</p>
                  <p className="text-sm text-muted-foreground">Po-Pá 8:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Napište nám</h3>
                  <p className="text-muted-foreground">info@autodetailing.cz</p>
                  <p className="text-muted-foreground">objednavky@autodetailing.cz</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Otevírací doba</h3>
                  <div className="grid grid-cols-2 gap-x-8 text-muted-foreground">
                    <span>Pondělí - Pátek</span>
                    <span>8:00 - 17:00</span>
                    <span>Sobota</span>
                    <span>Dle dohody</span>
                    <span>Neděle</span>
                    <span>Zavřeno</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Map */}
          <div className="space-y-8">
            <Card className="bg-card/50 border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold font-space-grotesk mb-6">Rychlá zpráva</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Jméno</Label>
                      <Input placeholder="Jan Novák" />
                    </div>
                    <div className="space-y-2">
                      <Label>Email</Label>
                      <Input type="email" placeholder="jan@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Zpráva</Label>
                    <Textarea placeholder="O co máte zájem?" className="min-h-[120px]" />
                  </div>
                  <Button className="w-full">Odeslat zprávu</Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <div className="h-[300px] w-full rounded-2xl bg-secondary/50 border border-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10" />
              <div className="text-center z-20">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2 animate-bounce" />
                <span className="text-sm font-medium">Interaktivní mapa bude zde</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  )
}

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronLeft, ChevronRight, Car, Calendar, User, FileText } from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  { id: 1, name: "Vozidlo", icon: Car },
  { id: 2, name: "Služby", icon: FileText },
  { id: 3, name: "Termín", icon: Calendar },
  { id: 4, name: "Kontakt", icon: User },
]

export default function OrderPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    vehicleType: "",
    brand: "",
    model: "",
    services: [] as string[],
    date: "",
    name: "",
    email: "",
    phone: "",
    note: ""
  })

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(c => c + 1)
    else handleSubmit()
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(c => c - 1)
  }

  const handleSubmit = () => {
    // Mock submission
    setIsSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center p-4">
          <Card className="max-w-md w-full border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold font-space-grotesk mb-2">Objednávka Odeslána</h2>
              <p className="text-muted-foreground mb-6">
                Děkujeme za vaši rezervaci. Brzy vás budeme kontaktovat pro potvrzení termínu.
              </p>
              <Button asChild className="w-full">
                <a href="/">Zpět na úvod</a>
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-16 container px-4 mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-8 text-center">Nezávazná Rezervace</h1>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-secondary -z-10 rounded-full" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-primary -z-10 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          />
          
          {steps.map((step) => {
            const isActive = step.id <= currentStep
            return (
              <div key={step.id} className="flex flex-col items-center bg-background px-2">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors duration-300 ${
                    isActive ? "bg-primary text-white" : "bg-secondary text-muted-foreground"
                  }`}
                >
                  <step.icon size={20} />
                </div>
                <span className={`text-xs font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  {step.name}
                </span>
              </div>
            )
          })}
        </div>

        <Card className="border-white/5 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold mb-4">Informace o vozidle</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Značka vozidla</Label>
                        <Input 
                          placeholder="Např. Audi, BMW..." 
                          value={formData.brand}
                          onChange={(e) => setFormData({...formData, brand: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Model</Label>
                        <Input 
                          placeholder="Např. X5, A6..." 
                          value={formData.model}
                          onChange={(e) => setFormData({...formData, model: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Typ vozidla</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["Osobní", "SUV / Kombi", "Dodávka", "Motorka"].map((type) => (
                          <button
                            key={type}
                            onClick={() => setFormData({...formData, vehicleType: type})}
                            className={`p-4 rounded-lg border text-sm font-medium transition-all ${
                              formData.vehicleType === type
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-input hover:border-primary/50"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold mb-4">Výběr služeb</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Keramická ochrana laku",
                        "Interiér - Hloubkové čištění",
                        "Renovace laku (leštění)",
                        "Mytí motoru",
                        "Tekuté stěrače",
                        "Impregnace kůže"
                      ].map((service) => (
                        <div
                          key={service}
                          onClick={() => toggleService(service)}
                          className={`p-4 rounded-lg border cursor-pointer flex items-center justify-between transition-all ${
                            formData.services.includes(service)
                              ? "border-primary bg-primary/5"
                              : "border-input hover:bg-white/5"
                          }`}
                        >
                          <span className="text-sm font-medium">{service}</span>
                          {formData.services.includes(service) && <Check size={18} className="text-primary" />}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold mb-4">Preferovaný termín</h2>
                    <div className="space-y-4">
                      <Label>Kdy by se vám to hodilo?</Label>
                      <Input 
                        type="date" 
                        className="w-full md:w-1/2" 
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                      />
                      <p className="text-sm text-muted-foreground">
                        Konkrétní čas potvrdíme telefonicky dle aktuální kapacity dílny.
                      </p>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold mb-4">Kontaktní údaje</h2>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label>Jméno a příjmení</Label>
                        <Input 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Email</Label>
                          <Input 
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Telefon</Label>
                          <Input 
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Poznámka</Label>
                        <Textarea 
                          placeholder="Máte nějaké speciální požadavky?"
                          value={formData.note}
                          onChange={(e) => setFormData({...formData, note: e.target.value})}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8 pt-6 border-t border-white/5">
              <Button 
                variant="outline" 
                onClick={handleBack} 
                disabled={currentStep === 1}
                className="w-32"
              >
                <ChevronLeft className="w-4 h-4 mr-2" /> Zpět
              </Button>
              <Button 
                onClick={handleNext} 
                className="w-32"
                disabled={currentStep === 4 && (!formData.name || !formData.email)}
              >
                {currentStep === 4 ? "Odeslat" : "Pokračovat"}
                {currentStep !== 4 && <ChevronRight className="w-4 h-4 ml-2" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </main>
  )
}

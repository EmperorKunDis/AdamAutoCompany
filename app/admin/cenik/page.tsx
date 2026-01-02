"use client"

import { useState } from "react"
import { Plus, Trash2, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function AdminPricingPage() {
  const [services, setServices] = useState([
    { id: 1, name: "Ruční mytí & Vosk", price: "1 500", category: "Exteriér" },
    { id: 2, name: "1-krokové leštění", price: "5 500", category: "Exteriér" },
    { id: 3, name: "Keramická ochrana", price: "8 900", category: "Exteriér" },
    { id: 4, name: "Základní čištění", price: "1 900", category: "Interiér" },
    { id: 5, name: "Hloubkové tepování", price: "3 500", category: "Interiér" },
  ])

  const [newService, setNewService] = useState({ name: "", price: "", category: "Exteriér" })

  const handleAdd = () => {
    if (!newService.name || !newService.price) return
    setServices([...services, { id: Date.now(), ...newService }])
    setNewService({ name: "", price: "", category: "Exteriér" })
  }

  const handleDelete = (id: number) => {
    setServices(services.filter(s => s.id !== id))
  }

  const handleUpdate = (id: number, field: string, value: string) => {
    setServices(services.map(s => s.id === id ? { ...s, [field]: value } : s))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold font-space-grotesk">Správa Ceníku</h2>
        <Button className="bg-green-600 hover:bg-green-700">
          <Save className="w-4 h-4 mr-2" /> Uložit změny
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Add New Form */}
        <Card className="bg-card/50 border-white/5 h-fit">
          <CardHeader>
            <CardTitle>Přidat službu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Název služby</Label>
              <Input 
                value={newService.name} 
                onChange={e => setNewService({...newService, name: e.target.value})}
                placeholder="Např. Nano stěrače" 
              />
            </div>
            <div className="space-y-2">
              <Label>Cena (Kč)</Label>
              <Input 
                value={newService.price} 
                onChange={e => setNewService({...newService, price: e.target.value})}
                placeholder="Např. 1 500" 
              />
            </div>
            <div className="space-y-2">
              <Label>Kategorie</Label>
              <select 
                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                value={newService.category}
                onChange={e => setNewService({...newService, category: e.target.value})}
              >
                <option value="Exteriér">Exteriér</option>
                <option value="Interiér">Interiér</option>
                <option value="Balíčky">Balíčky</option>
                <option value="Speciální">Speciální</option>
              </select>
            </div>
            <Button onClick={handleAdd} className="w-full">
              <Plus className="w-4 h-4 mr-2" /> Přidat do ceníku
            </Button>
          </CardContent>
        </Card>

        {/* List */}
        <Card className="bg-card/50 border-white/5">
          <CardHeader>
            <CardTitle>Přehled služeb</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {["Exteriér", "Interiér", "Balíčky", "Speciální"].map(cat => {
                const catServices = services.filter(s => s.category === cat)
                if (catServices.length === 0) return null
                return (
                  <div key={cat} className="space-y-2">
                    <h3 className="font-bold text-primary text-sm uppercase tracking-wider mb-2">{cat}</h3>
                    {catServices.map(service => (
                      <div key={service.id} className="flex items-center gap-2">
                        <Input 
                          value={service.name} 
                          onChange={e => handleUpdate(service.id, 'name', e.target.value)}
                          className="flex-grow h-9"
                        />
                        <Input 
                          value={service.price} 
                          onChange={e => handleUpdate(service.id, 'price', e.target.value)}
                          className="w-24 h-9 text-right"
                        />
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-9 w-9 text-muted-foreground hover:text-destructive"
                          onClick={() => handleDelete(service.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

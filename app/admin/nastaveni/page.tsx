"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Save } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold font-space-grotesk">Nastavení Webu</h2>
        <Button className="bg-green-600 hover:bg-green-700">
          <Save className="w-4 h-4 mr-2" /> Uložit nastavení
        </Button>
      </div>

      <Card className="bg-card/50 border-white/5">
        <CardHeader>
          <CardTitle>Základní informace</CardTitle>
          <CardDescription>Tyto údaje se zobrazují v patičce a na kontaktní stránce.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Název firmy</Label>
              <Input defaultValue="Auto Detailing Premium" />
            </div>
            <div className="space-y-2">
              <Label>Email pro objednávky</Label>
              <Input defaultValue="objednavky@autodetailing.cz" />
            </div>
            <div className="space-y-2">
              <Label>Telefon</Label>
              <Input defaultValue="+420 123 456 789" />
            </div>
            <div className="space-y-2">
              <Label>IČO</Label>
              <Input defaultValue="12345678" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Adresa</Label>
            <Textarea defaultValue="Pražská 123, 110 00 Praha 1" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-white/5">
        <CardHeader>
          <CardTitle>Provozní doba</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Všední dny (Od - Do)</Label>
              <div className="flex gap-2">
                <Input type="time" defaultValue="08:00" />
                <Input type="time" defaultValue="17:00" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Víkendy</Label>
              <Input defaultValue="Dle dohody" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 border-white/5">
        <CardHeader>
          <CardTitle>SEO a Sociální sítě</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Meta Title (Homepage)</Label>
            <Input defaultValue="Auto Detailing Premium | Profesionální péče o váš vůz" />
          </div>
          <div className="space-y-2">
            <Label>Meta Description</Label>
            <Textarea defaultValue="Ultra-moderní detailingové centrum. Keramická ochrana, PPF fólie, renovace laku a prémiové čištění interiéru." />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Facebook URL</Label>
              <Input placeholder="https://facebook.com/..." />
            </div>
            <div className="space-y-2">
              <Label>Instagram URL</Label>
              <Input placeholder="https://instagram.com/..." />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

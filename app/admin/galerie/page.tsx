"use client"

import { useState } from "react"
import { Upload, X, Trash2, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function AdminGalleryPage() {
  const [images, setImages] = useState([
    { id: 1, src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785", title: "BMW M3 Coating", category: "Ceramic" },
    { id: 2, src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7", title: "Audi Interior", category: "Interior" },
    { id: 3, src: "https://images.unsplash.com/photo-1503376763036-066120622c74", title: "Porsche Polish", category: "Correction" },
    { id: 4, src: "https://images.unsplash.com/photo-1580273916550-e323be2f8160", title: "Tesla PPF", category: "PPF" },
  ])

  const [newImage, setNewImage] = useState({ title: "", category: "" })

  const handleDelete = (id: number) => {
    setImages(images.filter(img => img.id !== id))
  }

  const handleUpload = () => {
    if (!newImage.title) return
    const newItem = {
      id: Date.now(),
      src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800", // Placeholder for demo
      title: newImage.title,
      category: newImage.category || "General"
    }
    setImages([newItem, ...images])
    setNewImage({ title: "", category: "" })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold font-space-grotesk">Správa Galerie</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Upload className="w-4 h-4 mr-2" /> Nahrát fotky
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Přidat nové fotky</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-colors bg-secondary/20">
                <Upload className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground">Přetáhněte soubory sem nebo klikněte pro výběr</p>
                <p className="text-xs text-muted-foreground mt-2">(JPG, PNG, WEBP - max 5MB)</p>
              </div>
              <div className="space-y-2">
                <Label>Název realizace</Label>
                <Input 
                  value={newImage.title}
                  onChange={(e) => setNewImage({...newImage, title: e.target.value})}
                  placeholder="Např. BMW X5 - Full Detailing" 
                />
              </div>
              <div className="space-y-2">
                <Label>Kategorie</Label>
                <Input 
                  value={newImage.category}
                  onChange={(e) => setNewImage({...newImage, category: e.target.value})}
                  placeholder="Ceramic, Interior, PPF..." 
                />
              </div>
              <Button onClick={handleUpload} className="w-full">Uložit do galerie</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <Card key={img.id} className="group overflow-hidden bg-card/50 border-white/5 hover:border-primary/50 transition-all">
            <div className="aspect-square relative overflow-hidden">
              <img src={`${img.src}?auto=format&fit=crop&w=400&q=80`} alt={img.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button variant="secondary" size="icon" className="h-8 w-8"><Edit className="w-4 h-4" /></Button>
                <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => handleDelete(img.id)}><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="font-bold truncate">{img.title}</div>
              <div className="text-sm text-muted-foreground">{img.category}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

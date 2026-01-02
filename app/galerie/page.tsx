"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"

// Mock gallery data
const galleryItems = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `Project ${i + 1}`,
  category: i % 3 === 0 ? "Ceramic" : i % 3 === 1 ? "Interior" : "Correction",
  image: `https://images.unsplash.com/photo-${
    [
      "1601362840469-51e4d8d58785", 
      "1492144534655-ae79c964c9d7",
      "1503376763036-066120622c74",
      "1580273916550-e323be2f8160",
      "1494976388531-d1058494cdd8",
      "1552519507-da8b1227fac4",
      "1549399542-7e3f8b79c341",
      "1493238792012-fa159855b359",
      "1542282088-fe8426682b8f",
      "1519641474086-f52167b6b77f",
      "1535732820275-f8487065778d",
      "1550419350-f843076c8c1d"
    ][i % 12]
  }?auto=format&fit=crop&w=800&q=80`
}))

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-32 pb-16 container px-4 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">Galerie Realizací</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Prohlédněte si ukázky naší práce. Každý vůz je pro nás vizitkou.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(item)}
              className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-lg bg-secondary/50"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center">
                  <ZoomIn className="w-8 h-8 text-white mx-auto mb-2" />
                  <p className="text-white font-medium">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <div className="relative max-w-5xl w-full max-h-[90vh]">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage.image.replace("w=800", "w=1600")} 
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
                {selectedImage.category}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}

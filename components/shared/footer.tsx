import Link from "next/link"
import { Car, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Car className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-space-grotesk tracking-wide uppercase">
                Auto<span className="text-primary">Detailing</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Profesionální péče o vaše vozidlo. Specializujeme se na detailing,
              keramickou ochranu a renovace laku. Vraťte svému vozu lesk.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-space-grotesk font-bold text-lg mb-6 text-white">Rychlé odkazy</h3>
            <ul className="space-y-4">
              {["Služby", "Galerie", "Ceník", "O nás", "Blog"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-").replace("á", "a").replace("í", "i")}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-space-grotesk font-bold text-lg mb-6 text-white">Služby</h3>
            <ul className="space-y-4">
              {["Keramická ochrana", "Mytí exteriéru", "Čištění interiéru", "Renovace laku", "PPF Fólie"].map((item) => (
                <li key={item}>
                  <Link href="/sluzby" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-space-grotesk font-bold text-lg mb-6 text-white">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span>Pražská 123<br />110 00 Praha 1</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+420123456789" className="hover:text-white transition-colors">+420 123 456 789</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@autodetailing.cz" className="hover:text-white transition-colors">info@autodetailing.cz</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Auto Detailing Premium. Všechna práva vyhrazena.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Ochrana údajů</Link>
            <Link href="/terms" className="hover:text-white">Obchodní podmínky</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Car, CheckCircle2, Clock, DollarSign, LayoutDashboard, Settings, Users, Image as ImageIcon, LogOut, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import AdminGuard from "@/components/admin/admin-guard"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }

  const navItems = [
    { name: "Přehled", href: "/admin", icon: LayoutDashboard },
    { name: "Objednávky", href: "/admin/objednavky", icon: Clock },
    { name: "Kalendář", href: "/admin/kalendar", icon: Calendar },
    { name: "Galerie", href: "/admin/galerie", icon: ImageIcon },
    { name: "Ceník", href: "/admin/cenik", icon: DollarSign },
    { name: "Zákazníci", href: "/admin/zakaznici", icon: Users },
    { name: "Nastavení", href: "/admin/nastaveni", icon: Settings },
  ]

  return (
    <AdminGuard>
      <div className="min-h-screen bg-background flex font-sans">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/5 bg-card/30 hidden md:flex flex-col fixed inset-y-0">
          <div className="p-6">
            <h1 className="text-xl font-bold font-space-grotesk tracking-wide uppercase">
              Admin<span className="text-primary">Panel</span>
            </h1>
          </div>
          
          <nav className="flex-1 space-y-1 px-4 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          <div className="p-4 border-t border-white/5">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-destructive" onClick={handleLogout}>
              <LogOut size={20} className="mr-2" />
              Odhlásit
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-64 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </AdminGuard>
  )
}

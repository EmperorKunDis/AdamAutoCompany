"use client"

import { Car, CheckCircle2, Clock, DollarSign, LayoutDashboard, Settings, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-card/30 hidden md:block">
        <div className="p-6">
          <h1 className="text-xl font-bold font-space-grotesk tracking-wide uppercase">
            Admin<span className="text-primary">Panel</span>
          </h1>
        </div>
        <nav className="space-y-1 px-4">
          {[
            { name: "Přehled", icon: LayoutDashboard, active: true },
            { name: "Objednávky", icon: Clock },
            { name: "Zákazníci", icon: Users },
            { name: "Služby", icon: Car },
            { name: "Nastavení", icon: Settings },
          ].map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                item.active 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-space-grotesk">Dashboard</h2>
          <Button>Nová rezervace</Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Dnešní tržba", value: "24 500 Kč", icon: DollarSign, trend: "+12%" },
            { label: "Nové objednávky", value: "8", icon: Clock, trend: "+2" },
            { label: "Dokončená auta", value: "125", icon: CheckCircle2, trend: "Tento měsíc" },
            { label: "Aktivní klienti", value: "1,240", icon: Users, trend: "+5%" },
          ].map((stat, i) => (
            <Card key={i} className="bg-card/50 border-white/5">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <stat.icon size={24} />
                  </div>
                  <span className="text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded">
                    {stat.trend}
                  </span>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Orders Table */}
        <Card className="bg-card/50 border-white/5">
          <CardHeader>
            <CardTitle>Poslední objednávky</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full overflow-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-muted-foreground border-b border-white/5">
                  <tr>
                    <th className="h-12 px-4 font-medium">ID</th>
                    <th className="h-12 px-4 font-medium">Zákazník</th>
                    <th className="h-12 px-4 font-medium">Auto</th>
                    <th className="h-12 px-4 font-medium">Služba</th>
                    <th className="h-12 px-4 font-medium">Status</th>
                    <th className="h-12 px-4 font-medium text-right">Cena</th>
                  </tr>
                </thead>
                <tbody className="[&_tr:last-child]:border-0">
                  {[
                    { id: "#1201", user: "Jan Novák", car: "BMW X5 (2024)", service: "Keramika Gyeon", status: "Probíhá", price: "28 000 Kč" },
                    { id: "#1200", user: "Petr Svoboda", car: "Audi A6", service: "Interiér Deep", status: "Nová", price: "4 500 Kč" },
                    { id: "#1199", user: "Eva Krátká", car: "Porsche 911", service: "PPF Front", status: "Hotovo", price: "42 000 Kč" },
                    { id: "#1198", user: "Firma s.r.o.", car: "Mercedes V", service: "Mytí komplet", status: "Čeká", price: "2 200 Kč" },
                  ].map((order) => (
                    <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium">{order.id}</td>
                      <td className="p-4">{order.user}</td>
                      <td className="p-4">{order.car}</td>
                      <td className="p-4">{order.service}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          order.status === "Hotovo" ? "bg-green-500/10 text-green-500" :
                          order.status === "Probíhá" ? "bg-blue-500/10 text-blue-500" :
                          "bg-yellow-500/10 text-yellow-500"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">{order.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

"use client"

import { useState } from "react"
import { MoreHorizontal, Search, Filter, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mockOrders = [
  { id: "1201", customer: "Jan Novák", date: "2024-01-15", vehicle: "BMW X5", service: "Keramika Gyeon", status: "Probíhá", price: 28000 },
  { id: "1200", customer: "Petr Svoboda", date: "2024-01-14", vehicle: "Audi A6", service: "Interiér Deep", status: "Nová", price: 4500 },
  { id: "1199", customer: "Eva Krátká", date: "2024-01-12", vehicle: "Porsche 911", service: "PPF Front", status: "Hotovo", price: 42000 },
  { id: "1198", customer: "Firma s.r.o.", date: "2024-01-10", vehicle: "Mercedes V", service: "Mytí komplet", status: "Čeká", price: 2200 },
  { id: "1197", customer: "Karel Malý", date: "2024-01-08", vehicle: "Škoda Superb", service: "Leštění 1-krok", status: "Fakturováno", price: 8500 },
]

export default function AdminOrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredOrders = mockOrders.filter(order => 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.includes(searchTerm) ||
    order.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold font-space-grotesk">Správa Objednávek</h2>
        <Button>Vytvořit objednávku</Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Hledat podle jména, ID nebo auta..." 
            className="pl-9 bg-card/50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Card className="bg-card/50 border-white/5">
        <CardContent className="p-0">
          <div className="relative w-full overflow-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-muted-foreground border-b border-white/5 bg-secondary/50">
                <tr>
                  <th className="h-12 px-4 font-medium">ID</th>
                  <th className="h-12 px-4 font-medium">Datum</th>
                  <th className="h-12 px-4 font-medium">Zákazník</th>
                  <th className="h-12 px-4 font-medium">Vozidlo</th>
                  <th className="h-12 px-4 font-medium">Služba</th>
                  <th className="h-12 px-4 font-medium">Status</th>
                  <th className="h-12 px-4 font-medium text-right">Cena</th>
                  <th className="h-12 px-4 font-medium text-right">Akce</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium">#{order.id}</td>
                    <td className="p-4 text-muted-foreground">{order.date}</td>
                    <td className="p-4 font-medium">{order.customer}</td>
                    <td className="p-4">{order.vehicle}</td>
                    <td className="p-4">{order.service}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        order.status === "Hotovo" || order.status === "Fakturováno" ? "bg-green-500/10 text-green-500" :
                        order.status === "Probíhá" ? "bg-blue-500/10 text-blue-500" :
                        "bg-yellow-500/10 text-yellow-500"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-right font-medium">{order.price.toLocaleString()} Kč</td>
                    <td className="p-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Akce</DropdownMenuLabel>
                          <DropdownMenuItem>Detail objednávky</DropdownMenuItem>
                          <DropdownMenuItem>Upravit status</DropdownMenuItem>
                          <DropdownMenuItem>Vystavit fakturu</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">Smazat</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

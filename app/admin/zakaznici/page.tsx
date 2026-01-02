"use client"

import { Mail, Phone, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const customers = [
  { id: 1, name: "Jan Novák", email: "jan.novak@example.com", phone: "+420 777 123 456", orders: 3, lastVisit: "2024-01-15", totalSpent: "45 000 Kč" },
  { id: 2, name: "Petr Svoboda", email: "petr@svoboda.cz", phone: "+420 608 987 654", orders: 1, lastVisit: "2024-01-10", totalSpent: "4 500 Kč" },
  { id: 3, name: "Eva Krátká", email: "eva.k@gmail.com", phone: "+420 720 111 222", orders: 5, lastVisit: "2023-12-20", totalSpent: "120 000 Kč" },
  { id: 4, name: "Firma s.r.o.", email: "info@firma.cz", phone: "+420 222 333 444", orders: 12, lastVisit: "2024-01-05", totalSpent: "85 000 Kč" },
  { id: 5, name: "Karel Malý", email: "karel.maly@seznam.cz", phone: "+420 775 555 666", orders: 2, lastVisit: "2023-11-15", totalSpent: "15 000 Kč" },
]

export default function AdminCustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold font-space-grotesk">Databáze Zákazníků</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Vyhledat klienta..." 
            className="pl-9 bg-card/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {customers.map((customer) => (
          <Card key={customer.id} className="bg-card/50 border-white/5 hover:border-primary/30 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">{customer.name}</CardTitle>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                {customer.name.charAt(0)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 pt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Mail className="w-4 h-4 mr-2" />
                    {customer.email}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Phone className="w-4 h-4 mr-2" />
                    {customer.phone}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4 text-center">
                  <div>
                    <div className="text-xs text-muted-foreground">Objednávek</div>
                    <div className="font-bold text-lg">{customer.orders}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Poslední</div>
                    <div className="font-bold text-sm mt-1">{customer.lastVisit}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Celkem</div>
                    <div className="font-bold text-sm mt-1 text-primary">{customer.totalSpent}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

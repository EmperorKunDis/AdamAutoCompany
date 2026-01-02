"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Car, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (login === "KunDisJeBuh" && password === "KecaUdelaloToAI") {
      sessionStorage.setItem("adminAuth", "true")
      router.push("/admin")
    } else {
      setError("Nesprávné přihlašovací údaje")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#0A0A0A] to-black z-0" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 z-0" />

      <Card className="w-full max-w-md relative z-10 bg-card/50 backdrop-blur-xl border-white/10">
        <CardHeader className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto ring-1 ring-primary/20">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl font-space-grotesk">Admin Přihlášení</CardTitle>
            <CardDescription>Vstup pouze pro autorizované osoby</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login">Přihlašovací jméno</Label>
              <Input 
                id="login" 
                placeholder="Zadejte login" 
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="bg-background/50 border-white/10 focus:border-primary/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Heslo</Label>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background/50 border-white/10 focus:border-primary/50"
              />
            </div>
            
            {error && (
              <div className="text-destructive text-sm text-center bg-destructive/10 p-2 rounded">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 mt-4">
              Vstoupit do systému
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

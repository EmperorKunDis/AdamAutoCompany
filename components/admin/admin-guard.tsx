"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    // Check if we are on the login page to avoid loop
    if (pathname === "/admin/login") {
      setAuthorized(true)
      return
    }

    const isAuth = sessionStorage.getItem("adminAuth") === "true"
    if (!isAuth) {
      router.push("/admin/login")
    } else {
      setAuthorized(true)
    }
  }, [pathname, router])

  if (!authorized && pathname !== "/admin/login") {
    return null // Or a loading spinner
  }

  return <>{children}</>
}

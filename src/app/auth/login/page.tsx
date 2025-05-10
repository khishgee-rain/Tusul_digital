"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const companies = [
  { id: 1, name: "Starbucks", logo: "/logos/starbucks.png" },
  { id: 2, name: "Adidas", logo: "/logos/adidas.png" },
  { id: 3, name: "WWF", logo: "/logos/wwf.png" },
  { id: 4, name: "Pepsi", logo: "/logos/pepsi.png" },
  { id: 5, name: "Starbucks 2", logo: "/logos/starbucks2.png" },
  { id: 6, name: "KFC", logo: "/logos/kfc.png" },
  { id: 7, name: "Dell", logo: "/logos/dell.png" },
  { id: 8, name: "McDonald's", logo: "/logos/mcdonalds.png" },
  { id: 9, name: "Nasa", logo: "/logos/nasa.png" },
]

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Master login
    if (email === "master@admin.mn" && password === "master123") {
      localStorage.setItem("role", "master")
      router.push("/dashboard")
      return
    }

    // Check if it's a company admin
    const matchedCompany = companies.find(
      (company) =>
        email === `${company.name.toLowerCase().replace(/\s+/g, "")}@admin.mn`
    )

    if (matchedCompany && password === "admin123") {
      localStorage.setItem("role", "regular")
localStorage.setItem("companyId", String(matchedCompany.id))
      router.push(`/companies/${matchedCompany.id}`)
    } else {
      alert("Нэвтрэх нэр эсвэл нууц үг буруу байна.")
    }
  }

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">



<div className="p-4 bg-green-500 text-white rounded-lg">
  Tailwind ажиллаж байна
</div>

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full">
          Log In
        </Button>
      </form>
    </div>
  )
}

"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronRight, LogOut } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const allNavItems = [
  { label: "Хянах самбар", href: "/dashboard" },
  { label: "Компани", href: "/companies", onlyFor: "master" },
  { label: "Хувь хэрэглэгчид", href: "/members" },
]

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [role, setRole] = useState<string | null>(null)

  useEffect(() => {
    const savedRole = localStorage.getItem("role")
    setRole(savedRole)
  }, [])

  const handleLogout = () => {
    localStorage.clear()
    router.push("auth/login")
  }

  const navItems = allNavItems.filter(item =>
    item.onlyFor ? item.onlyFor === role : true
  )

  return (
    <aside className="w-64 h-screen border-r bg-white flex flex-col justify-between">
      {/* Top nav */}
      <div className="p-4">
        <ScrollArea className="h-[calc(100vh-200px)] pr-2">
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link href={item.href} key={item.label}>
                  <div
                    className={`flex items-center justify-between w-full px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition
                      ${isActive ? "bg-indigo-100 text-indigo-700 font-semibold" : "text-black hover:bg-gray-100"}`}
                  >
                    <span>{item.label}</span>
                    {isActive && <ChevronRight className="w-4 h-4" />}
                  </div>
                </Link>
              )
            })}
          </nav>
        </ScrollArea>
      </div>

      {/* Bottom logout */}
      <div className="px-4 py-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-2 font-semibold" onClick={handleLogout}>
          <LogOut className="w-4 h-4" />
          Гарах
        </Button>
      </div>
    </aside>
  )
}

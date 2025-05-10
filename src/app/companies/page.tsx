"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const companies = [
  { id: 1, name: "Starbucks", logo: "/logos/starbucks.png", members: 1, expired: 1, cards: 1 },
  { id: 2,name: "Adidas", logo: "/logos/adidas.png", members: 1, expired: null, cards: 1 },
  { id:3 ,name: "WWF", logo: "/logos/wwf.png", members: null, expired: 1, cards: 1 },
  { id:4, name: "Pepsi", logo: "/logos/pepsi.png", members: 1, expired: 1, cards: 1 },
  { id:5,name: "Starbucks 2", logo: "/logos/starbucks2.png", members: 1, expired: 1, cards: 1 },
  { id:6,name: "KFC", logo: "/logos/kfc.png", members: 1, expired: 1, cards: 1 },
  { id:7,name: "Dell", logo: "/logos/dell.png", members: 1, expired: 1, cards: 1 },
  { id:8,name: "McDonald's", logo: "/logos/mcdonalds.png", members: 1, expired: 1, cards: 1 },
  { id:9,name: "Nasa", logo: "/logos/nasa.png", members: 1, expired: 1, cards: null },
]

export default function CompanyPage() {
  const { id } = useParams() // Get the company ID from the URL
  const [role, setRole] = useState<string | null>(null)
  const [companyId, setCompanyId] = useState<string | null>(null)
  const totalCompanies = companies.length
  const totalMembers = companies.reduce((sum, company) => sum + (company.members ?? 0), 0)

  // Check role and companyId from localStorage
  useEffect(() => {
    const savedRole = localStorage.getItem("role")
    const savedCompanyId = localStorage.getItem("companyId")
    setRole(savedRole)
    setCompanyId(savedCompanyId)
  }, [])

  // If the user is regular, check if they can view the company
  if (role === "regular" && id !== companyId) {
    return <div className="p-6 text-red-500">Та энэ компанийн мэдээллийг харах эрхгүй!</div>
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Компани</h1>
        <Button size="lg" className="gap-2" style={{ backgroundColor: "#3D4FF4", color: "white" }}>
          <Plus className="w-10 h-10" />
          Add Company
        </Button>
      </div>

      <div className="flex space-x-4 text-muted-foreground text-sm border-b pb-2">
        <div>Компани: <span className="font-semibold text-black">{totalCompanies}</span></div>
        <div>Гишүүд: <span className="font-semibold text-black">{totalMembers}</span></div>
      </div>

      <Input placeholder="Компанийн нэрээр хайх" className="max-w-md bg-muted" />

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[200px]">Нэр</TableHead>
              <TableHead>Гишүүд</TableHead>
              <TableHead>Дуусах дөхсөн</TableHead>
              <TableHead>Карт захиалсан</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((company, index) => (
              <TableRow key={index}>
                <TableCell className="flex items-center space-x-2">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={32}
                    height={32}
                    className="rounded-md object-cover"
                  />
                  <Link href={`/companies/${company.id}`} className="font-medium hover:underline">
                    {company.name}
                  </Link>
                </TableCell>
                <TableCell>{company.members ?? "--"}</TableCell>
                <TableCell>{company.expired ?? "--"}</TableCell>
                <TableCell>{company.cards ?? "--"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import { MoreHorizontal, Plus, ArrowLeft } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Member {
  name: string
  role: string
  email: string
  phone: string
  expired: string
  usage: number
  avatar: string
}

interface CompanyData {
  name: string
  logo: string
  members: Member[]
}

const mockCompanies: Record<number, CompanyData> = {
  1: {
    name: "Starbucks",
    logo: "/logos/starbucks.png",
    members: [
      {
        name: "Гишүүн 1-1",
        role: "Инженер",
        email: "user11@company1.mn",
        phone: "+976 99110001",
        expired: "2025-12-31",
        usage: 4100,
        avatar: "/avatars/avatar1.png",
      },
      {
        name: "Гишүүн 1-2",
        role: "Маркетинг",
        email: "user12@company1.mn",
        phone: "+976 99110002",
        expired: "2026-01-15",
        usage: 5220,
        avatar: "/avatars/avatar2.png",
      },
    ],
  },
  2: {
    name: "Adidas",
    logo: "/logos/adidas.png",
    members: [
      {
        name: "Гишүүн 2-1",
        role: "Инженер",
        email: "user21@company2.mn",
        phone: "+976 99110011",
        expired: "2025-12-31",
        usage: 4200,
        avatar: "/avatars/avatar2.png",
      },
      {
        name: "Гишүүн 2-2",
        role: "Маркетинг",
        email: "user22@company2.mn",
        phone: "+976 99110012",
        expired: "2026-01-15",
        usage: 5340,
        avatar: "/avatars/avatar3.png",
      },
    ],
  },
  3: {
    name: "WWF",
    logo: "/logos/wwf.png",
    members: [
      {
        name: "Гишүүн 3-1",
        role: "Инженер",
        email: "user31@company3.mn",
        phone: "+976 99110021",
        expired: "2025-12-31",
        usage: 4300,
        avatar: "/avatars/avatar3.png",
      },
      {
        name: "Гишүүн 3-2",
        role: "Маркетинг",
        email: "user32@company3.mn",
        phone: "+976 99110022",
        expired: "2026-01-15",
        usage: 5460,
        avatar: "/avatars/avatar4.png",
      },
    ],
  },
  4: {
    name: "Pepsi",
    logo: "/logos/pepsi.png",
    members: [
      {
        name: "Гишүүн 4-1",
        role: "Инженер",
        email: "user41@company4.mn",
        phone: "+976 99110031",
        expired: "2025-12-31",
        usage: 4400,
        avatar: "/avatars/avatar4.png",
      },
      {
        name: "Гишүүн 4-2",
        role: "Маркетинг",
        email: "user42@company4.mn",
        phone: "+976 99110032",
        expired: "2026-01-15",
        usage: 5580,
        avatar: "/avatars/avatar1.png",
      },
    ],
  },
  5: {
    name: "Starbucks 2",
    logo: "/logos/starbucks2.png",
    members: [
      {
        name: "Гишүүн 5-1",
        role: "Инженер",
        email: "user51@company5.mn",
        phone: "+976 99110041",
        expired: "2025-12-31",
        usage: 4500,
        avatar: "/avatars/avatar1.png",
      },
      {
        name: "Гишүүн 5-2",
        role: "Маркетинг",
        email: "user52@company5.mn",
        phone: "+976 99110042",
        expired: "2026-01-15",
        usage: 5700,
        avatar: "/avatars/avatar2.png",
      },
    ],
  },
  6: {
    name: "KFC",
    logo: "/logos/kfc.png",
    members: [
      {
        name: "Гишүүн 6-1",
        role: "Инженер",
        email: "user61@company6.mn",
        phone: "+976 99110051",
        expired: "2025-12-31",
        usage: 4600,
        avatar: "/avatars/avatar2.png",
      },
      {
        name: "Гишүүн 6-2",
        role: "Маркетинг",
        email: "user62@company6.mn",
        phone: "+976 99110052",
        expired: "2026-01-15",
        usage: 5820,
        avatar: "/avatars/avatar3.png",
      },
    ],
  },
  7: {
    name: "Dell",
    logo: "/logos/dell.png",
    members: [
      {
        name: "Гишүүн 7-1",
        role: "Инженер",
        email: "user71@company7.mn",
        phone: "+976 99110061",
        expired: "2025-12-31",
        usage: 4700,
        avatar: "/avatars/avatar3.png",
      },
      {
        name: "Гишүүн 7-2",
        role: "Маркетинг",
        email: "user72@company7.mn",
        phone: "+976 99110062",
        expired: "2026-01-15",
        usage: 5940,
        avatar: "/avatars/avatar4.png",
      },
    ],
  },
  8: {
    name: "McDonald's",
    logo: "/logos/mcdonalds.png",
    members: [
      {
        name: "Гишүүн 8-1",
        role: "Инженер",
        email: "user81@company8.mn",
        phone: "+976 99110071",
        expired: "2025-12-31",
        usage: 4800,
        avatar: "/avatars/avatar4.png",
      },
      {
        name: "Гишүүн 8-2",
        role: "Маркетинг",
        email: "user82@company8.mn",
        phone: "+976 99110072",
        expired: "2026-01-15",
        usage: 6060,
        avatar: "/avatars/avatar1.png",
      },
    ],
  },
  9: {
    name: "Nasa",
    logo: "/logos/nasa.png",
    members: [
      {
        name: "Гишүүн 9-1",
        role: "Инженер",
        email: "user91@company9.mn",
        phone: "+976 99110081",
        expired: "2025-12-31",
        usage: 4900,
        avatar: "/avatars/avatar1.png",
      },
      {
        name: "Гишүүн 9-2",
        role: "Маркетинг",
        email: "user92@company9.mn",
        phone: "+976 99110082",
        expired: "2026-01-15",
        usage: 6180,
        avatar: "/avatars/avatar2.png",
      },
    ],
  },
}


export default function CompanyDetailPage() {
  const { id } = useParams()
  const company = mockCompanies[Number(id as string)]

  if (!company) return <div className="p-6">Компанийн мэдээлэл олдсонгүй.</div>

  const members = company.members
  const today = new Date()
  const total = members.length
  const totalViewedToday = members.filter((m) => m.usage > 0).length

  // 3 хоногийн дотор дуусах гишүүдийг "Хугацаа дөхсөн" гэж үзнэ
  const nearExpiry = members.filter((m) => {
    const expiredDate = new Date(m.expired)
    const diff = expiredDate.getTime() - today.getTime()
    const daysLeft = diff / (1000 * 60 * 60 * 24)
    return daysLeft <= 3
  }).length

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
            <ArrowLeft className="w-14 h-14" />
          </Button>
          <Image
            src={company.logo}
            alt="Company Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <h1 className="text-2xl font-bold">{company.name}</h1>
        </div>
        <Button size="lg" className="gap-2" style={{ backgroundColor: "#3D4FF4", color: "white" }}>
          <Plus className="w-10 h-10" />
          Add Member
        </Button>
      </div>

      <div className="flex space-x-4 text-muted-foreground text-sm border-b pb-2">
        <div>Нийт: <span className="font-semibold text-black">{total}</span></div>
        <div>Өнөөдөр нийт үзүүлсэн: <span className="font-semibold text-black">{totalViewedToday}</span></div>
        <div>Хугацаа дөхсөн: <span className="font-semibold text-black">{nearExpiry}</span></div>
      </div>

      <Input placeholder="Хэрэглэгчийн нэрээр хайх" className="max-w-md bg-muted" />

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Нэр</TableHead>
              <TableHead>Албан тушаал</TableHead>
              <TableHead>Имэйл</TableHead>
              <TableHead>Утас</TableHead>
              <TableHead>Дуусах огноо</TableHead>
              <TableHead>Үзүүлсэн</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((member, index) => {
              const isExpired = new Date(member.expired) < today
              return (
                <TableRow key={index}>
                  <TableCell className="flex items-center space-x-2">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span>{member.name}</span>
                  </TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.phone}</TableCell>
                  <TableCell className={isExpired ? "text-red-500" : ""}>
                    {member.expired}
                  </TableCell>
                  <TableCell>{member.usage}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Засах</DropdownMenuItem>
                        <DropdownMenuItem>Устгах</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

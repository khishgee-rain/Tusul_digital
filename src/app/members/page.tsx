"use client"

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { Member } from "./columns"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const members: Member[] = new Array(101).fill(null).map((_, i) => ({
  id: i,
  name: "John Doe",
  title: "Graphic Designer",
  email: "john@company.com",
  phone: "+976 99123456",
  domain: `24000123${456 + i}`,
  shared: Math.floor(Math.random() * 20),
  avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
  expiresAt: new Date(Date.now() + (i % 10) * 86400000).toISOString(), // expires in 0-9 days
  viewed: Math.floor(Math.random() * 200),
}))


export default function MembersPage() {

  
const totalMembers = members.length
const totalViewedToday = members.reduce((sum, m) => sum + m.viewed, 0)
const nearExpiry = members.filter(m => {
  const daysLeft = (new Date(m.expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)
  return daysLeft <= 3
}).length


  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Гишүүд</h1>
        <Button size="lg" className="gap-2" style={{ backgroundColor: "#3D4FF4", color: "white" }}>
  <Plus className="w-10 h-10" />
  Add Member
</Button>
      </div>

      {/* Summary Section */}
{/* Summary Section */}
<div className="flex space-x-4 text-muted-foreground text-sm border-b pb-2">
        <div>Нийт: <span className="font-semibold text-black">{totalMembers}</span></div>
        <div>Өнөөдөр нийт үзүүлсэн: <span className="font-semibold text-black">{totalViewedToday}</span></div>
        <div>Хугацаа дөхсөн: <span className="font-semibold text-black">{nearExpiry}</span></div>
      </div>



      <DataTable columns={columns} data={members} />
    </div>
  )
}

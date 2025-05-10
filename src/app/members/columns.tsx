"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { format } from "date-fns"

export type Member = {
  id: number
  name: string
  title: string
  email: string
  phone: string
  domain: string
  shared: number
  avatar: string
  expiresAt: string // ISO format date string
  viewed: number
}

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "name",
    header: "Нэр",
    cell: ({ row }) => {
      const member = row.original
      return (
        <div className="flex items-center gap-2">
          <Avatar className="w-6 h-6">
            <AvatarImage src={member.avatar} />
          </Avatar>
          <span className="font-medium">{member.name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: "title",
    header: "Албан тушаал",
  },
  {
    accessorKey: "email",
    header: "Имэйл",
  },
  {
    accessorKey: "phone",
    header: "Утас",
  },
  {
    accessorKey: "expiresAt",
    header: "Дуусах огноо",
    cell: ({ row }) => {
      const date = new Date(row.original.expiresAt)
      return format(date, "yyyy-MM-dd")
    },
  },
  {
    accessorKey: "viewed",
    header: "Үзүүлсэн",
  },
]

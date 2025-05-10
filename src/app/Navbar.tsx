import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Search } from "lucide-react"

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
      <div className="text-4xl font-extrabold text-[#3D4FF4]" style={{ letterSpacing: "-0.10em" }}>
  MEMBRO
</div>


      <div className="flex items-center space-x-10">
  <Search className="w-5 h-5 cursor-pointer" />
  <Bell className="w-5 h-5 cursor-pointer" />
  <Avatar>
    <AvatarImage src="/user.jpg" alt="User" />
    <AvatarFallback>U</AvatarFallback>
  </Avatar>
</div>

    </header>
  )
}

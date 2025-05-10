// src/app/AppSidebarWrapper.tsx
'use client'

import { usePathname } from 'next/navigation'
import { AppSidebar } from './AppSidebar'

export function AppSidebarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hideSidebar = pathname.startsWith('/auth/login')

  return (
    <>
      {!hideSidebar && <AppSidebar />}
      <main className="flex-1">{children}</main>
    </>
  )
}

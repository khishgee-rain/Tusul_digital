import { ReactNode } from 'react'
import { AppSidebarWrapper } from './AppSidebarWrapper'
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        <AppSidebarWrapper>{children}</AppSidebarWrapper>
      </body>
    </html>
  )
}


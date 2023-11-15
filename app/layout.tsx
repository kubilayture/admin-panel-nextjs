import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Panel Dashboard',
  description: 'Admin panel dashboard app created with Next.js 14',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

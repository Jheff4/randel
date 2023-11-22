import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Randel',
  description: 'Randel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-blackPearl font-clash_grotesk no-scrollbar">{children}</body>
    </html>
  )
}

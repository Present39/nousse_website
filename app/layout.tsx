import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NOUSSE - Journey Through Innovation',
  description: 'Tech Toegankelijk. Voor Iedereen. Voor Altijd.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
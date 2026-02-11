import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frontend Developer Portfolio',
  description: 'A minimalist portfolio showcasing React, Next.js, and TypeScript projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain" />
        {children}
      </body>
    </html>
  )
}

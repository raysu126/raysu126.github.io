import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'raysu126 - Software Developer',
  description: 'Full-stack developer passionate about creating amazing web experiences.',
  keywords: ['developer', 'software engineer', 'web development', 'portfolio'],
  authors: [{ name: 'raysu126' }],
  openGraph: {
    title: 'raysu126 - Software Developer',
    description: 'Full-stack developer passionate about creating amazing web experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
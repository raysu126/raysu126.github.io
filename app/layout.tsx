import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raymond Su - Computational Neuroscience & UI/UX Design',
  description: 'UC Berkeley student specializing in computational neuroscience, machine learning, and user interface design.',
  keywords: ['developer', 'software engineer', 'web development', 'portfolio'],
  authors: [{ name: 'Raymond Su' }],
  openGraph: {
    title: 'Raymond Su - Computational Neuroscience & UI/UX Design',
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
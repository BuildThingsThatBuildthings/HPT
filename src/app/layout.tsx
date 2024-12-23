import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import FloatingCTA from './components/FloatingCTA'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hershey Personal Training',
  description: 'Transform your life with personalized fitness training',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <FloatingCTA />
      </body>
    </html>
  )
}

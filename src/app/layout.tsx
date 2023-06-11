import { cn } from '@libs'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daustinn - Web Development',
  description: 'Daustinn - Web Development'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn('bg-[#050505]  scroll-smooth', inter.className)}>
        {children}
      </body>
    </html>
  )
}

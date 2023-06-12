import { cn } from '@libs'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daustinn - Web Development',
  description: 'Daustinn or David - Web Development',
  icons: {
    icon: '/avatar-square.png'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn('bg-[--body-background] scroll-smooth', inter.className)}
      >
        {children}
      </body>
    </html>
  )
}

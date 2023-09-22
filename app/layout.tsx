import Footer from '@/components/Footer'
import './globals.css'
import NavBar from '@/components/NavBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KnowYourMED',
  description: 'Medical drug information ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className} style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <NavBar />
            {children}
        <Footer />
      </body>
    </html>
  )
}

import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'KnowYourMED',
  description: 'Search page',
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={inter.className} style={{display: 'flex', flexDirection: 'column', minHeight: '100vh', overflowY: 'auto'}}>
        {children}
     </div>
  )
}

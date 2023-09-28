import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'KnowYourMED',
  description: 'How to use page',
}

export default function HowToUseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div className={inter.className} style={{display: 'flex', flexDirection: 'column', overflowY: 'auto'}}>
        {children}
     </div>
  )
}

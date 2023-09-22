import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KnowYourMED',
  description: 'Results page',
}

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-3/4 m-auto lg:mt-10 ">
        {children}
    </div>
  )
}

import Hero from "@/components/Hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'KnowYourMED',
  description: 'Medical drug information ',
}

export default function Home() {

  return (
    <main className="flex-1">
        <Hero/>
    </main>
  )
}

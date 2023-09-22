"use client"
import Hero from "@/components/Hero"
import { useState } from "react"

export default function Home() {
  const [drugName, setDrugName] = useState('');

  return (
    <main className="flex-1">
        <Hero/>
    </main>
  )
}

import { FilmIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="flex gap-2 py-5 px-5 bg-slate-900 text-white rounded-b-xl items-center">
      <Link href="/" className="text-xl font-bold">
        <h1>2024 Best Debt Consolidation Loan Companies</h1>
      </Link>
    </header>
  )
}

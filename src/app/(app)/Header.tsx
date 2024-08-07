import { FilmIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className="flex py-5">
      <Link className="flex" href="/">
        <Image src="/debt-experts-org-alt.svg" alt="Debt-Experts.org" height="75" width="200" />
      </Link>
    </header>
  )
}

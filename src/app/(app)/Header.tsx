'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="flex flex-row justify-between items-center py-5">
      <Link href="/">
        <Image
          src={
            theme === 'dark'
              ? '/debt-experts-org-light-blue.svg'
              : '/debt-experts-org-dark-blue.svg'
          }
          alt="Debt-Experts.org"
          height="75"
          width="200"
        />
      </Link>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle Theme</span>
      </Button>
    </header>
  )
}

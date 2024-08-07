'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Faq } from 'payload-types'
import { Button } from '@/components/ui/button'

export default function Stats({ faqs: initialFaqs }: { faqs: Faq[] }) {
  const [faqs, setFaqs] = useState<Faq[]>(initialFaqs)

  return (
    <div className="flex flex-wrap my-5">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Debt Statistics
      </h2>
    </div>
  )
}

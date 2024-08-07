'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Company } from 'payload-types'
import { Button } from '@/components/ui/button'

export default function TopCompanies({ companies: initialCompanies }: { companies: Company[] }) {
  const [companies, setCompanies] = useState<Company[]>(initialCompanies)

  return (
    <div className="flex flex-col my-5">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Top 5 Debt Consolidation Loan Companies
      </h2>
      <div className="flex flex-col my-5">
        {companies.map((company) => (
          <Link key={company.id} href={`/company/${company.slug}`}>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{company.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  )
}

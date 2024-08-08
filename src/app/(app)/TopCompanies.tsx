'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Company, Media } from 'payload-types'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function TopCompanies({ companies: initialCompanies }: { companies: Company[] }) {
  const [companies, setCompanies] = useState<Company[]>(initialCompanies)

  return (
    <div className="flex flex-col">
      <div className="flex justify-between pb-2 items-center">
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          Top 5 Debt Consolidation Loan Companies
        </h2>
        <h6 className="">August 2024</h6>
      </div>
      <div className="flex flex-wrap gap-5">
        {companies.map((company) => (
          <Card key={company.id} className="w-full">
            <CardHeader className="">
              <CardTitle className="">{company.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row">
              <div className="w-3/4">
                <CardDescription>{company.description}</CardDescription>
              </div>
              <div className="w-1/4 flex justify-center">
                <Image
                  className="max-h-24"
                  src={(company.logo as Media)?.url ?? ''}
                  alt={(company.logo as Media)?.text ?? ''}
                  width={100}
                  height={50}
                />
              </div>
            </CardContent>
            <CardFooter className="">
              <Button asChild variant="default">
                <Link href={`${company.url}`}>Get Your Rate</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

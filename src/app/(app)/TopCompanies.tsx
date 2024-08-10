'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Smile, Percent, ArrowRight } from 'lucide-react'
import type { Company, Media } from 'payload-types'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
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
      <div className="flex justify-between py-5 items-center">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-bold tracking-tight first:mt-0 flex justify-between items-center w-full">
          Top 5 Debt Consolidation Loan Companies
          <span className="text-sm">August 2024</span>
        </h2>
      </div>
      <div className="flex flex-wrap gap-5">
        {companies.map((company, i) => (
          <>
            <Card key={company.id} className="w-full relative">
              <div className="absolute top-[10px] left-[15px] font-bold text-2xl text-slate-300">
                {i + 1}
              </div>
              <CardHeader className=""></CardHeader>
              <CardContent className="flex flex-row">
                <div className="w-1/4 flex flex-col items-center justify-center">
                  <Image
                    className=""
                    src={
                      (company.logo as Media)?.mimeType === 'image/svg+xml'
                        ? (company.logo as Media)?.filename ?? ''
                        : (company.logo as Media)?.url ?? ''
                    }
                    alt={(company.logo as Media)?.text ?? ''}
                    width={200}
                    height={200}
                  />
                </div>
                <CardDescription className="w-1/4 flex flex-col items-center justify-center text-sm">
                  <div
                    className="font-semibold"
                    dangerouslySetInnerHTML={{ __html: company.short_html || '' }}
                  ></div>
                </CardDescription>
                <CardDescription className="w-1/4 flex flex-col items-center justify-center text-sm">
                  <div className="text-2xl font-extrabold">{company.rating}.5</div>
                  <div className="flex items-center gap-1 py-2">
                    {[...Array(5)].map((x, i) =>
                      i < company.rating ? (
                        <Smile key={i} className="w-7 h-7 fill-amber-300" />
                      ) : (
                        <Smile key={i} className="w-7 h-7 stroke-slate-300" />
                      ),
                    )}
                  </div>
                  <div className="font-bold">Outstanding</div>
                </CardDescription>
                <CardDescription className="w-1/4 flex flex-col items-center justify-center text-sm">
                  <Button asChild variant="default" className="">
                    <Link href={`${company.url}`}>
                      Get Your Rate
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Link>
                  </Button>
                </CardDescription>
              </CardContent>
              <CardFooter className=""></CardFooter>
            </Card>
          </>
        ))}
      </div>
    </div>
  )
}

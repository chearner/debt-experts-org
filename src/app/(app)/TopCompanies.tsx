'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, ArrowRight, Trophy } from 'lucide-react'
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
import H2 from './components/H2'

export default function TopCompanies({ companies: initialCompanies }: { companies: Company[] }) {
  const [companies, setCompanies] = useState<Company[]>(initialCompanies)

  return (
    <section className="flex flex-col mb-5">
      <H2 title="Top 5 Debt Consolidation Loan Companies" span="August 2024" tag="" />
      <div className="flex flex-wrap gap-5">
        {companies.map((company, i) => (
          <>
            <Card key={company.id} className="w-full relative shadow-xl">
              <div className="absolute top-[10px] left-[15px] font-bold text-2xl text-slate-300">
                {i + 1}
              </div>
              <CardHeader className="p-3"></CardHeader>
              <CardContent className="w-full flex flex-row">
                <div className="w-1/5 flex flex-col items-center justify-center">
                  <Image
                    className="pl-5"
                    src={company.logo ?? ''}
                    alt={company.name}
                    width={200}
                    height={200}
                  />
                </div>
                <CardDescription className="w-2/5 flex flex-col items-center justify-center text-sm">
                  <div className="font-extrabold flex flex-row w-fit bg-slate-200 rounded-lg p-2 hidden">
                    <Trophy className="h-5 w-5 mr-2" />
                    Editors Choice
                  </div>
                  <div
                    className="rich-text pb-5"
                    dangerouslySetInnerHTML={{ __html: company.short_html || '' }}
                  ></div>
                  <Link
                    className="underline text-sm text-blue-500 font-bold"
                    href={`/company/${company.slug}`}
                  >
                    Read our Review of {company.name}
                  </Link>
                </CardDescription>
                <CardDescription className="w-1/5 flex flex-col items-center justify-center text-sm">
                  <CardTitle>{company.rating}</CardTitle>
                  <div className="flex items-center gap-0 py-2">
                    {[...Array(5)].map((x, i) =>
                      i < company.rating ? (
                        <ShieldCheck key={i} className="w-7 h-7 stroke-black fill-green-200" />
                      ) : (
                        <ShieldCheck key={i} className="w-7 h-7 stroke-slate-300 fill-slate-100" />
                      ),
                    )}
                  </div>
                  <div className="font-bold">Outstanding</div>
                </CardDescription>
                <CardDescription className="w-1/5 flex flex-col items-center justify-center text-sm">
                  <Button asChild variant="default" className="outline">
                    <Link href={`${company.url}`}>
                      Get Your Rate
                      <ArrowRight className="w-5 h-5 ml-1" />
                    </Link>
                  </Button>
                </CardDescription>
              </CardContent>
            </Card>
          </>
        ))}
      </div>
    </section>
  )
}

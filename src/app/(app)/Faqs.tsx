'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Faq } from 'payload-types'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Faqs({ faqs: initialFaqs }: { faqs: Faq[] }) {
  const [faqs, setFaqs] = useState<Faq[]>(initialFaqs)

  return (
    <div className="flex flex-wrap my-5">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq) => (
        <Accordion key={faq.id} type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <Link href={`/faq/${faq.slug}`} className="text-xl">
                {faq.question}
              </Link>
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  )
}

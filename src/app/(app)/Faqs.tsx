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
import H2 from './components/H2'

export default function Faqs({ faqs: initialFaqs }: { faqs: Faq[] }) {
  const [faqs, setFaqs] = useState<Faq[]>(initialFaqs)

  return (
    <section className="flex flex-wrap mb-5">
      <H2 title="Frequently Asked Questions" span="" />
      {faqs.map((faq) => (
        <Accordion key={faq.id} type="single" collapsible className="w-full" defaultValue={faq.id}>
          <AccordionItem value={faq.id}>
            <AccordionTrigger>
              <Link href={`/faq/${faq.slug}`} className="text-xl">
                {faq.question}
              </Link>
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  )
}

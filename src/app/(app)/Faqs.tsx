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
    <div className="flex flex-wrap gap-3">
      {faqs.map((faq) => (
        <React.Fragment key={faq.id}>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <Link href={`/faq/${faq.slug}`}>{faq.question}</Link>
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        </React.Fragment>
      ))}
    </div>
  )
}

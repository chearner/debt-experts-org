import React from 'react'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import Link from 'next/link'
import Faqs from './Faqs'
import TopCompanies from './TopCompanies'
import TopArticles from './TopArticles'

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const faqs = await payload.find({
    collection: 'faqs',
    sort: 'question',
  })

  const companies = await payload.find({
    collection: 'companies',
    sort: 'company',
  })

  const articles = await payload.find({
    collection: 'articles',
    sort: 'title',
  })

  return (
    <main className="my-5 w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        2024 Debt Consolidation Loan Companies
      </h1>
      <p className="py-5">
        It can be tough to decide on what debt consolidation company or website to use. We have done
        the research and we are providing you with our top picks for debt consolidation and loan
        options. The rankings are based on services offered, time in business, accreditations, and
        customer service.
      </p>
      Find out how we
      <Link href="/rank" className="ml-1 underline">
        rank debt consolidation companies
      </Link>
      .
      <TopCompanies companies={companies.docs} />
      <TopArticles articles={articles.docs} />
      <Faqs faqs={faqs.docs} />
    </main>
  )
}

export default Page

import React from 'react'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

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
    <main className="my-5">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        2024 Debt Consolidation Loan Companies
      </h1>
      <TopCompanies companies={companies.docs} />
      <TopArticles articles={articles.docs} />
      <Faqs faqs={faqs.docs} />
    </main>
  )
}

export default Page

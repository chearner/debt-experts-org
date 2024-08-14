import React from 'react'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import Faqs from './Faqs'
import TopCompanies from './TopCompanies'
import TopArticles from './TopArticles'
import Intro from './Intro'

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const faqs = await payload.find({
    collection: 'faqs',
    sort: 'question',
  })

  const companies = await payload.find({
    collection: 'companies',
    sort: 'ranking',
  })

  const articles = await payload.find({
    collection: 'articles',
    sort: 'title',
  })

  return (
    <main className="max-w-screen-lg mx-5 lg:mx-0 lg:mx-auto xl:mx-auto">
      <Intro />
      <TopCompanies companies={companies.docs} />
      <TopArticles articles={articles.docs} />
      <Faqs faqs={faqs.docs} />
    </main>
  )
}

export default Page

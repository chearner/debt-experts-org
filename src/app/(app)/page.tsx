import React from 'react'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

import Faqs from './Faqs'

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const faqs = await payload.find({
    collection: 'faqs',
    sort: 'question',
  })

  return (
    <>
      <main className="mt-5">
        <Faqs faqs={faqs.docs} />
      </main>
    </>
  )
}

export default Page

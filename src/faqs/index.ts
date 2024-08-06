'use server'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { revalidatePath } from 'next/cache'

export async function addFaq() {
  const payload = await getPayloadHMR({ config: configPromise })

  const faq = await payload.create({
    collection: 'faqs',
    data: {
      question: 'test',
      answer: 'test',
    },
  })

  revalidatePath('/')

  return faq
}

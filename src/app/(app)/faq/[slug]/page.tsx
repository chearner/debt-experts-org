import { notFound } from 'next/navigation'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

export default async function Faq({ params }: { params: { slug: string } }) {
  const { slug } = params
  const payload = await getPayloadHMR({ config: configPromise })

  const faqs = await payload.find({
    collection: 'faqs',
    where: {
      slug: { equals: slug },
    },
  })

  if (faqs.docs.length === 0) {
    return notFound()
  }

  const faq = faqs.docs[0]

  return (
    <div className="m-5 mx-auto max-w-[1200px]">
      <h1 className="flex flex-row justify-between items-end scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl pb-2 border-b">
        {faq.question}
      </h1>
      <p className="py-5">{faq.answer}</p>
    </div>
  )
}

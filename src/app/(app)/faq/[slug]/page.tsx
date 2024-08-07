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
    <div className="flex flex-col w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {faq.question}
      </h1>
      <p className="">{faq.answer}</p>
    </div>
  )
}

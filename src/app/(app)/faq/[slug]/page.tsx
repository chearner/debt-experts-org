import { notFound } from 'next/navigation'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import H1 from '../../components/H1'

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
    <section className="max-w-screen-lg mx-5 lg:mx-0 lg:mx-auto xl:mx-auto">
      <H1 title={faq.question} span="" />
      <p className="py-5">{faq.answer}</p>
    </section>
  )
}

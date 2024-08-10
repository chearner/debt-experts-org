import { notFound } from 'next/navigation'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

export default async function Company({ params }: { params: { slug: string } }) {
  const { slug } = params
  const payload = await getPayloadHMR({ config: configPromise })

  const companies = await payload.find({
    collection: 'companies',
    where: {
      slug: { equals: slug },
    },
  })

  if (companies.docs.length === 0) {
    return notFound()
  }

  const company = companies.docs[0]

  return (
    <div className="flex flex-col w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {company.name}
      </h1>
      <div className="" dangerouslySetInnerHTML={{ __html: company.long_html || '' }}></div>
      <div className="">{company.rating}</div>
      <div className="">{company.link}</div>
    </div>
  )
}

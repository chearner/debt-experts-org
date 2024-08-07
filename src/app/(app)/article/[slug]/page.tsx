import { notFound } from 'next/navigation'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

export default async function Article({ params }: { params: { slug: string } }) {
  const { slug } = params
  const payload = await getPayloadHMR({ config: configPromise })

  const articles = await payload.find({
    collection: 'articles',
    where: {
      slug: { equals: slug },
    },
  })

  if (articles.docs.length === 0) {
    return notFound()
  }

  const article = articles.docs[0]

  return (
    <div className="flex flex-col w-full">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {article.title}
      </h1>
      <p className="">{article.long}</p>
    </div>
  )
}

import { notFound } from 'next/navigation'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { Article, Media } from 'payload-types'
import { format } from 'date-fns'

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
    <>
      <div className="m-5 mx-auto max-w-[1200px]">
        <h1 className="flex flex-row justify-between items-end scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl pb-2 border-b">
          {article.title}{' '}
          <span className="text-sm font-semibold">
            {article.dateOnly ? format(article.dateOnly, 'PPP') : ''}
          </span>
        </h1>
        <article
          className="pt-5"
          dangerouslySetInnerHTML={{ __html: article.long_html || '' }}
        ></article>
        <div className="flex flex-row items-center text-sm pb-5">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="mx-2 font-bold">
            {article.author}
            <span className="font-normal italic"> - Debt Expert</span>
          </div>
        </div>
      </div>
    </>
  )
}

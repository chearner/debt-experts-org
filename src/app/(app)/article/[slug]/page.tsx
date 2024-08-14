import { notFound } from 'next/navigation'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { Article, Media } from 'payload-types'
import { format } from 'date-fns'
import H1 from '../../components/H1'

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
    <section className="max-w-screen-lg mx-5 lg:mx-0 lg:mx-auto xl:mx-auto">
      <H1 title={article.title} span={article.dateOnly ? format(article.dateOnly, 'PPP') : ''} />
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
    </section>
  )
}

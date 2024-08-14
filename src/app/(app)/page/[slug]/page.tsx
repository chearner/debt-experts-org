import { notFound } from 'next/navigation'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { Article, Media } from 'payload-types'
import { format } from 'date-fns'
import H1 from '../../components/H1'

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const payload = await getPayloadHMR({ config: configPromise })

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
    },
  })

  if (pages.docs.length === 0) {
    return notFound()
  }

  const page = pages.docs[0]

  return (
    <section className="max-w-screen-lg mx-5 lg:mx-0 lg:mx-auto xl:mx-auto">
      <H1 title={page.title} span="" />
      <div
        className="rich-text pt-5"
        dangerouslySetInnerHTML={{ __html: page.content_html || '' }}
      ></div>
    </section>
  )
}

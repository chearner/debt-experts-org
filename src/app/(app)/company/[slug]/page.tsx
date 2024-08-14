import { notFound } from 'next/navigation'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import H2 from '../../components/H2'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShieldCheck, Percent, ArrowRight, Trophy } from 'lucide-react'
import type { Company, Media } from 'payload-types'

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
    <section className="max-w-screen-lg mx-5 lg:mx-0 lg:mx-auto xl:mx-auto">
      <H2 title={company.name} span="" tag="" />
      <div className="float-right flex flex-col justify-center items-center m-5">
        <Image
          className="py-5"
          src={company.logo ?? ''}
          alt={company.name}
          width={200}
          height={200}
        />
        <div className="py-5 flex items-center gap-0">
          {[...Array(5)].map((x, i) =>
            i < company.rating ? (
              <ShieldCheck key={i} className="w-7 h-7 stroke-black fill-green-200" />
            ) : (
              <ShieldCheck key={i} className="w-7 h-7 stroke-slate-300 fill-slate-100" />
            ),
          )}
          <Link href="/rating-criterea">Rating Criterea</Link>
        </div>
      </div>
      <div
        className="pb-5 rich-text"
        dangerouslySetInnerHTML={{ __html: company.long_html || '' }}
      ></div>
      <div className="pb-5">
        <Button asChild variant="default" className="outline">
          <Link href={`${company.link}`}>
            Get Your Rate
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

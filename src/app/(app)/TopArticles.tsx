'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Article, Media } from 'payload-types'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import H2 from './components/H2'

export default function TopArticles({ articles: initialArticles }: { articles: Article[] }) {
  const [articles, setArticles] = useState<Article[]>(initialArticles)

  return (
    <section className="flex flex-col mb-5">
      <H2
        title="Debt Consolidation Articles"
        span=""
        tag="Learn as much as you can about debt an you will become a debt expert no time."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {articles.map((article) => (
          <Card key={article.id} className="max-w-xs shadow-xl">
            <CardHeader>
              <Image
                className="w-fit"
                src={(article.preview as Media)?.url ?? ''}
                alt={(article.preview as Media)?.caption ?? ''}
                width={200}
                height={200}
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="pb-2">{article.title}</CardTitle>
              <CardDescription className="rich-text">{article.short}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href={`/article/${article.slug}`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

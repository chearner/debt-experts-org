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

export default function TopArticles({ articles: initialArticles }: { articles: Article[] }) {
  const [articles, setArticles] = useState<Article[]>(initialArticles)

  return (
    <div className="flex flex-col">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Debt Consolidation Articles
      </h2>
      <div className="flex flex-wrap gap-5 my-5">
        {articles.map((article) => (
          <Card key={article.id} className="max-w-80">
            <CardHeader>
              <Image
                className="max-h-24"
                src={(article.image as Media)?.url ?? ''}
                alt={(article.image as Media)?.text ?? ''}
                width={200}
                height={100}
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{article.title}</CardTitle>
              <CardDescription>{article.short}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <Link href={`/article/${article.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

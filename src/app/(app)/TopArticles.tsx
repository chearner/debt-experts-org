'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Article } from 'payload-types'
import { Button } from '@/components/ui/button'

export default function TopArticles({ articles: initialArticles }: { articles: Article[] }) {
  const [articles, setArticles] = useState<Article[]>(initialArticles)

  return (
    <div className="flex flex-col my-5">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Debt Consolidation Articles
      </h2>
      <div className="flex flex-col my-5">
        {articles.map((article) => (
          <Link key={article.id} href={`/article/${article.slug}`}>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{article.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  )
}

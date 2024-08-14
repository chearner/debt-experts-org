import React, { useState } from 'react'
import Link from 'next/link'
import H1 from './components/H1'

export default function Intro() {
  return (
    <section className="mb-5">
      <H1 title="2024 Debt Consolidation Loan Companies" span="" />
      <p className="py-5">
        Are you drowning in an ocean of debt? If you have multiple credit cards or other personal
        debt with high interest rates a Debt Consolidation Loan can be your lifeline to a debt-free
        shore. We have reviewed some of the top Debt Consolidation Loan companies. We have summarize
        this information and make it easy to compare, find the service the best applies to your
        unique financial situation.
      </p>
      Find out how we
      <Link href="/rank" className="ml-1 underline">
        rank debt consolidation companies
      </Link>
      .
    </section>
  )
}

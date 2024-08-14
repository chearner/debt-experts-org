'use client'
import React, { useState } from 'react'
import H2 from './components/H2'

export default function HowItWorks() {
  return (
    <section className="flex flex-wrap mb-5">
      <H2
        title="How a Debt Consolidation Loan Works"
        span=""
        tag="Typically, most debt consolidation loan services use a 3 step process."
      />
      <div className="flex flex-row p-5">
        <div className="flex flex-col items-center w-1/3">
          <div className="text-5xl font-extrabold">1</div>
          <div className="text-center text-xl p-5">
            <h5 className="font-extrabold">Eligibility</h5>Apply to find out if you are eligible.
            This will not affect your credit score and takes just a few minutes.
          </div>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <div className="text-5xl font-extrabold">1</div>
          <div className="text-center text-xl p-5">
            <h5 className="font-extrabold">Approval</h5>You should get a decision back within
            minutes of receiving your application. Depending on state laws and credit eligibility
            this may take longer.
          </div>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <div className="text-5xl font-extrabold">1</div>
          <div className="text-center text-xl p-5">
            <h5 className="font-extrabold">Funding</h5>If approved, we’ll deposit your loan as soon
            as the next business day.‡ You can manage your account through our convenient Avant
            Credit mobile app.
          </div>
        </div>
      </div>
    </section>
  )
}

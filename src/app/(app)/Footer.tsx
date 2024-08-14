'use client'

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme, setTheme } = useTheme()

  return (
    <footer className="bg-foreground text-background">
      <div className="text-sm py-5 mx-5 max-w-screen-lg lg:mx-auto xl:mx-auto">
        <Link href="/">
          <Image
            src={theme === 'dark' ? '/logo-dark-outline.svg' : '/logo-light-outline.svg'}
            alt="Debt-Experts.org"
            height="60"
            width="120"
          />
        </Link>
        <div className="flex flex-col py-3 text-xs">
          Debt Experts receives compensation from affiliate partners featured on this site. However,
          this does not affect our independent evaluations or rankings. Our opinions are unbiased.
          We are not paid to arrange companies in any predetermined order. The content on Debt
          Experts is for informational purposes only and should not be construed as legal,
          financial, or investment advice. This content is not an endorsement or recommendation for
          the specific companies, products, or services mentioned on our site. While we strive for
          accuracy, all information on Debt Experts is subject to change and should be verified
          independently.
        </div>
        <div className="py-5 border-t">© 2024 Expert Nexus, LLC. All Rights Reserved</div>
      </div>
    </footer>
  )
}

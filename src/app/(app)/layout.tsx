import React from 'react'
import './globals.scss'

import Header from './Header'
import Footer from './Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className="dark mx-auto max-w-[1200px]">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Layout

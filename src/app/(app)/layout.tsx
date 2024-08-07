import React from 'react'
import './globals.scss'

import Header from './Header'
import Footer from './Footer'

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className="dark mx-auto max-w-[1200px]">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout

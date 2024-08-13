import React from 'react'

interface H1Props {
  label: string
}

const H1: React.FC<H1Props> = ({ label }) => {
  return (
    <h1 className="scroll-m-20 pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl">{label}</h1>
  )
}

export default H1

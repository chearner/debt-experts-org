import React from 'react'

interface H1Props {
  title: string
  span: string
}

const H1: React.FC<H1Props> = ({ title, span }) => {
  return (
    <h1 className="scroll-m-20 pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl border-b flex justify-between items-end w-full">
      {title}
      <span className="text-sm whitespace-nowrap">{span}</span>
    </h1>
  )
}

export default H1

import React from 'react'

interface H2Props {
  title: string
  span: string
}

const H2: React.FC<H2Props> = ({ title, span }) => {
  return (
    <h2 className="scroll-m-20 pb-2 mb-5 text-3xl font-semibold tracking-tight border-b flex justify-between items-end w-full">
      {title}
      <span className="text-sm whitespace-nowrap">{span}</span>
    </h2>
  )
}

export default H2

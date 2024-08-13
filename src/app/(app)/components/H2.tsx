import React from 'react'

interface H2Props {
  text: string
  span: string
}

const H2: React.FC<H2Props> = ({ text, span }) => {
  return (
    <h2 className="scroll-m-20 pb-2 mb-5 text-3xl font-semibold tracking-tight border-b flex justify-between items-end w-full">
      {text}
      <span className="text-sm">{span}</span>
    </h2>
  )
}

export default H2

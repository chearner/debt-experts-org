import React from 'react'

interface H2Props {
  title: string
  span: string
  tag: string
}

const H2: React.FC<H2Props> = ({ title, span, tag }) => {
  return (
    <>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight border-b flex justify-between items-end w-full">
        {title}
        <span className="text-sm whitespace-nowrap">{span}</span>
      </h2>
      <div className="mt-1 mb-5">{tag}</div>
    </>
  )
}

export default H2

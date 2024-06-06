import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode,
  tag?: string
}

export default function SectionUnderline({ children, tag }: Props) {
  return (
    <div className="" >
         <div className="spacer" id={tag ? `${tag}`: ''} />
      <div className="py-[2rem] ">{children}</div>
      <div className="w-full border-t border-gray-300" />
    </div>
  )
}

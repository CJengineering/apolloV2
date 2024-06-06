
import { StatProps } from '@/app/interfaces'
import React from 'react'



export default function Stats({ title, content }: StatProps) {
  return (
    <div>
      <div className="font-ibmSans text-2xl md:text-4xl lg:text-4xl font-extrabold ">{title}</div>
      <div className="text-tiny font-semibold uppercase">
       {content}
      </div>
    </div>
  )
}

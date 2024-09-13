
import { StatProps } from '@/app/interfaces'
import React from 'react'



export default function Stats({ title, content }: StatProps) {
  return (
    <div>
      <div className="sans-serif text-3xl md:text-5xl">{title}</div>
      <div className="text-xs font-normal mono uppercase">{content}</div>
    </div>
  )
}

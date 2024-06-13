
import { StatProps } from '@/app/interfaces'
import React from 'react'



export default function Stats({ title, content }: StatProps) {
  return (
    <div>
      <div className="sans-serif text-3xl font-bold md:text-5xl">{title}</div>
      <div className="text-xs sans-serif font-semibold uppercase">{content}</div>
    </div>
  )
}

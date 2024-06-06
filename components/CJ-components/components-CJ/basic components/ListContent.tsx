import React from 'react'
import SourceContainer from '../layout/SourceContainer'
import { ListContentProps } from '@/app/interfaces'



export default function ListContent({ title, source, date }: ListContentProps) {
  return (
    <div className="pb-3">
      <div className="pb-1">
        <h3 className="text-base leading-5 font-semibold">{title}</h3>
        </div>
      <SourceContainer source={source} date={date} />
    </div>
  )
}

import { ibm_plex_mono, ibm_plex_sans } from '@/app/fonts'

import React from 'react'
export interface SourceContainerProps {
  source: string
  date: Date | string
}

export default function SourceContainer({
  source,
  date,
}: SourceContainerProps) {
  const formatDate = (date: Date | string): string => {
    if (date instanceof Date) {
      const day = date.getDate()
      const month = date.toLocaleString('en-US', { month: 'long' })
      const year = date.getFullYear()
      return ` ${day} ${month} ${year}`
    } else {
      return date
    }
  }
  return <div className={`text-xs uppercase leading-4 `}>{`${source} | ${formatDate(date)}`}</div>
}

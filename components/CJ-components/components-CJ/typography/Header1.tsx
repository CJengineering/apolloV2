import { ibm_plex_sans } from '@/app/fonts'
import React, { ReactNode } from 'react'

export interface HeaderProps {
 children: ReactNode
}

export default function Header1({ children}: HeaderProps) {
  return (
    <h1 className={`${ibm_plex_sans.className} text-[2.5rem] leading-[120%] lg:text-[3.5rem]`}>{children}</h1>
  )
}

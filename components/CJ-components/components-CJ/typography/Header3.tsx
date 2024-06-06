import { ibm_plex_mono } from '@/app/fonts'
import React from 'react'
import { HeaderProps } from './Header1'

export default function Header3({children}:HeaderProps) {
  return (
    <h3 className={`${ibm_plex_mono.className} text-[2rem] leading-[120%]  lg:text-[2.5rem]`}>{children}</h3>
  )
}

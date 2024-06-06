import React from 'react'
import { HeaderProps } from './Header1'
import { ibm_plex_mono } from '@/app/fonts'

export default function Header2({children}:HeaderProps) {
  return (
    <h2 className={`${ibm_plex_mono.className} text-small leading-[120%] lg:text-small font-bold uppercase`}>{children}</h2>
  )
}

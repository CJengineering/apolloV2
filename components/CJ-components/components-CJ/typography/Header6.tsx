import React from 'react'
import { HeaderProps } from './Header1'
import { ibm_plex_mono } from '@/app/fonts'

export default function Header6({  children }: HeaderProps) {
  return (
    <h6
      className={`${ibm_plex_mono.className} text-[1.125rem] leading-[120%] lg:text-[1.25rem]`}
    >
      {children}
    </h6>
  )
}

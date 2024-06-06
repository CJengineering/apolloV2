import React from 'react'
import { HeaderProps } from './Header1'
import { ibm_plex_mono } from '@/app/fonts'


export default function Header5({ children}:HeaderProps) {
    return (
      <h5 className={`${ibm_plex_mono.className} text-[1.25rem] leading-[140%] lg:text-[1.5rem]`}>{children}</h5>
    )
  }
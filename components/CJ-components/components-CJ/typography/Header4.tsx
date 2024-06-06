import React from 'react'
import { HeaderProps } from './Header1'
import { ibm_plex_mono } from '@/app/fonts'

export default function Header4({children}:HeaderProps) {
    return (
      <h4 className={`${ibm_plex_mono.className} text-[1.5rem] leading-[130%] lg:leading-[140%]  lg:text-[2rem]`}>{children}</h4>
    )
  }
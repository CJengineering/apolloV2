import {
    IBM_Plex_Mono,
    IBM_Plex_Sans,
    IBM_Plex_Serif,
    Inter,
    Roboto_Mono,
  } from 'next/font/google'
  
  export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
  })
  
  export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
  })
  
  export const ibm_plex_mono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['400', '200', '300', '500', '600', '700'],
    variable: '--font-ibm-plex-mono',
  })
  export const ibm_plex_sans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '200', '300', '500', '600', '700'],
    variable: '--font-ibm-plex-sans',
  })
  export const ibm_plex_serif = IBM_Plex_Serif({
    subsets: ['latin'],
    weight: ['400', '200', '300', '500', '600', '700'],
    variable: '--font-ibm-plex-serif',
  })
  
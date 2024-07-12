import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Serif,
  Inter,
  Roboto_Mono,
  Libre_Baskerville,
  Vollkorn,
  EB_Garamond,
  Crimson_Text,
  Frank_Ruhl_Libre,
} from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-mono',
});

export const ibm_plex_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

export const ibm_plex_serif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-serif',
});

export const libre_baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre-baskerville',
});

export const vollkorn = Vollkorn({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-vollkorn',
});

export const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-eb-garamond',
});

export const crimson_text = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson-text',
});

export const frank_ruhl_libre = Frank_Ruhl_Libre({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-frank-ruhl-libre',
});

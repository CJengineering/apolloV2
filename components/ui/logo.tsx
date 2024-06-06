import Link from 'next/link'
import Image from 'next/image'
import LogoImg from '@/public/images/CJ_LOGO_ENGLISH_RED_SVG.svg'

export default function Logo() {
  return (
    <Link className="inline-flex mb-2 md:mb-0" href="/" aria-label="Cruip">
      <Image src={LogoImg} width={128}  alt="Docs" />
    </Link>
  )
}

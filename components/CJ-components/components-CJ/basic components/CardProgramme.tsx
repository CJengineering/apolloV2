import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { CardProgrammeProps } from '@/app/interfaces'
import Link from 'next/link'

export default function CardProgramme({
  imageUrl,
  programmeTitle,
  programmeType,
  arabicProgrammeTitle,
  arabicProgrammeType,
  altText,
  slug,
  locale,
  order
}: CardProgrammeProps) {
  const programmeTitleArabic =  arabicProgrammeTitle
  const programmeTypeArabic = arabicProgrammeType
  return (
    <Link href={`/programmes/${slug}`} className={`relative w-full ${locale ==='ar' ?  'rtl':''}` }>
   
      <div className="aspect-square overflow-hidden group">
        <Image
          className="h-full w-full object-cover"
          width={500}
          height={500}
          src={imageUrl}
          alt={altText}
        />

        {/* Overlay with blend mode and transition */}
        <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-[2100ms] group-hover:opacity-35"></div>

        {/* Color dodge-like effect */}
        <div className="absolute inset-0 bg-blue-950 mix-blend-screen opacity-0 transition-opacity duration-[2100ms] group-hover:opacity-100"></div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className={`${locale === "ar" ? "sans-serif-ar text-white text-2xl lg:text-4xl group-hover:underline" : "sans-serif text-white text-2xl lg:text-4xl group-hover:underline"}`}>
          {locale ==='ar' ? programmeTitleArabic : programmeTitle}
          </div>
          {/* <div className="mono text-medium uppercase text-white">
            {locale === 'ar' ? programmeTypeArabic : programmeType}
          </div> */}
        </div>
      </div>
    </Link>
  )
}

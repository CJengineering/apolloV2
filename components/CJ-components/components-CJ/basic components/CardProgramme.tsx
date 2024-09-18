import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { CardProgrammeProps } from '@/app/interfaces'
import Link from 'next/link'

export default function CardProgramme({
  imageUrl,
  programmeTitle,
  programmeType,
  altText,
  slug,
  order
}: CardProgrammeProps) {
  return (
    <Link href={`/programmes/${slug}`} className="relative w-full">
      <div className="aspect-square overflow-hidden group">
        <Image
          className="h-full w-full object-cover"
          width={500}
          height={500}
          src={imageUrl}
          alt={altText}
        />

        {/* Overlay with blend mode and transition */}
        <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-[3000ms] group-hover:opacity-35"></div>

        {/* Color dodge-like effect */}
        <div className="absolute inset-0 bg-blue-950 mix-blend-screen opacity-0 transition-opacity duration-[3000ms] group-hover:opacity-100"></div>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="sans-serif text-2xl text-white lg:text-4xl">
            {programmeTitle}
          </div>
          <div className="mono text-medium uppercase text-white">
            {programmeType}
          </div>
        </div>
      </div>
    </Link>
  )
}

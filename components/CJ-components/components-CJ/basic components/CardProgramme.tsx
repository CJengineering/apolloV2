import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { CardProgrammeProps } from '@/app/interfaces'



export default function CardProgramme({
  imageUrl,
  programmeTitle,
  programmeType,
}: CardProgrammeProps) {
  return (
    <div className="relative w-full">
      <div className="aspect-square overflow-hidden">
        <Image className="h-full w-full object-cover" src={imageUrl} alt="" />

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="costa-extra-bold text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl">
            {programmeTitle}
          </div>
          <div className={`text-medium uppercase text-gray-300 leading-5 `}>
            {programmeType}
          </div>
        </div>
      </div>
    </div>
  )
}

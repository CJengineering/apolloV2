import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image';

import { BeakerIcon, BoltIcon, VideoCameraIcon, RocketLaunchIcon, NewspaperIcon, MegaphoneIcon, MicrophoneIcon, UserGroupIcon, BookOpenIcon, TrophyIcon, PlayCircleIcon, PaperClipIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { CardHorizontalImageProps } from '@/app/interfaces';




export default function CardSquaredImage({ imageUrl}: CardHorizontalImageProps) {

  return (
    <div className="relative w-full">
      <div className="aspect-square overflow-hidden">
        <Image
          className="h-full w-full object-cover"
          src={imageUrl}
          alt=""
          width={400}
          height={400}
          unoptimized
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute left-4 top-4 h-4 w-4 text-white"><VideoCameraIcon></VideoCameraIcon></div>
      </div>
    </div>
  )
}

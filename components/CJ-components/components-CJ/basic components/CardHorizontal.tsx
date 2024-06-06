import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image';

import { BeakerIcon, BoltIcon, VideoCameraIcon, RocketLaunchIcon, NewspaperIcon, MegaphoneIcon, MicrophoneIcon, UserGroupIcon, BookOpenIcon, TrophyIcon, PlayCircleIcon, PaperClipIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'
import { CardHorizontalImageProps } from '@/app/interfaces';



export default function CardHorizontalImage({ imageUrl}: CardHorizontalImageProps) {
     
  return (
    <div className="relative w-full mb-2">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <Image
          className="h-full w-full object-cover"
          src={imageUrl}
          alt=""
          unoptimized
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute left-4 top-4 h-4 w-4 text-white"><RocketLaunchIcon></RocketLaunchIcon></div>
      </div>
    </div>
  )
}

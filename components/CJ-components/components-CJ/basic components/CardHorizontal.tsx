import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image';

import { BeakerIcon, BoltIcon, VideoCameraIcon, RocketLaunchIcon, NewspaperIcon, MegaphoneIcon, MicrophoneIcon, UserGroupIcon, BookOpenIcon, TrophyIcon, PlayCircleIcon, PaperClipIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

// Define possible types
type IconType = 'News' | 'Event' | 'Launch' | 'Watch' | 'Listen' | 'Award' | 'Jobs' | 'Product' | 'Research' | 'Spinout';

// Update the interface to use the IconType
interface CardHorizontalImageProps {
  type?: IconType;
  imageUrl: string;
}

// Map types to icons
const iconMapping: Record<IconType, React.ComponentType> = {
  News: MegaphoneIcon,
  Event: CalendarDaysIcon,
  Launch: RocketLaunchIcon,
  Watch: PlayCircleIcon,
  Listen: MicrophoneIcon,
  Award: TrophyIcon,
  Jobs: UserGroupIcon,
  Product: PaperClipIcon,
  Research: BeakerIcon,
  Spinout: BoltIcon
};

export default function CardHorizontalImage({ type, imageUrl }: CardHorizontalImageProps) {
  // Ensure type is one of the valid keys
  const IconComponent = type ? iconMapping[type] : null;

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

        {IconComponent && (
          <div className="absolute left-4 top-4 h-4 w-4 text-white">
            <IconComponent />
          </div>
        )}
      </div>
    </div>
  )
}

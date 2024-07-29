import React from 'react'
import Image from 'next/image'
import type { StaticImageData } from 'next/image';
import { BeakerIcon, BoltIcon, RocketLaunchIcon, NewspaperIcon, MegaphoneIcon, MicrophoneIcon, UserGroupIcon, TrophyIcon, PlayCircleIcon, PaperClipIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

// Define possible types
type IconType = 'News' | 'Event' | 'Launch' | 'Watch' | 'Listen' | 'Award' | 'Jobs' | 'Product' | 'Research' | 'Spinout';

// Update the interface to use the IconType
export type CardHorizontalImageProps = {
  imageUrl: StaticImageData | string;
  type?: string; // Use string for generality
};

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

export default function CardSquaredImage({ type, imageUrl }: CardHorizontalImageProps) {
  // Ensure type is one of the valid keys or undefined
  const IconComponent = type && iconMapping[type as IconType] ? iconMapping[type as IconType] : null;

  return (
    <div>
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
        
        {IconComponent && (
          <div className="absolute left-3 top-3 h-5 w-5 text-white">
            <IconComponent />
          </div>
        )}
      </div>
    </div>
    <div className="pt-1"><p className="sans-serif text-base font-medium">Replace text with dynamic Feature title</p></div>
    </div>
  )
}

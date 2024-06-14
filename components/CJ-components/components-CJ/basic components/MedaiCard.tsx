import { BeakerIcon, BoltIcon, VideoCameraIcon, DocumentIcon ,RocketLaunchIcon, CameraIcon, NewspaperIcon, MegaphoneIcon, MicrophoneIcon, UserGroupIcon, BookOpenIcon, TrophyIcon, PlayCircleIcon, PaperClipIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

import Image from 'next/image';
interface MediaCardProps {
    imageUrl: string;
    alt: string;
    source: 'video' | 'audio' | 'photo' | 'other';
  }
  
const MediaCard = ({ imageUrl, alt, source }: MediaCardProps) => {

  const getIcon = (source: string) => {
    switch (source) {
      case 'video':
        return <VideoCameraIcon className="h-4 w-4 text-white" />;
      case 'audio':
        return <MicrophoneIcon className="h-4 w-4 text-white" />;
      case 'photo':
        return <CameraIcon className="h-4 w-4 text-white" />;
      default:
        return <DocumentIcon className="h-4 w-4 text-white" />;
    }
  };

  return (
    <div className="relative w-full">
      <div className="aspect-square overflow-hidden">
        <Image
          className="h-full w-full object-cover"
          src={imageUrl}
          alt={alt}
          width={1980}
            height={1080}
          unoptimized
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute left-4 top-4">
          {getIcon(source)}
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
import React from "react";
import {
  VideoCameraIcon,
  MicrophoneIcon,
  PlayCircleIcon,
  PhotoIcon,
  BeakerIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { MediaCardProps } from "@/app/interfaces";

const MediaCard = ({
  imageUrl,
  datePublished,
  alt,
  programme,
  type,
  source,
  name,
  slug,
}: MediaCardProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return <PlayCircleIcon className="h-4 w-4 text-white" />;
      case "audio":
        return <MicrophoneIcon className="h-4 w-4 text-white" />;
      case "photo":
        return <PhotoIcon className="h-4 w-4 text-white" />;
      default:
        return <BeakerIcon className="h-4 w-4 text-white" />;
    }
  };

  return (
    <Link href={`/${slug}`} className="group relative block overflow-hidden">
      <article className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center lg:pb-6">
        {/* Image Column */}
        <div
          className="col-span-1 relative hidden md:block"
          style={{ paddingBottom: "100%" }}
        >
          <Image
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-140"
            src={imageUrl}
            alt={alt}
            layout="fill"
            unoptimized
          />
          {/* Overlay with opacity change on hover */}
          <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-[1200ms] ease-in-out group-hover:opacity-0"></div>
          <div className="absolute left-2 top-2">
            {getIcon(type)}
          </div>
        </div>

        {/* TEXT COLUMN START */}
        <div className="col-span-2 flex flex-col justify-center space-y-2">
          <div className="text-left">
            <h3 className="text-base sans-serif font-medium group-hover:underline">{name}</h3>
          </div>

          <div className="text-left">
            <p className="sans-serif font-normal text-sm">
              <time dateTime={datePublished}>{datePublished}</time>
            </p>
          </div>

          <div className="text-left">
            <p className="sans-serif font-normal text-sm">{source}</p>
          </div>
        </div>
        {/* TEXT COLUMN END */}
      </article>
    </Link>
  );
};

export default MediaCard;

import { MediaCardProps } from "@/app/interfaces";
import {
  VideoCameraIcon,
  DocumentIcon,
  CameraIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";

import Image from "next/image";
import Link from "next/link";

const MediaCard = ({
  imageUrl,
  datePublished,
  alt,
  programme,
  source,
  name,
  slug,
}: MediaCardProps) => {
  const getIcon = (source: string) => {
    switch (source) {
      case "video":
        return <VideoCameraIcon className="h-4 w-4 text-white" />;
      case "audio":
        return <MicrophoneIcon className="h-4 w-4 text-white" />;
      case "photo":
        return <CameraIcon className="h-4 w-4 text-white" />;
      default:
        return <DocumentIcon className="h-4 w-4 text-white" />;
    }
  };

  return (
    <Link href={slug} className="group relative block overflow-hidden">
      <article className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-2">
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
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute left-4 top-4">
            {/* Add getIcon(source) logic here if needed */}
          </div>
        </div>

        {/* TEXT COLUMN START */}
        <div className="col-span-2 flex flex-col justify-center space-y-2">
          {/* PROGRAM LABEL START */}
          <div className="text-left">
            <span className="mono text-xs font-normal uppercase p-1 bg-slate-100 dark:bg-slate-800">
              {programme.name}
            </span>
          </div>
          {/* PROGRAM LABEL END */}

          {/* TITLE OF POST ITEM START */}
          <div className="text-left">
            <h3 className="text-base serif font-medium">{name}</h3>
          </div>
          {/* TITLE OF POST ITEM END */}

          {/* PUBLISHED DATE AND SOURCES CONTAINER */}
          <div className="flex space-x-2">
            {/* PUBLISHED DATE */}
            <div className="text-left">
              <p className="mono text-xs font-normal uppercase">
                <time dateTime="2024-07-22">{datePublished}</time>
              </p>
            </div>
            {/* SOURCES */}
            <div className="text-left">
              <p className="mono text-xs font-normal uppercase">•</p>
            </div>
            <div className="text-left">
              <p className="mono text-xs font-normal uppercase">{source}</p>
            </div>
          </div>
          {/* END PUBLISHED DATE AND SOURCES CONTAINER */}
        </div>
        {/* TEXT COLUMN END */}
      </article>
    </Link>
  );
};

export default MediaCard;

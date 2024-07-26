import React, { useEffect, useState } from "react";
import ImageNext from "next/image";
import {
  Bars3Icon,
  BellIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  XMarkIcon,
  CalendarDaysIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { ImageLightbox } from "@/app/interfaces";
import ChipIcon from "../ui/chip-icon";
import Link from "next/link";
import { UsersIcon } from "lucide-react";

// interface Image {
//   src: string;
//   alt: string;
//   location: string;
//   year: number;
//   people: string;
// }

interface LightboxProps {
  image: ImageLightbox;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  image,
  onClose,
  onNext,
  onPrev,
}) => {
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);
  const [imageWidth, setImageWidth] = useState<number | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
      setIsPortrait(img.height > img.width);
      setImageWidth(img.width);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 overflow-auto">
      <div className="relative w-full  max-w-6xl mx-auto p-4 overflow-hidden rounded-lg">
        <button
          className="fixed top-4 right-4 text-white z-50"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="overflow-auto max-h-[90vh] p-4">
            <ImageNext
              src={image.src}
              loading="lazy"
              alt={image.alt}
              width={1920}
              height={1080}
              className={`w-auto ${
                isPortrait ? "max-h-[70vh]" : "max-h-[90vh]"
              } object-contain`}
            />
          </div>
          <div className={` mono w-[90%] md:w-full text-white overflow-auto max-h-1/4 `}>
            <div dangerouslySetInnerHTML={{ __html: image.description }} />
          </div>
          {image.year && (
          <div className="h-[1px] my-2 w-[90%] md:w-full px-4 bg-slate-50"></div>
        )}
          <div className="flex w-[90%] md:w-full flex-wrap gap-x-3 ">
          {image.year && (
            <div className="flex items-center gap-x-3 text-white mono text-sm whitespace-nowrap">
              <CalendarDaysIcon width={16} />
              <p className="">{image.year}</p>
            </div>
          )}
            {image.programmeLabel.name && (
              <div className="flex items-center gap-x-3 text-white mono text-sm">
                <CpuChipIcon width={16} />
                <Link
                  href={image.programmeLabel.slug}
                  className=" underline underline-offset-4 whitespace-nowrap"
                >
                  {image.programmeLabel.name}
                </Link>
              </div>
            )}
            {image.peopleMultiReference.length > 0 && (
              <div className="flex items-center gap-x-3 text-white mono text-sm">
                <UsersIcon width={16} />
                <div className="flex ">
                  {image.peopleMultiReference.map((person, index) => (
                    <div key={person.slug} className="mr-2">
                      <Link
                        href={person.slug}
                        className="underline  underline-offset-4 whitespace-nowrap"
                      >
                        {person.name}
                      </Link>
                      {index < image.peopleMultiReference.length - 1 && ","}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          className="absolute left-[-13px] md:left-0 top-1/2 transform -translate-y-1/2 z-50 ml-1 sm:ml-2"
          onClick={onPrev}
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50 mr-1 sm:mr-2"
          onClick={onNext}
        >
          <ChevronRightIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;

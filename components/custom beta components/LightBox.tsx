import React, { useEffect, useState } from "react";
import ImageNext from "next/image";
import {
  Bars3Icon,
  BellIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface Image {
  src: string;
  alt: string;
  location: string;
  year: number;
  people: string;
}

interface LightboxProps {
  image: Image;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose, onNext, onPrev }) => {
  const [isPortrait, setIsPortrait] = useState<boolean | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = image.src;
    img.onload = () => {
      setIsPortrait(img.height > img.width);
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
      <div className="relative w-full max-w-5xl mx-auto p-4 overflow-hidden rounded-lg">
        <button className="fixed top-4 right-4 text-white z-50" onClick={onClose}>
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
              className={`w-auto ${isPortrait ? "max-h-[70vh]" : "max-h-[90vh]"} object-contain`}
            />
          </div>
          <div className="w-full text-white overflow-auto max-h-1/4 px-4">
            <p className="mono text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              blanditiis quod illum minima maiores obcaecati architecto vero
              dolorem. Minima libero temporibus nostrum ex quaerat cupiditate
              eaque ut esse provident commodi?
            </p>
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-50 ml-2"
          onClick={onPrev}
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-50 mr-2"
          onClick={onNext}
        >
          <ChevronRightIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;

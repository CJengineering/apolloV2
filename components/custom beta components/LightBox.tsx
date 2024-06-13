import React, { useEffect, useState } from "react";
import ImageNext from "next/image";

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

const Lightbox: React.FC<LightboxProps> = ({
  image,
  onClose,
  onNext,
  onPrev,
}) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-auto">
      <div className="relative w-full max-w-5xl mx-auto p-4 overflow-hidden rounded-lg">
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          X
        </button>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="overflow-auto max-h-[90vh] mb-4 mt-4">
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
          <div className="w-full p-4 text-white overflow-auto max-h-1/4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              blanditiis quod illum minima maiores obcaecati architecto vero
              dolorem. Minima libero temporibus nostrum ex quaerat cupiditate
              eaque ut esse provident commodi?
            </p>
            <hr className="border-gray-500 my-2" />
            <p>
              <strong>Location:</strong> {image.location}
            </p>
            <p>
              <strong>Year:</strong> {image.year}
            </p>
            <p>
              <strong>People:</strong> {image.people}
            </p>
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white"
          onClick={onPrev}
        >
          &lt;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white"
          onClick={onNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;

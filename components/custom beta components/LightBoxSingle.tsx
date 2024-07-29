'use client';
import React, { useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ImageLightbox {
  type: 'image' | 'video';
  src: string;
  alt: string;
}

interface LightboxSingleProps {
  image: ImageLightbox;
  onClose: () => void;
}

const LightboxSingle: React.FC<LightboxSingleProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    console.log("Image src:", image.src); // Log the image src for debugging
  }, [image.src]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 overflow-auto">
      <h2>https://www.youtube.com/watch?v=Qm6_it7i004</h2>
      <h2>{image.src}</h2>
      <div className="relative w-full max-w-6xl mx-auto p-4 overflow-hidden rounded-lg">
        <div className="flex flex-col items-center justify-center w-full">
          <button
            className="absolute top-4 right-4 text-white z-50"
            onClick={onClose}
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="overflow-auto max-h-[90vh] p-4">
            <video
              className="w-full h-auto"
              controls
            >
              <source src={image.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightboxSingle;

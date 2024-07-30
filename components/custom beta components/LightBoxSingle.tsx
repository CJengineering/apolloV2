import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ImageLightbox {
  type: "image" | "video";
  src: string;
  alt: string;
}

interface LightboxSingleProps {
  image: ImageLightbox;
  onClose: () => void;
}

const LightboxSingle: React.FC<LightboxSingleProps> = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-4 overflow-auto">
      <button
        className="absolute top-4 right-4 text-white z-50"
        onClick={onClose}
      >
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="relative w-full max-w-6xl mx-auto p-4 overflow-hidden rounded-lg">
        <div className="flex flex-col items-center justify-center w-full">
          {image.type === "video" ? (
            <iframe
              width="960"
              height="615"
              src={image.src}
              title="YouTube video player"
              allow="accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture; 
                web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={image.src}
              alt={image.alt}
              className="max-w-full h-auto"
              style={{ maxWidth: "560px", maxHeight: "315px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LightboxSingle;

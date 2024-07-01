"use client";
import { ImageLightbox } from "@/app/interfaces";
import Lightbox from "@/components/custom beta components/LightBox";
import MasonryGrid from "@/components/custom beta components/MansoryGrid";
import React, { useState } from "react";

interface ContentPhotosProps {
  images: ImageLightbox[];
}

export default function ContentPhotos({ images }: ContentPhotosProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null ? (prevIndex + 1) % images.length : null
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex !== null
        ? (prevIndex - 1 + images.length) % images.length
        : null
    );
  };

  return (
    <>
      <MasonryGrid images={images} onImageClick={handleImageClick} />
      {selectedImageIndex !== null && (
        <Lightbox
          image={images[selectedImageIndex]}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}
    </>
  );
}

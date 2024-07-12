"use client";
import { ImageLightbox } from "@/app/interfaces";
import Lightbox from "@/components/custom beta components/LightBox";
import MasonryGrid from "@/components/custom beta components/MansoryGrid";
import React, { useState } from "react";

interface ContentFamilyProps {
  images: ImageLightbox[];
}

export default function ContentFamily({ images }: ContentFamilyProps) {
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

"use client";
import { ImageLightbox } from "@/app/interfaces";
import Lightbox from "@/components/custom beta components/LightBox";
import MasonryGrid from "@/components/custom beta components/MansoryGrid";
import React, { useState } from "react";
import CarouselForComponent from "../basic components/CarousselForComponents";
import Image from "next/image";

interface ContentPhotosProps {
  images: ImageLightbox[];
  numberColumns?: string;
  isCaroussel?: boolean;
}

export default function ContentPhotos({
  images,
  numberColumns,
  isCaroussel,
}: ContentPhotosProps) {
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
  if (isCaroussel) {
    return (
      <>
        <CarouselForComponent>
          {images.map((image, index) => (
            <div onClick={() => handleImageClick(index)}>

            <Image
              src={image.src}
              width={500}
              loading="lazy"
              height={400}
              alt={image.alt}
              className="w-full h-auto cursor-pointer"
              />
              </div>
          ))}
        </CarouselForComponent>
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
  return (
    <>
      <MasonryGrid
        images={images}
        onImageClick={handleImageClick}
        columnsNumber={numberColumns}
      />
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

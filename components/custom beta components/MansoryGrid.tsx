import React from 'react';
import Image from 'next/image';
import { ImageLightbox } from '@/app/interfaces';


interface MasonryGridProps {
  images: ImageLightbox[];
  onImageClick: (index: number) => void;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="w-full columns-1 sm:columns-1 md:columns-5 gap-4">
      {images.map((image, index) => (
        <div key={index} className="mb-4 break-inside-avoid" onClick={() => onImageClick(index)}>
          <Image src={image.src} width={500} loading='lazy' height = {400} alt={image.alt} className="w-full h-auto cursor-pointer" />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;

import React from 'react';
import Image from 'next/image';
interface Image {
  src: string;
  alt: string;
  location: string;
  year: number;
  people: string;
}

interface MasonryGridProps {
  images: Image[];
  onImageClick: (index: number) => void;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images, onImageClick }) => {
  return (
    <div className="columns-1 sm:columns-1 md:columns-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="mb-4 break-inside-avoid" onClick={() => onImageClick(index)}>
          <Image src={image.src} width={500} loading='lazy' height = {400} alt={image.alt} className="w-full h-auto cursor-pointer" />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;

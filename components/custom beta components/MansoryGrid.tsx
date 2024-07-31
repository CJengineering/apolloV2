import React from 'react';
import Image from 'next/image';
import { ImageLightbox } from '@/app/interfaces';


interface MasonryGridProps {
  images: ImageLightbox[];
  onImageClick: (index: number) => void;
  columnsNumber?: string;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images, columnsNumber, onImageClick }) => {
  const columns = columnsNumber  ? columnsNumber :'5';


  // Define an object to map column numbers to Tailwind classes
  const columnClasses: { [key: string]: string } = {
    '1': 'md:columns-1',
    '2': 'md:columns-2',
    '3': 'md:columns-3',
    '4': 'md:columns-4',
    '5': 'md:columns-5',
    // Add more if needed
  };
  const columnClass = columnClasses[columns] || columnClasses['5'];

  return (
    <div className={`w-full columns-1  ${columnClass} gap-4`}>
      {images.map((image, index) => (
        <div key={index} className="mb-4 break-inside-avoid" onClick={() => onImageClick(index)}>
          <Image src={image.src} width={500} loading='lazy' height = {400} alt={image.alt} className="w-full h-auto cursor-pointer" />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;

'use client';
import ContentPhotos from "@/components/CJ-components/components-CJ/test components/content-photos";
import photoNotFromCollectionMapper from "@/functions/transformers/photoNOTcollectionToLIghtBox";
import React from "react";
import Image from "next/image";
import CarouselForComponent from "@/components/CJ-components/components-CJ/basic components/CarousselForComponents";
import Lightbox from "@/components/custom beta components/LightBox";
import dynamic from 'next/dynamic';




export default function page() {

  const imageArray = [
    {
      url: "/images/labs/j-pal/air-water-labs.jpg",
      alt: "image 1",
    },
    {
      url: "/images/labs/j-pal/climate-labs-c40.jpg",
      alt: "image 1",
    },
    {
      url: "/images/labs/j-pal/air-water-labs.jpg",
      alt: "image 1",
    },
    {
      url: "/images/labs/j-pal/air-water-labs.jpg",
      alt: "image 1",
    },
    {
      url: "/images/labs/j-pal/air-water-labs.jpg",
      alt: "image 1",
    },
    {
      url: "/images/labs/j-pal/air-water-labs.jpg",
      alt: "image 1",
    },
  ];
  const arrayOfTreatedImages = imageArray.map(photoNotFromCollectionMapper);

  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null);

  return (
    <>


      <div className="h-screen flex items-start justify-center bg-cyan-400 text-4xl">

      
        <ContentPhotos images={arrayOfTreatedImages} isCaroussel/>
      </div>
    </>
  );
}

'use client';
import { CardHorizontalImageProps } from "@/app/interfaces";
import React, { useState } from "react";
import Link from "next/link";
import CardSquaredImage from "../basic components/CardSquared";
import LightboxSingle from "@/components/custom beta components/LightBoxSingle";
import FeatureCardAsHome from "../basic components/FeatureCardAsHome";

interface FeatureCardTableProps {
  image: CardHorizontalImageProps;
  title: string;
  isLightBox: boolean;
  isTab: boolean;
  clickAction: string;
  customLink: string;
}

export default function FeatureCardTable({
  image,
  title,
 clickAction,
  customLink,
}: FeatureCardTableProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { imageUrl, type } = image;
  const link = customLink ? customLink : "";

  const handleOpenLightbox = () => {
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  if (clickAction === "Video embed code") {
    return (
      <div>
 
        <div onClick={handleOpenLightbox} className="cursor-pointer">
          <FeatureCardAsHome imageUrl={imageUrl} type={type} title={title} />
        </div>
        {lightboxOpen && (
          <LightboxSingle
            image={{ type: 'video', src: customLink, alt: title }}
            onClose={handleCloseLightbox}
          />
        )}
      </div>
    );
  }
  if (clickAction === "Image link") {
    return (
      <div>
       
        <div onClick={handleOpenLightbox} className="cursor-pointer">
          <FeatureCardAsHome imageUrl={imageUrl} type={type} title={title} />
        </div>
        {lightboxOpen && (
          <LightboxSingle
            image={{ type: 'image', src: customLink, alt: title }}
            onClose={handleCloseLightbox}
          />
        )}
      </div>
    );
  }

  if (clickAction === "Internal link") {
    return (
      <Link href={link} >
       
        <FeatureCardAsHome imageUrl={imageUrl} type={type} title={title} />
      </Link>
    );
  }
if(clickAction === "External link") {
  return (
    <Link href={customLink } target="_blank">
      <div onClick={handleOpenLightbox} className="cursor-pointer">
        <FeatureCardAsHome imageUrl={imageUrl} type={type} title={title} />
      </div>

    </Link>
  );
}
return (
    <div onClick={handleOpenLightbox} className="cursor-pointer">
  
        <FeatureCardAsHome imageUrl={imageUrl} type={type} title={title} />
    </div>
    );
}

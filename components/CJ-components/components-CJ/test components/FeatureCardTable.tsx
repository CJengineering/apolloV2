"use client";
import { CardHorizontalImageProps } from "@/app/interfaces";
import React, { useState } from "react";
import Link from "next/link";
import CardSquaredImage from "../basic components/CardSquared";
import LightboxSingle from "@/components/custom beta components/LightBoxSingle";

interface FeatureCardTableProps {
  image: CardHorizontalImageProps;
  title: string;
  isLightBox: boolean;
  isTab: boolean;
  customLink: string;
}

export default function FeatureCardTable({
  image,
  title,
  isLightBox,
  isTab,
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

  if (isLightBox) {
    return (
      <div>
        <div onClick={handleOpenLightbox} className="cursor-pointer">
          <CardSquaredImage imageUrl={imageUrl} type={type} title={title} />
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

  if (isTab) {
    return (
      <Link href={link} target="_blank">
        <CardSquaredImage imageUrl={imageUrl} type={type} title={title} />
      </Link>
    );
  }

  return (
    <div>
      <div onClick={handleOpenLightbox} className="cursor-pointer">
        <CardSquaredImage imageUrl={imageUrl} type={type} title={title} />
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

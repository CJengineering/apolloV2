'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LightboxSingle from "@/components/custom beta components/LightBoxSingle";

interface CardProps {
  imageUrl: string;
  alt: string;
  title: string;
  subtitle: string;
  link: string;
  openInNewTab?: boolean;
  clickAction: string;
}

const HomeCard: React.FC<CardProps> = ({
  imageUrl,
  alt,
  title,
  subtitle,
  link,
  openInNewTab = false,
  clickAction,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleOpenLightbox = () => {
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  if (clickAction === "Video embed code") {
    return (
      <div>
        <div onClick={handleOpenLightbox} className="cursor-pointer pb-6 block overflow-hidden group">
          <div className="relative w-full pb-[100%]">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={imageUrl}
              alt={alt}
              layout="fill"
            />
          </div>
          <div className="pt-3">
            <h3 className="sans-serif text-lg leading-snug pb-1 group-hover:underline">{title}</h3>
            <p className="text-base sans-serif">{subtitle}</p>
          </div>
        </div>
        {lightboxOpen && (
          <LightboxSingle
            image={{ type: 'video', src: link, alt: title }}
            onClose={handleCloseLightbox}
          />
        )}
      </div>
    );
  }

  if (clickAction === "Image link") {
    return (
      <div>
        <div onClick={handleOpenLightbox} className="cursor-pointer pb-6 block overflow-hidden group">
          <div className="relative w-full pb-[100%]">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={imageUrl}
              alt={alt}
           
            />
          </div>
          <div className="pt-3">
            <h3 className="sans-serif text-lg leading-snug pb-1 group-hover:underline">{title}</h3>
            <p className="text-base sans-serif">{subtitle}</p>
          </div>
        </div>
        {lightboxOpen && (
          <LightboxSingle
            image={{ type: 'image', src: link, alt: title }}
            onClose={handleCloseLightbox}
          />
        )}
      </div>
    );
  }

  if (clickAction === "Internal link") {
    return (
      <Link href={link} passHref>
        <div className="pb-6 block overflow-hidden group cursor-pointer">
          <div className="relative w-full pb-[100%]">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={imageUrl}
              alt={alt}
              layout="fill"
            />
          </div>
          <div className="pt-3">
            <h3 className="sans-serif text-lg leading-snug pb-1 group-hover:underline">{title}</h3>
            <p className="text-base sans-serif">{subtitle}</p>
          </div>
        </div>
      </Link>
    );
  }

  if (clickAction === "External link") {
    return (
      <Link href={link} target='_blank'>
    
          <div className="relative w-full pb-[100%]">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={imageUrl}
              alt={alt}
              layout="fill"
            />
          </div>
          <div className="pt-3">
            <h3 className="sans-serif text-lg leading-snug pb-1 group-hover:underline">{title}</h3>
            <p className="text-base sans-serif">{subtitle}</p>
          </div>
 
      </Link>
    );
  }

  return (
    <div onClick={handleOpenLightbox} className="cursor-pointer pb-6 block overflow-hidden group">
      <div className="relative w-full pb-[100%]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={imageUrl}
          alt={alt}
          layout="fill"
        />
      </div>
      <div className="pt-3">
        <h3 className="sans-serif text-lg leading-snug pb-1 group-hover:underline">{title}</h3>
        <p className="text-base sans-serif">{subtitle}</p>
      </div>
    </div>
  );
};

export default HomeCard;

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

  // Updated ImageContainer with new overlay styles
  const ImageContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="relative w-full pb-[100%] group hover:cursor-pointer">
      {children}
      <div className="absolute inset-0 bg-blue-950 mix-blend-screen opacity-0 transition-opacity duration-[2100ms] group-hover:opacity-100 z-10"></div>
    </div>
  );

  if (clickAction === "Video embed code") {
    return (
      <div>
        <div onClick={handleOpenLightbox} className="cursor-pointer pb-6 block overflow-hidden group">
          <ImageContainer>
            <Image
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={imageUrl}
              alt={alt}
              layout="fill"
            />
          </ImageContainer>
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
          <ImageContainer>
            <img
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={imageUrl}
              alt={alt}
            />
          </ImageContainer>
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
          <ImageContainer>
            <Image
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={imageUrl}
              alt={alt}
              layout="fill"
            />
          </ImageContainer>
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
      <Link href={link} target="_blank">
        <div className="pb-6 block overflow-hidden group cursor-pointer">
          <ImageContainer>
            <Image
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={imageUrl}
              alt={alt}
              layout="fill"
            />
          </ImageContainer>
          <div className="pt-3">
            <h3 className="sans-serif text-lg leading-snug pb-1 group-hover:underline">{title}</h3>
            <p className="text-base sans-serif">{subtitle}</p>
          </div>
        </div>
      </Link>
    );
  }

  // Default case
  return (
    <div onClick={handleOpenLightbox} className="cursor-pointer pb-6 block overflow-hidden group">
      <ImageContainer>
        <Image
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={imageUrl}
          alt={alt}
          layout="fill"
        />
      </ImageContainer>
      <div className="pt-3">
        <h3 className="sans-serif text-lg leading-snug pb-1 group-hover:underline">{title}</h3>
        <p className="text-base sans-serif">{subtitle}</p>
      </div>
    </div>
  );
};

export default HomeCard;

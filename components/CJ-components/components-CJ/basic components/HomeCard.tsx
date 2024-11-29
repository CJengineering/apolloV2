'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LightboxSingle from "@/components/custom beta components/LightBoxSingle";
import { HomeCardProps } from '@/app/interfaces';



const HomeCard: React.FC<HomeCardProps> = ({
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
    <div className="
    relative h-32 w-32 lg:pb-[100%] lg:w-full group hover:cursor-pointer">
      {children}
      <div className="absolute inset-0 bg-blue-950 mix-blend-screen opacity-0 transition-opacity duration-[2100ms] group-hover:opacity-100 z-10"></div>
    </div>
  );

  if (clickAction === "Video embed code") {
    return (
      <div>
        <div onClick={handleOpenLightbox} className="flex flex-row  items-center lg:block overflow-hidden group cursor-pointer">
        <div className="col-span-5">
          <ImageContainer>
            <Image
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={imageUrl}
              alt={alt}
              layout="fill"
            />
          </ImageContainer>
          </div>
          <div className="pt-0 lg:pt-3 ml-3 lg:ml-0">
            <h3 className="sans-serif text-lg leading-snug pb-1 group-hover:underline">{title}</h3>
            <p className="text-base sans-serif hidden lg:block">{subtitle}</p>
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
        <div onClick={handleOpenLightbox} className="flex flex-row items-center lg:block overflow-hidden group cursor-pointer">
        <div className="col-span-5">
          <ImageContainer>
            <img
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={imageUrl}
              alt={alt}
            />
          </ImageContainer>
          </div>
          <div className="pt-0 lg:pt-3 ml-3 lg:ml-0">
            <h3 className="sans-serif text-lg leading-snug pb-1 group-hover:underline">{title}</h3>
            <p className="text-base sans-serif hidden lg:block">{subtitle}</p>
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
        <div className="flex flex-row items-center lg:block overflow-hidden group cursor-pointer">
          <div className="col-span-5">
          <ImageContainer>
            <Image
              className="absolute inset-0 w-10 h-10 mr-10 lg:w-full lg:h-full object-cover z-0"
              src={imageUrl}
              alt={alt}
              layout="fill"
            />
          </ImageContainer>
          </div>
          <div className="pt-0 lg:pt-3 ml-3 lg:ml-0">
            <h3 className="sans-serif text-lg leading-snug pb-1 group-hover:underline">{title}</h3>
            <p className="text-base sans-serif hidden lg:block">{subtitle}</p>
          </div>
        </div>
      </Link>
    );
  }

  if (clickAction === "External link") {
    return (
      <Link href={link} target="_blank">
        <div className="flex flex-row items-center lg:block overflow-hidden group cursor-pointer">
        <div className="col-span-5">
          <ImageContainer>
            <Image
              className="absolute inset-0 w-full h-full object-cover z-0"
              src={imageUrl}
              alt={alt}
              layout="fill"
            />
          </ImageContainer>
          </div>
          <div className="pt-0 lg:pt-3 ml-3 lg:ml-0">
            <h3 className="sans-serif text-lg leading-snug pb-1 group-hover:underline">{title}</h3>
            <p className="text-base sans-serif hidden lg:block">{subtitle}</p>
          </div>
        </div>
      </Link>
    );
  }

  // Default case
  return (
    <div onClick={handleOpenLightbox} className="flex flex-row items-center lg:block overflow-hidden group cursor-pointer">
      <div className="col-span-5">
      <ImageContainer>
        <Image
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={imageUrl}
          alt={alt}
          layout="fill"
        />
      </ImageContainer>
      </div>
      <div className="pt-0 lg:pt-3 ml-3 lg:ml-0">
        <h3 className="sans-serif text-lg leading-snug pb-1 group-hover:underline">{title}</h3>
        <p className="text-base sans-serif hidden lg:block">{subtitle}</p>
      </div>
    </div>
  );
};

export default HomeCard;

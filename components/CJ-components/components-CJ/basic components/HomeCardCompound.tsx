"use client";

import React, { createContext, PropsWithChildren, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LightboxSingle from "@/components/custom beta components/LightBoxSingle";

interface CardContextProps {
  imageUrl: string;
  alt: string;
  title: string;
  subtitle: string;
  link: string;
  openInNewTab?: boolean;
  clickAction: string;
  lightboxOpen: boolean;
  handleOpenLightbox: () => void;
  handleCloseLightbox: () => void;
}

const CardContext = createContext<CardContextProps | undefined>(undefined);

function useCardContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
}

type CardProviderProps = PropsWithChildren<{
  content: Omit<CardContextProps, "lightboxOpen" | "handleOpenLightbox" | "handleCloseLightbox">;
}>;

const CardProvider = ({ content, children }: CardProviderProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleOpenLightbox = () => setLightboxOpen(true);
  const handleCloseLightbox = () => setLightboxOpen(false);

  return (
    <CardContext.Provider value={{ ...content, lightboxOpen, handleOpenLightbox, handleCloseLightbox }}>
      {children}
      {lightboxOpen && (
        <LightboxSingle
          image={{ type: content.clickAction === "Video embed code" ? 'video' : 'image', src: content.link, alt: content.title }}
          onClose={handleCloseLightbox}
        />
      )}
    </CardContext.Provider>
  );
};
CardProvider.displayName = "CardProvider";
const CardImage = () => {
    const { imageUrl, alt } = useCardContext();
    return (
      <div className="relative w-full pb-[100%]">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={imageUrl}
          alt={alt}
          layout="fill"
        />
      </div>
    );
  };
  CardImage.displayName = "CardImage";
  
  const CardTitle = () => {
    const { title } = useCardContext();
    return (
      <div className="pt-2">
        <h3 className="serif text-lg font-semibold group-hover:underline">{title}</h3>
      </div>
    );
  };
  CardTitle.displayName = "CardTitle";
  
  const CardSubtitle = () => {
    const { subtitle } = useCardContext();
    return (
      <div>
        <p className="text-black text-base sans-serif font-normal">{subtitle}</p>
      </div>
    );
  };
  CardSubtitle.displayName = "CardSubtitle";
  
  const VideoEmbed = () => {
    const { handleOpenLightbox } = useCardContext();
    return (
      <div onClick={handleOpenLightbox} className="cursor-pointer pb-6 block overflow-hidden group">
        <CardImage />
        <CardTitle />
        <CardSubtitle />
      </div>
    );
  };
  VideoEmbed.displayName = "VideoEmbed";
  
  const ImageLink = () => {
    const { handleOpenLightbox } = useCardContext();
    return (
      <div onClick={handleOpenLightbox} className="cursor-pointer pb-6 block overflow-hidden group">
        <CardImage />
        <CardTitle />
        <CardSubtitle />
      </div>
    );
  };
  ImageLink.displayName = "ImageLink";
  
  const InternalLink = () => {
    const { link } = useCardContext();
    return (
      <Link href={link} passHref>
        <div className="block overflow-hidden group cursor-pointer">
          <CardImage />
          <CardTitle />
          <CardSubtitle />
        </div>
      </Link>
    );
  };
  InternalLink.displayName = "InternalLink";
  
  const ExternalLink = () => {
    const { link, openInNewTab } = useCardContext();
    return (
      <Link href={link} passHref>
        <a target={openInNewTab ? "_blank" : "_self"} rel="noopener noreferrer" className="block overflow-hidden group cursor-pointer">
          <CardImage />
          <CardTitle />
          <CardSubtitle />
        </a>
      </Link>
    );
  };
  ExternalLink.displayName = "ExternalLink";
  
  const DefaultAction = () => {
    const { handleOpenLightbox } = useCardContext();
    return (
      <div onClick={handleOpenLightbox} className="cursor-pointer pb-6 block overflow-hidden group">
        <CardImage />
        <CardTitle />
        <CardSubtitle />
      </div>
    );
  };
  DefaultAction.displayName = "DefaultAction";
  
  export {
    CardProvider,
    VideoEmbed as CardVideoEmbed,
    ImageLink as CardImageLink,
    InternalLink as CardInternalLink,
    ExternalLink as CardExternalLink,
    DefaultAction as CardDefaultAction,
  };
  
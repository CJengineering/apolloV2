'use client';
import { createContext, useContext, PropsWithChildren } from "react";
import Image from "next/image";

import { UnifiedFields } from "@/app/interfaces";
type CompoundUnifiedSmallCardContextType = {
    content: UnifiedFields;
    locale: string;
  };
  const CompoundUnifiedSmallCardContext = createContext<CompoundUnifiedSmallCardContextType | undefined>(undefined);

  function useCompoundUnifiedSmallCardContext() {
    const context = useContext(CompoundUnifiedSmallCardContext);
    if (!context) {
      throw new Error("useCompoundUnifiedSmallCardContext must be used within a CompoundUnifiedSmallCardProvider");
    }
    return context;
  }
  
  type CompoundUnifiedSmallCardProps = PropsWithChildren<{
    content: UnifiedFields;
    locale: string;
  }>;
  
  const CompoundUnifiedSmallCard = ({ content, locale, children }: CompoundUnifiedSmallCardProps) => (
    <CompoundUnifiedSmallCardContext.Provider value={{ locale, content }}>
      <article className="pb-8 sm:flex lg:flex-col xl:flex-row xl:items-center">{children}</article>
    </CompoundUnifiedSmallCardContext.Provider>
  );
  CompoundUnifiedSmallCard.displayName = "CompoundUnifiedSmallCard";
  
  // Components consuming the unified context
  const ImageLink = () => {
    const { content } = useCompoundUnifiedSmallCardContext();
    return (
      <a href={content.slug} className="order-1 w-full sm:w-2/5 lg:order-1 lg:w-full xl:w-2/5">
        <div className="group aspect-square relative z-10 overflow-hidden bg-gray-100">
          <Image
            src={content.thumbnail.url}
            alt={content.thumbnail.alt}
            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
            width={1900}
            height={1900}
          />
        </div>
      </a>
    );
  };
  ImageLink.displayName = "ImageLink";
  
  const TitleLink = () => {
    const { content } = useCompoundUnifiedSmallCardContext();
    return (
      <a href={content.slug}>
        <h3 className="sans-serif font-medium text-lg leading-tight">{content.name}</h3>
      </a>
    );
  };
  TitleLink.displayName = "TitleLink";
  

  
  export {
    CompoundUnifiedSmallCard,
    ImageLink as CompoundUnifiedSmallCardImageLink,
    TitleLink as CompoundUnifiedSmallCardTitleLink,

  };
"use client";

import { createContext, PropsWithChildren, useContext } from "react";
import { NewsCleanedFields, UnifiedFields } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";

type UnifiedCardSmallContextType = {
  content: UnifiedFields;
  locale: string;
};

const UnifiedCardSmallContext = createContext<
  UnifiedCardSmallContextType | undefined
>(undefined);

function useUnifiedCardSmallContext() {
  const context = useContext(UnifiedCardSmallContext);
  if (!context) {
    throw new Error(
      "useUnifiedCardSmallContext must be used within a UnifiedCardSmallProvider"
    );
  }
  return context;
}

type UnifiedCardSmallProps = PropsWithChildren<{
  content: UnifiedFields;
  locale: string;
}>;

const UnifiedCardSmall = ({
  content,
  locale,
  children,
}: UnifiedCardSmallProps) => (
  <UnifiedCardSmallContext.Provider value={{locale, content }}>
    <article className="pb-8 sm:flex lg:flex-col xl:flex-row xl:items-center"><Link href={content.slug}>{children}</Link></article>
  </UnifiedCardSmallContext.Provider>
);
UnifiedCardSmall.displayName = "UnifiedCardSmall";
const ImageLink = () => {
    const { content } = useUnifiedCardSmallContext();
    return (
      <div className="order-1 w-full sm:w-2/5 lg:order-1 lg:w-full xl:w-2/5"
      >
        <div className="group aspect-square relative z-10 overflow-hidden bg-gray-100">
          <Image
            src={content.thumbnail.url}
            className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
            alt={content.thumbnail.alt}
            width={1900}
            height={1900}
          />
        </div>
      </div>
    );
  };
  ImageLink.displayName = "ImageLink";
  
  const SourceLabel = () => {
    const { content } = useUnifiedCardSmallContext();
    return (
      <span className="mono text-xs font-normal uppercase leading-tight">
        {content.sources.name}
        </span>
    );
  };
  SourceLabel.displayName = "SourceLabel";
  
  // const ProgrammeLabel = () => {
  //   const { content } = useUnifiedCardSmallContext();
  //   return (
  //     <p className="mono text-xs font-normal uppercase leading-tight pb-3">
  //       {content.programme.name}
  //     </p>
  //   );
  // };
  // ProgrammeLabel.displayName = "ProgrammeLabel";



  const TitleLink = () => {
    const { content } = useUnifiedCardSmallContext();
    return (
      <a href={content.slug}>
        <h2 className="serif font-normal text-lg leading-tight hover:underline">
          {content.name}
        </h2>
      </a>
    );
  };
  TitleLink.displayName = "TitleLink";
  
  const DateLabel = () => {
    const { content } = useUnifiedCardSmallContext();
    const formatDate = (date: Date | string): string => {
      if (date instanceof Date) {
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "long" });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
      } else {
        return date;
      }
    };
  
    return (
      <span className="mono text-xs font-normal uppercase leading-tight">
        {formatDate(content.datePublished)}
      </span>
    );
  };
  DateLabel.displayName = "DateLabel";
  
  const MetaContainer = ({ children }: PropsWithChildren) => (
    <div className="mt-2 flex items-center justify-between">
      <div className="flex items-center justify-center">
        <div className="flex text-tiny">{children}</div>
      </div>
    </div>
  );
  MetaContainer.displayName = "MetaContainer";
  
  export {
    UnifiedCardSmall,
    ImageLink as UnifiedCardSmallImageLink,
    SourceLabel as UnifiedCardSmallSourceLabel,
    TitleLink as UnifiedCardSmallTitleLink,
    DateLabel as UnifiedCardSmallDateLabel,
    MetaContainer as UnifiedCardSmallMetaContainer,
  };
  
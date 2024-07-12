"use client";

import { createContext, PropsWithChildren, useContext } from "react";
import { NewsCleanedFields } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";

type CompoundNewsSmallContextType = {
  content: NewsCleanedFields;
  locale: string;
};

const CompoundNewsSmallContext = createContext<
  CompoundNewsSmallContextType | undefined
>(undefined);

function useCompoundNewsSmallContext() {
  const context = useContext(CompoundNewsSmallContext);
  if (!context) {
    throw new Error(
      "useCompoundNewsSmallContext must be used within a CompoundNewsSmallProvider"
    );
  }
  return context;
}

type CompoundNewsSmallProps = PropsWithChildren<{
  content: NewsCleanedFields;
  locale: string;
}>;

const CompoundNewsSmall = ({
  content,
  locale,
  children,
}: CompoundNewsSmallProps) => (
  <CompoundNewsSmallContext.Provider value={{locale, content }}>
    <article className="pb-8 sm:flex lg:flex-col xl:flex-row xl:items-center"><Link href={content.slug}>{children}</Link></article>
  </CompoundNewsSmallContext.Provider>
);
CompoundNewsSmall.displayName = "CompoundNewsSmall";
const ImageLink = () => {
    const { content } = useCompoundNewsSmallContext();
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
    const { content } = useCompoundNewsSmallContext();
    return (
      <span className="mono text-xs font-normal uppercase leading-tight">
        {content.sources.name}
        </span>
    );
  };
  SourceLabel.displayName = "SourceLabel";
  
  // const ProgrammeLabel = () => {
  //   const { content } = useCompoundNewsSmallContext();
  //   return (
  //     <p className="mono text-xs font-normal uppercase leading-tight pb-3">
  //       {content.programme.name}
  //     </p>
  //   );
  // };
  // ProgrammeLabel.displayName = "ProgrammeLabel";



  const TitleLink = () => {
    const { content } = useCompoundNewsSmallContext();
    return (
      <div>
        <h2 className="serif font-normal text-lg leading-tight hover:underline">
          {content.name}
        </h2>
      </div>
    );
  };
  TitleLink.displayName = "TitleLink";
  
  const DateLabel = () => {
    const { content } = useCompoundNewsSmallContext();
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
    CompoundNewsSmall,
    ImageLink as CompoundNewsSmallImageLink,
    SourceLabel as CompoundNewsSmallSourceLabel,
    TitleLink as CompoundNewsSmallTitleLink,
    DateLabel as CompoundNewsSmallDateLabel,
    MetaContainer as CompoundNewsSmallMetaContainer,
  };
  
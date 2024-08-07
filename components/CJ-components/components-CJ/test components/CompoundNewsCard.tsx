"use client";

import { NewsCleanedFields } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, createContext, useContext } from "react";

type CompoundNewsCardContextType = {
  content: NewsCleanedFields;
  locale: string;
};

const CompoundNewsCardContext = createContext<
  CompoundNewsCardContextType | undefined
>(undefined);

function useCompoundNewsCardContext() {
  const context = useContext(CompoundNewsCardContext);
  if (!context) {
    throw new Error(
      "useCompoundNewsCardContext must be used within a CompoundNewsCardProvider"
    );
  }
  return context;
}

type CompoundNewsCardProps = PropsWithChildren<{
  content: NewsCleanedFields;
  locale: string;
}>;

const CompoundNewsCard = ({
  content,
  children,
  locale,
}: CompoundNewsCardProps) => (
  <CompoundNewsCardContext.Provider value={{ content, locale }}>
    <div className="relative cursor-pointer"><Link href={content.slug}>{children}</ Link></div>
  </CompoundNewsCardContext.Provider>
);
CompoundNewsCard.displayName = "CompoundNewsCard";

const ImageLink = () => {
  const { content } = useCompoundNewsCardContext();
  return (
    <div
     
      className="group relative z-10 block overflow-hidden bg-gray-100"
      style={{ paddingBottom: "56.25%", position: "relative" }}
    >
      <div className="aspect-h-9 aspect-w-16">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-110"
          src={content.thumbnail.url}
          loading="lazy"
          width={500}
          height={500}
          alt="Featured article"
        />
      </div>
    </div>
  );
};
ImageLink.displayName = "ImageLink";

const ProgrammeLabel = () => {
  const { content } = useCompoundNewsCardContext();
  return (
    <div className="flex">
     <p className="mono text-xs font-normal uppercase p-1 bg-slate-100 dark:bg-slate-800">
        {content.programme.name}
    </p>
    </div>
  );
};
ProgrammeLabel.displayName = "ProgrammeLabel";
 
const TitleLink = () => {
  const { content, locale } = useCompoundNewsCardContext();
  return (
    <div className="group mt-1 block">
      <h2 className="text-xl md:text-base serif font-medium tracking-normal transition duration-300 ease-in-out group-hover:underline lg:text-2xl xl:text-2xl lg:leading-tight">
        {locale === "ar" ? content.arabicTitle : content.name}
      </h2>
    </div>
  );
};
TitleLink.displayName = "TitleLink";

const SourceLabel = () => {
  const { content } = useCompoundNewsCardContext();
  return (
    <div>
      <p className="mono text-sm font-normal uppercase">
        {content.sources.name}
      </p>
    </div>
  );
};
SourceLabel.displayName = "SourceLabel";

const DateLabel = () => {
  const { content } = useCompoundNewsCardContext();
  return (
    <div>
      <p className="mono text-sm font-normal uppercase">
        <time dateTime={content.datePublished}>{content.datePublished}</time>
      </p>
    </div>
  );
};
DateLabel.displayName = "DateLabel";

const Divider = () => (
  <div className="text-sm font-normal uppercase px-3">
    <span aria-hidden="true">|</span>
  </div>
);
Divider.displayName = "Divider";

const SourceDateContainer = ({ children }: PropsWithChildren) => (
  <div className="mt-2 block">
    <div className="flex">{children}</div>
  </div>
);
SourceDateContainer.displayName = "SourceDateContainer";

export {
  CompoundNewsCard,
  ImageLink as CompoundNewsCardImageLink,
  ProgrammeLabel as CompoundNewsCardProgrammeLabel,
  TitleLink as CompoundNewsCardTitleLink,
  SourceLabel as CompoundNewsCardSourceLabel,
  DateLabel as CompoundNewsCardDateLabel,
  Divider as CompoundNewsCardDivider,
  SourceDateContainer as CompoundNewsCardSourceDateContainer,
};

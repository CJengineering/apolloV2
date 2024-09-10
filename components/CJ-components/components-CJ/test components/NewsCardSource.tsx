"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import { NewsCleanedFields, PostFieldsCleaned } from "@/app/interfaces";
import Link from "next/link";
import Image from "next/image";

type NewsCardSourceContextType = {
  content: NewsCleanedFields;
};

const NewsCardSourceContext = createContext<
  NewsCardSourceContextType | undefined
>(undefined);

function useNewsCardSourceContext() {
  const context = useContext(NewsCardSourceContext);
  if (!context) {
    throw new Error(
      "useNewsCardSourceContext must be used within a NewsCardSourceProvider"
    );
  }
  return context;
}

type NewsCardSourceProviderProps = PropsWithChildren<{
  content: NewsCleanedFields;
}>;

const NewsCardSourceProvider = ({
  content,
  children,
}: NewsCardSourceProviderProps) => {
  return (
    <NewsCardSourceContext.Provider value={{ content }}>
      <Link
        href={content.slug}
        className="group  relative block overflow-hidden"
      >
        <article className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-2">
          {children}
        </article>
      </Link>
    </NewsCardSourceContext.Provider>
  );
};
NewsCardSourceProvider.displayName = "NewsCardSourceProvider";
const ImageColumn = () => {
  const { content } = useNewsCardSourceContext();
  return (
    <div
      className="col-span-1  relative hidden md:block"
      style={{ paddingBottom: "100%" }}
    >
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-140"
        src={content.thumbnail.url}
        alt="Featured article"
        loading="lazy"
        width={500}
        height={500}
      />
    </div>
  );
};
ImageColumn.displayName = "ImageColumn";

const ProgrammeLabel = () => {
  const { content } = useNewsCardSourceContext();
  return (
    content.programme.shortname && (
      <div className="text-left">
        <span className="mono text-xs font-normal uppercase p-1 bg-slate-100 dark:bg-slate-800">
          {content.programme.shortname}
        </span>
      </div>
    )
  );
};
ProgrammeLabel.displayName = "ProgrammeLabel";

const Title = () => {
  const { content } = useNewsCardSourceContext();
  return (
    <div className="text-left">
      <h3 className="text-base serif font-medium">{content.name}</h3>
    </div>
  );
};
Title.displayName = "Title";

const DatePublished = () => {
  const { content } = useNewsCardSourceContext();
  return (
    <div className="text-left flex space-x-1">
      <p className="sans-serif text-sm font-normal">
        <time dateTime={content.datePublished}>{content.datePublished}</time>
      </p>
      <p className="sans-serif text-sm font-normal">
        <span>|</span>
      </p>
      <p className="sans-serif text-sm font-normal">
        <span>{content.sources.name}</span>
      </p>
    </div>
  );
};

DatePublished.displayName = "DatePublished";
const DateAndSourceContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-left flex space-x-1">
      {children}
    </div>
  );
};
DateAndSourceContainer.displayName = "DateAndSourceContainer";

const Source = () => {
  const { content } = useNewsCardSourceContext();
  return (
    <p className="sans-serif text-sm font-normal">
      <span>{content.sources.name}</span>
    </p>
  );
};
Source.displayName = "Source";
const Date = () => {
  const { content } = useNewsCardSourceContext();
  return (
    <p className="sans-serif text-sm font-normal">
      <time dateTime={content.datePublished}>{content.datePublished}</time>
    </p>
  );
};
Date.displayName = "Date";

const Divider = () => {
  
  return (
   
      <p className="sans-serif text-sm font-normal">
        <span>|</span>
      </p>
    
  );
};
Divider.displayName = "Divider";

const TextColumn = ({ children }: PropsWithChildren) => (
  <div className="col-span-2 flex flex-col justify-center space-y-2">
    {children}
  </div>
);

TextColumn.displayName = "TextColumn";
export {
  NewsCardSourceProvider,
  ImageColumn as NewsCardSourceImageColumn,
  DateAndSourceContainer as NewsCardSourceDateAndSourceContainer,
  Divider as NewsCardSourceDivider,
  Source as NewsCardSourceSource,
  Date as NewsCardSourceDate,

  ProgrammeLabel as NewsCardSourceProgrammeLabel,
  Title as NewsCardSourceTitle,
  DatePublished as NewsCardSourceDatePublished,
  TextColumn as NewsCardSourceTextColumn,
};

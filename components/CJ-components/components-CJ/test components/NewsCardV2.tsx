"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import { NewsCleanedFields, PostFieldsCleaned } from "@/app/interfaces";
import Link from "next/link";
import Image from 'next/image'

type NewsCardV2ContextType = {
  content: NewsCleanedFields;
};

const NewsCardV2Context = createContext<NewsCardV2ContextType | undefined>(
  undefined
);

function useNewsCardV2Context() {
  const context = useContext(NewsCardV2Context);
  if (!context) {
    throw new Error(
      "useNewsCardV2Context must be used within a NewsCardV2Provider"
    );
  }
  return context;
}

type NewsCardV2ProviderProps = PropsWithChildren<{
  content: NewsCleanedFields;
}>;

const NewsCardV2Provider = ({ content, children }: NewsCardV2ProviderProps) => {
  return (
    <NewsCardV2Context.Provider value={{ content }}>
      <Link href={content.slug} className="group  relative block overflow-hidden">
        <article className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-2">
          {children}
        </article>
      </Link>
    </NewsCardV2Context.Provider>
  );
};
NewsCardV2Provider.displayName = "NewsCardV2Provider";
const ImageColumn = () => {
  const { content } = useNewsCardV2Context();
  return (
    <div className="col-span-1  relative hidden md:block" style={{ paddingBottom: "100%" }}>
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
  const { content } = useNewsCardV2Context();
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
  const { content } = useNewsCardV2Context();
  return (
    <div className="text-left">
      <h3 className="text-base serif font-medium">{content.name}</h3>
    </div>
  );
};
Title.displayName = "Title";

const DatePublished = () => {
  const { content } = useNewsCardV2Context();
  return (
    <div className="text-left flex space-x-1">
      <p className="mono text-xs font-normal uppercase">
        <time dateTime={content.datePublished}>{content.datePublished}</time>
      </p>
      <p className="mono text-xs font-normal uppercase"><span>
      •</span></p>
        <p className="mono text-xs font-normal uppercase"><span>{content.sources.name}</span></p>
    </div>
  );
};
DatePublished.displayName = "DatePublished";

const TextColumn = ({ children }: PropsWithChildren) => (
  <div className="col-span-2 flex flex-col justify-center space-y-2">
    {children}
  </div>
);
TextColumn.displayName = "TextColumn";
export {
  NewsCardV2Provider,
  ImageColumn as NewsCardV2ImageColumn,
  ProgrammeLabel as NewsCardV2ProgrammeLabel,
  Title as NewsCardV2Title,
  DatePublished as NewsCardV2DatePublished,
  TextColumn as NewsCardV2TextColumn,
};

"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import { PostFieldsCleaned } from "@/app/interfaces";
import Link from "next/link";

type PostCardContextType = {
  content: PostFieldsCleaned;
};

const PostCardContext = createContext<PostCardContextType | undefined>(
  undefined
);

function usePostCardContext() {
  const context = useContext(PostCardContext);
  if (!context) {
    throw new Error(
      "usePostCardContext must be used within a PostCardProvider"
    );
  }
  return context;
}

type PostCardProviderProps = PropsWithChildren<{
  content: PostFieldsCleaned;
}>;

const PostCardProvider = ({ content, children }: PostCardProviderProps) => {
  return (
    <PostCardContext.Provider value={{ content }}>
      <article className="relative">{children}</article>
    </PostCardContext.Provider>
  );
};
PostCardProvider.displayName = "PostCardProvider";
const ImageLink = () => {
    const { content } = usePostCardContext();
    return (
      <Link
        href={content.slug}
        className="groupe relative z-10 block overflow-hidden bg-gray-100"
        style={{ paddingBottom: "56.25%", position: "relative" }}
      >
        <div className="aspect-h-9 aspect-w-16">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-140"
            src={content.thumbnail.url}
            alt="Featured article"
          />
        </div>
      </Link>
    );
  };
  ImageLink.displayName = "ImageLink";
  
  const TagLink = () => {
    const { content } = usePostCardContext();
    return (
      <Link
        href={content.slug}
        className="mono text-sm font-medium uppercase"
      >
        {'tag'}
      </Link>
    );
  };
  TagLink.displayName = "TagLink";
  
  const TitleLink = () => {
    const { content } = usePostCardContext();
    return (
      <Link href={content.slug} className="group mt-3 block">
        <h2 className="text-xl costa font-bold tracking-normal transition duration-300 ease-in-out group-hover:underline lg:text-2xl xl:text-3xl lg:leading-tight">
          {content.name}
        </h2>
      </Link>
    );
  };
  TitleLink.displayName = "TitleLink";
  
  const DatePublished = () => {
    const { content } = usePostCardContext();
    return (
      <div className="mt-2 flex items-center">
        <div>
          <p className="mono text-sm font-medium uppercase">
            <time dateTime={content.datePublished}>
              {content.datePublished}
            </time>
          </p>
        </div>
      </div>
    );
  };
  DatePublished.displayName = "DatePublished";
  export {
    PostCardProvider,
    ImageLink as PostCardImageLink,
    TagLink as PostCardTagLink,
    TitleLink as PostCardTitleLink,
    DatePublished as PostCardDatePublished,
  };
  
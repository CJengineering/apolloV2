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
      <Link href={content.slug} className="group relative block overflow-hidden">
        <article className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-2">
          {children}
        </article>
      </Link>
    </PostCardContext.Provider>
  );
};
PostCardProvider.displayName = "PostCardProvider";
const ImageColumn = () => {
  const { content } = usePostCardContext();
  return (
    <div className="col-span-1 relative hidden md:block" style={{ paddingBottom: "100%" }}>
      <img
        className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-140"
        src={content.thumbnail.url}
        alt="Featured article"
      />
    </div>
  );
};
ImageColumn.displayName = "ImageColumn";

const ProgrammeLabel = () => {
  const { content } = usePostCardContext();
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
  const { content } = usePostCardContext();
  return (
    <div className="text-left">
      <h3 className="text-base serif font-medium">{content.name}</h3>
    </div>
  );
};
Title.displayName = "Title";

const DatePublished = () => {
  const { content } = usePostCardContext();
  return (
    <div className="text-left">
      <p className="mono text-xs font-uppercase">
        <time dateTime={content.datePublished}>{content.datePublished}</time>
      </p>
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
  PostCardProvider,
  ImageColumn as PostCardImageColumn,
  ProgrammeLabel as PostCardProgrammeLabel,
  Title as PostCardTitle,
  DatePublished as PostCardDatePublished,
  TextColumn as PostCardTextColumn,
};

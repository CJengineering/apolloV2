"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

interface AgnosticComponentContextType {
  slug: string;
  imageSrc: string;
  programShortname: string;
  title: string;
  datePublished: string;
  collectionName: string;
  source: string;
  shortDescription?: string;
}

const AgnosticComponentContext = createContext<
  AgnosticComponentContextType | undefined
>(undefined);

function useAgnosticComponentContext() {
  const context = useContext(AgnosticComponentContext);
  if (!context) {
    throw new Error(
      "useAgnosticComponentContext must be used within an AgnosticComponentProvider"
    );
  }
  return context;
}

type AgnosticComponentProviderProps = PropsWithChildren<{
  content: AgnosticComponentContextType;
}>;

const AgnosticComponentProvider = ({
  content,
  children,
}: AgnosticComponentProviderProps) => {
  return (
    <AgnosticComponentContext.Provider value={content}>
      <Link
        href={content.slug}
        className="group py-4 relative block overflow-hidden"
      >
        <article className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-2">
          {children}
        </article>
      </Link>
    </AgnosticComponentContext.Provider>
  );
};
AgnosticComponentProvider.displayName = "AgnosticComponentProvider";
const ImageColumn = () => {
  const { imageSrc } = useAgnosticComponentContext();
  if (!imageSrc) return null;
  return (
    <div
      className="col-span-1 relative hidden md:block"
      style={{ paddingBottom: "100%" }}
    >
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover object-center transition duration-300 ease-in-out group-hover:scale-140"
        src={imageSrc}
        alt="Featured article"
        layout="fill"
      />
    </div>
  );
};
ImageColumn.displayName = "ImageColumn";

const ShortDescription = () => {
  const { shortDescription } = useAgnosticComponentContext();
  if (!shortDescription) return null;
  return (
    <div className="text-left">
      <p className="sans text-sm font-normal">{shortDescription}</p>
    </div>
  );
}
ShortDescription.displayName = "ShortDescription";

const ProgramLabel = () => {
  const { programShortname } = useAgnosticComponentContext();
  const { collectionName } = useAgnosticComponentContext();
  if (!programShortname) return null;
  return (
    <div className="text-left">
      <span className="font-mono text-xs font-normal uppercase p-1 bg-red-100 dark:bg-slate-800">
        {collectionName}
      </span>
      <span className="font-mono leading-loose text-xs ml-2 font-normal uppercase p-1 bg-slate-100 dark:bg-slate-800">
        {programShortname}
      </span>
    </div>
  );
};
ProgramLabel.displayName = "ProgramLabel";
const CollectionName = () => {
  const { collectionName } = useAgnosticComponentContext();
  if (!collectionName) return null;
  return (
    <div className="text-left">
      <span className="font-mono text-xs font-normal uppercase p-1 bg-red-100 dark:bg-slate-800">
        {collectionName}
      </span>
    </div>
  );
};
CollectionName.displayName = "CollectionName";

const Title = () => {
  const { title } = useAgnosticComponentContext();
  if (!title) return null;
  return (
    <div className="text-left">
      <h3 className="text-lg sans-serif leading-snug group-hover:underline">{title}</h3>
    </div>
  );
};
Title.displayName = "Title";

const DatePublished = () => {
  const { datePublished } = useAgnosticComponentContext();
  if (!datePublished) return null;
  return (
    <div className="text-left">
      <p className="sans text-sm font-normal">
        <time dateTime={datePublished}>{datePublished}</time>
      </p>
    </div>
  );
};
DatePublished.displayName = "DatePublished";

const Source = () => {
  const { source } = useAgnosticComponentContext();
  if (!source) return null;
  return (
    <div className="text-left">
      <p className="sans text-sm font-normal">{source}</p>
    </div>
  );
};
Source.displayName = "Source";

const TextColumn = ({ children }: PropsWithChildren) => (
  <div className="col-span-2 flex flex-col justify-center space-y-1">
    {children}
  </div>
);
TextColumn.displayName = "TextColumn";

const DateAndSourceContainer = ({ children }: PropsWithChildren) => {
  const { collectionName } = useAgnosticComponentContext();
  if (collectionName === "people") return null;
  return <div className="flex space-x-2">{children}</div>;
};

const DotDivider = () => <span className="text-sm sans font-normal">|</span>;
DotDivider.displayName = "DotDivider";

DateAndSourceContainer.displayName = "DateAndSourceContainer";
export {
  AgnosticComponentProvider,
  ImageColumn as AgnosticComponentImageColumn,
  ProgramLabel as AgnosticComponentProgramLabel,
  CollectionName as AgnosticComponentCollectionName,
  Title as AgnosticComponentTitle,
  ShortDescription as AgnosticComponentShortDescription,
  DotDivider as AgnosticComponentDotDivider,
  DatePublished as AgnosticComponentDatePublished,
  Source as AgnosticComponentSource,
  TextColumn as AgnosticComponentTextColumn,
  DateAndSourceContainer as AgnosticComponentDateAndSourceContainer,
};

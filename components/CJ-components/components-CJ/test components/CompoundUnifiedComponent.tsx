"use client";

import { createContext, PropsWithChildren, useContext } from "react";
import { RelatedColection, UnifiedComponentProps } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";

type UnifiedComponentContextType = {
  data: any;
  getRelatedProgrammes: () => RelatedColection[];
};

const UnifiedComponentContext = createContext<
  UnifiedComponentContextType | undefined
>(undefined);

function useUnifiedComponentContext() {
  const context = useContext(UnifiedComponentContext);
  if (!context) {
    throw new Error(
      "useUnifiedComponentContext must be used within a UnifiedComponentProvider"
    );
  }
  return context;
}

type UnifiedComponentProviderProps = PropsWithChildren<{
  data: any;
}>;

const CompoundUnifiedComponent = ({
  data,
  children,
}: UnifiedComponentProviderProps) => {
  const {
    programme,
    programmesMultiple,
    relatedProgrammes,
    programmeS,
  } = data;

  const getRelatedProgrammes = (): RelatedColection[] => {
    if (programme) return [programme];
    if (programmesMultiple) return programmesMultiple;
    if (relatedProgrammes) return relatedProgrammes;
    if (programmeS) return programmeS;

    return [];
  };

  return (
    <UnifiedComponentContext.Provider value={{ data, getRelatedProgrammes }}>
      <div>{children}</div>
    </UnifiedComponentContext.Provider>
  );
};
CompoundUnifiedComponent.displayName = "CompoundUnifiedComponent";
const Title = () => {
    const { data } = useUnifiedComponentContext();
    return <h2>{data.name}</h2>;
  };
  Title.displayName = "Title";
  
  const Thumbnail = () => {
    const { data } = useUnifiedComponentContext();
    return (
      <Image
        src={data.thumbnail.url}
        alt={data.thumbnail.alt}
        width={1080}
        height={980}
      />
    );
  };
  Thumbnail.displayName = "Thumbnail";
  
  const Slug = () => {
    const { data } = useUnifiedComponentContext();
    return <p>Slug: {data.slug}</p>;
  };
  Slug.displayName = "Slug";
  
  const Collection = () => {
    const { data } = useUnifiedComponentContext();
    return <p>Collection: {data.collectionName}</p>;
  };
  Collection.displayName = "Collection";
  
  const RelatedProgrammes = () => {
    const { getRelatedProgrammes } = useUnifiedComponentContext();
    return (
      <div>
        <h3>Related Programmes:</h3>
        <ul>
          {getRelatedProgrammes().map((prog) => (
            <Link key={prog.slug} href={'d'}>
              {prog.name}
            </Link>
          ))}
        </ul>
      </div>
    );
  };
  RelatedProgrammes.displayName = "RelatedProgrammes";
  export {
    CompoundUnifiedComponent,
    Title as UnifiedComponentTitle,
    Thumbnail as UnifiedComponentThumbnail,
    Slug as UnifiedComponentSlug,
    Collection as UnifiedComponentCollection,
    RelatedProgrammes as UnifiedComponentRelatedProgrammes,
  };
  
  
import { RelatedColection, UnifiedComponentProps } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";

const UnifiedComponent = ({ data } :UnifiedComponentProps) => {
    // Extracting common fields
    const {
      thumbnail,
      programme,
      programmesMultiple,
      relatedProgrammes,
    
      programmeS,
      collectionName,
      name,
      slug,
    } = data as any;

    // Helper function to get related programmes
    const getRelatedProgrammes = (): RelatedColection[] => {
      if (programme) return [programme];
      if (programmesMultiple) return programmesMultiple;
      if (relatedProgrammes) return relatedProgrammes;
      if (programmeS) return programmeS;
  
      return [];
    };
  
    return (
      <div>
        <h2>{name}</h2>
        <Image src={thumbnail.url} alt={thumbnail.alt} width={1080} height={980}/>
        <p>Slug: {slug}</p>
        <p>Collection: {collectionName}</p>
        <div>
          <h3>Related Programmes:</h3>
          <ul>
            {getRelatedProgrammes().map((prog) => (
              <Link key={prog.slug} href={prog.slug}>
                {prog.name} 
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default UnifiedComponent;
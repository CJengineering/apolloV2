import { RelatedColection, UnifiedComponentProps } from "@/app/interfaces";
import Image from "next/image";

const UnifiedComponent = ({ data } :UnifiedComponentProps) => {
    // Extracting common fields
    const {
      thumbnail,
      programme,
      programmesMultiple,
      relatedProgrammes,
      relatedEvent,
      relatedEventS,
      relatedPeople,
      name,
      slug,
    } = data as any;
  
    // Helper function to get related programmes
    const getRelatedProgrammes = (): RelatedColection[] => {
      if (programme) return [programme];
      if (programmesMultiple) return programmesMultiple;
      if (relatedProgrammes) return relatedProgrammes;
  
      return [];
    };
  
    return (
      <div>
        <h2>{name}</h2>
        <Image src={thumbnail.url} alt={thumbnail.alt} width={1080} height={980}/>
        <p>Slug: {slug}</p>
        <div>
          <h3>Related Programmes:</h3>
          <ul>
            {getRelatedProgrammes().map((prog) => (
              <li key={prog.slug}>
                {prog.name} ({prog.slug})
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default UnifiedComponent;
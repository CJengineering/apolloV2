import { CardProgrammeProps, ProgrammeCleanedFields } from "@/app/interfaces";

export function mapProgrammeToCardProgramme(programme: ProgrammeCleanedFields): CardProgrammeProps {
    return {
      imageUrl: programme.card.url,
      programmeTitle: programme.name,
      programmeType: '',
      altText: programme.card.alt
    };
  }
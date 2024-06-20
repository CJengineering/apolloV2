import { CardProgrammeProps, MediaCardProps, MultimediaCleanedFields, ProgrammeCleanedFields } from "@/app/interfaces";

export function mapMultimediaToMediaCard(multimedia: MultimediaCleanedFields): MediaCardProps {
    return {
        name: multimedia.name || '',
        imageUrl: multimedia.thumbnail.url,
        alt: multimedia.thumbnail.alt,
        source: multimedia.type,
        slug : `/multimedia/${multimedia.slug}`
    };
  }
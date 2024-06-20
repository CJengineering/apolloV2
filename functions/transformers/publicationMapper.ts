import { Item, PublicationsRawFields, PublicationsCleanedFields, ProgrammeRawFields, PeopleRawFields, PartnersRawFields } from "@/app/interfaces";
import { formatDate } from "../utils/formDate";

export default function publicationMapper(
  item: Item<PublicationsRawFields>,
  programmes: Item<ProgrammeRawFields>[],
  people: Item<PeopleRawFields>[],
  partners: Item<PartnersRawFields>[]
): PublicationsCleanedFields {
  const { fieldData } = item;

  const relatedProgrammes = fieldData["programme-s"]
    ? fieldData["programme-s"].map((programmeId) => {
        const programmeMatch = programmes.find(
          (programme) => programme.id === programmeId
        );
        return programmeMatch
          ? {
              name: programmeMatch.fieldData.name || "",
              slug: programmeMatch.fieldData.slug || "",
            }
          : { name: "N/A", slug: "N/A" };
      })
    : [];

  const relatedPeople = fieldData["people"]
    ? fieldData["people"].map((personId) => {
        const peopleMatch = people.find((person) => person.id === personId);
        return peopleMatch
          ? {
              name: peopleMatch.fieldData.name || "",
              slug: peopleMatch.fieldData.slug || "",
            }
          : { name: "N/A", slug: "N/A" };
      })
    : [];

  return {
    nameArabic: fieldData["name-arabic"] || "",
    datePublished: fieldData["date-published"] ? formatDate(fieldData["date-published"]) : "",
    type: fieldData.type || "",
    bookCoverImage: {
      url: fieldData["book-cover-image"]?.url || "",
      alt: fieldData["book-cover-image"]?.alt || ""
    },
    thumbnail: {
      url: fieldData.thumbnail?.url || "",
      alt: fieldData.thumbnail?.alt || ""
    },
    text: fieldData.text || "",
    summaryArabic: fieldData["summary-arabic"] || "",
    pushToGr: fieldData["push-to-gr"] || false,
    externalLink: fieldData["external-link"] || "",
    document: {
      url: fieldData.document?.url || "",
      alt: fieldData.document?.alt || ""
    },
    source2: fieldData["source-2"] || "",
    programmeS: relatedProgrammes,
    authorMetaText: fieldData["author-s-meta-text"] || "",
    authorMetaTextArabic: fieldData["author-s-meta-text-arabic"] || "",
    people: relatedPeople,
    name: fieldData.name || "",
    slug: fieldData.slug || ""
  };
}

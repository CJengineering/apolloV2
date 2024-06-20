import { NewsRawFields, NewsCleanedFields, Item, ProgrammeRawFields, PeopleRawFields, PartnersRawFields } from "@/app/interfaces";

export default function newsMapper(
    item: Item<NewsRawFields>,
    programmes: Item<ProgrammeRawFields>[],
    people: Item<PeopleRawFields>[],
    sources: any[]
  
  ): NewsCleanedFields {

  const matchSource = sources.find((source) => source.id === item.fieldData.sources);
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
  
    const relatedEvents = fieldData["related-event-s"]
      ? fieldData["related-event-s"].map((eventId) => {
          const eventMatch = programmes.find(
            (programme) => programme.id === eventId
          );
          return eventMatch
            ? {
                name: eventMatch.fieldData.name || "",
                slug: eventMatch.fieldData.slug || "",
              }
            : { name: "N/A", slug: "N/A" };
        })
      : [];
  
    const relatedTeamMembers = fieldData["related-team-members"]
      ? fieldData["related-team-members"].map((teamMemberId) => {
          const teamMemberMatch = people.find(
            (person) => person.id === teamMemberId
          );
          return teamMemberMatch
            ? {
                name: teamMemberMatch.fieldData.name || "",
                slug: teamMemberMatch.fieldData.slug || "",
              }
            : { name: "N/A", slug: "N/A" };
        })
      : [];
  
    return {
      arabicTitle: fieldData["arabic-title"] || "",
      pushToGr: fieldData["push-to-gr"] || false,
      featured: fieldData["featured"] || false,
      externalLink: fieldData["external-link"] || "",
      datePublished: fieldData["date-published"] || "",
      sources: matchSource? matchSource.fieldData.name :"cj",
      programme: fieldData["programme"] || "",
      programmeS: relatedProgrammes,
      people: relatedPeople,
      innovationS: fieldData["innovation-s"] || [],
      relatedEvent: fieldData["related-event"] || "",
      relatedEventS: relatedEvents,
      summary: fieldData["summary"] || "",
      summaryArabic: fieldData["summary-arabic"] || "",
      excerpt: fieldData["excerpt"] || "",
      thumbnail: {
        url: fieldData["thumbnail"]?.url || "",
        alt: fieldData["thumbnail"]?.alt || ""
      },
      heroImage: {
        url: fieldData["hero-image"]?.url || "",
        alt: fieldData["hero-image"]?.alt || ""
      },
      thumbnailAltText: fieldData["thumbnail-alt-text"] || "",
      imageAltTextArabic: fieldData["image-alt-text-arabic"] || "",
      relatedTeamMembers: relatedTeamMembers,
      tags: fieldData["tags"] || [],
      removeFromNewsGrid: fieldData["remove-from-news-grid"] || false,
      name: fieldData["name"] || "",
      slug: fieldData["slug"] || ""
    };
  }

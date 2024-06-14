import {
  EventFieldData,
  Item,
  PartnersRawFields,
  PeopleCleanedFields,
  PeopleRawFields,
  ProgrammeRawFields,
} from "@/app/interfaces";

export default function peopleMapper(
  item: Item<PeopleRawFields>,
  partners: Item<PartnersRawFields>[],
  events: Item<EventFieldData>[],
  programmes: Item<ProgrammeRawFields>[],
  people: Item<PeopleRawFields>[]
): PeopleCleanedFields {
  const { fieldData } = item;

  const relatedProgrammes =
    fieldData["related-programmes"]?.map((programmeId) => {
      const programmeMatch = programmes.find(
        (programme) => programme.id === programmeId
      );
      return programmeMatch
        ? {
            name: programmeMatch.fieldData.name || "",
            slug: programmeMatch.fieldData.slug || "",
          }
        : { name: "N/A", slug: "N/A" };
    }) || [];

  const relatedPeople =
    fieldData["related-people-s"]?.map((personId) => {
      const peopleMatch = people.find((person) => person.id === personId);
      return peopleMatch
        ? {
            name: peopleMatch.fieldData.name || "",
            slug: peopleMatch.fieldData.slug || "",
          }
        : { name: "N/A", slug: "N/A" };
    }) || [];

  const partnerOrganisation =
    fieldData["partner-organisation"]?.map((orgId) => {
      const orgMatch = partners.find((partner) => partner.id === orgId);
      return orgMatch
        ? {
            name: orgMatch.fieldData.name || "",
            slug: orgMatch.fieldData.slug || "",
          }
        : { name: "N/A", slug: "N/A" };
    }) || [];

  const photos =
    fieldData.photos?.map((photo) => ({
      alt: photo.alt || "",
      url: photo.url || "",
    })) || [];

  const heroImage = fieldData["hero-image"]
    ? {
        alt: fieldData["hero-image"].alt || "",
        url: fieldData["hero-image"].url || "",
      }
    : { alt: "", url: "" };

  const profilePicture = fieldData["profile-picture"]
    ? {
        alt: fieldData["profile-picture"].alt || "",
        url: fieldData["profile-picture"].url || "",
      }
    : { alt: "", url: "" };

  return {
    name: fieldData.name || "N/A",
    nameArabic: fieldData["name-arabic"] || "N/A",
    hero: fieldData.hero || false,
    relatedProgramme: fieldData["related-programme"] || "N/A",
    relatedProgrammes: relatedProgrammes,
    color: fieldData.color || "N/A",
    role: fieldData.role || "N/A",
    roleArabic: fieldData["role-arabic"] || "N/A",
    shortDescription: fieldData["short-description"] || "N/A",
    shortDescriptionArabic: fieldData["short-description-arabic"] || "N/A",
    biography: fieldData.biography || "N/A",
    biographyArabic: fieldData["biography-arabic"] || "N/A",
    events: fieldData.events || "N/A",
    eventsArabic: fieldData["events-arabic"] || "N/A",
    researchAreaEnglish: fieldData["research-area-english"] || "N/A",
    researchAreasArabic: fieldData["research-areas-arabic"] || "N/A",
    type: fieldData.type || { name: "N/A", id: "N/A" },
    heroImage: heroImage,
    profilePicture: profilePicture,
    relatedPeople: relatedPeople,
    partnerOrganisation: partnerOrganisation,
    instagramLink: fieldData["instagram-link"] || "N/A",
    linkedinLink: fieldData["linkedin-link"] || "N/A",
    twitterLink: fieldData["twitter-link"] || "N/A",
    facebook: fieldData.facebook || "N/A",
    youtubeLink: fieldData["youtube-link"] || "N/A",
    github: fieldData.github || "N/A",
    websiteLink: fieldData["website-link"] || "N/A",
    shop: fieldData.shop || "N/A",
    photos: photos,
    hideNews: fieldData["hide-news"] || false,
    hideMultimedia: fieldData["hide-multimedia"] || false,
    hideEvents: fieldData["hide-events"] || false,
    hidePublications: fieldData["hide-publications"] || false,
    hidePhotos: fieldData["hide-photos"] || false,
    hideEventsRichText: fieldData["hide-events-rich-text"] || false,
    multimedia: fieldData.multimedia || ["N/A"],
    tag:
      fieldData.tag?.map((tag) => ({ name: tag || "N/A", slug: "N/A" })) || [],
    order: fieldData.order || 0,
    country: fieldData.country || "N/A",
    slug: fieldData.slug || "N/A",
    pushToGr: fieldData["push-to-gr"] || false,
    arabicOnOff: fieldData["arabic-on-off"] || false,
  };
}

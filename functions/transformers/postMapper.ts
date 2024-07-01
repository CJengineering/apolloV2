import {
  PostFieldsCleaned,
  Item,
  PartnersRawFields,
  CategorieRawFields,
  ProgrammeRawFields,
  FieldsPostRaw,
  PeopleRawFields,
  EventFieldData,
} from "@/app/interfaces";

const formatDate = (date: Date | string): string => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  if (date instanceof Date && !isNaN(date.valueOf())) {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  } else {
    return "Invalid Date";
  }
};

export default function postMapper(
  item: Item<FieldsPostRaw>,
  categories: Item<CategorieRawFields>[],
  events: Item<EventFieldData>[],
  programmes: Item<ProgrammeRawFields>[],
  people: Item<PeopleRawFields>[]
): PostFieldsCleaned {
  const { fieldData } = item;
  const programmeMatch = programmes.find(
    (programme) => programme.id === fieldData["programme-2"]
  );
  const categoriesMatch = categories.find((category) => category.id === fieldData["blogs-categories-2"]);
  const imagesCarousel =
    fieldData["image-carousel"] && fieldData["image-carousel"]?.length > 0
      ? fieldData["image-carousel"].map((image) => {
          return { url: image.url || "", alt: image.alt || "" };
        })
      : [{ url: "", alt: "" }];
  
  const relatedProgrammes =
    fieldData["programmes-multiple"] &&
    fieldData["programmes-multiple"].length > 0
      ? fieldData["programmes-multiple"].map((programmeId) => {
          const programmeMatch = programmes.find(
            (programme) => programme.id === programmeId
          );
          return programmeMatch
            ? {
                name: programmeMatch.fieldData.name || "",
                url: programmeMatch.fieldData.website || "",
                slug: programmeMatch.fieldData.slug || "",
              }
            : { name: "N/A", url: "N/A", slug: "N/A" };
        })
      : [{ name: "N/A", url: "N/A", slug: "N/A" }];
  const relatedPeople =
    fieldData.people && fieldData.people.length > 0
      ? fieldData.people.map((programmeId) => {
          const peopleMatch = people.find(
            (people) => people.id === programmeId
          );
          return peopleMatch
            ? {
                name: peopleMatch.fieldData.name || "",

                slug: peopleMatch.fieldData.slug || "",
              }
            : { name: "N/A", slug: "N/A" };
        })
      : [{ name: "N/A", url: "N/A", slug: "N/A" }];

  const eventMatch = events.find(
    (programme) => programme.id === fieldData["related-event"]
  );
  return {
    arabicTitle: fieldData["arabic-title"] || "",
    pushToGr: fieldData["push-to-gr"] || false,
    programme: programmeMatch
      ? {
          name: programmeMatch.fieldData.name || "",
          url: programmeMatch.fieldData.website || "",
          slug: programmeMatch.fieldData.slug || "",
        }
      : { name: "N/A", url: "N/A", slug: "N/A" },
    programmesMultiple: relatedProgrammes,
    thumbnail: fieldData.thumbnail
      ? {
          url: fieldData.thumbnail.url || "",
          alt: fieldData.thumbnail.alt || "",
        }
      : { url: "", alt: "" },
    mainImage: fieldData["main-image"] || "N/A",
    openGraphImage: fieldData["open-graph-image"] || "N/A",
    datePublished: formatDate(fieldData["date-published"] || ""),
    location: fieldData["location"] || "N/A",
    locationArabic: fieldData["location-arabic"] || "N/A",
    seoTitle: fieldData["seo-title"] || "N/A",
    seoTitleArabic: fieldData["seo-title-arabic"] || "N/A",
    seoMeta: fieldData["seo-meta"] || "N/A",
    seoMetaArabic: fieldData["seo-meta-arabic"] || "N/A",
    summary: fieldData["summary"] || "N/A",
    summaryArabic: fieldData["summary-arabic"] || "N/A",
    body: fieldData["body"] || "N/A",
    bodyArabic: fieldData["body-arabic"] || "N/A",
    altTextForHeroImage: fieldData["alt-text-for-hero-image"] || "N/A",
    altTextHeroImageArabic: fieldData["alt-text-hero-image-arabic"] || "N/A",
    photoCreditHeroImage: fieldData["photo-credit-hero-image"] || "N/A",
    heroImagePhotoCreditArabic:
      fieldData["hero-image-photo-credit-arabic"] || "N/A",
    theme3: fieldData["theme-3"] || ["N/A"],
    blogsCategories2: categoriesMatch?.fieldData.name || "N/A",
    blogsCategories2Arabic: categoriesMatch?.fieldData["name-arabic"] || "N/A",
    featured: fieldData.featured || false,
    imageCarousel: imagesCarousel,
    imageGalleryCreditsArabic:
      fieldData["image-gallery-credits-arabic"] || "N/A",
    imageCarouselCredits: fieldData["image-carousel-credits"] || "N/A",
    relatedEvent: eventMatch
      ? {
          name: eventMatch.fieldData.name || "",
          slug: eventMatch.fieldData.slug || "",
        }
      : { name: "N/A", slug: "N/A" },
    people: relatedPeople,
    innovations: ["N/A"],
    name: fieldData.name || "N/A",
    slug: fieldData.slug || "N/A",
  };
}

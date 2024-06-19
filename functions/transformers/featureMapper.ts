import {
    PostFieldsCleaned,
    Item,
    PartnersRawFields,
    ProgrammeRawFields,
    FieldsPostRaw,
    PeopleRawFields,
    EventFieldData,
    FeatureRawFields,
    FeatureCleanedFields,
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
  
  export default function featureMapper(
    item: Item<FeatureRawFields>,
  
    
    programmes: Item<ProgrammeRawFields>[],
 
  ): FeatureCleanedFields {
    const { fieldData } = item;
    const programmeMatch = programmes.find(
      (programme) => programme.id === fieldData["programme-label"]
    );
    const relatedProgrammes =
      fieldData["programme-s"] &&
      fieldData["programme-s"].length > 0
        ? fieldData["programme-s"].map((programmeId) => {
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
   
  
   
    return {
        nameArabic: fieldData["name-arabic"] || "",
        topFeature: fieldData["top-feature"] || false,
        order: fieldData.order || 0,
        customLink: fieldData["custom-link"] || "",
        newTab: fieldData["new-tab"] || false,
        label: fieldData.label || "",
        labelArabic: fieldData["label-arabic"] || "",
        shortText: fieldData["short-text"] || "",
        shortTextArabic: fieldData["short-text-arabic"] || "",
        type: fieldData.type || "",
        square: {
          url: fieldData.square?.url || "",
          alt: fieldData.square?.alt || ""
        },
        image16x9: {
          url: fieldData["image-16x9"]?.url || "",
          alt: fieldData["image-16x9"]?.alt || ""
        },
        hero: {
          url: fieldData.hero?.url || "",
          alt: fieldData.hero?.alt || ""
        },
        dateDisplay: formatDate(fieldData["date-display"] || ""),
        programmeLabel: programmeMatch
          ? {
              name: programmeMatch.fieldData.name || "",
              slug: programmeMatch.fieldData.slug || ""
            }
          : { name: "N/A", slug: "N/A" },
        programmeS: relatedProgrammes,
        name: fieldData.name || "",
        slug: fieldData.slug || ""
      };
    }
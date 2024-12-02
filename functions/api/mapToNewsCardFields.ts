import { NewsCardFields } from "@/app/interfaces";

export function mapToNewsCardFields(row: any): NewsCardFields {
    return {
      slug: row.slug || "",
      thumbnail: {
        url: row.thumbnailUrl || "",
        alt: row.thumbnailAltText || "Default Alt Text", // Fallback alt text
      },
      thumbnailAltText: row.thumbnailAltText || "",
      sources: {
        name: row.sourcesName || "",
        arabicName: row.sourcesArabicName || "",
        shortname: undefined, // This field is not present in the SQL query
        slug: row.sourcesSlug || "",
        url: row.sourcesUrl || "",
      },
      arabicTitle: row.arabicTitle || "",
      name: row.name || "",
      datePublished: row.datePublished || "",
      datePublishedArabic: row.datePublishedArabic || "",
      programme: {
        name: row.programmeName || "",
        arabicName: row.programmeArabicName || "",
        shortname: row.programmeShortname || "",
        slug: row.programmeSlug || "",
        url: row.programmeUrl || "",
      },
    };
  }
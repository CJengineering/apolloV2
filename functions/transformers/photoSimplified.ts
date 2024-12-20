import {ImageLightbox,  } from "@/app/interfaces";
export default function photoMosaicSimplified(
  item: any,
): ImageLightbox {
  return {
    src: item.url || "",
    alt: item.alt || "",
    description: item.description || "",
    location: "",
    year: "",
    people: "",
    programme2: "",
    nameArabic: "",
    mainImage: { fileId: "", url: "", alt: "" },
    altText: "",
    date: "",
    descriptionArabic: "",
    source: "",
    programmeLabel: { name: "", slug: "" },
    programmesMultiReference: [],
    tags: [],
    peopleMultiReference: [],
    location2: "",
    locationArabic: "",
    highResolution: "",
    name: "",
    slug: "",
    // Add other missing attributes here with default empty values
  };
}
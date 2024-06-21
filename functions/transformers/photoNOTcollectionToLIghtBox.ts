import { Item, PhotoFieldsRaw, ImageLightbox, ProgrammeRawFields, PeopleRawFields } from "@/app/interfaces";
interface SinglePhoto {
    url: string;
    alt: string;
}


export default function photoNotFromCollectionMapper(
  item: SinglePhoto,

): ImageLightbox {
  



  return {
    src: item.url || "",
    alt: item.alt || "",
    location:  "",
    year:  NaN,
    people:  "",
    programme2: "",

    nameArabic:  "",
    mainImage: {
      fileId:  "",
      url:  "",
      alt:  ""
    },
    altText:  "",
    date: "",
    description:  "",
    descriptionArabic:   "",
    source:  "",
    programmeLabel:  "",
    programmesMultiReference: [],
    tags:  [],
    peopleMultiReference:[],
    location2:  "",
    locationArabic:  "",
    highResolution:  "",
    name:  "",
    slug:  ""
  };
}

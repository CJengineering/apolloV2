import { ImageLightbox, Item, PhotoFieldsRaw } from "@/app/interfaces";

export default function photoMapper(item: Item<PhotoFieldsRaw>): ImageLightbox {
  return {
    src: item.fieldData["main-image"] ? item.fieldData["main-image"].url : "/path/to/default-image.jpg",
    alt: item.fieldData["alt-text"] || "Default alt text",
    location: item.fieldData["location-2"] || "Unknown Location",
    year: item.fieldData.date
      ? new Date(item.fieldData["date"]).getFullYear()
      : new Date().getFullYear(),
    people: "people",
  };
}

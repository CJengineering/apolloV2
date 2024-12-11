import {ImageLightbox,  } from "@/app/interfaces";



export default function photoMosaicSimplified(
  item: any,

): ImageLightbox {

  return {
    src: item.url || "",
    alt: item.alt || "",
    description: item.description || "",
  };
}

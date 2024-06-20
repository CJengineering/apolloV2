import { Item, PhotoFieldsRaw } from "@/app/interfaces";

interface FilterOptions {
  programme?: string;

  people?: string;
}

export default function filterRelatedPhotos(
  multimediaRaw: Item<PhotoFieldsRaw>[],
  options: FilterOptions
): Item<PhotoFieldsRaw>[] {
  return multimediaRaw.filter((item) => {
    const matchesProgramme = options.programme
      ? item.fieldData["programmes-multi-reference"]?.includes(
          options.programme
        ) || item.fieldData["programme-label"] === options.programme
      : false;

    const matchesPeople = options.people
      ? item.fieldData["people-multi-reference"]?.includes(options.people)
      : false;

    return matchesProgramme || matchesPeople;
  });
}

import { AwardsRawFields, Item, PhotoFieldsRaw } from "@/app/interfaces";

interface FilterOptions {
  programme?: string;

  people?: string;
}

export default function filterRelatedAwards(
  multimediaRaw: Item<AwardsRawFields>[],
  options: FilterOptions
): Item<PhotoFieldsRaw>[] {
  return multimediaRaw.filter((item) => {
    const matchesProgramme = options.programme
      ? item.fieldData["programme-related"]?.includes(options.programme)
      : false;

    const matchesPeople = options.people
      ? item.fieldData["people-related"]?.includes(options.people)
      : false;

    return matchesProgramme || matchesPeople;
  });
}

import {
  Item,
  MultimediaRawFields,
  PublicationsRawFields,
} from "@/app/interfaces";

interface FilterOptions {
  programme?: string;

  people?: string;
}

export default function filterRelatedPublications(
  multimediaRaw: Item<PublicationsRawFields>[],
  options: FilterOptions
): Item<PublicationsRawFields>[] {
  return multimediaRaw.filter((item) => {
    const matchesProgramme = options.programme
      ? item.fieldData["programme-s"]?.includes(options.programme)
      : false;

    const matchesPeople = options.people
      ? item.fieldData.people?.includes(options.people)
      : false;

    return matchesProgramme || matchesPeople;
  });
}

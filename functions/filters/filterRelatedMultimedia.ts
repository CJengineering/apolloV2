import { Item, MultimediaRawFields } from "@/app/interfaces";

interface FilterOptions {
  programme?: string;
  event?: string;
  people?: string;
  source?: string;
}

export default function filterRelatedMultimedia(
  multimediaRaw: Item<MultimediaRawFields>[],
  options: FilterOptions
): Item<MultimediaRawFields>[] {
  return multimediaRaw.filter((item) => {
    const matchesProgramme = options.programme ? (item.fieldData['programme-label'] === options.programme || item.fieldData['related-programmes']?.includes(options.programme)) : false;
    const matchesEvent = options.event ? item.fieldData['related-event']?.includes(options.event) : false;
    const matchesPeople = options.people ? item.fieldData['related-people']?.includes(options.people) : false;
    const matchesSource = options.source ? item.fieldData.source === options.source : false;
    return matchesProgramme || matchesEvent || matchesPeople || matchesSource;

  });
}
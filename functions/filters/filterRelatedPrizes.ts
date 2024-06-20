import { Item, PhotoFieldsRaw, PrizesRawFields } from "@/app/interfaces";

interface FilterOptions {
  people?: string;
}

export default function filterRelatedPrizes(
  prize: Item<PrizesRawFields>[],
  options: FilterOptions
): Item<PhotoFieldsRaw>[] {
  return prize.filter((item) => {
    const matchesPeople = options.people
      ? item.fieldData["winners-people"]?.includes(options.people)
      : false;

    return matchesPeople;
  });
}

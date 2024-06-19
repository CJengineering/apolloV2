import { FeatureRawFields, Item } from "@/app/interfaces";

export default function filterRelatedFeatures(
  multimediaRaw: Item<FeatureRawFields>[],
  programme: string
): Item<FeatureRawFields>[] {
  return multimediaRaw.filter((item) => {
    const matchesProgramme = item.fieldData["programme-label"] === programme;

    return matchesProgramme;
  });
}

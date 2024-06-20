import { FeatureRawFields, Item } from "@/app/interfaces";

export default function filterRelatedFeatures(
  features: Item<FeatureRawFields>[],
  programme: string
): Item<FeatureRawFields>[] {
  return features.filter((item) => {
    const matchesProgramme = item.fieldData["programme-label"] === programme;

    return matchesProgramme;
  });
}

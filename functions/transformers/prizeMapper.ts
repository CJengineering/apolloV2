import { Item, PrizesRawFields, PrizesCleanedFields, PeopleRawFields, AwardsRawFields } from "@/app/interfaces";

export default function prizeMapper(
  item: Item<PrizesRawFields>,
  awards: Item<AwardsRawFields>[],
  people: Item<PeopleRawFields>[]
): PrizesCleanedFields {
  const { fieldData } = item;

  const awardMatch = awards.find(award => award.id === fieldData.award);
  const award = awardMatch ? { name: awardMatch.fieldData.name || "", slug: awardMatch.fieldData.slug || "" } : { name: "N/A", slug: "N/A" };

  const relatedPeople = fieldData["winners-people"]
    ? fieldData["winners-people"].map((personId) => {
        const peopleMatch = people.find((person) => person.id === personId);
        return peopleMatch
          ? {
              name: peopleMatch.fieldData.name || "",
              slug: peopleMatch.fieldData.slug || "",
            }
          : { name: "N/A", slug: "N/A" };
      })
    : [];

  return {
    nameArabic: fieldData["name-arabic"] || "",
    award: award,
    awardYear: fieldData["award-year"] || 0,
    winnersPeople: relatedPeople,
    summary: fieldData["summary"] || "",
    summaryArabic: fieldData["summary-arabic"] || "",
    name: fieldData.name || "",
    slug: fieldData.slug || ""
  };
}

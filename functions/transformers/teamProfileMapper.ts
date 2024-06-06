import { FieldDataTeamProfile, Item, TeamMember } from "@/app/interfaces";
import { it } from "node:test";

export default function teamProfileMapper(item: Item<FieldDataTeamProfile>): TeamMember {
  return {
    id: item.id,
    name: item.fieldData.name,
    imageUrl: item.fieldData.photo.url,
    slug: item.fieldData.slug,
    position: item.fieldData.position,
    order: item.fieldData.order,
    paragraphDescription: item.fieldData["paragraph-description"],
    metaDescription: item.fieldData["meta-decscription"],
    altTextImage: item.fieldData.photo.alt || "",
    filter: item.fieldData.filter,
  };
}

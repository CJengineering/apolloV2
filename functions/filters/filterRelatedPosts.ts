import { Item, FieldsPostRaw } from "@/app/interfaces";

interface PostFilterOptions {
  programme?: string;
  location?: string;
  tags?: string[];
  people?: string;
}

export function filterRelatedPosts(
  postData: Item<FieldsPostRaw>[],
  options: PostFilterOptions
): Item<FieldsPostRaw>[] {
  return postData.filter((post) => {
    const matchesProgramme = options.programme ? post.fieldData['programme-2'] === options.programme || post.fieldData['programmes-multiple']?.includes(options.programme) : false;
    const matchesLocation = options.location ? post.fieldData.location === options.location : false;
    const matchesTags = options.tags ? options.tags.some(tag => post.fieldData['theme-3']?.includes(tag)) : false;
    const matchesPeople = options.people ? post.fieldData.people?.includes(options.people) : false;

    return matchesProgramme || matchesLocation || matchesTags || matchesPeople;
  });
}

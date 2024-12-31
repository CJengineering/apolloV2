import { PostFieldsCleaned, RelatedColection } from "@/app/interfaces";

// Helper to check for common elements in two arrays of RelatedColection
function hasCommonRelatedCollections(
  arr1: RelatedColection[],
  arr2: RelatedColection[]
): boolean {
  return (
    arr1.length > 0 &&
    arr2.length > 0 &&
    arr1.some(item1 =>
      arr2.some(item2 => item1.slug.trim().toLowerCase() === item2.slug.trim().toLowerCase())
    )
  );
}

// Main function to find similar posts
export function findRelatedPostsCleanSolo(
  postItem: PostFieldsCleaned,
  postArray: PostFieldsCleaned[]
): PostFieldsCleaned[] {
  const { programme, people = [], relatedEvent } = postItem;

  return postArray.filter(post => {
    if (post.slug === postItem.slug) {
      // Skip comparing the post with itself
      return false;
    }

    const isSimilarProgramme =
      programme &&
      post.programme &&
      programme.slug.trim().toLowerCase() === post.programme.slug.trim().toLowerCase();

    // const hasSimilarPeople = hasCommonRelatedCollections(people, post.people || []);

    // const isSimilarEvent =
    //   relatedEvent &&
    //   post.relatedEvent &&
    //   relatedEvent.slug.trim().toLowerCase() === post.relatedEvent.slug.trim().toLowerCase();

    // A post is similar if it shares the same programme, people, or related event
  
    return isSimilarProgramme
    // return isSimilarProgramme || hasSimilarPeople || isSimilarEvent;
  });
}

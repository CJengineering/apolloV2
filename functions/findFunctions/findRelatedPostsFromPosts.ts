import { FieldsPostRaw, Item } from "@/app/interfaces";

  function hasCommonElements(arr1: string[], arr2: string[]): boolean {
    return arr1.some(item => arr2.includes(item));
  }
  
  export function findRelatedPosts(postItem: Item<FieldsPostRaw>, postArray: Item<FieldsPostRaw>[]): Item<FieldsPostRaw>[] {
    const {
      "programme-2": programme2,
      "programmes-multiple": programmesMultiple = [],
      people = [],
      innovations = [],
      "related-event": relatedEvent,
      "theme-3": theme3 = []
    } = postItem.fieldData;
  
    return postArray.filter(post => {
      const {
        "programme-2": postProgramme2,
        "programmes-multiple": postProgrammesMultiple = [],
        people: postPeople = [],
        innovations: postInnovations = [],
        "related-event": postRelatedEvent,
        "theme-3": postTheme3 = []
      } = post.fieldData;
  
      return (
        (programme2 && programme2 === postProgramme2) ||
        (programme2 && postProgrammesMultiple.includes(programme2)) ||
        (postProgramme2 && programmesMultiple.includes(postProgramme2)) ||
        hasCommonElements(programmesMultiple, postProgrammesMultiple) ||
        hasCommonElements(people, postPeople) ||
        hasCommonElements(innovations, postInnovations) ||
        (relatedEvent && relatedEvent === postRelatedEvent) ||
        hasCommonElements(theme3, postTheme3)
      );
    });
  }
  
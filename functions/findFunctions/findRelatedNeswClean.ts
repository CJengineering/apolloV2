import { NewsCleanedFields, RelatedColection } from "@/app/interfaces";

function hasCommonElements(arr1: RelatedColection[], arr2: RelatedColection[]): boolean {
  return (
    arr1.length > 0 &&
    arr2.length > 0 &&
    arr1.some(item1 => arr2.some(item2 => item1.slug.trim().toLowerCase() === item2.slug.trim().toLowerCase()))
  );
}

export function filteredRelatedNewsClean(
    newsItem: NewsCleanedFields,
    newsArray: NewsCleanedFields[]
  ): NewsCleanedFields[] {
    const currentId = newsItem.id || newsItem.slug;
    const {
      programme,
      programmeS = [],
      people = [],
      innovationS = [],
      relatedEvent,
      relatedEventS = [],
      relatedTeamMembers = []
    } = newsItem;
  
   
  
    return newsArray.filter(news => {
        const newsId = news.id || news.slug;
      const {
        programme: newsProgramme,
        programmeS: newsProgrammeS = [],
        people: newsPeople = [],
        innovationS: newsInnovationS = [],
        relatedEvent: newsRelatedEvent,
        relatedEventS: newsRelatedEventS = [],
        relatedTeamMembers: newsRelatedTeamMembers = []
      } = news;
  
  
      const isRelated =
        (programme && newsProgramme && programme.slug === newsProgramme.slug) ||
        (programme && newsProgrammeS.some(p => p.slug === programme.slug)) ||
        (newsProgramme && programmeS.some(p => p.slug === newsProgramme.slug)) ||
        hasCommonElements(programmeS, newsProgrammeS) ||
        hasCommonElements(people, newsPeople) ||
        hasCommonElements(innovationS, newsInnovationS) ||
        (relatedEvent && newsRelatedEvent && relatedEvent.slug === newsRelatedEvent.slug) ||
        (relatedEvent && newsRelatedEventS.some(e => e.slug === relatedEvent.slug)) ||
        (newsRelatedEvent && relatedEventS.some(e => e.slug === newsRelatedEvent.slug)) ||
        hasCommonElements(relatedEventS, newsRelatedEventS) ||
        hasCommonElements(relatedTeamMembers, newsRelatedTeamMembers);
  
     
      return currentId !== newsId && isRelated;
    });
  }
  

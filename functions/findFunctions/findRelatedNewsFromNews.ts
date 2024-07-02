import { Item, NewsRawFields } from "@/app/interfaces";

function hasCommonElements(arr1: string[], arr2: string[]): boolean {
  return arr1.length > 0 && arr2.length > 0 && arr1.some(item => arr2.includes(item));
}

export function findRelatedNews(newsItem: Item<NewsRawFields>, newsArray: Item<NewsRawFields>[]): Item<NewsRawFields>[] {
  // Accessing 'id' directly from 'newsItem', assuming it's structured as 'newsItem.id'
  const currentId = newsItem.id; 
  const {
    programme,
    "programme-s": programmeS = [],
    people = [],
    "innovation-s": innovationS = [],
    "related-event": relatedEvent,
    "related-event-s": relatedEventS = [],
    "related-team-members": relatedTeamMembers = []
  } = newsItem.fieldData;

  return newsArray.filter(news => {
    // Accessing 'id' directly from each 'news', assuming it's structured as 'news.id'
    const newsId = news.id; 
    const {
      programme: newsProgramme,
      "programme-s": newsProgrammeS = [],
      people: newsPeople = [],
      "innovation-s": newsInnovationS = [],
      "related-event": newsRelatedEvent,
      "related-event-s": newsRelatedEventS = [],
      "related-team-members": newsRelatedTeamMembers = []
    } = news.fieldData;

    return (
      currentId !== newsId && 
      ((programme && programme === newsProgramme) ||
      (programme && newsProgrammeS.includes(programme)) ||
      (newsProgramme && programmeS.includes(newsProgramme)) ||
      hasCommonElements(programmeS, newsProgrammeS) ||
      hasCommonElements(people, newsPeople) ||
      hasCommonElements(innovationS, newsInnovationS) ||
      (relatedEvent && relatedEvent === newsRelatedEvent) ||
      (relatedEvent && newsRelatedEventS.includes(relatedEvent)) ||
      (newsRelatedEvent && relatedEventS.includes(newsRelatedEvent)) ||
      hasCommonElements(relatedEventS, newsRelatedEventS) ||
      hasCommonElements(relatedTeamMembers, newsRelatedTeamMembers))
    );
  });
}

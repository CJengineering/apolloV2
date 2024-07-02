import { Item, NewsRawFields } from "@/app/interfaces";

function hasCommonElements(arr1: string[], arr2: string[]): boolean {
    return arr1.some(item => arr2.includes(item));
  }
  
  export function findRelatedNews(newsItem: NewsRawFields, newsArray: Item<NewsRawFields>[]): Item<NewsRawFields>[] {
    const {
      programme,
      "programme-s": programmeS = [],
      people = [],
      "innovation-s": innovationS = [],
      "related-event": relatedEvent,
      "related-event-s": relatedEventS = [],
      "related-team-members": relatedTeamMembers = []
    } = newsItem;
  
    return newsArray.filter(news => {
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
        (programme && programme === newsProgramme) ||
        (programme && newsProgrammeS.includes(programme)) ||
        (newsProgramme && programmeS.includes(newsProgramme)) ||
        hasCommonElements(programmeS, newsProgrammeS) ||
        hasCommonElements(people, newsPeople) ||
        hasCommonElements(innovationS, newsInnovationS) ||
        (relatedEvent && relatedEvent === newsRelatedEvent) ||
        (relatedEvent && newsRelatedEventS.includes(relatedEvent)) ||
        (newsRelatedEvent && relatedEventS.includes(newsRelatedEvent)) ||
        hasCommonElements(relatedEventS, newsRelatedEventS) ||
        hasCommonElements(relatedTeamMembers, newsRelatedTeamMembers)
      );
    });
  }
  
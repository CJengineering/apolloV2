import { EventFieldDataCleaned, FeatureCleanedFields, MultimediaCleanedFields, NewsCleanedFields, PeopleCleanedFields, PostFieldsCleaned, ProgrammeCleanedFields, PublicationsCleanedFields, TeamMember } from "@/app/interfaces";
type Searchable = TeamMember | EventFieldDataCleaned | ProgrammeCleanedFields | PostFieldsCleaned | PeopleCleanedFields | MultimediaCleanedFields | FeatureCleanedFields | NewsCleanedFields | PublicationsCleanedFields;

export function filterByKeyword(
  keyword: string,
  teamMembers: TeamMember[],
  events: EventFieldDataCleaned[],
  programmes: ProgrammeCleanedFields[],
  posts: PostFieldsCleaned[],
  people: PeopleCleanedFields[],
  multimedia: MultimediaCleanedFields[],
  features: FeatureCleanedFields[],
  news: NewsCleanedFields[],
  publications: PublicationsCleanedFields[]
) {
  const keywordLower = keyword.toLowerCase();

  function containsKeyword(obj: Searchable): boolean {
    for (let key in obj) {
      const value = (obj as any)[key];

      if (typeof value === 'string' && value.toLowerCase().includes(keywordLower)) {
        return true;
      }

      if (Array.isArray(value)) {
        if (value.some((item: any) => typeof item === 'object' && containsKeyword(item))) {
          return true;
        }
      }

      if (typeof value === 'object' && value !== null) {
        if (containsKeyword(value)) {
          return true;
        }
      }
    }
    return false;
  }

  const filteredTeamMembers = teamMembers.filter(containsKeyword);
  const filteredEvents = events.filter(containsKeyword);
  const filteredProgrammes = programmes.filter(containsKeyword);
  const filteredPosts = posts.filter(containsKeyword);
  const filteredPeople = people.filter(containsKeyword);
  const filteredMultimedia = multimedia.filter(containsKeyword);
  const filteredFeatures = features.filter(containsKeyword);
  const filteredNews = news.filter(containsKeyword);
  const filteredPublications = publications.filter(containsKeyword);

  return {
    teamMembers: filteredTeamMembers,
    events: filteredEvents,
    programmes: filteredProgrammes,
    posts: filteredPosts,
    people: filteredPeople,
    multimedia: filteredMultimedia,
    features: filteredFeatures,
    news: filteredNews,
    publications: filteredPublications,
  };
}

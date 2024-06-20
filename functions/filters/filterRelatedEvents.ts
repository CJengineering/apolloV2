import { Item, EventFieldData } from "@/app/interfaces";

interface EventFilterOptions {
  programme?: string;
  tags?: string[];
  people?: string;
  organisers?: string;
}

export function filterRelatedEvents(
  eventData: Item<EventFieldData>[],
  options: EventFilterOptions
): Item<EventFieldData>[] {
  const { programme, tags, people, organisers } = options;
  
  if (!programme && (!tags || tags.length === 0) && !people && !organisers) {
    return [];
  }

  return eventData.filter((event) => {
    const matchesProgrammeLabel = programme && event.fieldData['programme-label'] ? event.fieldData['programme-label'] === programme : false;
    const matchesTags = tags && event.fieldData.tags ? tags.some(tag => event.fieldData.tags.includes(tag)) : false;
    const matchesRelatedPeople = people && event.fieldData['related-people'] ? event.fieldData['related-people'].includes(people) : false;
    const matchesOrganisers = organisers ? event.fieldData.organisers.includes(organisers) : false;

    return matchesProgrammeLabel || matchesTags || matchesRelatedPeople || matchesOrganisers;
  });
}

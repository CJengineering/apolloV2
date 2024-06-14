import { Item, EventFieldData } from "@/app/interfaces";

interface EventFilterOptions {
  programmeLabel?: string;
  tags?: string[];
  people?: string;
  organisers?: string;
}

export function filterRelatedEvents(
  eventData: Item<EventFieldData>[],
  options: EventFilterOptions
): Item<EventFieldData>[] {
  const { programmeLabel, tags, people, organisers } = options;
  
  if (!programmeLabel && (!tags || tags.length === 0) && !people && !organisers) {
    return [];
  }

  return eventData.filter((event) => {
    const matchesProgrammeLabel = programmeLabel && event.fieldData['programme-label'] ? event.fieldData['programme-label'] === programmeLabel : false;
    const matchesTags = tags && event.fieldData.tags ? tags.some(tag => event.fieldData.tags.includes(tag)) : false;
    const matchesRelatedPeople = people && event.fieldData['related-people'] ? event.fieldData['related-people'].includes(people) : false;
    const matchesOrganisers = organisers ? event.fieldData.organisers.includes(organisers) : false;

    return matchesProgrammeLabel || matchesTags || matchesRelatedPeople || matchesOrganisers;
  });
}

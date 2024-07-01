import { EventFieldData } from '@/app/interfaces';
import { getData } from '@/functions/api/getData';
import { filterRelatedEvents } from '@/functions/filters/filterRelatedEvents';
import filterRelatedMultimedia from '@/functions/filters/filterRelatedMultimedia';
import { filterRelatedPosts } from '@/functions/filters/filterRelatedPosts';
import eventMapper from '@/functions/transformers/eventMapper';
import peopleMapper from '@/functions/transformers/peopleMapper';
import { getIdByDisplayName } from '@/functions/utils/findCollectionId';
import React from 'react'

export default async function EventPage({
    params,
  }: {
    params: { slug: string; locale: string };
  }) {
    {
        /**Get the id by display name  */
      }
      const peopleCollectionID = getIdByDisplayName("People");
      const programmeCollectionID = getIdByDisplayName("Programmes");
      const partnersCollectionID = getIdByDisplayName("Partners");
      const newsCollectionID = getIdByDisplayName("News");
      const eventsCollectionID = getIdByDisplayName("Events");
      const postsCollectionID = getIdByDisplayName("Posts");
      const multimediaCollectionID = getIdByDisplayName("Multimedia");
      const sourcesCollectionID = getIdByDisplayName("Sources");
    
      {
        /**Get the data from the collection */
      }
      const peopleDataRaw = await getData(peopleCollectionID);
      const programmeDataRaw = await getData(programmeCollectionID);
      const partnersDataRaw = await getData(partnersCollectionID);
      const newsDataRaw = await getData(newsCollectionID);
      const eventsDataRaw = await getData(eventsCollectionID);
      const postsDataRaw = await getData(postsCollectionID);
      const multimediaDataRaw = await getData(multimediaCollectionID);
      const sourcesDataRaw = await getData(sourcesCollectionID);
    
      {
        /**Get the single item */
      }
      const eventSingleDataRaw  = eventsDataRaw.items.find(
        (item) => item.fieldData.slug === params.slug
      );

      const relatedPeopleDataRaw = eventSingleDataRaw['related-people'] ?  peopleDataRaw.items.filter(item => eventSingleDataRaw['related-people'].includes(item.id)):[];

      {/** Mapped items */}
        const eventSingleDataCleaned = eventMapper(eventSingleDataRaw, partnersDataRaw.items, programmeDataRaw.items)
        const relatedPeopleDataCleaned = relatedPeopleDataRaw.map((item => peopleMapper(item, partnersDataRaw.items,eventsDataRaw.items, programmeDataRaw.items, peopleDataRaw.items )));
        

     
  return (
    <div className='pt-24'>

        <img src={eventSingleDataCleaned.organisers[0].logo.url} alt="" />


    </div>
  )
}



import { EventFieldData } from "@/app/interfaces";
import ContentPhotos from "@/components/CJ-components/components-CJ/test components/content-photos";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import MainContainer from "@/components/custom beta components/MainContainer";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import { getData } from "@/functions/api/getData";
import { filterRelatedEvents } from "@/functions/filters/filterRelatedEvents";
import filterRelatedMultimedia from "@/functions/filters/filterRelatedMultimedia";
import { filterRelatedPosts } from "@/functions/filters/filterRelatedPosts";
import eventMapper from "@/functions/transformers/eventMapper";
import peopleMapper from "@/functions/transformers/peopleMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import photoNotFromCollectionMapper from "@/functions/transformers/photoNOTcollectionToLIghtBox";
import Image from "next/image";
import React from "react";

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
  const eventSingleDataRaw = eventsDataRaw.items.find(
    (item) => item.fieldData.slug === params.slug
  );

  const relatedPeopleDataRaw = eventSingleDataRaw.fieldData["related-people"]
    ? peopleDataRaw.items.filter((item) =>
        eventSingleDataRaw.fieldData["related-people"].includes(item.id)
      )
    : [];

  {
    /** Mapped items */
  }
  const eventSingleDataCleaned = eventMapper(
    eventSingleDataRaw,
    partnersDataRaw.items,
    programmeDataRaw.items,
    peopleDataRaw.items
  );
  const relatedPeopleDataCleaned = relatedPeopleDataRaw.map((item) =>
    peopleMapper(
      item,
      partnersDataRaw.items,
      eventsDataRaw.items,
      programmeDataRaw.items,
      peopleDataRaw.items,
      multimediaDataRaw.items
    )
  );

  const cleanRelatedImages = eventSingleDataCleaned.imageGallery.map(
    photoNotFromCollectionMapper
  );

  return (
    <ContentContainer width="full" desktopWidth="medium">
         <div className="py-12 flex flex-col items-center justify-center">
          <div className="w-full pb-2 md:w-1/2">
            <h1 className="text-center text-4xl serif font-bold">
            {eventSingleDataCleaned.name}
            </h1>
          </div>
          <div className="flex justify-center space-x-4">
      <div className="p-4">
        <p className="sans-serif text-base font-normal">{eventSingleDataCleaned.eventDate}</p>
      </div>
      <div className="p-4">
        <p className="">time</p>
      </div>
      <div className="p-4">
        <p className="">location</p>
      </div>
    </div>
          </div>
        <Image
          className="w-full"
          src={eventSingleDataCleaned.heroImage.url}
          alt={eventSingleDataCleaned.heroImage.alt || ""}
          width={100}
          height={100}
        />
       <div className="flex justify-center pt-12">
          <div className="prose prose-xl dark:prose-dark serif">
            <div
              dangerouslySetInnerHTML={{
                __html: eventSingleDataCleaned.shortDescription2,
              }}
            ></div>
          </div> 

          </div>

          <div>
          <div className="">
            <div className="w-max-[100px]"
              dangerouslySetInnerHTML={{
                __html: eventSingleDataCleaned.trailerLivestreamHighlightsVideoLink,
              }}
            ></div>
          </div>
  
          </div>
        <SectionBanter title="Participants">
          {relatedPeopleDataCleaned.map((person) => (
            <div key={person.name}>
              <Image
                src={person.profilePicture.url}
                alt={person.profilePicture.alt || ""}
                width={100}
                height={100}
              />
              <h2>{person.name}</h2>
              <p>{person.shortDescription}</p>
            </div>
          ))}
        </SectionBanter>
        <SectionBanter title="Organisers">
        {eventSingleDataCleaned.organisers.map((organiser) => (
            <div key={organiser.name}>
              <Image
                src={organiser.logo.url}
                alt={organiser.logo.alt || ""}
                width={100}
                height={100}
              />
            </div>
          ))}
 
        </SectionBanter>
        <SectionBanter title="Partners">
        {eventSingleDataCleaned.partners.map((partners) => (
            <div key={partners.name}>
              <Image
                src={partners.logo.url}
                alt={partners.logo.alt || ""}
                width={100}
                height={100}
              />
         
            </div>
          ))}
        </SectionBanter>
        
        <SectionBanter title="With representatives from">
        {eventSingleDataCleaned.participantsAffiliatedInstitutions.map((organiser) => (
            <div key={organiser.name}>
              <Image
                src={organiser.logo.url}
                alt={organiser.logo.alt || ""}
                width={100}
                height={100}
              />
            </div>
          ))}
        </SectionBanter>
        <SectionBanter title="Gallery">
        <div className="pb-12">
              {eventSingleDataCleaned.imageGallery.length > 0 &&
                eventSingleDataCleaned.imageGallery[0].url !== "" && (
                  <ContentPhotos images={cleanRelatedImages} />
                )}
            </div>
        </SectionBanter>
        
        
      </ContentContainer>
  );
}

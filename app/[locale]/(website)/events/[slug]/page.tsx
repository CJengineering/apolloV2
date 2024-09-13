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
  const  newsCollectionID = getIdByDisplayName("News");
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
      <div className="">
        <div className="text-left">
        <div className="pt-6 w-5/6 mb-6">
      <h1 className="header-article leading-tight text-left">{eventSingleDataCleaned.name}</h1>
      </div>
        </div>
    </div>
    <div className="pb-6">
        <Image
          className="w-full"
          src={eventSingleDataCleaned.heroImage.url}
          alt={eventSingleDataCleaned.heroImage.alt || ""}
          width={100}
          height={100}
        />
    </div>


    <div className="flex flex-col items-center">

    <div className="prose prose-xl sans-serif dark:prose-dark">
      <div className="w-full">
        {eventSingleDataCleaned.eventDate && (
        <div className="sans-serif text-base font-normal">
      {eventSingleDataCleaned.eventDate}
      {(eventSingleDataCleaned.endDate && eventSingleDataCleaned.endDate !== eventSingleDataCleaned.eventDate) && (
        <> - {eventSingleDataCleaned.endDate}</>
      )}
    </div>
  )}

  {eventSingleDataCleaned.time && (
    <div className="sans-serif text-base font-normal">
      {eventSingleDataCleaned.time}
    </div>
  )}

  {eventSingleDataCleaned.address && (
    <div className="sans-serif text-base font-normal">
      {eventSingleDataCleaned.address}
    </div>
  )}
</div>
        <div
          dangerouslySetInnerHTML={{
            __html: eventSingleDataCleaned.shortDescription2,
          }}
        ></div>
      </div>

      {eventSingleDataCleaned.rsvpLink && (
            <div className="pb-12 pt-3">
              <a
                href={eventSingleDataCleaned.rsvpLink}
                target="_blank"
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-800 rounded hover:bg-blue-950"
              >
                <span className="sans-serif">{eventSingleDataCleaned.buttonCtaText}</span>
              </a>
            </div>
          )}

      <div className="flex w-full justify-center">
        <div
          dangerouslySetInnerHTML={{
            __html: eventSingleDataCleaned.trailerLivestreamHighlightsVideoLink,
          }}
        ></div>
      </div>
    </div>
    <ContentContainer width="lg" desktopWidth="medium">
    <div className="pb-6"><div className="w-full h-[1px] bg-gray-300 block"></div></div>  
    <div className="">
      <h2 className="header-section pb-6">Participants</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPeopleDataCleaned.map((person) => (
          <div key={person.name} className="text-left">
            <Image
              src={person.profilePicture.url}
              alt={person.profilePicture.alt || ""}
              width={330}
              height={330}
              className="mx-auto"
            />
            <h2 className="mt-2 font-medium sans-serif text-lg">{person.name}</h2>
            <p className="mt-1 sans-serif text-base font-normal text-left">{person.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
    </ContentContainer>

    <ContentContainer width="lg" desktopWidth="medium">
    <div className="pb-6"><div className="w-full h-[1px] bg-gray-300 block"></div></div> 
    <div>
      {eventSingleDataCleaned.organisers.length > 0 && (
        <h2 className="header-section pb-6">Organisers</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {eventSingleDataCleaned.organisers.map((organiser) => (
          <div key={organiser.name} className="">
            <Image
              src={organiser.logo.url}
              alt={organiser.logo.alt || ""}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
        <div>
        <div className="py-6"><div className="w-full h-[1px] bg-gray-300 block"></div></div> 
      {eventSingleDataCleaned.partners.length > 0 && (
        <h2 className="header-section pb-6">Partners</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {eventSingleDataCleaned.partners.map((partner) => (
          <div key={partner.name} className="flex justify-center">
            <Image
              src={partner.logo.url}
              alt={partner.logo.alt || ""}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>


    <div>
      {eventSingleDataCleaned.participantsAffiliatedInstitutions.length > 0 && (
        <h2 className="header-section pb-6">With representatives from</h2>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {eventSingleDataCleaned.participantsAffiliatedInstitutions.map((representatives) => (
          <div key={representatives.name} className="flex justify-center">
            <Image
              src={representatives.logo.url}
              alt={representatives.logo.alt || ""}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>

        </ContentContainer>
        <div className="pb-12">
              {eventSingleDataCleaned.imageGallery.length > 0 &&
                eventSingleDataCleaned.imageGallery[0].url !== "" && (
                  <ContentPhotos images={cleanRelatedImages} />
                )}
            </div>
        
        
      </ContentContainer>
  );
}

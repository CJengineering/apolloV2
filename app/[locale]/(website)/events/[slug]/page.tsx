import { EventFieldData, Item } from "@/app/interfaces";
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
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
import { Metadata, ResolvingMetadata } from "next";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
type Props = {
  params: { slug : string, locale: string };

}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug= params.slug
  const locale = params.locale;

 
  const eventId = getIdByDisplayName("Events");
  const productTest = await getData(eventId);
  const teamMembersRaw = productTest.items;
  const memberRaw :Item<EventFieldData>[] = teamMembersRaw.filter(
    (item) => item.fieldData.slug === slug
  );
  const name = locale === 'ar'? memberRaw[0].fieldData["arabic-title"] : memberRaw[0].fieldData.name;
  const description =  memberRaw[0].fieldData["seo-meta-description"] ;
  // optionally access and extend (rather than replace) parent metadata
  
 
  return customMetaDataGenerator({
      title: name,
      description: description,
      ogImage: memberRaw[0].fieldData["open-graph-image"].url,
    })
 
  
}

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
<>
      <div className="">
        <div className="text-left">
        <div className="pt-16 lg:pt-10 w-5/6 mb-6">
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


    <div className="flex flex-col">

    <div className="prose prose-2xl sans-serif dark:prose-dark">
      <div className="w-full">
        {eventSingleDataCleaned.eventDate && (
        <div className="sans-serif text-lg">
      {eventSingleDataCleaned.eventDate}
      {(eventSingleDataCleaned.endDate && eventSingleDataCleaned.endDate !== eventSingleDataCleaned.eventDate) && (
        <> - {eventSingleDataCleaned.endDate}</>
      )}
    </div>
  )}

  {eventSingleDataCleaned.time && (
    <div className="sans-serif text-lg">
      {eventSingleDataCleaned.time}
    </div>
  )}

  {eventSingleDataCleaned.address && (
    <div className="sans-serif text-lg">
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
            <div className="pb-8">
              <ButtonCJ href={eventSingleDataCleaned.rsvpLink} text={eventSingleDataCleaned.buttonCtaText}></ButtonCJ>
            </div>
          )}


    </div>

{eventSingleDataCleaned.trailerLivestreamHighlightsVideoLink && (
  <div className="flex w-full">
    <div
      className="w-full"
      dangerouslySetInnerHTML={{
        __html: eventSingleDataCleaned.trailerLivestreamHighlightsVideoLink,
      }}
    ></div>
  </div>
)}

    
    {relatedPeopleDataCleaned.length > 0 && (
  <div>
    <div className="pt-12 pb-9">
      <div className="w-full h-[1px] bg-gray-300 block"></div>
    </div>  
    <h2 className="header-section pb-6">Participants</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {relatedPeopleDataCleaned.map((person) => (
        <div key={person.name} className="text-left">
          <Image
            src={person.profilePicture.url}
            alt={person.profilePicture.alt || ""}
            width={330}
            height={330}
            className="mx-auto w-full"
          />
          <div className="mt-4">
            <h2 className="font-medium sans-serif text-lg text-left">{person.name}</h2>
            <p className="mt-1 sans-serif text-base font-normal text-left">{person.shortDescription}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

    
     
{eventSingleDataCleaned.organisers.length > 0 && (
  <div>
    <div className="pt-12 pb-9">
      <div className="w-full h-[1px] bg-gray-300 block"></div>
    </div>
    <h2 className="header-section pb-6">Organisers</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {eventSingleDataCleaned.organisers.map((organiser) => (
        <div key={organiser.name} className="flex border border-gray-200 rounded-md items-center justify-center">
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
)}

{eventSingleDataCleaned.partners.length > 0 && (
  <div>
    <div className="pt-12 pb-9">
      <div className="w-full h-[1px] bg-gray-300 block"></div>
    </div>
    <h2 className="header-section pb-6">Partners</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {eventSingleDataCleaned.partners.map((partner) => (
        <div key={partner.name} className="flex border rounded-md items-center justify-center">
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
)}




{eventSingleDataCleaned.participantsAffiliatedInstitutions.length > 0 && (
  <div>
    <div className="pt-12 pb-9">
      <div className="w-full h-[1px] bg-gray-300 block"></div>
    </div>
    <h2 className="header-section pb-6">With representatives from</h2>
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
)}

{eventSingleDataCleaned.imageGallery.length > 0 &&
  eventSingleDataCleaned.imageGallery[0].url !== "" && (
  <div>
    <div className="py-12">
      <div className="w-full h-[1px] bg-gray-300 block"></div>
    </div>

    <div>
      <ContentPhotos images={cleanRelatedImages} />
    </div>
  </div>
)}

        
</>
  );
}

import { EventFieldData } from "@/app/interfaces";
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

  return (
    <MainContainer isSideBar={true}>
      <ContentContainer>
        <h1>{eventSingleDataCleaned.seoTitle}</h1>
        <Image
          className="w-full"
          src={eventSingleDataCleaned.heroImage.url}
          alt={eventSingleDataCleaned.heroImage.alt || ""}
          width={100}
          height={100}
        />
        <SectionBanter title="Synopsis">
          <div className="prose mx-auto sm:prose-lg first-letter:text-4xl first-letter:font-bold first-letter:tracking-[.15em] prose-a:transition prose-a:duration-300 prose-a:ease-in-out hover:prose-a:text-red-700 prose-img:rounded-xl">
            <div
              dangerouslySetInnerHTML={{
                __html: eventSingleDataCleaned.shortDescription2,
              }}
            ></div>
          </div>
        </SectionBanter>
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
        {eventSingleDataCleaned.partners.map((organiser) => (
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
        
        <SectionBanter title="With representatives from ">
          <div></div>
        </SectionBanter>
        <SectionBanter title="Gallery">
          <div></div>
        </SectionBanter>
        
        
      </ContentContainer>
    </MainContainer>
  );
}

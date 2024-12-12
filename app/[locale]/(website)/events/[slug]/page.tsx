import { EventFieldData, EventFieldDataCleaned, Item } from "@/app/interfaces";

import { getData } from "@/functions/api/getData";

import eventMapper from "@/functions/transformers/eventMapper";
import peopleMapper from "@/functions/transformers/peopleMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import photoNotFromCollectionMapper from "@/functions/transformers/photoNOTcollectionToLIghtBox";
import Image from "next/image";
import React from "react";

import { Metadata, ResolvingMetadata } from "next";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";

import { EventHeading } from "@/components/CJ-components/components-CJ/custom components/event-heading";

import { EventRegisterButton } from "@/components/CJ-components/components-CJ/custom components/event-register-button";
import { EventContent } from "@/components/CJ-components/components-CJ/custom components/event-content-slug";
import { EventParticipants } from "@/components/CJ-components/components-CJ/custom components/event-participants";
import { EventPartners } from "@/components/CJ-components/components-CJ/custom components/event-partners";
import { EventOrganisers } from "@/components/CJ-components/components-CJ/custom components/event-organisers";
import { EventAffiliatedInstitutions } from "@/components/CJ-components/components-CJ/custom components/event-affiliated-institutions";
import { EventImageGallery } from "@/components/CJ-components/components-CJ/custom components/event-image-gallery";
import { EventVideo } from "@/components/CJ-components/components-CJ/custom components/event-video-embed";
import VerticalSpaceDivider from "@/components/components V2/generic/vertical-space-divider";
import { fetchSingleItem } from "@/functions/api/fetchSingleNews";
type Props = {
  params: { slug: string; locale: string };
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
  const locale = params.locale;

  const eventId = getIdByDisplayName("Events");
  const productTest = await getData(eventId);
  const teamMembersRaw = productTest.items;
  const memberRaw: Item<EventFieldData>[] = teamMembersRaw.filter(
    (item) => item.fieldData.slug === slug
  );
  const seoTitleArabic = memberRaw[0].fieldData["arabic-title"]
    ? memberRaw[0].fieldData["arabic-title"]
    : "";
  const seoTitleEnglish = memberRaw[0].fieldData["seo-title"]
    ? memberRaw[0].fieldData["seo-title"]
    : "";
  const descriptionArabic = memberRaw[0].fieldData["arabic-title"]
    ? memberRaw[0].fieldData["arabic-title"]
    : "";
  const descriptionEnglish = memberRaw[0].fieldData["seo-meta-description"]
    ? memberRaw[0].fieldData["seo-meta-description"]
    : "";
  const name = locale === "ar" ? seoTitleArabic : seoTitleEnglish;
  const description = locale === "ar" ? descriptionArabic : descriptionEnglish;
  // optionally access and extend (rather than replace) parent metadata

  return customMetaDataGenerator({
    title: name,
    description: description,
    ogImage: memberRaw[0].fieldData["open-graph-image"].url,
  });
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

  const eventsCollectionID = getIdByDisplayName("Events");

  const multimediaCollectionID = getIdByDisplayName("Multimedia");

  {
    /**Get the data from the collection */
  }
  const peopleDataRaw = await getData(peopleCollectionID);
  const programmeDataRaw = await getData(programmeCollectionID);
  const partnersDataRaw = await getData(partnersCollectionID);

  const eventsDataRaw = await getData(eventsCollectionID);

  const multimediaDataRaw = await getData(multimediaCollectionID);

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
  const eventSinglerResponse = await fetchSingleItem(
    "eventSingle",
    params.slug
  );
  const eventSingleDataCleaned: EventFieldDataCleaned =
    eventSinglerResponse.field_data;

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
      <div className="w-full xl:w-2/3">
        <EventHeading name={eventSingleDataCleaned.name} />

        <div className="pb-6">
          {eventSingleDataCleaned.videoAsHeroOnOff ? (
            <EventVideo
              embedCode={eventSingleDataCleaned.mainVideoEmbedCode}
              imageUrl={eventSingleDataCleaned.heroImage.url}
            />
          ) : (
            <Image
              className="w-full"
              src={eventSingleDataCleaned.heroImage.url}
              alt={eventSingleDataCleaned.heroImage.alt || ""}
              width={100}
              height={100}
            />
          )}
        </div>

        <EventContent eventSingleDataCleaned={eventSingleDataCleaned} />
        {eventSingleDataCleaned.videoAsHeroOnOff ? null : (
          <EventVideo
            embedCode={eventSingleDataCleaned.mainVideoEmbedCode}
            imageUrl={eventSingleDataCleaned.heroImage.url}
          />
        )}
        {eventSingleDataCleaned.video2EmbedCode && (
          <VerticalSpaceDivider padding={3} />
        )}
        <EventVideo
          embedCode={eventSingleDataCleaned.video2EmbedCode}
          imageUrl={eventSingleDataCleaned.heroImage.url}
        />
        {eventSingleDataCleaned.video3EmbedCode && (
          <VerticalSpaceDivider padding={3} />
        )}
        <EventVideo
          embedCode={eventSingleDataCleaned.video3EmbedCode}
          imageUrl={eventSingleDataCleaned.heroImage.url}
        />
      </div>
      <EventParticipants relatedPeopleData={relatedPeopleDataCleaned} />
      <EventOrganisers organisers={eventSingleDataCleaned.organisers} />
      <EventPartners partners={eventSingleDataCleaned.partners} />
      <EventAffiliatedInstitutions
        institutions={eventSingleDataCleaned.participantsAffiliatedInstitutions}
      />
      <EventImageGallery
        imageGallery={eventSingleDataCleaned.imageGallery}
        cleanRelatedImages={cleanRelatedImages}
      />
    </>
  );
}

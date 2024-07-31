import ContentContainer from "@/components/custom beta components/ContentContainer";
import MainContainer from "@/components/custom beta components/MainContainer";
import { getData } from "@/functions/api/getData";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import React from "react";
import filterNewsItemsByPerson from "@/functions/filters/fillterRelatedPersonNews";
import peopleMapper from "@/functions/transformers/peopleMapper";
import multimediaMapper from "@/functions/transformers/multimediaMapper";
import filterRelatedMultimedia from "@/functions/filters/filterRelatedMultimedia";
import { filterRelatedPosts } from "@/functions/filters/filterRelatedPosts";
import { filterRelatedEvents } from "@/functions/filters/filterRelatedEvents";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import SecondaryNav from "@/components/ui/secondary-nav";
import ContentPhotos from "../../../../../components/CJ-components/components-CJ/test components/content-photos";
import photoNotFromCollectionMapper from "@/functions/transformers/photoNOTcollectionToLIghtBox";
import eventMapper from "@/functions/transformers/eventMapper";
import newsMapper from "@/functions/transformers/newsMapper";
import {
  CompoundUnifiedComponent,
  UnifiedComponentCollection,
  UnifiedComponentRelatedProgrammes,
  UnifiedComponentSlug,
  UnifiedComponentThumbnail,
  UnifiedComponentTitle,
} from "@/components/CJ-components/components-CJ/test components/CompoundUnifiedComponent";
import {
  PostCardDatePublished,
  PostCardImageColumn,
  PostCardProgrammeLabel,
  PostCardProvider,
  PostCardTextColumn,
  PostCardTitle,
} from "@/components/CJ-components/components-CJ/test components/CompoundPostCard";
import postMapper from "@/functions/transformers/postMapper";
import PostAccordion from "@/components/mdx/accordion";
import EventCard from "@/components/custom beta components/EventCard";
import MediaCard from "@/components/CJ-components/components-CJ/basic components/MediaCard";
import { mapMultimediaToMediaCard } from "@/functions/transformers/multimediaToCardMultimedia";
import NewsCard from "@/components/custom beta components/NewsCard";
import PostCard from "@/components/custom beta components/PostCard";
import filterRelatedPublications from "@/functions/filters/filterRelatedPublications";
import publicationMapper from "@/functions/transformers/publicationMapper";
import {
  AgnosticComponentDateAndSourceContainer,
  AgnosticComponentDatePublished,
  AgnosticComponentProvider,
  AgnosticComponentShortDescription,
  AgnosticComponentSource,
  AgnosticComponentTextColumn,
  AgnosticComponentTitle,
} from "@/components/CJ-components/components-CJ/test components/AgnosticComponent";
import agnosticMapper from "@/functions/transformers/agnosticMapper";
import PublicationsCard from "@/components/custom beta components/PublicationCard";

export default async function PeoplePage({
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
  const tagsCollectionID = getIdByDisplayName("Tags");
  const categoriesCollectionID = getIdByDisplayName("Categories");
  const publicationsCollectionID = getIdByDisplayName("Publications");
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
  const tagsDataRaw = await getData(tagsCollectionID);
  const categoriesDataRaw = await getData(categoriesCollectionID);
  const publicationsDataRaw = await getData(publicationsCollectionID);

  {
    /**Get the single item */
  }
  const peopleDataItemRaw = peopleDataRaw.items.find(
    (item) => item.fieldData.slug === params.slug
  );

  {
    /**Get the related items */
  }
  const relatedNews = filterNewsItemsByPerson(
    newsDataRaw.items,
    peopleDataItemRaw.id
  );
  const relatedMultimedia = filterRelatedMultimedia(multimediaDataRaw.items, {
    people: peopleDataItemRaw.id,
  });
  const relatedPosts = filterRelatedPosts(postsDataRaw.items, {
    people: peopleDataItemRaw.id,
  });
  const relatedEvents = filterRelatedEvents(eventsDataRaw.items, {
    people: peopleDataItemRaw.id,
  });

  const realtedPublications = filterRelatedPublications(
    publicationsDataRaw.items,
    { people: peopleDataItemRaw.id }
  );

  {
    /**Get the item mapped and cleaned */
  }
  const peopleDataItem = peopleMapper(
    peopleDataItemRaw,
    partnersDataRaw.items,
    eventsDataRaw.items,
    programmeDataRaw.items,
    postsDataRaw.items,
    multimediaDataRaw.items
  );
  const cleanPublications = realtedPublications.map((item) =>
    publicationMapper(
      item,
      programmeDataRaw.items,
      peopleDataRaw.items,
      partnersDataRaw.items,
      sourcesDataRaw.items
    )
  );

  {
    /** Images of the person */
  }
  const cleanRelatedImages = peopleDataItem.photos.map(
    photoNotFromCollectionMapper
  );
  {
    /** test vairables for diplay*/
  }

  // Clean version og related events

  const cleanEvents = relatedEvents.map((event) =>
    eventMapper(
      event,
      partnersDataRaw.items,
      programmeDataRaw.items,
      peopleDataRaw.items
    )
  );
  const cleanMultimedia = relatedMultimedia.map((item) =>
    multimediaMapper(
      item,
      programmeDataRaw.items,
      eventsDataRaw.items,
      sourcesDataRaw.items,
      peopleDataRaw.items
    )
  );
  const cleanMultimediaTransformed = cleanMultimedia.map(
    mapMultimediaToMediaCard
  );
  const cleanNews = relatedNews.map((item) =>
    newsMapper(
      item,
      programmeDataRaw.items,
      peopleDataRaw.items,
      sourcesDataRaw.items,
      tagsDataRaw.items,
      eventsDataRaw.items
    )
  );
  const cleanPosts = relatedPosts.map((item) =>
    postMapper(
      item,
      categoriesDataRaw.items,
      eventsDataRaw.items,
      programmeDataRaw.items,
      peopleDataRaw.items
    )
  );
  const agnosticpublications = cleanPublications.map((item) =>
    agnosticMapper(item)
  );

  return (
    <ContentContainer width="full" desktopWidth="medium">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:mt-24">
        <div className="col-span-12 md:col-span-4 flex justify-center md:justify-end">
          <div className="w-full">
            <img
              src={peopleDataItem.profilePicture.url}
              alt="Profile"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
          <div className="w-full pb-2">
            <h1 className="text-left text-4xl serif font-bold">
              {peopleDataItem.name}
            </h1>
          </div>
          <div className="w-full">
            <p className="text-left sans-serif text-base font-normal"></p>
          </div>
          <div className="w-full mt-6">
            <div className="prose prose-xl dark:prose-dark serif">
              <div
                dangerouslySetInnerHTML={{
                  __html: peopleDataItem.biography,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-slate-200"></div> {/* Separation Bar */}
      <PostAccordion title={"News"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cleanPosts.map((post) => (
            <PostCard key={post.name} content={post} />
          ))}
        </div>
      </PostAccordion>
      <PostAccordion title={"Press"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cleanNews.map((item) => (
            <NewsCard content={item} locale={params} />
          ))}
        </div>
      </PostAccordion>
      <div className="">
        <PostAccordion title={"Multimedia"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cleanMultimediaTransformed.map((item) => (
              <div key={item.alt} className="">
                <MediaCard {...item} />
              </div>
            ))}
          </div>
        </PostAccordion>
      </div>
      <div className="">
        <PostAccordion title={"Publications"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cleanPublications.map((item) => (
              <PublicationsCard content={item} />
            ))}
          </div>
        </PostAccordion>
      </div>
      <PostAccordion title={"Events"}>
        <div className="grid grid-cols-3 gap-5">
          {cleanEvents.map((item) => (
            <>
              <EventCard article={item}></EventCard>
            </>
          ))}
        </div>
      </PostAccordion>
      {/*  <SectionBanter title={"Multimedia"}>
            <div className="grid grid-cols-3">
              {cleanMultimedia.map((item) => (
                <CompoundUnifiedComponent data={item}>
                  <UnifiedComponentTitle />
                  <UnifiedComponentThumbnail />
                  <UnifiedComponentSlug />
                  <UnifiedComponentCollection />
                  <UnifiedComponentRelatedProgrammes />
                </CompoundUnifiedComponent>
              ))}
<ContentContainer width="full" desktopWidth="medium">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:mt-24">
  <div className="col-span-12 md:col-span-4 flex justify-center md:justify-end">
    <div className="w-full">
      <img
        src={peopleDataItem.profilePicture.url}
        alt="Profile"
        className="w-full h-auto"
      />
    </div>
  </div>
  <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
    <div className="w-full pb-2">
      <h1 className="text-left text-4xl serif font-bold">
        {peopleDataItem.name}
      </h1>
    </div>
    <div className="w-full">
      <p className="text-left sans-serif text-base font-normal">
        {peopleDataItem.role}, {peopleDataItem.relatedProgramme.name} 
      </p>
    </div>
    <div className="w-full mt-6">
      <div className="prose prose-xl dark:prose-dark serif">
        <div
          dangerouslySetInnerHTML={{
            __html: peopleDataItem.biography,
          }}
        ></div>
      </div>
    </div>
  </div>
</div>


{/* <div className="w-full h-px bg-slate-200"></div> Separation Bar */}
      <div>
        <div>
          <PostAccordion title={"Photos"}>
            <ContentPhotos images={cleanRelatedImages} />
          </PostAccordion>
        </div>
      </div>
    </ContentContainer>
  );
}

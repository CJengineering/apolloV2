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

  return (
    <div>
      <MainContainer isSideBar={true}>
        <ContentContainer>
          <SectionBanter title={"Biography"}>
            <div className="flex flex-col md:flex-row items-center md:items-start  bg-white rounded-lg">
              <div className="w-full md:w-1/3">
                <img
                  src={peopleDataItem.profilePicture.url}
                  alt="Profile"
                  className="w-full h-auto rounded-full md:rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3 mt-4 md:mt-0 md:ml-6">
                <h2 className="text-2xl font-bold mb-2">
                  {peopleDataItem.name}
                </h2>
                <div className="prose mx-auto sm:prose-lg first-letter:text-4xl first-letter:font-bold first-letter:tracking-[.15em] prose-a:transition prose-a:duration-300 prose-a:ease-in-out hover:prose-a:text-red-700 prose-img:rounded-xl">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: peopleDataItem.biography,
                    }}
                  ></div>
                </div>
              </div>
              <div className="sticky top-10 self-start">
                <SecondaryNav />
              </div>
            </div>
          </SectionBanter>
          <div className="">
            <PostAccordion title={"News"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cleanPosts.map((post) => (
                  <PostCard key={post.name} content={post} />
                ))}
              </div>
            </PostAccordion>
          </div>
          <div className="">
            <PostAccordion title={"Press"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cleanNews.map((item) => (
                  <NewsCard content={item} locale={params} />
                ))}
              </div>
            </PostAccordion>
          </div>
          <div className="">
            <PostAccordion title={"Multimedia"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cleanMultimediaTransformed.map((item) => (
                  <div key={item.alt} className="">
                    <MediaCard
                   
                      {...item}
                    />
                  </div>
                ))}
              </div>
            </PostAccordion>
          </div>

          {/* 

        <div>
          <h2> related features </h2>
          <div>
            {cleanedFeatures.map((feature, index) => (
              <>
                <div key={index}>
                  <div>{feature.name}</div>
                  <div>{feature.dateDisplay}</div>
                  <div>
                    <img className="w-48" src={feature.square.url} alt="" />
                  </div>
                </div>
              </>
            ))}
          </div>
        </div> */}

          <div>
            <PostAccordion title={"Events"}>
              <div className="grid grid-cols-3 gap-5">
                {cleanEvents.map((item) => (
                  <>
                    <EventCard article={item}></EventCard>
                  </>
                ))}
              </div>
            </PostAccordion>
          </div>
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
            </div>
          </SectionBanter>
          <SectionBanter title={"Related Posts"}>
            <div className="grid grid-cols-3">
              {cleanPosts.map((content) => (
                <PostCardProvider content={content}>
                  <PostCardImageColumn />
                  <PostCardTextColumn>
                    <PostCardProgrammeLabel />
                    <PostCardTitle />
                    <PostCardDatePublished />
                  </PostCardTextColumn>
                </PostCardProvider>
              ))}
            </div>
          </SectionBanter>
          <SectionBanter title={"Images"}>
            <ContentPhotos images={cleanRelatedImages} />
          </SectionBanter>*/}
         
        </ContentContainer>
      </MainContainer>
    </div>
  );
}

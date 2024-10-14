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
import { Metadata, ResolvingMetadata } from "next";
import { Item, PeopleRawFields } from "@/app/interfaces";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
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

  const newsId = getIdByDisplayName("People");
  const productTest = await getData(newsId);
  const teamMembersRaw = productTest.items;
  const memberRaw: Item<PeopleRawFields>[] = teamMembersRaw.filter(
    (item) => item.fieldData.slug === slug
  );
  const seoTitleArabic = memberRaw[0].fieldData["name-arabic"]
    ? memberRaw[0].fieldData["name-arabic"]
    : "";
  const seoTitleEnglish = memberRaw[0].fieldData.name
    ? memberRaw[0].fieldData.name
    : "";
  const name = locale === "ar" ? seoTitleArabic : seoTitleEnglish;

  const seoDescriptionArabic = memberRaw[0].fieldData["biography-arabic"]
    ? memberRaw[0].fieldData["biography-arabic"]
    : "";
  const seoDescriptionEnglish = memberRaw[0].fieldData.biography
    ? memberRaw[0].fieldData.biography
    : "";
  const description =
    locale === "ar" ? seoDescriptionArabic : seoDescriptionEnglish;
  // optionally access and extend (rather than replace) parent metadata

  return customMetaDataGenerator({
    useRawTitle: true,
    title: name || "",
    description: description,
    ogImage: memberRaw[0].fieldData["hero-image"]?.url || "",
  });
}

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
    <>
      <div className="pt-20 lg:pt-10 lg:mb-3">
        <div className="w-full">
          <h1 className="header-article text-left">{peopleDataItem.name}</h1>
        </div>
        <div className="text-left text-base sans-serif font-normal">
          {peopleDataItem.shortDescription}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:pb-6">
        <div className="col-span-12 md:col-span-3 flex justify-center md:justify-end">
          <div className="w-full mt-6">
            <img
              src={peopleDataItem.profilePicture.url}
              alt="Profile"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
          <div className="w-full">
            <p className="text-left sans-serif text-base font-normal"></p>
          </div>
          <div className="w-full">
            <div className="prose sans-serif dark:prose-dark">
              <div
                dangerouslySetInnerHTML={{
                  __html: peopleDataItem.biography,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {peopleDataItem.featureVideo !=="N/A" && (
  <div>
    <div className="w-full py-6 lg:pb-12 lg:pt-0">
      <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
    </div>

    <div className="w-full lg:w-3/4">
      <ResponsiveYouTubeEmbed embedId={peopleDataItem.featureVideo} />
    </div>
  </div>
)}

      <div className="w-full lg:pt-12">
        <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
      </div>
      {/* Separation Bar */}

      {cleanPosts && cleanPosts.length > 0 && (
        <div>
          <PostAccordion title={"News"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {cleanPosts.map((post) => (
                <PostCard key={post.name} content={post} />
              ))}
            </div>
          </PostAccordion>
        </div>
      )}

      {cleanNews && cleanNews.length > 0 && (
        <div>
          <PostAccordion title={"Press"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {cleanNews.map((item) => (
                <NewsCard key={Math.random()} content={item} locale={params} />
              ))}
            </div>
          </PostAccordion>
        </div>
      )}

      {/* {cleanPublications && cleanPublications.length > 0 && (
        <div className="">
          <PostAccordion title={"Publications"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {cleanPublications.map((item) => (
                <PublicationsCard key={Math.random()} content={item} />
              ))}
            </div>
          </PostAccordion>
        </div>
      )} */}
      {cleanEvents && cleanEvents.length > 0 && (
        <div>
          <PostAccordion title={"Events"}>
            <div className="grid grid-cols-3 gap-5">
              {cleanEvents.map((item) => (
                <EventCard key={Math.random()} article={item} />
              ))}
            </div>
          </PostAccordion>
        </div>
      )}

      {cleanRelatedImages && cleanRelatedImages.length > 0 && (
        <div>
          <div>
            <PostAccordion title={"Photos"}>
              <ContentPhotos key={Math.random()} images={cleanRelatedImages} />
            </PostAccordion>
          </div>
        </div>
      )}

      <div className="py-12"></div>
    </>
  );
}

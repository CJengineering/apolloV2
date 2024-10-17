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
import ListSmall from "@/components/CJ-components/components-CJ/basic components/ListSmall";
import {
  Item,
  MultimediaRawFields,
  PublicationsRawFields,
} from "@/app/interfaces";
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
const metadata = {
  title: "Multimedia",
  description: "Multimedia",
};

export default async function MultimediaPage({
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

  const multimediaDataItemRaw = multimediaDataRaw.items.find(
    (item) => item.fieldData.slug === params.slug
  );
  {
    /**filter function */
  }

  /**Get the item mapped and cleaned */

  const multimediaItem = multimediaMapper(
    multimediaDataItemRaw,
    programmeDataRaw.items,
    eventsDataRaw.items,
    sourcesDataRaw.items,
    peopleDataRaw.items
  );

  function filteredMultimedia(
    items: Item<MultimediaRawFields>[],
    singleItem: Item<MultimediaRawFields>
  ): Item<MultimediaRawFields>[] {
    const singleItemPeople = singleItem.fieldData["related-people"] || [];
    const singleItemProgrammes =
      singleItem.fieldData["related-programmes"] || [];

    return items.filter((item) => {
      const itemPeople = item.fieldData["related-event"] || [];
      const itemProgrammes = item.fieldData["related-programmes"] || [];

      const matchesPeople = singleItemPeople.some((person) =>
        itemPeople.includes(person)
      );
      const matchesProgrammes = singleItemProgrammes.some((programme) =>
        itemProgrammes.includes(programme)
      );

      return matchesPeople || matchesProgrammes;
    });
  }

  {
    /** Images of the person 
    const cleanRelatedImages = peopleDataItem.photos.map(
      photoNotFromCollectionMapper
    );
 */
  }
  {
    /** test vairables for diplay*/
  }

  // Clean version og related events
  const filteredMedia = filteredMultimedia(
    multimediaDataRaw.items,
    multimediaDataItemRaw
  );

  const cleanMediaRelated = filteredMedia.map((item) =>
    multimediaMapper(
      item,
      programmeDataRaw.items,
      eventsDataRaw.items,
      sourcesDataRaw.items,
      peopleDataRaw.items
    )
  );
  const cleanCardMedia = cleanMediaRelated.map((item) =>
    mapMultimediaToMediaCard(item)
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-20 lg:mt-10">
        <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
          <div>
            {/* <p className="text-left sans-serif text-base text-slate-700 font-normal mono uppercase ">
              {multimediaItem.type}
            </p> */}
              <h1 className="header-article leading-none mb-6">
                {multimediaItem.name}
              </h1>
            {multimediaItem.videoLink && (
              <div
                dangerouslySetInnerHTML={{
                  __html: multimediaItem.videoLink,
                }}
              ></div>
            )}
          </div>
          <div className="w-full mt-3 mb-2">
            <div className="prose prose-2xl dark:prose-dark sans-serif">
              <div
                dangerouslySetInnerHTML={{
                  __html: multimediaItem.description,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
      <div className="py-6">
        {/* <h2 className="serif font-medium text-xl lg:text-2xl">Details</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-2 space-y-4">
            <ListSmall
              data={{
                "related people": multimediaItem.relatedPeople.map((item) => ({
                  name: item.name,
                  url: `/people/${item.slug}`,
                })),
              }}
            />

            <ListSmall
              data={{
                "publication date": [
                  { name: multimediaItem.datePublished, url: "" },
                ],
              }}
            />

            <ListSmall
              data={{
                source: [{ name: multimediaItem.sources.name, url: "" }],
              }}
            />
          </div>
          <div className="">
            <ListSmall
              data={{
                "related programme": multimediaItem.relatedProgrammes.map(
                  (item) => ({
                    name: item.name,
                    url: `/programmes/${item.slug}`,
                  })
                ),
              }}
            />

            {/* <ListSmall
              data={{
                "Link to publication": [
                  {
                    name: "External link ->",
                    url: multimediaItem.originalLink,
                  },
                ],
              }}
            /> */}
          <div className="mt-4">
            <ButtonCJ
              href={multimediaItem.originalLink}
              text={"Go to original"}
              openInNewTab={false}
              styleType="secondary"
            />  
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div> {/* Separation Bar */}
      <div>
        <h2 className="header-section pt-6">Related</h2>
        <div className="grid grid-cols-1 space-y-6 lg:space-y-0 lg:grid-cols-2 mt-6 lg:mt-6">
          {cleanMediaRelated.length > 0 &&
            cleanCardMedia.map((item) => <MediaCard {...item} />)}
        </div>
        {/* Related Publications
        
         <PostAccordion title={"Photos"}>
            <ContentPhotos images={cleanRelatedImages} />
          </PostAccordion>
        */}
      </div>
    </>
  );
}

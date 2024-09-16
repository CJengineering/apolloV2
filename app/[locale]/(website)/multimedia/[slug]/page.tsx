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
  const cleanCardMedia =  cleanMediaRelated.map((item)=>mapMultimediaToMediaCard(item));

  return (
    <ContentContainer width="full" desktopWidth="medium">
                <h1 className="header-page pb-3 pt-12 lg:pb-6 lg:pt-7 text-left">
          {multimediaItem.name}
        </h1>
        <div className="grid grid-cols-12 lg:grid-cols-12 lg:gap-12 w-full">
  {/* Left Column: Multimedia Item + Description (9 columns on large screens) */}
  <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
    <div>
      {/* Uncomment if you want to display the multimedia item type */}
      {/* <p className="text-left sans-serif text-base text-slate-700 font-normal mono uppercase">
        {multimediaItem.type}
      </p> */}
      {multimediaItem.videoLink && (
        <div
          dangerouslySetInnerHTML={{
            __html: multimediaItem.videoLink,
          }}
        ></div>
      )}
    </div>

    <div className="w-full">
      <div className="prose sans-serif prose-2xl">
        <div
          dangerouslySetInnerHTML={{
            __html: multimediaItem.description,
          }}
        ></div>
      </div>
    </div>
  </div>

  {/* Right Column: ListSmall Items (3 columns on large screens) */}
  <div className="col-span-12 lg:col-span-4">
    <div className="grid grid-cols-1">
      <div className="space-y-4">
        <ListSmall
          data={{
            "people": multimediaItem.relatedPeople.map((item) => ({
              name: item.name,
              url: item.slug,
            })),
          }}
        />

        <ListSmall
          data={{
            "date": [
              { name: multimediaItem.datePublished, url: "" },
            ],
          }}
        />

        <ListSmall
          data={{ source: [{ name: multimediaItem.sources.name, url: "" }] }}
        />
      </div>

      <div className="py-4 space-y-4">
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

        <ListSmall
          data={{
            "Link": [
              {
                name: "Go to external link",
                url: multimediaItem.originalLink,
              },
            ],
          }}
        />
      </div>
    </div>
  </div>
</div>




{cleanMediaRelated.length > 0 && (
  <div>
    <div className="py-6">
      <div className="w-full h-px bg-slate-200"></div>
    </div>

    <div className="pb-3">
      <h2 className="header-section pb-3">Related multimedia</h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {cleanCardMedia.length > 0 &&
        cleanCardMedia.map((item) => (
          <MediaCard key={item.id} {...item} />
        ))}
    </div>

    {/* Related Publications */}
    {/* Uncomment if needed */}
    {/* 
      <PostAccordion title={"Photos"}>
        <ContentPhotos images={cleanRelatedImages} />
      </PostAccordion> 
    */}
  </div>
)}

    </ContentContainer>
  );
}

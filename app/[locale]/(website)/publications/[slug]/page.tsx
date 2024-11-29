import { getData } from "@/functions/api/getData";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import React from "react";

import publicationMapper from "@/functions/transformers/publicationMapper";

import PublicationsCard from "@/components/custom beta components/PublicationCard";
import ListSmall from "@/components/CJ-components/components-CJ/basic components/ListSmall";
import { Item, PublicationsRawFields } from "@/app/interfaces";

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
  const publicationsDataItemRaw = publicationsDataRaw.items.find(
    (item) => item.fieldData.slug === params.slug
  );
  {
    /**filter function */
  }

  /**Get the item mapped and cleaned */

  const publicationItem = publicationMapper(
    publicationsDataItemRaw,
    programmeDataRaw.items,
    peopleDataRaw.items,
    partnersDataRaw.items,
    sourcesDataRaw.items
  );

  function filterPublications(
    items: Item<PublicationsRawFields>[],
    singleItem: Item<PublicationsRawFields>
  ): Item<PublicationsRawFields>[] {
    const singleItemPeople = singleItem.fieldData.people || [];
    const singleItemProgrammes = singleItem.fieldData["programme-s"] || [];

    return items.filter((item) => {
      const itemPeople = item.fieldData.people || [];
      const itemProgrammes = item.fieldData["programme-s"] || [];

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
  const filteredPublications = filterPublications(
    publicationsDataRaw.items,
    publicationsDataItemRaw
  );

  const cleanPublicationsRelated = filteredPublications.map((item) =>
    publicationMapper(
      item,
      programmeDataRaw.items,
      peopleDataRaw.items,
      partnersDataRaw.items,
      sourcesDataRaw.items
    )
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:mt-24">
        <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
          <div>
            <p className="text-left sans-serif text-base text-slate-700 font-normal mono uppercase ">
              {publicationItem.type}
            </p>
          </div>
          <div className="w-full pb-2">
            <h1 className="text-left text-4xl serif font-bold">
              {publicationItem.name}
            </h1>
          </div>
          <div className="w-full mt-6">
            <div className="prose prose-xl dark:prose-dark serif">
              <div
                dangerouslySetInnerHTML={{
                  __html: publicationItem.text,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
      <div className="py-6">
        <h2 className="serif font-medium text-xl lg:text-2xl">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="py-4 space-y-4">
            <ListSmall
              data={{
                "author(s)": publicationItem.people.map((item) => ({
                  name: item.name,
                  url: item.slug,
                })),
              }}
            />

            <ListSmall
              data={{
                "publication date": [
                  { name: publicationItem.datePublished, url: "" },
                ],
              }}
            />

            <ListSmall
              data={{ source: [{ name: publicationItem.source2, url: "" }] }}
            />
          </div>
          <div className="py-4 space-y-4">
            <ListSmall
              data={{
                "related programme": publicationItem.programmeS.map((item) => ({
                  name: item.name,
                  url: `/programmes/${item.slug}`,
                })),
              }}
            />

            <ListSmall
              data={{
                "Link to publication": [
                  {
                    name: "External link ->",
                    url: publicationItem.externalLink,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>{" "}
      {/* Separation Bar */}
      <div>
        {cleanPublicationsRelated.length > 0 &&
          cleanPublicationsRelated.map((item) => (
            <PublicationsCard content={item} />
          ))}
      </div>
    </>
  );
}

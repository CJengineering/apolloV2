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
import ContentPhotos from "../../programme/j-wafs/content-photos";
import photoNotFromCollectionMapper from "@/functions/transformers/photoNOTcollectionToLIghtBox";

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
    postsDataRaw.items
  );
{/** Images of the person */}
 const cleanRelatedImages = peopleDataItem.photos.map(photoNotFromCollectionMapper)
  {
    /** test vairables for diplay*/
  }
  
  const testRelateMultimediaItem = relatedMultimedia.length;
  const testRelatePostItem = relatedPosts.length;
  const testRelateEventItem = relatedEvents.length;
  const testRelateNewsItem = relatedNews.length;

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
          <SectionBanter title={"Multimedia"}></SectionBanter>
          <SectionBanter title={"Related Posts"}></SectionBanter>
          <SectionBanter title={"Images"}>

            <ContentPhotos images={cleanRelatedImages}/>
          </SectionBanter>

        </ContentContainer>
      </MainContainer>
    </div>
  );
}

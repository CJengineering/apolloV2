import MediaCard from "@/components/CJ-components/components-CJ/basic components/MediaCard";
import TableRowSingle from "@/components/CJ-components/components-CJ/custom components/TableRowSIngle";

import EventCard from "@/components/custom beta components/EventCard";
import MainContainer from "@/components/custom beta components/MainContainer";
import NewsCard from "@/components/custom beta components/NewsCard";
import PostCard from "@/components/custom beta components/PostCard";
import { getData } from "@/functions/api/getData";
import filterRelatedAwards from "@/functions/filters/filterRelatedAwards";
import { filterRelatedEvents } from "@/functions/filters/filterRelatedEvents";
import filterRelatedFeatures from "@/functions/filters/filterRelatedFeatures";
import filterRelatedMultimedia from "@/functions/filters/filterRelatedMultimedia";
import { filterRelatedNews } from "@/functions/filters/filterRelatedNews";
import { filterRelatedPosts } from "@/functions/filters/filterRelatedPosts";
import filterRelatedPrizes from "@/functions/filters/filterRelatedPrizes";
import eventMapper from "@/functions/transformers/eventMapper";
import featureMapper from "@/functions/transformers/featureMapper";
import { mapEventFieldDataToEventCard } from "@/functions/transformers/mapEventFieldToEventCard";
import multimediaMapper from "@/functions/transformers/multimediaMapper";
import { mapMultimediaToMediaCard } from "@/functions/transformers/multimediaToCardMultimedia";

import newsMapper from "@/functions/transformers/newsMapper";
import { newsToNewsCard } from "@/functions/transformers/newsToNewsCard";
import mapItemToNewsMainProps from "@/functions/transformers/newsTransformer";
import photoMapper from "@/functions/transformers/photoRawToLightBox";
import { mapProgrammeToCardProgramme } from "@/functions/transformers/porgrammeToCardProgramme";
import postMapper from "@/functions/transformers/postMapper";
import { postToPostCard } from "@/functions/transformers/postToPostCard";
import { mapProgrammeToRowData } from "@/functions/transformers/programmeCleanIntoRowTable";
import programmeMapper from "@/functions/transformers/programmeMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { get } from "http";
import { Divide } from "lucide-react";
import React from "react";
import ContentPhotos from "../../../../../components/CJ-components/components-CJ/test components/content-photos";
import PostAccordion from "@/components/mdx/accordion";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
import Stats from "@/components/CJ-components/components-CJ/basic components/Stats";

export default async function EjadaPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const peopleCollectionID = getIdByDisplayName("People");
  const programmeCollectionID = getIdByDisplayName("Programmes");
  const partnersCollectionID = getIdByDisplayName("Partners");
  const newsCollectionID = getIdByDisplayName("News");
  const eventsCollectionID = getIdByDisplayName("Events");
  const postsCollectionID = getIdByDisplayName("Posts");
  const multimediaCollectionID = getIdByDisplayName("Multimedia");
  const sourcesCollectionID = getIdByDisplayName("Sources");
  const featuresCollectionID = getIdByDisplayName("Features");
  const awardsCollectionID = getIdByDisplayName("Awards");
  const jobsCollectionID = getIdByDisplayName("Jobs");
  const photosCollectionID = getIdByDisplayName("Photos");
  const prizesCollectionID = getIdByDisplayName("Prizes");
  const categoryId = getIdByDisplayName("Categories");
  const tagId = getIdByDisplayName("Tags");

  {
    /**Get the data from the collection */
  }

  const programmesRawData = await getData(programmeCollectionID);
  const peopleRawData = await getData(peopleCollectionID);
  const partnersRawData = await getData(partnersCollectionID);
  const multimediaRawData = await getData(multimediaCollectionID);
  const postsRawData = await getData(postsCollectionID);
  const newsRawData = await getData(newsCollectionID);
  const eventsRawData = await getData(eventsCollectionID);
  const sourcesRawData = await getData(sourcesCollectionID);
  const featuresRawData = await getData(featuresCollectionID);
  const awardsRawData = await getData(awardsCollectionID);
  const jobsRawData = await getData(jobsCollectionID);
  const photosRawData = await getData(photosCollectionID);
  const prizesRawData = await getData(prizesCollectionID);
  const categoriesRawData = await getData(categoryId);
  const tagsRawData = await getData(tagId);

  {
    /**Get the single programme by id from webflow */
  }
  const jwafsId = "61ee828a15a3185f22bde645";
  const jwafsSlug = params.slug;
  const singleProgramme = programmesRawData.items.find(
    (item) => item.id === jwafsId
  );

  {
    /**Related collections in raw state  */
  }
  const relatedMultimedia = filterRelatedMultimedia(multimediaRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedPost = filterRelatedPosts(postsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedNews = filterRelatedNews(newsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedEvents = filterRelatedEvents(eventsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedFeatures = filterRelatedFeatures(
    featuresRawData.items,
    singleProgramme.id
  );
  const relatedPrizes = filterRelatedPrizes(prizesRawData.items, {
    people: singleProgramme.id,
  });
  const relatedAwards = filterRelatedAwards(awardsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedJobs = filterRelatedAwards(jobsRawData.items, {
    programme: singleProgramme.id,
  });
  const relatedPhotos = photosRawData.items;
  {
    /**Missing to add 
    prizes jobs people photos learns
    
    */
  }

  {
    /**Map the data  the related raw data into clean fields */
  }

  const cleanRelatedPosts = relatedPost.map((item) =>
    postMapper(
      item,
      categoriesRawData.items,
      eventsRawData.items,
      programmesRawData.items,
      peopleRawData.items
    )
  );
  const cleanRelatedEvents = relatedEvents.map((item) =>
    eventMapper(
      item,
      programmesRawData.items,
      peopleRawData.items,
      peopleRawData.items
    )
  );
  const cleanedFeatures = relatedFeatures.map((item) =>
    featureMapper(item, programmesRawData.items)
  );
  const cleanedRelatedPhotos = relatedPhotos.map((item) =>
    photoMapper(item, programmesRawData.items, peopleRawData.items)
  );
  const cleanRelatedNews = relatedNews.map((item) =>
    newsMapper(
      item,
      programmesRawData.items,
      peopleRawData.items,
      sourcesRawData.items,
      tagsRawData.items,
      eventsRawData.items
    )
  );
  const cleanRelatedMultimedia = relatedMultimedia.map((item) =>
    multimediaMapper(
      item,
      programmesRawData.items,
      eventsRawData.items,
      sourcesRawData.items,
      peopleRawData.items
    )
  );
  {
    /**Clean Individual Programme */
  }
  const cleanSingleProgramme = programmeMapper(
    singleProgramme,
    peopleRawData.items,
    partnersRawData.items,
    programmesRawData.items
  );

  {
    /*map in to interface of different compoenents   */
  }

  const multimediaProps = cleanRelatedMultimedia.map(mapMultimediaToMediaCard);
  const newsProps: any[] = relatedNews.map((item) =>
    newsMapper(
      item,
      programmesRawData.items,
      peopleRawData.items,
      sourcesRawData.items,
      tagsRawData.items,
      eventsRawData.items
    )
  );
  const postProps = cleanRelatedPosts;
  const eventProps = cleanRelatedEvents.map(mapEventFieldDataToEventCard);

  const dataForRow = mapProgrammeToRowData(
    cleanSingleProgramme,
    cleanedFeatures
  );

  return (
    <>
      <div className="pt-20 lg:pt-10 lg:mb-12">
        <div className="flex flex-col text-left">
        <div className="w-full flex pb-6 lg:pb-12">
<img className="dark:hidden" src="/images/labs/ejada/ejada-full_logo.png" width="600"></img>
  </div>
          <div className="pb-6">
            <h1 className="header-article">{cleanSingleProgramme.name}</h1>
          </div>
          <div className="w-full lg:w-2/3">
            <div
              className="prose prose-xl leading-normal dark:text-white"
              dangerouslySetInnerHTML={{ __html: cleanSingleProgramme.text }}
            />
          </div>
        </div>
        <div className="w-full py-6 lg:py-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <div className="pb-6">
          <h2 className="header-section">Impact</h2>
        </div>
        <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="">
            <Stats title={cleanSingleProgramme.impact01} content={cleanSingleProgramme.impact01Title} />
          </div>
          <div className="">
            <Stats title={cleanSingleProgramme.impact02} content={cleanSingleProgramme.impact02Title} />
          </div>
          <div className="">
            <Stats
              title={cleanSingleProgramme.impact03}
              content={cleanSingleProgramme.impact03Title}
            />
          </div>
          <div className="">
            <Stats title={cleanSingleProgramme.impact04} content={cleanSingleProgramme.impact04Title} />
          </div>
        </div>
        <div className="w-full pt-6 lg:pt-12 lg:pb-0">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <div className="">
          <PostAccordion title={"News"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {postProps.map((post) => (
                <PostCard key={post.name} content={post} />
              ))}
            </div>
          </PostAccordion>
        </div>
        <div className="">
          <PostAccordion title={"Press"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {newsProps.map((item) => (
                <NewsCard content={item} locale={params} />
              ))}
            </div>
          </PostAccordion>
        </div>
        <div className="">
          <PostAccordion title={"Multimedia"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {multimediaProps.map((item) => (
                <div key={item.alt} className="">
                  <MediaCard {...item} />
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
              {cleanRelatedEvents.map((item) => (
                <>
                  <EventCard article={item}></EventCard>
                </>
              ))}
            </div>
          </PostAccordion>
        </div>
        {/* <div>
          <h2> related photos by programme</h2>
          <div>
          <ContentPhotos images={cleanedRelatedPhotos} />
       
          </div>
        </div> */}
      </div>
    </>
  );
}

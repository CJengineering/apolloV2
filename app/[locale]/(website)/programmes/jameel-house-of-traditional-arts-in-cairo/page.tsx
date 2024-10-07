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
import CarousselForComponents from "@/components/CJ-components/components-CJ/basic components/CarousselForComponents";
import Stats from "@/components/CJ-components/components-CJ/basic components/Stats";
import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";

// START INITIATIVES

const cardData = [
  {
    imageUrl: "/images/labs/j-wafs/JAMEEL_INDEX_1000PX.jpg",
    alt: "2024 catalogue",
    title: "2024 catalogue",
    subtitle:"",
    link: "https://www.jameelartshealthlab.org/healing-arts",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/j-wafs/JWAFS_SEED_GRANTS.jpg",
    alt: "2023 catalogue",
    title: "2023 catalogue",
    subtitle:"",
    link: "https://jwafs.mit.edu/SeedGrants",
    openInNewTab: false,
    clickAction: "External link",
  },
];
// END INITIATIVES

export default async function JameelHouseCairoProgrammePage({
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
  const jameelhousecairoId = "63440d3f2d8448b7438fc75d";
  const jwafsSlug = params.slug;
  const singleProgramme = programmesRawData.items.find(
    (item) => item.id === jameelhousecairoId
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
   < >
      <div className="pt-12 ">

<div className="flex flex-col text-left">
           
<div className="pb-6">
<h1 className="header-article">Jameel House of Traditional Arts in Cairo</h1>
</div>

<div className="pb-12">
<p className="prose prose-xl leading-normal dark:text-white">
The Jameel House of Traditional Arts in Cairo offers classes in traditional geometry, drawing, colour harmony, and decorative floral patterns, as well as training in ceramics, glass, gypsum, metalwork, and woodwork. Located in Fustat, Historic Cairo, the Jameel House was launched in 2009 through a collaboration between The Prince’s Foundation School of Traditional Arts, Community Jameel, and the Cultural Development Fund of Egypt. With a mission to preserve Egypt’s oldest crafts, the Jameel House accepts 20 students annually on a two-year training programme by The Prince’s Foundation School.
</p>
</div>
</div>

<div className="w-full lg:w-2/3">
  <ResponsiveYouTubeEmbed embedId="dn9mZchjKHw?si=_2VQzRq_rzQ7lqp4" />
  </div>
  
  <div className="w-full py-6 lg:py-12">
    <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
  </div>

  <div className="pb-6">
    <h2 className="header-section">Impact</h2>
  </div>
  <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="">
      <Stats title="220" content="graduates" />
    </div>
    <div className="">
      <Stats title="3000" content="applicants" />
    </div>
    <div className="">
      <Stats title="70" content="startups founded by graduates" />
    </div>
  </div>


  <div className="w-full py-12">
    <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
  </div>

  <div className="pb-6">
    <h2 className="header-section">Graduating classes</h2>
  </div>

<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
   
    {cardData.map((card, index) => (
      <HomeCard
        key={index}
        imageUrl={card.imageUrl}
        alt={card.alt}
        title={card.title}
        subtitle={card.subtitle}
        link={card.link}
        openInNewTab={card.openInNewTab}
        clickAction={card.clickAction || ""}
      />
    ))}

</div>


  <div className="w-full pt-6 lg:pt-12 lg:pb-0">
    <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
  </div>
  {/* <div className="pb-6">
    <h2 className="header-section">Spinouts</h2>
  </div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
{spinoutsLogos.map((card, index) => (
  <div className="flex  items-center justify-center">
    <HomeCard
        key={index}
        imageUrl={card.imageUrl}
        alt={card.alt}
        title={card.title}
        subtitle={card.subtitle}
        link={card.link}
        openInNewTab={card.openInNewTab}
        clickAction={card.clickAction || ""}
      />
  </div>
))}
</div> */}

  <div className="">
    <PostAccordion title={"News"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {postProps.slice(0).map((post) => (
          <PostCard key={post.name} content={post} />
        ))}
      </div>
    </PostAccordion>
  </div>
  <div className="">
    <PostAccordion title={"Press"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {newsProps.slice(0).map((item) => (
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

  <div>
    <PostAccordion title={"Events"}>
      <div className="">
      <CarousselForComponents>
        {cleanRelatedEvents.map((item) => (
          <>
            <EventCard article={item}></EventCard>
          </>
        ))}
        </CarousselForComponents>
      </div>
    </PostAccordion>
  </div>
</div>
    </>
  );
}

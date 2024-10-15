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
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";
import Stats from "@/components/CJ-components/components-CJ/basic components/Stats";
import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import { Metadata } from "next";

// START THE DATA FOR CARDS

const cardData = [
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/clara-barbier-serrano_1x1.jpg",
    alt: "Clara Barbier Serrano",
    title: "Clara Barbier Serrano",
    subtitle:
      "France, 2020",
    link: "/people/clara-barbier-serrano",
    openInNewTab: false,
    clickAction: "Internal link",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/laura-mekhail_1x1.jpg",
    alt: "Laura Mekhail",
    title: "Laura Mekhail",
    subtitle:
      "Egypt, 2021",
    link: "/people/laura-mekhail",
    openInNewTab: false,
    clickAction: "Internal link",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/seonwoo-lee_1x1.jpg",
    alt: "Seonwoo Lee",
    title: "Seonwoo Lee",
    subtitle: "South Korean, 2022",  
    link: "/people/seonwoo-lee",
    openInNewTab: false,
    clickAction: "Internal link",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/anastasia-koorn_1x1.jpg",
    alt: "Anatasia Koorn",
    title: "Anatasia Koorn",
    subtitle:
    "United States, 2023",
    link: "/people/anastasia-koorn",
    openInNewTab: false,
    clickAction: "Internal link",
  },
  {
    imageUrl: "/images/labs/bocelli-jameel-scholarship/henna-mun_1x1.jpg",
    alt: "Henna Mun",
    title: "Henna Mun",
    subtitle:
    "South Korea, 2023",
    link: "/people/henna-mun",
    openInNewTab: false,
    clickAction: "Internal link",
  },
];
// END THE DATA FOR CARDS

export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Andrea Bocelli Foundation-Community Jameel Scholarship at RCA",
  description:
    "The Andrea Bocelli Foundation-Community Jameel scholarship supports talented students at the Royal College of Music, offering world-class training and the chance to perform with Bocelli.",
  ogType: "website",
  ogImage:
    "/images/labs/bocelli-jameel-scholarship/bocelli-jameel-scholarship_og.jpg",
  twitterCard: "summary_large_image",
  keywords: [
    "Community Jameel",
    "Jameel",
    "Community",
    "Andrea Bocelli",
    "Royal College of Music",
    "Clara Barbier Serrano",
    "Laura Mekhail",
    "Seonwoo Lee",
    "Anastasia Koorn",
    "Henna Mun",
  ],
});

export default async function BocelliJameelScholarshipPage({
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
  const jwafsId = "61ee828a15a3189441bde67d";
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

          <div className="w-full lg:w-2/3 pb-6">
            <h1 className="header-article">{cleanSingleProgramme.name}</h1>
          </div>
          <div className="w-full lg:w-2/3 pb-12">
            <div
              className="prose prose-xl leading-normal dark:text-white"
              dangerouslySetInnerHTML={{ __html: cleanSingleProgramme.text }}
            />
          </div>

        </div>

        <div className="w-full lg:w-2/3">
          <ResponsiveYouTubeEmbed embedId="KCMG2btSzJI?si=sU0kZTj5bPS1pUkK" />
        </div>

        <div className="w-full py-6 lg:py-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <div className="pb-6">
          <h2 className="header-section">Impact since 2003</h2>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="">
            <Stats
              title={cleanSingleProgramme.impact01}
              content={cleanSingleProgramme.impact01Title}
            />
          </div>
          <div className="">
            <Stats
              title={cleanSingleProgramme.impact02}
              content={cleanSingleProgramme.impact02Title}
            />
          </div>
          <div className="">
            <Stats
              title={cleanSingleProgramme.impact03}
              content={cleanSingleProgramme.impact03Title}
            />
          </div>
        </div>

        <div className="w-full py-6 lg:py-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <div className="pb-6">
          <h2 className="header-section">Scholars</h2>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
 {/* DIVIDER START */}
 <div className="w-full mt-12">
        <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
      </div>
      {/* DIVIDER END */}


      {/* START NEWS */}
      {postProps && postProps.length > 0 && (
        <div className="">
          <PostAccordion title={"News"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {postProps.slice(0).map((post) => (
                <PostCard key={post.name} content={post} />
              ))}
            </div>
          </PostAccordion>
        </div>
      )}
      {/* END NEWS */}

      {/* START PRESS */}
      {newsProps && newsProps.length > 0 && (
        <div className="">
          <PostAccordion title={"Media"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {newsProps.map((item) => (
                <NewsCard content={item} locale={params} />
              ))}
            </div>
          </PostAccordion>
        </div>
      )}
      {/* END PRESS */}

      {/* START EVENTS */}
      {cleanRelatedEvents && cleanRelatedEvents.length > 0 && (
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
      )}
      {/* END EVENTS */}  
      </div>
    </>
  );
}

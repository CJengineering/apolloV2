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
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";
import Stats from "@/components/CJ-components/components-CJ/basic components/Stats";
import Image from "next/image";
import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
import { Metadata } from "next";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";

export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Jameel Arts and Health Lab",
  description:
    "Measurably improving health and wellbeing through the arts",
  ogType: "website",
  ogImage: '/images/metadata/JAMEEL_ARTS_HEALTH_LAB_HERO_OG.webp',
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community", "Jameel Arts & Health Lab", "WHO", "NYU Steinhardt", "CULTURUNNERS"],

})

// START INITIATIVES

const cardData = [
  {
    imageUrl: "/images/labs/jahl/UNGAHealingArts.jpg",
    alt: "UNGA 2024 Healing Arts",
    title: "UNGA 2024 Healing Arts",
    subtitle: "",
    link: "https://www.jameelartshealthlab.org/outreach/events/unga-healing-arts-week-2024",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/jahl/YazidiCulturalArchive.jpg",
    alt: "Yazidi Cultural Archive",
    title: "Yazidi Cultural Archive",
    subtitle: "",
    link: "https://artsandculture.google.com/story/ZwXB6qNf6NHmyA",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/jahl/LancetReport.jpg",
    alt: "Lancet Global Series",
    title: "Lancet Global Series",
    subtitle: "",
    link: "https://www.jameelartshealthlab.org/research/research-projects/lancet-global-series-on-health-benefits-of-the-arts",
    openInNewTab: false,
    clickAction: "External link",
  },
];
// END INITIATIVES

export default async function jameelArtsHealthLabProgrammePage({
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
  const jahlId = "63ced896230e6863c19094b1";
  const jwafsSlug = params.slug;
  const singleProgramme = programmesRawData.items.find(
    (item) => item.id === jahlId
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
       <div className="pt-20 lg:pt-10">
        <div className="flex flex-col text-left">
          <div className="w-full flex pb-6 lg:pb-12">
            <img
              className="dark:hidden"
              src="/images/labs/jahl/JAHL_ORIGNAL_DARK.png"
              width="360"
            ></img>
            <img
              className="hidden dark:block"
              src="/images/labs/jahl/JAHL_ORIGNAL_LIGHT.png"
              width="360"
            ></img>
          </div>

          <div className="pb-6">
            <h1 className="header-article">{cleanSingleProgramme.name}</h1>
          </div>

          <div className="pb-6">
          <div
              className="prose prose-xl leading-normal dark:prose-dark"
              dangerouslySetInnerHTML={{ __html: cleanSingleProgramme.text }}
            /></div>
          </div>

          <div className="pb-3">
            <ButtonCJ
              href={cleanSingleProgramme.website}
              text={"Visit the website"}
              styleType="secondary"
              openInNewTab={true}
            ></ButtonCJ>
          </div>
        </div>
        {/* START PARTNERS GRID */}
        <div className="text-sm font-bold items-center pt-6">
          IN PARTNERSHIP WITH
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
         
          {/* 1 */}
          <div className="flex items-center justify-start py-6">
            <a href="www.who.int" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/logos/who-europe_logo.svg"
                alt="World Health Organization logo"
                width={170}
                height={100}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>

          {/* 2 */}
          <div className="flex items-center justify-start py-6">
            <a href="www.who.int" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/logos/nyu-steinhardt_logo.png"
                alt="NYU Steinhardt logo"
                width={200}
                height={100}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>

          {/* 3 */}
          <div className="flex items-center justify-start">
            <Image
              src="/images/cj_logo/CJ_LOGO_ENGLISH_RED_SVG.svg"
              alt="Community Jameel logo"
              width={170}
              height={100}
              className="object-contain transition duration-300 hover:filter hover:grayscale"
            />
          </div>

          {/* 4 */}
          <div className="flex items-center justify-start">
            <Image
              src="/images/logos/culturunners_logo.png"
              alt="CULTURUNNERS logo"
              width={120}
              height={100}
              className="object-contain transition duration-300 hover:filter hover:grayscale"
            />
          </div>
        </div>

<div className="py-3"></div>
        {/* END PARTNERS GRID */}

        <div className="w-full lg:w-2/3">
          <ResponsiveYouTubeEmbed embedId="dTLHb-oRiAM?si=qo0e2XBfgWokMpxK" />
        </div>

        <div className="w-full py-6 lg:py-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <div className="pb-6">
          <h2 className="header-section">Select initiatives</h2>
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
        <div className="py-12"></div>
    </>
  );
}

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
import ContentPhotos from "../../../../../../components/CJ-components/components-CJ/test components/content-photos";
import PostAccordion from "@/components/mdx/accordion";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import CarousselForComponents from "@/components/CJ-components/components-CJ/basic components/CarousselForComponents";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";
import Stats from "@/components/CJ-components/components-CJ/basic components/Stats";
import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
import Image from "next/image";
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import { Metadata } from "next";

export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Jameel Observatory-CREWSnet",
  description: "Empowering frontline vulnerable communities to proactively adapt to climate change.",
  ogType: "website",
  ogImage: '/images/metadata/CREWSNET_OG_1200x630.webp',
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "MIT", "Lincoln Laboratory", "CREWSnet", "Jameel Observatory"],

})


// START "SELECT INITIATIVES"

const selectInitiatives = [
  {
    imageUrl: "/images/labs/jameel-observatory/jo-crewsnet/JameelObservatory-CREWSnet_ClimateHouse_01.jpg",
    alt: "Climate-resilient housing and storm shelters",
    title: "Climate-resilient housing and storm shelters",
    subtitle:"Extreme heat and storms will endanger lives in southwest Bangladesh, requiring accessible, sustainable shelters that address social barriers and protect assets, with a focus on community needs and future resilience.",  
    link: "https://crewsnet.mit.edu/flagship-initiatives/sheltersclimate-resilient-housing",
    openInNewTab: true,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/jameel-observatory/jo-crewsnet/JameelObservatory-CREWSnet_Clinics_02.jpg",
    alt: "Agriculture and adaptation clinics",
    title: "Agriculture and adaptation clinics",
    subtitle:"Adaptation clinics in southwest Bangladesh provide farmers with guidance on climate change impacts, helping them increase resilience by addressing agricultural and economic challenges through informed projections and support.",
    link: "https://crewsnet.mit.edu/flagship-initiatives/water-security",
    openInNewTab: true,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/jameel-observatory/jo-crewsnet/JameelObservatory-CREWSnet_watersecurity_03.jpg",
    alt: "Water Security",
    title: "Water Security",
    subtitle:"Saltwater intrusion threatens water security in coastal Bangladesh, and climate change will worsen the issue. To address this, Jameel Observatory-CREWSnet is developing models to forecast future risks and create scalable, evidence-based solutions that ensure equitable access to freshwater, engaging stakeholders to mobilize action.",
    link: "https://crewsnet.mit.edu/flagship-initiatives/water-security",
    openInNewTab: true,
    clickAction: "External link",
  },
];

// END "SELECT INITIATIVES"

export default async function joCrewsnetPage({
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
  const joCrewsnetId = "630f7f4b4cd649c47cb8beca";
  const joCrewsnetSlug = params.slug;
  const singleProgramme = programmesRawData.items.find(
    (item) => item.id === joCrewsnetId
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
      <div className="pt-20 lg:pt-12">
        <div className="flex flex-col text-left">
          <div className="w-full flex pb-6 lg:pb-12">
            <img
              className="dark:hidden"
              src="/images/labs/jameel-observatory/jo-crewsnet/JO_CREWSNET_DARK.svg"
              width="600"
            ></img>
            <img
              className="hidden dark:block"
              src="/images/labs/jameel-observatory/jo-crewsnet/JO_CREWSNET_WHITE.svg"
              width="600"
            ></img>
          </div>

          <div className="pb-6">
            <h1 className="header-article">{cleanSingleProgramme.name}</h1>
          </div>

          <div className="w-full lg:w-2/3">
            <div
              className="prose prose-xl leading-normal dark:prose-dark"
              dangerouslySetInnerHTML={{ __html: cleanSingleProgramme.text }}
            />
          </div>
          
          <div className="py-6">
            <ButtonCJ
              href={"https://crewsnet.mit.edu/"}
              text={"Visit the website"}
              styleType="secondary"
              openInNewTab = {true}
            ></ButtonCJ>
          </div>
        </div>

        {/* START PARTNERS GRID */}
        <div className="text-sm font-bold items-center pb-3 lg:pb-0">
          IN PARTNERSHIP WITH
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* 1 */}
          <div className="flex items-center justify-start py-2">
            <a
              href="https://www.ed.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logos/mit_logo.svg"
                alt="MIT logo"
                width={170}
                height={100}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>

          {/* 2 */}
          <div className="flex items-center justify-start py-2">
            <a
              href="https://www.brac.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logos/brac_logo.png"
                alt="BRAC logo"
                width={170}
                height={100}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>

          {/* 3 */}
          <div className="flex items-center justify-start py-2">
            <a
              href="https://www.un.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logos/j-pal-dark_logo.png"
                alt="J-PAL logo"
                width={210}
                height={200}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>
        </div>

        {/* END PARTNERS GRIP */}

        <div className="py-3"></div>
        <div className="w-full lg:w-2/3">
          <ResponsiveYouTubeEmbed embedId="8ZrWM8rbtkA?si=JF3UrBUTY0T-MnHC" />
        </div>

        <div className="w-full py-6 lg:py-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <div className="pb-6">
          <h2 className="header-section">Flagship initiatives</h2>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectInitiatives.map((card, index) => (
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
        <div className="py-24"></div>
      </div>
    </>
  );
}

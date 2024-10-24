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
import Stats from "@/components/CJ-components/components-CJ/basic components/Stats";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";
import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
import Image from "next/image";
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import { Metadata } from "next";

export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Jameel Observatory for Food Security Early Action",
  description: "Reinventing climate change adaptation through data and evidence.",
  ogType: "website",
  ogImage: '/images/metadata/JO_FSEA_OG.webp',
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "University Edinburgh", "ILRI", "Save the Children", "J-PAL", "Jameel Observatory"],

})

// START "SELECT INITIATIVES"

const selectInitiatives = [
  {
    imageUrl:
      "/images/labs/jameel-observatory/jo-fsea/JAMEEL_OBSERVATORY_FSEA_CHANGE.jpg",
    alt: "Managing risks in East Africa's drylands: Jameel Observatory for Food Security Early Action",
    title: "Managing risks in East Africa's drylands: Jameel Observatory for Food Security Early Action",
    subtitle:
      "Pastoralism is vital for food security, economic stability, and environmental conservation in Africa's drylands, but communities face challenges from climate change and resource scarcity, requiring urgent, evidence-based interventions and collaborative efforts to ensure their resilience and sustainability.",
    link: "https://www.youtube.com/watch?v=fBs6t5PXCJU",
    openInNewTab: true,
    clickAction: "External link",
  },
  {
    imageUrl:
      "/images/labs/jameel-observatory/jo-fsea/JAMEEL_OBSERVATORY_FSEA_DANGEROUS_DELAYS_2.jpg",
    alt: "Dangerous Delays 2: The Cost of Inaction",
    title: "Dangerous Delays 2: The Cost of Inaction",
    subtitle:
      "Estimates in 2022 revealed that across Ethiopia, Kenya and Somalia, on average one person died every 48 seconds from acute hunger linked to conflict, COVID-19, the climate crisis and market pressures.",
    link: "https://www.youtube.com/watch?v=yA_QJfRgnXc",
    openInNewTab: true,
    clickAction: "External link",
  },
  {
    imageUrl:
      "/images/labs/jameel-observatory/jo-fsea/JAMEEL_OBSERVATORY_FSEA_ANTICIPATORY_ACTION.jpg",
    alt: "Looking ahead in the midst of a crisis",
    title: "Looking ahead in the midst of a crisis",
    subtitle:
      "2024 Report: Exploring the role of Anti-Anticipatory Action in a protracted drought",
    link: "/documents/jameel-observatory-for-food-security-early-action/Roles_AA_in_Protracted_Crises.pdf",
    openInNewTab: true,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/jameel-observatory/jo-fsea/JAMEEL_OBSERVATORY_FSEA_CHILD_WASTING.jpg",
    alt: "Childhood wasting time series: Seasonality and survey timing impact",
    title: "Childhood wasting time series: Seasonality and survey timing impact",
    subtitle:
      "Data for Children Collaborative in partnership with the Jameel Observatory for Food Security Early Action final report on how can we produce a time series of country level childhood wasting estimates, accounting for seasonality: exploring the impact of survey timing?",
    link: "/documents/jameel-observatory-for-food-security-early-action/SEASNUT_Final_Report_apr2024.pdf",
    openInNewTab: true,
    clickAction: "External link",
  },
];

// END "SELECT INITIATIVES"

export default async function jofseaProgrammePage({
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
  const jofseaId = "61ee828a15a31822dcbde700";
  const jwafsSlug = params.slug;
  const singleProgramme = programmesRawData.items.find(
    (item) => item.id === jofseaId
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
      <div className="pt-20 lg:pt-12 lg:mb-12">
        <div className="flex flex-col text-left">
          <div className="w-full flex pb-6 lg:pb-6">
            <img
              className="dark:hidden"
              src="/images/labs/jameel-observatory/jo-fsea/JAMEEL_OBSERVATORY_J-PAL_ORIGINAL_DARK.png"
              width="360"
            ></img>
            <img
              className="hidden dark:block"
              src="/images/labs/jameel-observatory/jo-fsea/JAMEEL_OBSERVATORY_J-PAL_ORIGINAL_LIGHT.png"
              width="360"
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
              href={
                "https://jameelobservatory.org/food-security-early-action/"
              }
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
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-0">
          {/* 1 */}
          <div className="flex items-center justify-start py-2 lg:py-2">
            <a
              href="https://www.ed.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logos/university-of-edinburgh_logo.png"
                alt="University of Edinburgh logo"
                width={100}
                height={100}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>

          {/* 2 */}
          <div className="flex items-center justify-start py-2 lg:py-2">
            <a
              href="https://www.ilri.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logos/ilri_logo.png"
                alt="ILRI logo"
                width={100}
                height={100}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>

          {/* 3 */}
          <div className="flex items-center justify-start py-2 lg:py-2">
            <a
              href="https://www.savethechildren.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logos/save-the-children_logo.svg"
                alt="Save the Children logo"
                width={100}
                height={100}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>

          {/* 4 */}
          <div className="flex items-center justify-start py-2 lg:py-2">
            <a
              href="https://www.un.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/logos/j-pal-dark_logo.png"
                alt="J-PAL logo"
                width={250}
                height={200}
                className="object-contain transition duration-300 hover:filter hover:grayscale"
              />
            </a>
          </div>
        </div>

        {/* END PARTNERS GRIP */}

        <div className="py-3"></div>
        <div className="w-full lg:w-2/3">
          <ResponsiveYouTubeEmbed embedId="NT9QllV96Pw?si=sgB5MCfziV1p5nwh" />
        </div>

        <div className="w-full py-6 lg:py-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <div className="pb-6">
          <h2 className="header-section">Features</h2>
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

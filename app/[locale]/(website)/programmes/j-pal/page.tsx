import MediaCard from "@/components/CJ-components/components-CJ/basic components/MediaCard";
import TableRowSingle from "@/components/CJ-components/components-CJ/custom components/TableRowSIngle";
import { CardHorizontalImageProps, RowData, StatProps } from "@/app/interfaces";
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
import Image from "next/image";
import ContentPhotos from "../../../../../components/CJ-components/components-CJ/test components/content-photos";
import PostAccordion from "@/components/mdx/accordion";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import CarousselForComponents from "@/components/CJ-components/components-CJ/basic components/CarousselForComponents";
import { Container } from "@/components/CJ-components/components-CJ/Container";
import ContainerFixedWidth from "@/components/CJ-components/components-CJ/layout/ContainerFixedWidth";
import ResponsiveYouTubeEmbed from "@/components/custom beta components/ResponsiveYouTubeEmbed";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";
import Stats from "@/components/CJ-components/components-CJ/basic components/Stats";

// START THE DATA FOR CARDS

const cardData = [
  {
    imageUrl: "/images/labs/j-pal/J-PAL_MENA.jpg",
    alt: "J-PAL MENA",
    title: "J-PAL MENA",
    subtitle:
      "J-PAL Middle East and North Africa (MENA), based at the American University in Cairo, leads J-PAL\’s work in the Middle East and North Africa region. J-PAL MENA conducts randomized evaluations, builds partnerships for evidence-informed policymaking, and helps partners scale up effective programs.",
    link: "https://www.povertyactionlab.org/middle-east-and-north-africa",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/j-pal/ESII.jpg",
    alt: "European Social Inclusion Initiatve",
    title: "European Social Inclusion Initiatve (ESII)",
    subtitle:
      "The European Social Inclusion Initiative (ESII) is a partnership between J-PAL Europe and the European Commission to support the design and evaluation of social policies in Europe. ESII aims to generate high-quality evidence on the effectiveness of social programs and policies, and to build the capacity of policymakers and practitioners to use evidence in decision-making.",
    link: "https://www.povertyactionlab.org/initiative/european-social-inclusion-initiative",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/j-pal/HAPIE.jpg",
    alt: "Hub of Adbvanced Policy Innovation for the Environment (HAPIE)",
    title: "Hub of Adbvanced Policy Innovation for the Environment (HAPIE)",
    subtitle:
      "HAPIE is J-PAL's Air and Water Lab in Egypt, launched by NIGSD, J-PAL MENA, and Community Jameel. It extends EIL's environmental work to improve air and water access by generating evidence for government policy. HAPIE enables researchers to collaborate with J-PAL MENA and government partners on evidence-based policies.",
    link: "https://www.povertyactionlab.org/page/hub-advanced-policy-innovation-environment-hapie",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/labs/j-pal/air-water-labs.jpg",
    alt: "Air and Water Labs",
    title: "J-PAL Air and Water Labs",
    subtitle:
      "Embedded with government policymakers in Egypt, India, Jordan and South Africa, Community Jameel, C40 and J-PAL operate a network of climate labs pioneering innovative, evidence-based strategies to tackling climate change.",
    link: "https://www.povertyactionlab.org/page/air-and-water-labs",
    openInNewTab: false,
    clickAction: "External link",
  },
];
// END THE DATA FOR CARDS

export default async function JpalPage({
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
  const jpalId = "61ee828a15a318c663bde6fb";
  const jwafsId = "61ee828a15a3182b72bde63d";
  const jwafsSlug = params.slug;
  const singleProgramme = programmesRawData.items.find(
    (item) => item.id === jpalId
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
        {/* <LanguageChanger /> */}
        {/* <TableRowSingle
          repository={dataForRow.repository}
          locale={params.locale}
        /> */}


  <div className="flex flex-col text-left">
  <div className="w-full flex pb-6 lg:pb-12">
  <img className="dark:hidden" src="/images/labs/j-pal/J-PAL_ORIGINAL_DARK.png" width="360"></img>
  <img className="hidden dark:block" src="/images/labs/j-pal/J-PAL_ORIGINAL_LIGHT.png" width="360"></img>
  </div>

  <div className="pb-6">
    <h1 className="header-article">{singleProgramme.fieldData.name}</h1>
  </div>

  <div className="pb-12 w-2/3">
  <p className="prose prose-xl leading-normal dark:text-white"/>
  The Abdul Latif Jameel Poverty Action Lab (J-PAL) is a global research centre aiming to reduce poverty through evidence-based policy. With over 290 affiliated professors and 8 offices worldwide, J-PAL conducts randomised impact evaluations to inform policies that have reached over 600 million people. In 2019, J-PAL’s co-founders Esther Duflo, Abhijit Banerjee, and affiliate Michael Kremer won the Nobel Prize for Economics.
</div>

</div>

        <div className="w-2/3">
        <ResponsiveYouTubeEmbed embedId="4FLeNSqLxdQ?si=IBMZ4AHpawegC0e_" />
        </div>
        
        <div className="w-full py-6 lg:py-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <div className="pb-6">
          <h2 className="header-section">Impact since 2003</h2>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="">
            <Stats title="600M" content="people reached" />
          </div>
          <div className="">
            <Stats title="1200" content="impact evaluations" />
          </div>
          <div className="">
            <Stats title="36" content="Government Partnerships" />
          </div>
          <div className="">
            <Stats title="48" content="policty insights" />
          </div>
          <div className="">
            <Stats title="290" content="affiliated professors" />
          </div>
          <div className="">
            <Stats title="7" content="scholar programmes" />
          </div>
          <div className="">
            <Stats title="180K" content="learners" /> 
          </div>
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
      <div className="w-full mt-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>

        <div className="">
          <PostAccordion title={"News"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {postProps.slice(0, 8).map((post) => (
                <PostCard key={post.name} content={post} />
              ))}
            </div>
          </PostAccordion>
        </div>
        <div className="">
          <PostAccordion title={"Media"}>
          <div className="grid grid-cols-1 gap-5">
      {newsProps.map((item) => (
        <NewsCard content={item} locale={params} key={item.id} />
      ))}
    </div>
          </PostAccordion>
        </div>
        {/* <div className="">
          <PostAccordion title={"Multimedia"}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
   

              {multimediaProps.map((item) => (
                <div key={item.alt} className="">
                  <MediaCard {...item} />
                </div>
              ))}
           
            </div>
          </PostAccordion>
        </div> */}

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

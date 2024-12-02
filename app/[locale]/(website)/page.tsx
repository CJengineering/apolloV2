import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { getData } from "@/functions/api/getData";

import eventMapper from "@/functions/transformers/eventMapper";

import newsMapper from "@/functions/transformers/newsMapper";

import postMapper from "@/functions/transformers/postMapper";

import NewsCard from "@/components/custom beta components/NewsCard";
import EventsCardHome from "@/components/CJ-components/components-CJ/test components/EventsCardHome";
import PressCardHome from "@/components/CJ-components/components-CJ/test components/PressCardHome";

import ContentColumn from "@/components/components V2/home/ContentColumn";

import SectionDivider from "@/components/components V2/generic/section-divider";
import SectionHeaderHome from "@/components/components V2/home/section-header-home";
import SectionHeroHome from "@/components/components V2/home/section-hero-home";
import SectionHomeCard from "@/components/components V2/home/section-home-card";
import { cardData } from "@/components/components V2/home/card-data";
import SectionDividerHiddenMobile from "@/components/components V2/generic/section-divider-hidden-mobile";
import { fetchAll } from "@/functions/api/fetchAll";
import { fetchFirstChunk } from "@/functions/api/fetchFirstChunk";
import { NewsCardFields, NewsCleanedFields, PostFieldsCleaned } from "@/app/interfaces";
import { mapToNewsCardFields } from "@/functions/api/mapToNewsCardFields";

// INTERFACE FOR THE DATA START

// INTERFACE FOR THE DATA END

// START THE DATA FOR CARDS

export const metadata = {
  title: "Community Jameel",
  description: "Advancing science and learning for communities to thrive",
};

export default async function SinglePost({
  params,
}: {
  params: {
    topic: string;
    slug: string;
    locale: string;
  };
}) {
  const ids = [
    "Programmes",
    "People",
    "Events",
 
    "Partners",
  
  ];

  const results = [];
  for (const id of ids) {
    const data = await getData(getIdByDisplayName(id));
    results.push(data);
  }
  
  const [
    programmeRaw,
    peopleRaw,
    eventRaw,
    partnersRaw,
   
  ] = results;

  const eventClean = eventRaw.items.map((item) =>
    eventMapper(item, partnersRaw.items, programmeRaw.items, peopleRaw.items)
  );

  

 
  const rowsD = await fetchFirstChunk("newsV3");

  const newsCleanInternal = rowsD.map(mapToNewsCardFields);
  const postsCleanInternal = await fetchFirstChunk("posts");
  const postsCleanUse: PostFieldsCleaned[] = postsCleanInternal.map(item => item.field_data);

  const fiveFirstPosts = postsCleanUse.slice(0, 5);
  const fiveFirstNews = newsCleanInternal.slice(0, 5);
  const fiveFirstEvents = eventClean.slice(0, 5);
  const contentColumns = [
    {
      title: "News",
      content: fiveFirstPosts,
      buttonLink: "/news",
      buttonText: "All News",
      CardComponent: PressCardHome,
    },
    {
      title: "Media",
      content: fiveFirstNews.slice(0, 5),
      buttonLink: "/press",
      buttonText: "All Press",
      CardComponent: NewsCard,
    },
    {
      title: "Events",
      content: fiveFirstEvents,
      buttonLink: "/events",
      buttonText: "All Events",
      CardComponent: EventsCardHome,
    },
  ];

  return (
    <>
      <SectionHeaderHome/>
      <SectionDivider/>
      <SectionHeroHome/>
      <SectionDividerHiddenMobile/>
      <SectionHomeCard cardData={cardData}/>
      <SectionDivider/>
      <div className="w-full grid lg:grid-cols-12 lg:gap-x-12 ">
        {contentColumns.map((column, index) => (
          <>
            <ContentColumn
              key={index}
              title={column.title}
              content={column.content}
              buttonLink={column.buttonLink}
              buttonText={column.buttonText}
              CardComponent={column.CardComponent}
              isLast={index === contentColumns.length - 1}
            />
          </>    
        ))}
      </div>
    </>
  );
}



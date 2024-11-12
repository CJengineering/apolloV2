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
    "Features",
    "Publications",
    "Events",
    "News",
    "Posts",
    "Multimedia",
    "Team",
    "Partners",
    "Sources",
    "Tags",
    "Categories",
  ];

  const dataFetches = ids.map((id) => getData(getIdByDisplayName(id)));
  const [
    programmeRaw,
    peopleRaw,
    featureRaw,
    publicationRaw,
    eventRaw,
    newsRaw,
    postsRaw,
    multimediaRaw,
    teamRaw,
    partnersRaw,
    sourcesRaw,
    tagRaw,
    categoriesRaw,
  ] = await Promise.all(dataFetches);

  const eventClean = eventRaw.items.map((item) =>
    eventMapper(item, partnersRaw.items, programmeRaw.items, peopleRaw.items)
  );

  const newsClean = newsRaw.items.map((item) =>
    newsMapper(
      item,

      programmeRaw.items,
      peopleRaw.items,
      sourcesRaw.items,
      tagRaw.items,
      eventRaw.items
    )
  );

  const postsClean = postsRaw.items.map((item) =>
    postMapper(
      item,
      categoriesRaw.items,
      eventRaw.items,
      programmeRaw.items,
      peopleRaw.items
    )
  );

  const fiveFirstPosts = postsClean.slice(0, 5);
  const fiveFirstNews = newsClean.slice(0, 5);
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
      <SectionHeaderHome />
      <SectionDivider />
      <SectionHeroHome />
      <SectionDividerHiddenMobile />
      <SectionHomeCard cardData={cardData} />
      <SectionDivider />
      {/* 3 column system */}
      <div className="w-full grid lg:grid-cols-12 lg:gap-x-12 ">
        {/* News Column */}
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

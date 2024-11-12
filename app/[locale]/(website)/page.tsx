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
import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";

export const metadata = {
  title: "Community Jameel",
  description: "Advancing science and learning for communities to thrive",
};

export default async function HomePage({
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
    eventRaw,
    newsRaw,
    postsRaw,
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
      <SectionDivider />
      <SectionHomeCard cardData={cardData} />
      <SectionDivider />
      <div className="w-full grid lg:grid-cols-12 lg:gap-x-12">
        {/* News Column */}
        <div className="col-span-12 lg:col-span-4">
          <h2 className="header-section pb-3">News</h2>
          <div className="w-full space-y-6">
            {fiveFirstPosts.map((value, index) => (
              <PressCardHome
                content={value}
                locale="en"
                key={index + "pressCard"}
              />
            ))}
          </div>
          <div className="pt-2 mt-auto">
            <ButtonCJ
              href={"/news"}
              text={"All News"}
              openInNewTab={false}
              styleType="secondary"
            />
          </div>
          <div className="lg:hidden w-full py-6 md:py-12">
            <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
          </div>
        </div>

        {/* Press Column */}
        <div className="col-span-12 lg:col-span-4">
          <h2 className="header-section pb-3">Media</h2>
          <div className="w-full space-y-6">
            {fiveFirstNews.slice(0, 5).map((value, index) => (
              <NewsCard
                content={value}
                locale="en"
                key={index + "newsCard" + Math.random()}
              />
            ))}
          </div>
          <div className="pt-2 mt-auto">
            <ButtonCJ
              href={"/press"}
              text={"All Press"}
              openInNewTab={false}
              styleType="secondary"
            />
          </div>
          <div className="lg:hidden w-full py-6 md:py-12">
            <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
          </div>
        </div>

        {/* Events Column */}
        <div className="col-span-12 lg:col-span-4">
          <h2 className="header-section pb-3">Events</h2>
          <div className="w-full space-y-6">
            {fiveFirstEvents.map((value, index) => (
              <EventsCardHome
                content={value}
                locale="en"
                key={index + "eventCard"}
              />
            ))}
          </div>
          <div className="pt-2 mt-auto">
            <ButtonCJ
              href={"/events"}
              text={"All Events"}
              openInNewTab={false}
              styleType="secondary"
            />
          </div>
        </div>
      </div>
    </>
  );
}

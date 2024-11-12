



import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { getData } from "@/functions/api/getData";
import programmeMapper from "@/functions/transformers/programmeMapper";
import eventMapper from "@/functions/transformers/eventMapper";
import peopleMapper from "@/functions/transformers/peopleMapper";
import featureMapper from "@/functions/transformers/featureMapper";
import newsMapper from "@/functions/transformers/newsMapper";
import multimediaMapper from "@/functions/transformers/multimediaMapper";
import teamProfileMapper from "@/functions/transformers/teamProfileMapper";
import publicationMapper from "@/functions/transformers/publicationMapper";
import postMapper from "@/functions/transformers/postMapper";
import agnosticMapper from "@/functions/transformers/agnosticMapper";

import NewsCard from "@/components/custom beta components/NewsCard";
import EventsCardHome from "@/components/CJ-components/components-CJ/test components/EventsCardHome";
import PressCardHome from "@/components/CJ-components/components-CJ/test components/PressCardHome";

import ContentColumn from "@/components/components V2/home/ContentColumn";
import React, { Suspense } from "react";
import SectionDivider from "@/components/components V2/generic/section-divider";
import SectionHeaderHome from "@/components/components V2/home/section-header-home";
import SectionHeroHome from "@/components/components V2/home/section-hero-home";
import SectionHomeCard from "@/components/components V2/home/section-home-card";


// INTERFACE FOR THE DATA START


// INTERFACE FOR THE DATA END

// START THE DATA FOR CARDS

const cardData = [
  {
    imageUrl: "/images/home/GRID_01.webp",
    alt: "Life-saving care for mothers and children evacuated from Gaza",
    title: "Life-saving care for mothers and children evacuated from Gaza",
    subtitle:
      "Egyptian paramedics are receiving specialist training from Save the Children, supported by Community Jameel, to help them deliver life-saving care to pregnant mothers, newborn babies and wounded children evacuated from Gaza.",
    link: "https://www.youtube.com/embed/Aq2pvQWUeWA?si=VhyQ0_B7lUi1TJFs",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
  {
    imageUrl: "/images/home/GRID_06.webp",
    alt: "Jameel House of World Traditional Arts in Scotland",
    title: "The Jameel House of World Traditional Arts in Scotland",
    subtitle:
      "The Jameel House in Scotland will be a global school for students of traditional arts worldwide. A new Jameel House Scholarship, set to launch in early 2025, will support Arab students of the traditional arts in Scotland, London, Cairo and Jeddah.",
    link: "/news/jameel-house-of-world-traditional-arts-in-scotland-announced-at-dumfries-house-to-extend-global-partnership-between-the-kings-foundation-and-community-jameel-2",
    openInNewTab: false,
    clickAction: "Internal link",
  },
  {
    imageUrl: "/images/home/GRID_09.webp",
    alt: "Nobel prize awarded to J-PAL affiliates Daron Acemoğlu and James Robinson",
    title:
      "Nobel prize awarded to J-PAL affiliates Daron Acemoğlu and James Robinson",
    subtitle:
      "Community Jameel congratulates Abdul Latif Jameel Poverty Action Lab (J-PAL) affiliates James Robinson and Daron Acemoğlu, and their collaborator Simon Johnson, on winning the 2024 Nobel prize in economics for their research illuminating the relationship between political systems and economic growth.",
    link: "/news/nobel-prize-awarded-to-j-pal-affiliates-daron-acemoglu-and-james-robinson-bringing-the-labs-tally-to-five",
    openInNewTab: false,
    clickAction: "Internal link",
  },
  {
    imageUrl: "/images/home/GRID_07x.webp",
    alt: "Pratham-Jameel Second Chance",
    title: "Pratham-Jameel Second Chance",
    subtitle:
      "Pratham-Jameel Second Chance supported 11,399 girls and women in India in its first year.",
    link: "/news/pratham-jameel-second-chance-programme-supports-11-399-girls-and-women-in-india-in-first-year",
    openInNewTab: false,
    clickAction: "Internal link",
  },
  {
    imageUrl: "/images/home/GRID_05.webp",
    alt: "Jameel 75",
    title: "Jameel 75",
    subtitle:
      "Celebrate the Jameel family's 75th anniversary of business and philanthropy.",
    link: "https://jameel75.com/en",
    openInNewTab: false,
    clickAction: "External link",
  },
  {
    imageUrl: "/images/home/GRID_04x.webp",
    alt: "Jameel Institute – Realtime Intelligent Support for Emergencies",
    title: "Jameel Institute – Realtime Intelligent Support for Emergencies",
    subtitle:
      "New global initiative to offer crucial insights to international agencies and transform humanitarian response in conflict zones.",
    link: "/news/new-global-initiative-to-offer-crucial-insights-to-international-agencies-and-transform-humanitarian-response-in-conflict-zones",
    openInNewTab: false,
    clickAction: "Internal link",
  },
  {
    imageUrl: "/images/home/GRID_02_NEW.webp",
    alt: "Jameel Index for Food Trade and Vulnerability",
    title: "Jameel Index for Food Trade and Vulnerability",
    subtitle:
      "Measuring key aspects of global food security that are dependent on food trade and the global change threats impacting food trade.",
    link: "https://jameelindex.mit.edu",
    openInNewTab: true,
    clickAction: "External link",
  },

  {
    imageUrl: "/images/home/GRID_03.webp",
    alt: "CLIMAVORE x Jameel at RCA announces 2024 Food Action Awards",
    title: "CLIMAVORE x Jameel at RCA announces 2024 Food Action Awards",
    subtitle:
      "CLIMAVORE x Jameel at the Royal College of Art (RCA) is offering two awards to advance projects that respond to food in the new seasons of the climate crisis, such as drought, polluted oceans or fertiliser runoff.",
    link: "/news/climavore-x-jameel-at-rca-announces-2024-food-action-awards",
    openInNewTab: false,
    clickAction: "Internal link",
  },

  {
    imageUrl: "/images/home/GRID_08.webp",
    alt: "Andrea Bocelli and Henna Mun sing 'Tace il labbro'",
    title: "Andrea Bocelli and Henna Mun sing 'Tace il labbro'",
    subtitle:
      "Henna Mun, the 2023 Andrea Bocelli Foundation-Community Jameel Scholar at the Royal College of Music, performs with Andrea Bocelli at Hyde Park, London.",
    link: "https://www.youtube.com/embed/VLiZ7XFAtBg?si=SKS4gVEp6F5REqvw",
    openInNewTab: false,
    clickAction: "Video embed code",
  },
];
// END THE DATA FOR CARDS

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

  const programmeClean = programmeRaw.items.map((item) =>
    programmeMapper(
      item,
      peopleRaw.items,
      partnersRaw.items,
      programmeRaw.items
    )
  );
  const eventClean = eventRaw.items.map((item) =>
    eventMapper(item, partnersRaw.items, programmeRaw.items, peopleRaw.items)
  );
  const peopleClean = peopleRaw.items.map((item) =>
    peopleMapper(
      item,
      partnersRaw.items,
      eventRaw.items,
      programmeRaw.items,
      peopleRaw.items,
      multimediaRaw.items
    )
  );
  const featureClean = featureRaw.items.map((item) =>
    featureMapper(
      item,

      programmeRaw.items
    )
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

  const cleanMultimedia = multimediaRaw.items.map((item) =>
    multimediaMapper(
      item,
      programmeRaw.items,
      eventRaw.items,
      sourcesRaw.items,
      peopleRaw.items
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
  const teamsClean = teamRaw.items.map((item) => teamProfileMapper(item));
  const publicationsClean = publicationRaw.items.map((item) =>
    publicationMapper(
      item,
      programmeRaw.items,
      peopleRaw.items,
      partnersRaw.items,
      sourcesRaw.items
    )
  );
  const postsAgnostic = postsClean.map((item) => agnosticMapper(item));
  const newsAgnostic = newsClean.map((item) => agnosticMapper(item));
  const eventsAgnostic = eventClean.map((item) => agnosticMapper(item));
  const fiveFirstPosts = postsClean.slice(0, 5);
  const fiveFirstNews = newsClean.slice(0, 5);
  const fiveFirstEvents = eventClean.slice(0, 5);

  return (
    <>
      <SectionHeaderHome />
      <SectionDivider />
      <SectionHeroHome />
      <SectionDivider />
      <SectionHomeCard cardData={cardData} />
      <SectionDivider />
      {/* 3 column system */}
      <div className="w-full grid lg:grid-cols-12 lg:gap-x-12 ">
        {/* News Column */}
        <ContentColumn
          title="News"
          content={fiveFirstPosts}
          buttonLink="/news"
          buttonText="All News"
          CardComponent={PressCardHome}
        />

        {/* Media Column */}
        <ContentColumn
          title="Media"
          content={fiveFirstNews.slice(0, 5)}
          buttonLink="/press"
          buttonText="All Press"
          CardComponent={NewsCard}
        />

        {/* Events Column */}
        <ContentColumn
          title="Events"
          content={fiveFirstEvents}
          buttonLink="/events"
          buttonText="All Events"
          CardComponent={EventsCardHome}
        />
      </div>
    </>
  );
}

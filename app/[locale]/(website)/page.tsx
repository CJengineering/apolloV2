import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx/mdx";
import TopicTitle from "@/components/ui/topic-title";
import Hamburger from "@/components/ui/hamburger";
import Feedback from "@/components/ui/feedback";
import PageNavigation from "@/components/ui/page-navigation";
import Footer from "@/components/ui/footer";
import SecondaryNav from "@/components/ui/secondary-nav";
import HeaderBeta from "@/components/custom beta components/headerBeta";
import HomeIcons from "@/components/custom beta components/homeIcons";
import HomePageBeta from "@/components/custom beta components/homePageBeta";
import TrandingTopics from "@/components/custom beta components/trandingTopics";
import EventSection from "@/components/custom beta components/eventSection";
import HeroBanter from "@/components/custom beta components/HeroBanter";
import image from "@/public/images/to_sort/mapCJ.webp";
import porgrammeImage from "@/public/images/home/blueCJMap.png";
import Image from "next/image";

import SectionBanter from "@/components/custom beta components/SectionBanter";
import NewsMain from "@/components/custom beta components/NewsMain";
import cancerImage from "@/public/images/imagesCJ/FACT Alliance_J-WAFS.png";
import FeatureCard from "@/components/custom beta components/FeatureCard";
import NewsSmall from "@/components/custom beta components/NewsSmall";
import MainContainer from "@/components/custom beta components/MainContainer";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import { NewsMainProps } from "../../interfaces";
import PostAccordion from "@/components/mdx/accordion";
import CanvasAnimation from "@/components/CJ-components/components-CJ/custom components/CanvasAnimation";
import HomeCard from "@/components/CJ-components/components-CJ/basic components/HomeCard";

import ButtonCJ from "@/components/CJ-components/components-CJ/basic components/ButtonCJ";
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
import {
  AgnosticComponentDateAndSourceContainer,
  AgnosticComponentDatePublished,
  AgnosticComponentProgramLabel,
  AgnosticComponentProvider,
  AgnosticComponentShortDescription,
  AgnosticComponentSource,
  AgnosticComponentTextColumn,
  AgnosticComponentTitle,
} from "@/components/CJ-components/components-CJ/test components/AgnosticComponent";
import { event } from "cypress/types/jquery";
import { Suspense } from "react";
import NewsCard from "@/components/custom beta components/NewsCard";
import EventsCardHome from "@/components/CJ-components/components-CJ/test components/EventsCardHome";
import PressCardHome from "@/components/CJ-components/components-CJ/test components/PressCardHome";
import Spinner from "@/components/CJ-components/components-CJ/custom components/Spinner";
import CarousselForComponents from "@/components/CJ-components/components-CJ/basic components/CarousselForComponents";

// INTERFACE FOR THE DATA START
const postsId = getIdByDisplayName("Posts");

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
    title: "Nobel prize awarded to J-PAL affiliates Daron Acemoğlu and James Robinson",
    subtitle:
      "Community Jameel congratulates Abdul Latif Jameel Poverty Action Lab (J-PAL) affiliates James Robinson and Daron Acemoğlu, and their collaborator Simon Johnson, on winning the 2024 Nobel prize in economics for their research illuminating the relationship between political systems and economic growth.",
    link: "/news/nobel-prize-awarded-to-j-pal-affiliates-daron-acemoglu-and-james-robinson-bringing-the-labs-tally-to-five",
    openInNewTab: false,
    clickAction: "Internal link",
  },
  {
    imageUrl: "/images/home/GRID_02.webp",
    alt: "Bill Gates and Fady Jameel host food security meeting at COP28",
    title: "Bill Gates and Fady Jameel host food security meeting at COP28",
    subtitle:
      "Scientists, farmers and chefs convene for the 'Farming for our future' breakfast event.",
    link: "/news/bill-gates-and-fady-jameel-discuss-food-and-farming-with-scientists-farmers-and-chefs-at-the-farming-for-our-future-breakfast-event-on-the-sidelines-of-cop28-in-dubai",
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
    imageUrl: "/images/home/GRID_04.webp",
    alt: "Climate Labs with C40 and J-PAL",
    title: "Climate Labs with C40 and J-PAL",
    subtitle:
      "Embedded with government policymakers in Egypt, India, Jordan and South Africa, Community Jameel, C40 and J-PAL operate a network of climate labs pioneering innovative, evidence-based strategies to tackling climate change.",
    link: "programmes/jameel-c40-urban-planning-climate-labs",
    openInNewTab: false,
    clickAction: "Internal link",
  },
  {
    imageUrl: "/images/home/GRID_07.webp",
    alt: "Jameel Arts & Health Lab",
    title: "Jameel Arts & Health Lab",
    subtitle:
      "The lab aims to radically improve global health through arts-related research and advocacy to drive policy.",
    link: "/programmes/jameel-arts-and-health-lab",
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

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) return;

  const { title, summary: description } = post;

  return {
    title,
    description,
  };
}

export default async function SinglePost({
  params,
}: {
  params: {
    topic: string;
    slug: string;
    locale: string;
  };
}) {
  const heroProps2 = {
    backgroundImageUrl: porgrammeImage.src,
    overlayColor: "",
    subTitle: "",
    title: "",
  };
  const porgrammeId = getIdByDisplayName("Programmes");
  const peopleId = getIdByDisplayName("People");
  const featureId = getIdByDisplayName("Features");
  const publicationId = getIdByDisplayName("Publications");
  const eventId = getIdByDisplayName("Events");
  const newsId = getIdByDisplayName("News");
  const postsId = getIdByDisplayName("Posts");
  const multimediaId = getIdByDisplayName("Multimedia");
  const teamId = getIdByDisplayName("Team");
  const partnersId = getIdByDisplayName("Partners");
  const sourceId = getIdByDisplayName("Sources");
  const tagsId = getIdByDisplayName("Tags");
  const categroriesId = getIdByDisplayName("Categories");

  const programmeRaw = await getData(porgrammeId);
  
  const peopleRaw = await getData(peopleId);
  const featureRaw = await getData(featureId);
  const publicationRaw = await getData(publicationId);
  const eventRaw = await getData(eventId);
  const newsRaw = await getData(newsId);
  const postsRaw = await getData(postsId);
  const multimediaRaw = await getData(multimediaId);
  const teamRaw = await getData(teamId);
  const partnersRaw = await getData(partnersId);
  const sourcesRaw = await getData(sourceId);
  const tagRaw = await getData(tagsId);
  const categoriesRaw = await getData(categroriesId);

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
  const fiveFirstPosts =postsClean.slice(0, 5);
  const fiveFirstNews = newsClean.slice(0, 5);
  const fiveFirstEvents = eventClean.slice(0, 5);
  return (
    <>


      <div className="pt-20 sm:pt-10 flex flex-col">
        <div className="w-full lg:w-2/3">
          <h1 className="header-page leading-none">
            Advancing science and learning for communities to thrive
          </h1>
          <p className="pt-6 sans-serif text-lg sm:text-xl font-normal md:text-2x text-left leading-snug">
            An independent, global organisation, Community Jameel launched in
            2003 to continue the tradition of philanthropy and community service
            established by the Jameel family of Saudi Arabia in 1945.
          </p>
          <div className="pt-4 lg:pt-8">
            <ButtonCJ
              href={"/community"}
              text={"explore community"}
              openInNewTab={false}
              styleType="primary"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-full py-6 lg:py-12">
          <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="hidden sm:block relative w-full">
          <Image
            className="h-full w-full object-cover"
            src={porgrammeImage.src}
            alt=""
            width={1980}
            height={1080}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="hidden sm:block w-full py-6 md:py-12">
          <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
        </div>
      </div>
      {/* <div className="w-full">
      <CarousselForComponents>   
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
   </CarousselForComponents>
   </div>
       */}
      <div className="flex justify-center">
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
      </div>

      <div className="flex justify-center">
        <div className="w-full py-6 lg:py-12">
          <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
        </div>
      </div>

      {/* 3 column system */}

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
              <NewsCard content={value} locale="en" key={index + "newsCard"+ Math.random()} />
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

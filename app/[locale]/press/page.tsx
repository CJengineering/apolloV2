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
import image from "@/public/images/mapCJ.webp";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import NewsMain from "@/components/custom beta components/NewsMain";
import cancerImage from "@/public/images/imagesCJ/FACT Alliance_J-WAFS.png";
import FeatureCard from "@/components/custom beta components/FeatureCard";
import NewsSmall from "@/components/custom beta components/NewsSmall";
import CardHorizontal from "@/components/CJ-components/components-CJ/basic components/CardHorizontal";
import Link from "next/link";
import Search from "@/components/ui/search";
import { getData } from "@/functions/api/getData";
import mapItemToNewsMainProps from "@/functions/transformers/newsTransformer";
import NewsCard from "@/components/custom beta components/NewsCard";
import getCollectionsAll from "@/functions/api/getCollectionsAll";
import getCorrespondingValue from "@/functions/transformers/getCollectionName";
import { Suspense } from "react";
import Loading from "@/components/custom beta components/Loading";
import MainContainer from "@/components/custom beta components/MainContainer";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import { NewsMainProps } from "@/app/interfaces";
import newsMapper from "@/functions/transformers/newsMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import UnifiedComponent from "@/components/CJ-components/components-CJ/custom components/UnifiedComponent";

import UseClient from "@/components/CJ-components/components-CJ/test components/UseClient";
import {
  CompoundNewsCard,
  CompoundNewsCardDateLabel,
  CompoundNewsCardDivider,
  CompoundNewsCardImageLink,
  CompoundNewsCardProgrammeLabel,
  CompoundNewsCardSourceDateContainer,
  CompoundNewsCardSourceLabel,
  CompoundNewsCardTitleLink,
} from "@/components/CJ-components/components-CJ/test components/CompoundNewsCard";
import {
  CompoundNewsSmall,
  CompoundNewsSmallDateLabel,
  CompoundNewsSmallImageLink,
  CompoundNewsSmallMetaContainer,
  CompoundNewsSmallSourceLabel,
  CompoundNewsSmallTitleLink,
} from "@/components/CJ-components/components-CJ/test components/CompoundNewsSmall";
import FilterComponent from "@/components/CJ-components/components-CJ/test components/FilterComponent";
import {
  NewsCardV2DatePublished,
  NewsCardV2ImageColumn,
  NewsCardV2ProgrammeLabel,
  NewsCardV2Provider,
  NewsCardV2TextColumn,
  NewsCardV2Title,
} from "@/components/CJ-components/components-CJ/test components/NewsCardV2";
import { NewsProvider } from "./news-contect";
import FiltredNews from "@/components/CJ-components/components-CJ/FiltredNews";
import { NewsDisplay } from "./news-display";

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

export default async function NewsContent({
  params,
}: {
  params: {
    topic: string;
    slug: string;
    locale: string;
  };
}) {
  const post = {
    title: "Community  Jameel",
    summary:
      "A deep dive into how async/await works in JavaScript, with examples and best practices.",
    topic: {
      name: "Home",
      slug: "javascript",
    },
    prev: {
      name: "Promises in JavaScript",
      slug: "promises-in-javascript",
    },
    next: {
      name: "JavaScript Event Loop",
      slug: "javascript-event-loop",
    },
  };
  {
    /** DATA FETCHING  */
  }

  //Get Names

  const progremmeId = getIdByDisplayName("Programmes");
  const peopleId = getIdByDisplayName("People");
  const sourcesId = getIdByDisplayName("Sources");
  const tagsId = getIdByDisplayName("Tags");
  const eventsId = getIdByDisplayName("Events");
  const newsId = getIdByDisplayName("News");

  // Data fetching
  const dataWeb = await getData(newsId);
  const sourcesAll = await getData(sourcesId);
  const peopleAll = await getData(peopleId);
  const programmeAll = await getData(progremmeId);
  const eventAll = await getData(eventsId);
  const tagsAll = await getData(tagsId);

  let rawNewsArray = dataWeb.items;
  rawNewsArray = rawNewsArray.filter((item) => item.isDraft === false);

  const newsArrayCleaned = rawNewsArray.map((item) =>
    newsMapper(
      item,
      programmeAll.items,
      peopleAll.items,
      sourcesAll.items,
      tagsAll.items,
      eventAll.items
    )
  );
  const newsArray = rawNewsArray.map((item) =>
    mapItemToNewsMainProps(item, sourcesAll.items, programmeAll.items)
  );

  const heroProps = {
    backgroundImageUrl: image.src,
    overlayColor: "bg-gray-400/80",
    subTitle: "media",
    title: "News",
  };

  if (!post) notFound();
  interface RelatedCollection {
    id: string;
    name: string;
  }
  const programmesForFilter: RelatedCollection[] = programmeAll.items.map(
    (item) => ({
      id: item.id || "",
      name: item.fieldData.shortname || "",
    })
  );
  const sourcesForFilter: RelatedCollection[] = sourcesAll.items.map(
    (item) => ({
      id: item.id || "",
      name: item.fieldData.name || "",
    })
  );



  return (
    <MainContainer isSideBar={false}>
      <ContentContainer width="full" desktopWidth="full">
        <h1 className="costa font-bold text-5xl md:text-7xl py-12 md:py-24 text-center">
          Press
        </h1>
        {/* <HeroBanter content={heroProps} /> */}
        <SectionBanter title={""}>
          <NewsProvider
            programmes={programmesForFilter}
            sources={sourcesForFilter}
            newsArrayCleaned={newsArrayCleaned}
          >
            <FilterComponent></FilterComponent>
            <NewsDisplay locale={params.locale} />
          </NewsProvider>
        </SectionBanter>
      </ContentContainer>
    </MainContainer>
  );
}

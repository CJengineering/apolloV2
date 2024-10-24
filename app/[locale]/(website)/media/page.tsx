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
import ContainerFixedWidth from "@/components/CJ-components/components-CJ/layout/ContainerFixedWidth";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Media",
  description:
    "Community Jameel supports a community of scientists, humanitarians, technologists and creatives. Working together through centres, funds, scholarships and projects, we are advancing science to help communities thrive in a rapidly changing world.",
  ogType: "website",
  ogImage: '/images/metadata/MEDIA.webp',
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community"],

})


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
    <>
      <div>
        <h1 className="header-page pb-8">
          Media
        </h1>
      </div>
      {/* <HeroBanter content={heroProps} /> */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6">
          <div className="pb-6 col-span-12">
            {newsArrayCleaned.slice(0, 1).map((news, index) => (
              <CompoundNewsCard key={index} locale={params.locale} content={news}>
                <CompoundNewsCardImageLink />
                <div className="mt-3 md:align-middle">
                  <div>
                    <CompoundNewsCardProgrammeLabel />
                  </div>
                  <CompoundNewsCardTitleLink />
                  <div className="flex pt-1">
                    <div>
                      <CompoundNewsCardDateLabel />
                    </div>
                    <div className="px-3 mono text-sm">•</div>
                    <div>
                      <CompoundNewsCardSourceLabel />
                    </div>
                  </div>
                </div>
              </CompoundNewsCard>
            ))}
          </div>
          </div> */}
      {/* <div className="lg:col-span-6 lg:pl-6">
            <Suspense fallback={<Loading />}>
              {newsArrayCleaned.slice(2, 7).map((news, index) => (
                <CompoundNewsSmall key={index} content={news} locale={params.locale}>
                  <div className="order-2 mt-2 w-full px-2 sm:mt-0 sm:max-w-sm sm:pl-0 sm:pr-5 lg:order-2 lg:mt-4 xl:ml-5 xl:mt-0 xl:flex-1">
                    <CompoundNewsSmallTitleLink />
                    <CompoundNewsSmallMetaContainer>
                      <CompoundNewsSmallDateLabel />
                      <span className="flex items-center justify-center px-1 mono text-xs">•</span>
                      <CompoundNewsSmallSourceLabel />
                    </CompoundNewsSmallMetaContainer>
                  </div>
                </CompoundNewsSmall>
              ))}
            </Suspense>
          </div> */}

      {/* <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6">
          <div className="pb-6 lg:col-span-6"></div>
        </div> */}

      <NewsProvider
        programmes={programmesForFilter}
        sources={sourcesForFilter}
        newsArrayCleaned={newsArrayCleaned}
      >
        <ContainerFixedWidth>
          <FilterComponent></FilterComponent>
          <NewsDisplay locale={params.locale} />
        </ContainerFixedWidth>
      </NewsProvider>
    </>
  );
}

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

  return (
    <MainContainer isSideBar={false}>
      <ContentContainer>
        <h1 className="costa font-bold text-5xl md:text-7xl py-12 md:py-24 text-center">
          News
        </h1>
        {/* <HeroBanter content={heroProps} /> */}
        <SectionBanter title={""}>
          {/* <div className=" relative mb-4">
            <Search></Search>
          </div> */}
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6">
        
            <div className="pb-6 lg:col-span-6">
              {newsArrayCleaned.slice(0, 1).map((news, index) => (
                <CompoundNewsCard
                  key={index}
                  locale={params.locale}
                  content={news}
                >
                  <CompoundNewsCardImageLink />
                  <div className="mt-6 md:align-middle">
                    <CompoundNewsCardProgrammeLabel />
                    <CompoundNewsCardTitleLink />
                  </div>
                </CompoundNewsCard>
              ))}
            </div>
            <div className="lg:col-span-6 lg:pl-6">
            <Suspense fallback={<Loading />}>
                {newsArrayCleaned.slice(2, 4).map((news, index) => (
                  <CompoundNewsSmall
                    key={index}
                    content={news}
                    locale={params.locale}
                  >
                    <CompoundNewsSmallImageLink />
                    <div className="order-2 mt-2 w-full px-2 sm:mt-0 sm:max-w-sm sm:pl-0 sm:pr-5 lg:order-2 lg:mt-4 xl:ml-5 xl:mt-0 xl:flex-1">
                      <CompoundNewsSmallSourceLabel />
                      <CompoundNewsSmallTitleLink />
                      <CompoundNewsSmallMetaContainer>
                        <CompoundNewsSmallDateLabel />
                      </CompoundNewsSmallMetaContainer>
                    </div>
                  </CompoundNewsSmall>
                ))}
              </Suspense>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-6">
            <div className="pb-6 lg:col-span-6"></div>
          </div>
        </SectionBanter>
      </ContentContainer>
    </MainContainer>
  );
}

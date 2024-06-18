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
import NewsMain, {
  NewsMainProps,
} from "@/components/custom beta components/NewsMain";
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

const articleData: NewsMainProps = {
  tag: "Technology",
  title: "Apple to Turn IPhones Into Payment Terminals in Fintech Push",
  description:
    "Apple Inc is introducing a new feature that will allow businesses to accept credit card and digital payments with just a tap on their iPhones, bypassing hardware systems such as Block Inc's Square terminals.",
  authorName: "Mark Jack",
  date: "2021-12-16",
  readTime: "6 min",
  postLink: "post.html",
  categoryLink: "category.html",
  authorLink: "author.html",
  postImage: cancerImage.src,
  authorImage:
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
};

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

  const dataWeb = await getData("61ee828a15a3185c99bde543");
  const sourcesAll = await getData("61ee828a15a3183f55bde545");
  const peopleAll = await getData("62271a6df4ceb0027d91e6c4");

  const programmeAll = await getData("61ee828a15a3183d2abde540");
  let rawNewsArray = dataWeb.items;
  rawNewsArray = rawNewsArray.filter((item) => item.isDraft === false);
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
        <HeroBanter content={heroProps} />
        <SectionBanter title={""}>
          <div className=" relative mb-4">
            <Search></Search>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <Suspense fallback={<Loading />}>
              {newsArray.map((news, index) => (
                <NewsCard key={index} content={news} locale={params} />
              ))}
            </Suspense>
          </div>
        </SectionBanter>
      </ContentContainer>
    </MainContainer>
  );
}

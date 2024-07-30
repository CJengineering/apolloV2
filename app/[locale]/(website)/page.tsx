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
import porgrammeImage from "@/public/images/blueCJMap.png";
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

import {
  TeamMember,
  EventFieldDataCleaned,
  ProgrammeCleanedFields,
  PostFieldsCleaned,
  PeopleCleanedFields,
  MultimediaCleanedFields,
  FeatureCleanedFields,
  NewsCleanedFields,
  PublicationsCleanedFields,
} from "@/app/interfaces";

import agnosticMapper from "@/functions/transformers/agnosticMapper";

import {
  AgnosticComponentCollectionName,
  AgnosticComponentDateAndSourceContainer,
  AgnosticComponentDatePublished,
  AgnosticComponentImageColumn,
  AgnosticComponentProgramLabel,
  AgnosticComponentProvider,
  AgnosticComponentShortDescription,
  AgnosticComponentSource,
  AgnosticComponentTextColumn,
  AgnosticComponentTitle,
} from "./AgnosticComponent";

// INTERFACE FOR THE DATA START



// INTERFACE FOR THE DATA END

// START THE DATA FOR CARDS
const cardData = [
  {
    imageUrl: '/images/EMPTY_QUARTER_BG.jpg',
    alt: 'Sample Image 1',
    title: 'Life-saving care for mothers and children evacuated from Gaza',
    subtitle: 'Egyptian paramedics are receiving specialist training from Save the Children, supported by Community Jameel, to help them deliver life-saving care to pregnant mothers, newborn babies and wounded children evacuated from Gaza.',
    link: 'https://www.communityjameel.org',
    openInNewTab: false,
  },
  {
    imageUrl: '/images/EMPTY_QUARTER_BG.jpg',
    alt: 'Sample Image 2',
    title: 'Bill Gates and Fady Jameel host food security meeting at COP28',
    subtitle: 'Scientists, farmers and chefs convene for the \'Farming for our future\' breakfast event.',
    link: 'https://www.communityjameel.org/post/bill-gates-and-fady-jameel-discuss-food-and-farming-with-scientists-farmers-and-chefs-at-the-farming-for-our-future-breakfast-event-on-the-sidelines-of-cop28-in-dubai',
    openInNewTab: false,
  },
  {
    imageUrl: '/images/EMPTY_QUARTER_BG.jpg',
    alt: 'Sample Image 3',
    title: 'CLIMAVORE x Jameel at RCA announces 2024 Food Action Awards',
    subtitle: 'CLIMAVORE x Jameel at the Royal College of Art (RCA) is offering two awards to advance projects that respond to food in the new seasons of the climate crisis, such as drought, polluted oceans or fertiliser runoff.',
    link: 'https://www.communityjameel.org/post/climavore-x-jameel-at-rca-announces-2024-food-action-awards',
    openInNewTab: false,
  },
  {
    imageUrl: '/images/EMPTY_QUARTER_BG.jpg',
    alt: 'Sample Image 4',
    title: 'Climate Labs with C40 and J-PAL',
    subtitle: 'Embedded with government policymakers in Egypt, India, Jordan and South Africa, Community Jameel, C40 and J-PAL operate a network of climate labs pioneering innovative, evidence-based strategies to tackling climate change.',
    link: 'https://www.communityjameel.org/post/climavore-x-jameel-at-rca-announces-2024-food-action-awards',
    openInNewTab: false,
  },
  {
    imageUrl: '/images/EMPTY_QUARTER_BG.jpg',
    alt: 'Sample Image 5',
    title: 'Jameel 75',
    subtitle: 'Celebrate the Jameel family\'s\ 75th anniversary of business and philanthropy.',
    link: 'https://www.communityjameel.org/post/climavore-x-jameel-at-rca-announces-2024-food-action-awards',
    openInNewTab: false,
  },
  {
    imageUrl: '/images/EMPTY_QUARTER_BG.jpg',
    alt: 'Sample Image 6',
    title: 'Community Jameel x afikra COP28 Conversation Series',
    subtitle: 'As part of Community Jameel\'s\ participation at COP28 in Dubai it co-produced a six-part podcast series with afikra on climate change, arts & health, early warning systems, oceans and the economics of cuisine.',
    link: 'https://www.communityjameel.org/post/climavore-x-jameel-at-rca-announces-2024-food-action-awards',
    openInNewTab: false,
  },
  {
    imageUrl: '/images/EMPTY_QUARTER_BG.jpg',
    alt: 'Sample Image 7',
    title: 'Jameel Arts & Health Lab',
    subtitle: 'The lab aims to radically improve global health through arts-related research and advocacy to drive policy.',
    link: 'https://www.communityjameel.org/post/climavore-x-jameel-at-rca-announces-2024-food-action-awards',
    openInNewTab: false,
  },
  {
    imageUrl: '/images/EMPTY_QUARTER_BG.jpg',
    alt: 'Andrea Bocelli and Laura Mekhail sing \'Canto della terra\' in AlUla',
    title: 'Andrea Bocelli and Laura Mekhail sing \'Canto della terra\' in AlUla',
    subtitle: 'Laura Mekhail, the 2021 Andrea Bocelli Foundation-Community Jameel Scholar at the Royal College of Music, performs with Andrea Bocelli at Maraya theatre in AlUla, Saudi Arabia',
    link: 'https://www.communityjameel.org/post/climavore-x-jameel-at-rca-announces-2024-food-action-awards',
    openInNewTab: false,
  },
  {
    imageUrl: '/images/EMPTY_QUARTER_BG.jpg',
    alt: 'Jameel Management Centre Building in Cairo',
    title: 'A Cairo Cornerstone',
    subtitle: 'The Jameel Centre: Downtown Cairo\'s Mamluk-inspired 1980s architectural masterpiece. By Ebrahim Bahaa-Eldin & Sabrina Gilby',
    link: 'https://www.communityjameel.org/post/climavore-x-jameel-at-rca-announces-2024-food-action-awards',
    openInNewTab: false,
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


  return (
    <ContentContainer width="full" desktopWidth="large">
      <div className="pt-12 sm:pt-36 flex flex-col justify-center">
        <div className="w-full md:w-full lg:w-3/4 xl:w-4/6 mx-auto">
          <h1 className="costa font-bold text-left text-4xl md:text-6xl lg:text-7xl">
            Advancing science and learning for communities to thrive
          </h1>
          <p className="pt-6 serif text-lg sm:text-xl font-normal md:text-2x text-left">
            An independent, global organisation, Community Jameel launched in 2003 to continue the tradition of philanthropy and community service established by the Jameel family of Saudi Arabia in 1945.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
  <div className="py-6 w-full lg:w-5/6 md:py-12">
    <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
  </div>
</div>
<div className="flex justify-center">
      <div className="relative w-full md:w-5/6">
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
  <div className="py-6 w-full lg:w-5/6 md:py-12">
    <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
  </div>
</div>
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
            />
          ))}
        </div>
      </div>
      
      <div className="flex justify-center">
  <div className="w-full sm:w-5/6 py-6 md:py-12">
    <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
  </div>
</div>

      <div className="flex justify-center">
      <div className="w-full sm:w-5/6 grid grid-col-1 md:grid-cols-3 md:col-span-12">
        <div className="grid md:row-span-3">
          <h2 className="serif font-semibold text-3xl">News</h2>
          {/* {transformedEventData.map((value, index) => (
            <AgnosticComponentProvider key={index} content={value}>
              <AgnosticComponentTextColumn>
                <AgnosticComponentProgramLabel />
                <AgnosticComponentTitle />
                <AgnosticComponentShortDescription />
                <AgnosticComponentDateAndSourceContainer>
                  <AgnosticComponentDatePublished />
                  <span className="mono text-xs font-normal uppercase">•</span>
                  <AgnosticComponentSource />
                </AgnosticComponentDateAndSourceContainer>
              </AgnosticComponentTextColumn>
            </AgnosticComponentProvider>
          ))} */}
        </div>
        <div className="grid md:row-span-3">
          <h2 className="serif font-semibold text-3xl">Press</h2>
        </div>
        <div className="grid md:row-span-3">
          <h2 className="serif font-semibold text-3xl">Events</h2>
        </div>
      </div>
      </div>
    </ContentContainer>
  );
}

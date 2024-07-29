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
    alt: 'Sample Image 3',
    title: 'CLIMAVORE x Jameel at RCA announces 2024 Food Action Awards',
    subtitle: 'CLIMAVORE x Jameel at the Royal College of Art (RCA) is offering two awards to advance projects that respond to food in the new seasons of the climate crisis, such as drought, polluted oceans or fertiliser runoff.',
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
        <div className="pt-36 flex flex-col justify-center">
          <h1 className="costa lg:w-5/6 font-bold text-left text-4xl md:text-6xl lg:text-7xl">
          Advancing science and learning for communities to thrive
          </h1>
          <div className="pt-6">
            <p className="serif lg:w-5/6 text-xl font-normal md:text-2x text-left">An independent, global organisation, Community Jameel launched in 2003 to continue the tradition of philanthropy and community service established by the Jameel family of Saudi Arabia in 1945.</p>
            </div>
        </div>
        <div className="py-6 md:py-12">
            <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
          </div>
          <div className="relative w-full ">
            <Image
              className="h-full w-full object-cover"
              src={porgrammeImage.src}
              alt=""
              width={1980}
              height={1080}
            />
          </div>
          <div className="py-6 md:py-12">
            <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
          </div>
         
        <div className="flex justify-center">
        <div className="md:w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <div className="py-6 md:py-12">
            <div className="w-full h-px bg-slate-200 dark:bg-slate-700"></div>
          </div>

          <div className="grid grid-col-1  md:grid-cols-3 md:col-span-12">
            <div className="grid md:row-span-3">
              <h2 className="serif font-semibold text-3xl">News</h2>
            </div>
            <div className="grid md:row-span-3">
              <h2 className="serif font-semibold text-3xl">Press</h2>
            </div>
            <div className="grid md:row-span-3">
              <h2 className="serif font-semibold text-3xl">Events</h2>
            </div>
          </div>
      </ContentContainer>
  );
}

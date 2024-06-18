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
import NewsMain, {
  NewsMainProps,
} from "@/components/custom beta components/NewsMain";
import cancerImage from "@/public/images/imagesCJ/FACT Alliance_J-WAFS.png";
import FeatureCard from "@/components/custom beta components/FeatureCard";
import NewsSmall from "@/components/custom beta components/NewsSmall";
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
const articles = [
  {
    id: "1",
    title: "Prepare to Shell Out for Warehouse Space -- If You Can Find It",
    description:
      "The demand for warehouse space is skyrocketing as e-commerce continues to grow.",
    category: "Economic outlook",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Warehouse+Space",
    author: {
      name: "Taylor Adams",
      imageUrl: "https://via.placeholder.com/150.png?text=Taylor+Adams",
      date: "2023-05-29",
      readTime: "5 min read",
    },
  },
  {
    id: "2",
    title: "Tech Giants are Investing in Renewable Energy",
    description:
      "Tech companies are leading the way in renewable energy investments to combat climate change.",
    category: "Technology",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Renewable+Energy",
    author: {
      name: "Jordan Lee",
      imageUrl: "https://via.placeholder.com/150.png?text=Jordan+Lee",
      date: "2023-05-28",
      readTime: "7 min read",
    },
  },
  {
    id: "3",
    title: "The Future of Remote Work",
    description:
      "Remote work is here to stay. Learn how companies are adapting to this new trend.",
    category: "Workplace",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Remote+Work",
    author: {
      name: "Alex Morgan",
      imageUrl: "https://via.placeholder.com/150.png?text=Alex+Morgan",
      date: "2023-05-27",
      readTime: "6 min read",
    },
  },
  {
    id: "4",
    title: "Advancements in AI Technology",
    description:
      "AI technology is evolving rapidly, impacting various industries around the world.",
    category: "Artificial Intelligence",
    imageUrl: "https://via.placeholder.com/600x400.png?text=AI+Technology",
    author: {
      name: "Sam Taylor",
      imageUrl: "https://via.placeholder.com/150.png?text=Sam+Taylor",
      date: "2023-05-26",
      readTime: "8 min read",
    },
  },
  {
    id: "5",
    title: "How to Improve Cybersecurity in Your Organization",
    description:
      "Cybersecurity is more important than ever. Here are some tips to keep your organization safe.",
    category: "Cybersecurity",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Cybersecurity",
    author: {
      name: "Morgan Brown",
      imageUrl: "https://via.placeholder.com/150.png?text=Morgan+Brown",
      date: "2023-05-25",
      readTime: "5 min read",
    },
  },
];
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
  const heroProps = {
    backgroundImageUrl: image.src,
    overlayColor: "bg-gray-400/80",
    subTitle: "Community Jameel",
    title: "Advancing science and learning for communities to thrive",
  };
  const heroPropsArabic = {
    backgroundImageUrl: image.src,
    overlayColor: "bg-gray-400/80",
    subTitle: "Community Jameel",
    title: "AImagine its in arabic",
  };
  const heroProps2 = {
    backgroundImageUrl: porgrammeImage.src,
    overlayColor: "",
    subTitle: "",
    title: "",
  };
  if (!post) notFound();

  return (
    <MainContainer isSideBar={false}>
      <ContentContainer>
        <HeroBanter
          content={params.locale === "en" ? heroProps : heroPropsArabic}
        />
        <HomeIcons />

        <SectionBanter title={"Features"}>
          <div className="grid  gap-6 grid-cols-1 md:grid-cols-3 ">
            <FeatureCard content={articleData} />
            <FeatureCard content={articleData} />
            <FeatureCard content={articleData} />
            <FeatureCard content={articleData} />
            <FeatureCard content={articleData} />
            <FeatureCard content={articleData} />
            <FeatureCard content={articleData} />
            <FeatureCard content={articleData} />
            <FeatureCard content={articleData} />
          </div>
        </SectionBanter>
        <SectionBanter title="Programmes">
          <div className="relative w-full ">
            <Image
              className="h-full w-full object-cover"
              src={porgrammeImage.src}
              alt=""
              width={1980}
              height={1080}
            />
          </div>
        </SectionBanter>
        <SectionBanter title={"News"}>
          <div className="mx-auto max-w-2xl lg:flex lg:max-w-screen-2xl lg:items-start lg:space-x-8">
            {/* Sticky Main Article Container */}

            <NewsMain content={articleData} />

            {/* Scrollable Recent News Container */}
            <div className="mt-12 sm:mt-16 lg:ml-12 lg:mt-0 lg:w-1/2 xl:ml-16 ">
              <h3 className="relative border-b border-gray-300/70 pb-2.5 text-2xl font-medium text-gray-900 before:absolute before:-bottom-px before:left-0 before:h-px before:w-24 before:bg-red-600 before:content-['']">
                Recent news
              </h3>

              {/* Articles Container */}
              <div className="grid lg:gap-x-5 xl:grid-cols-1">
                <NewsSmall content={articleData} />
                <NewsSmall content={articleData} />
                <NewsSmall content={articleData} />
                <NewsSmall content={articleData} />
              </div>
            </div>
          </div>
        </SectionBanter>
        <TrandingTopics />
        <SectionBanter title={"Events"}>
          <EventSection />
        </SectionBanter>
      </ContentContainer>
    </MainContainer>
  );
}

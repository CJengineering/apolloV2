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

export default async function NewsContent({
  params,
}: {
  params: {
    topic: string;
    slug: string;
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
  {/** DATA FETCHING  */}
 
  const dataWeb = await getData('61ee828a15a3185c99bde543');
  const sourcesAll = await getData('61ee828a15a3183f55bde545');
  const peopleAll = await getData('62271a6df4ceb0027d91e6c4');
  
  const programmeAll = await getData('61ee828a15a3183d2abde540');
  let rawNewsArray = dataWeb.items;
  rawNewsArray = rawNewsArray.filter((item) => item.isDraft === false);
  const newsArray = rawNewsArray.map(item => mapItemToNewsMainProps(item, sourcesAll.items,programmeAll.items));



  const heroProps = {
    backgroundImageUrl: image.src,
    overlayColor: "bg-gray-400/80",
    subTitle: "media",
    title: "News",
  };

  if (!post) notFound();

  return (
    <>
      <div className="flex xl:space-x-12">
        {/* Main area */}
        <div className="min-w-0">
          {/* Mobile hamburger + breadcrumbs */}
          <div className="md:hidden mt-4 flex items-center mb-4 ">
            <Hamburger />

            {/* Breadcrumbs */}
            <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
              <span className="text-slate-600 dark:text-slate-400">
                {post.topic.name}
              </span>
              <svg
                className="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500"
                width="8"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
              </svg>
              <span className="text-slate-800 font-medium truncate dark:text-slate-200">
                {post.title}
              </span>
            </div>
          </div>

          {/* Article content */}
          <div className="md:mt-10">
            <HeroBanter content={heroProps} />
           
              
            <SectionBanter title={""}>
              <div className=" relative mb-4">
                <Search></Search>
              </div>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-3 ">
                {newsArray.map((news, index) => (
                  <NewsCard key={index} content={news} />
                ))}
              </div>
            </SectionBanter>
          </div>
          <Footer />
        </div>
        {/*        <SecondaryNav />*/}
      </div>
    </>
  );
}

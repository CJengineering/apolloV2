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
 
} from "@/components/custom beta components/NewsMain";
import cancerImage from "@/public/images/imagesCJ/FACT Alliance_J-WAFS.png";
import FeatureCard from "@/components/custom beta components/FeatureCard";
import NewsSmall from "@/components/custom beta components/NewsSmall";
import CardHorizontal from "@/components/CJ-components/components-CJ/basic components/CardHorizontal";
import Link from "next/link";
import Search from "@/components/ui/search";
import { getData } from "@/functions/api/getData";
import postMapper from "@/functions/transformers/postMapper";
import PostCard from "@/components/custom beta components/PostCard";
import MainContainer from "@/components/custom beta components/MainContainer";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import { Suspense } from "react";
import { NewsMainProps } from "@/app/interfaces";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
const articleData: NewsMainProps = {
  tag: "Technology",
  arabicTitle: "تكنولوجيا",
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


export default async function AnnouncementsContent({
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
  const heroProps = {
    backgroundImageUrl: image.src,
    overlayColor: "bg-gray-400/80",
    subTitle: "media",
    title: "Announcements",
  };

  if (!post) notFound();
{/*Data fetching* */}
const categoryId= getIdByDisplayName("Categories")

const rawPosts = await getData("61ee828a15a3183262bde542");
const programesRaw = await getData("61ee828a15a3183d2abde540");
const eventsRaw = await getData("6225fe8b1f52b40001a99d66");
const peopleRaw = await getData("62271a6df4ceb0027d91e6c4");
const categoriesRaw = await getData(categoryId);

const  posts = rawPosts.items.map((item) => postMapper(item, categoriesRaw.items,eventsRaw.items,programesRaw.items, peopleRaw.items));
const cleanPosts: NewsMainProps[] = posts.map((item) => ({
  tag: item.programme.name,  // Assuming 'name' is the string you need for the tag
  title: item.name,
  arabicTitle: item.arabicTitle,
  description: '',
  authorName: item.name,
  date: item.datePublished,
  readTime: '6 min',
  postLink: `/announcements/${item.slug}`,
  categoryLink: item.slug,  // Assuming 'url' is the string you need for the category link
  authorLink: 'news',
  postImage: item.thumbnail.url,
  authorImage: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg',
}));

  return (
    <MainContainer isSideBar={false}>
    <ContentContainer>
    {/* <HeroBanter content={heroProps} /> */}
      <SectionBanter title={""}>
          <div className=" relative mb-4">
            <Search></Search>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 ">
            <Suspense >
            {cleanPosts.map((post) => (
                  <PostCard  key={post.title}
                  content={post} />
                ))}
            </Suspense>
          </div>
        </SectionBanter>
    </ContentContainer>
  </MainContainer>
  );
}

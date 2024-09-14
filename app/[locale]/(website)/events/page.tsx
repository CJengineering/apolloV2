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
import EventCard from "@/components/custom beta components/EventCard";
import { getData } from "@/functions/api/getData";
import eventMapper from "@/functions/transformers/eventMapper";
import EventCardLarge from "@/components/custom beta components/EventCardLarge";
import EventCardSmall from "@/components/custom beta components/EventCardSmall";
import {
  EventFieldData,
  Item,
  NewsMainProps,
  PartnersRawFields,
  ProgrammeRawFields,
} from "@/app/interfaces";
import MainContainer from "@/components/custom beta components/MainContainer";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import { get } from "http";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";

const articleData: NewsMainProps = {
  arabicTitle: "تكنولوجيا",
  tag: "Technology",
  title: "Apple to Turn IPhones Into Payment Terminals in Fintech Push",
  description:
    "Apple Inc is introducing a new feature that will allow businesses to accept credit card and digital payments with just a tap on their iPhones, bypassing hardware systems such as Block Inc's Square terminals.",
  source: "Mark Jack",
  datePublished: "2021-12-16",
  readTime: "6 min",
  postLink: "post.html",
  categoryLink: "category.html",
  authorLink: "author.html",
  postImage: cancerImage.src,
  authorImage:
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
};
const events = [
  {
    id: "1",
    name: "Prepare to Shell Out for Warehouse Space -- If You Can Find It",
    description:
      "The demand for warehouse space is skyrocketing as e-commerce continues to grow.",
    programme: "Economic outlook",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Warehouse+Space",
    source: {
      name: "Taylor Adams",
      imageUrl: "https://via.placeholder.com/150.png?text=Taylor+Adams",
      date: "2023-05-29",
      readTime: "5 min read",
    },
  },
  {
    id: "2",
    name: "Tech Giants are Investing in Renewable Energy",
    description:
      "Tech companies are leading the way in renewable energy investments to combat climate change.",
    programme: "Technology",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Renewable+Energy",
    source: {
      name: "Jordan Lee",
      imageUrl: "https://via.placeholder.com/150.png?text=Jordan+Lee",
      date: "2023-05-28",
      readTime: "7 min read",
    },
  },
  {
    id: "3",
    name: "The Future of Remote Work",
    description:
      "Remote work is here to stay. Learn how companies are adapting to this new trend.",
    programme: "Workplace",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Remote+Work",
    source: {
      name: "Alex Morgan",
      imageUrl: "https://via.placeholder.com/150.png?text=Alex+Morgan",
      date: "2023-05-27",
      readTime: "6 min read",
    },
  },
  {
    id: "4",
    name: "Advancements in AI Technology",
    description:
      "AI technology is evolving rapidly, impacting various industries around the world.",
    programme: "Artificial Intelligence",
    imageUrl: "https://via.placeholder.com/600x400.png?text=AI+Technology",
    source: {
      name: "Sam Taylor",
      imageUrl: "https://via.placeholder.com/150.png?text=Sam+Taylor",
      date: "2023-05-26",
      readTime: "8 min read",
    },
  },
  {
    id: "5",
    name: "How to Improve Cybersecurity in Your Organization",
    description:
      "Cybersecurity is more important than ever. Here are some tips to keep your organization safe.",
    programme: "Cybersecurity",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Cybersecurity",
    source: {
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

export default async function WhatsOnContent({
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
    subTitle:
      " Talks, exhibitions, performances and events from across the community",
    title: "What's on",
  };

  if (!post) notFound();
  {
    /** DATA FETCHING  */
  }
  const peopleId = getIdByDisplayName("People");

  const eventsData = await getData("6225fe8b1f52b40001a99d66");
  const peopleData = await getData(peopleId);
  const programmeData = await getData("61ee828a15a3183d2abde540");
  const partnersData = await getData("6225ffe9b0cebfbd804959d2");
  const eventsRaw: Item<EventFieldData>[] = eventsData.items;
  const programmeRaw: Item<ProgrammeRawFields>[] = programmeData.items;
  const partnersRaw: Item<PartnersRawFields>[] = partnersData.items;
  const eventsClean = eventsRaw.map((event) =>
    eventMapper(event, partnersRaw, programmeRaw,peopleData.items)
  );
  const eventsFeatured = eventsClean.filter((event) => event.featured);

  const eventFuture = eventsClean.filter(
    (event) =>
      new Date(event.endDate) > new Date() && !event.featured && !event.isDraft
  );

  // Filter past events and check isDraft is false
  const eventPast = eventsClean.filter(
    (event) => new Date(event.endDate) < new Date() && !event.isDraft
  );
  return (
      <ContentContainer width="full" desktopWidth="medium">
        <h1 className="header-page pb-3 pt-12 lg:pb-12 lg:pt-7 text-left">Events</h1>
        <div>
         
          <div className="">
        <div className="pb-3"><h2 className="header-section pb-3">Featured</h2></div>
              <div className="grid md:grid-cols-3 gap-6">
              {eventsFeatured.map((article, index) => (
              <EventCardSmall key={index} article={article} />
            ))}
            </div>
            </div>
          
          <div className="pb-6"><div className="w-full h-px bg-slate-200"></div></div>
        {eventFuture.length > 0 && (
          <div className="">
        <div className="pb-3"><h2 className="header-section pb-3">Upcoming events</h2></div>
              <div className="grid md:grid-cols-3 gap-6">
              {eventFuture.map((article, index) => (
                <EventCardSmall key={index} article={article} />
              ))}
            </div>
            </div>
        )}
      <div>
      <div className="pb-6"><div className="w-full h-px bg-slate-200"></div></div>
      <div className="pb-3"><h2 className="header-section pb-3">Past events</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {eventPast.map((article, index) => (
              <EventCardSmall key={index} article={article} />
            ))}
          </div>
          </div>
</div>

      </ContentContainer>
  );
}

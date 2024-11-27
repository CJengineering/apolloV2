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
import postMapper from "@/functions/transformers/postMapper";
import PostCard from "@/components/custom beta components/PostCard";
import MainContainer from "@/components/custom beta components/MainContainer";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import { Suspense } from "react";
import { FieldsPostRaw, NewsMainProps, PostFieldsCleaned } from "@/app/interfaces";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import postJson from "@/app/data/post.json";
import {
  PostCardDatePublished,
  PostCardImageColumn,
  PostCardProgrammeLabel,
  PostCardProvider,
  PostCardTextColumn,
  PostCardTitle,
} from "@/components/CJ-components/components-CJ/test components/CompoundPostCard";

import FilterComponent from "@/components/CJ-components/components-CJ/test components/FilterComponent";
import { sources } from "next/dist/compiled/webpack/webpack";
import FilterComponentForPosts from "@/components/CJ-components/components-CJ/test components/FilterComponentForPosts";
import ContainerFixedWidth from "@/components/CJ-components/components-CJ/layout/ContainerFixedWidth";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import { getDataInternalServer } from "@/functions/api/getDataInternalServer";
import { all } from "cypress/types/bluebird";
import { PostProvider } from "../../(website)/news/post-context";
import PostsDisplay from "../../(website)/news/posts-display";
import { sql } from "@vercel/postgres";
import { fetchAllPosts } from "@/functions/api/fetchAllPosts";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "News",
  description:
    "News announcements from Community Jameel",
  ogType: "website",
  ogImage: '/images/metadata/NEWS.webp',
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community"],

})


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
  {
    /*Data fetching* */
  }
  const categoryId = getIdByDisplayName("Categories");


  const programesRaw = await getDataInternalServer("programmes")
  const eventsRaw = await getDataInternalServer("events")
  const peopleRaw = await getDataInternalServer("people")
  const categoriesRaw = await getDataInternalServer("categories")






  interface RelatedCollection {
    id: string;
    name: string;
  }
  const programmesForFilter: RelatedCollection[] = programesRaw.items.map(
    (item) => ({
      id: item.id || "",
      name: item.fieldData.shortname || "",
    })
  );
  const peopleForFilter: RelatedCollection[] = peopleRaw.items.map((item) => ({
    id: item.id || "",
    name: item.fieldData.name || "",
  }));
  const rowsD =  await fetchAllPosts();
  const newsArray: PostFieldsCleaned[] = rowsD.map(row => ({
    videoAsHeroYesNo: row.field_data.videoAsHeroYesNo || false,
    heroVideoYoutubeEmbedId: row.field_data.heroVideoYoutubeEmbedId || "",
    heroVideoArabicYoutubeVideoId: row.field_data.heroVideoArabicYoutubeVideoId || "",
    isPostArabic: row.field_data.isPostArabic || false,
    createdOn: row.created_at || "",
    arabicTitle: row.field_data.arabicTitle || "",
    pushToGr: row.field_data.pushToGr || false,
    programme: row.field_data.programme || null,
    programmesMultiple: row.field_data.programmesMultiple || [],
    thumbnail: row.field_data.thumbnail || null,
    mainImage: row.field_data.mainImage || null,
    sources: row.field_data.sources || null,
    openGraphImage: row.field_data.openGraphImage || "",
    datePublished: row.field_data.datePublished || "",
    datePublishedArabic: row.field_data.datePublishedArabic || "",
    location: row.field_data.location || "",
    locationArabic: row.field_data.locationArabic || "",
    seoTitle: row.field_data.seoTitle || "",
    seoTitleArabic: row.field_data.seoTitleArabic || "",
    seoMeta: row.field_data.seoMeta || "",
    seoMetaArabic: row.field_data.seoMetaArabic || "",
    collectionName: "news",
    summary: row.field_data.summary || "",
    summaryArabic: row.field_data.summaryArabic || "",
    body: row.field_data.body || "",
    bodyArabic: row.field_data.bodyArabic || "",
    altTextForHeroImage: row.field_data.altTextForHeroImage || "",
    altTextHeroImageArabic: row.field_data.altTextHeroImageArabic || "",
    photoCreditHeroImage: row.field_data.photoCreditHeroImage || "",
    heroImagePhotoCreditArabic: row.field_data.heroImagePhotoCreditArabic || "",
    theme3: row.field_data.theme3 || [],
    blogsCategories2: row.field_data.blogsCategories2 || "",
    blogsCategories2Arabic: row.field_data.blogsCategories2Arabic || "",
    featured: row.field_data.featured || false,
    imageCarousel: row.field_data.imageCarousel || [],
    imageGalleryCreditsArabic: row.field_data.imageGalleryCreditsArabic || "",
    imageCarouselCredits: row.field_data.imageCarouselCredits || "",
    relatedEvent: row.field_data.relatedEvent || null,
    people: row.field_data.people || [],
    innovations: row.field_data.innovations || [],
    name: row.field_data.name || "",
    slug: row.slug || "",
    bulletPointsEnglish: row.field_data.bulletPointsEnglish || "",
    bulletPointsArabic: row.field_data.bulletPointsArabic || "",
  }));


  return (
    <>
      <div className="py-0">
        <h1 className="header-page pb-8">
          News
         
        </h1>
      
      </div>

      <PostProvider
        programmes={programmesForFilter}
        people={peopleForFilter}
        postsClean={newsArray}
      >
        <ContainerFixedWidth>
          <div className=" relative">
            <FilterComponentForPosts />
          </div>

          <PostsDisplay />
        </ContainerFixedWidth>
      </PostProvider>
    </>
  );
}                   

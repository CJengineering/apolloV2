import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { PostFieldsCleaned } from "@/app/interfaces";
import FilterComponentForPosts from "@/components/CJ-components/components-CJ/test components/FilterComponentForPosts";
import ContainerFixedWidth from "@/components/CJ-components/components-CJ/layout/ContainerFixedWidth";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import { getDataInternalServer } from "@/functions/api/getDataInternalServer";

import { PostProvider } from "../../(website)/news/post-context";
import PostsDisplay from "../../(website)/news/posts-display";
import { fetchAll } from "@/functions/api/fetchAll";
import { fetchFirst100Posts } from "@/functions/api/fetchFirst100posts";
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "News",
  description: "News announcements from Community Jameel",
  ogType: "website",
  ogImage: "/images/metadata/NEWS.webp",
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community"],
});

export default async function AnnouncementsContent({
  params,
}: {
  params: {
    topic: string;
    slug: string;
  };
}) {
  const programesRaw = await getDataInternalServer("programmes");

  const peopleRaw = await getDataInternalServer("people");

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
  //const rowsD = await fetchAll("posts");
  const  rowsD = await fetchFirst100Posts()
  const newsArray: PostFieldsCleaned[] = rowsD.map((row) => row.field_data);

  return (
    <>
      <div className="py-0">
        <h1 className="header-page pb-8">News</h1>
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

//legacy code 
// import type { Metadata } from "next";
// import { allPosts } from "contentlayer/generated";
// import { notFound } from "next/navigation";
// import { Mdx } from "@/components/mdx/mdx";
// import TopicTitle from "@/components/ui/topic-title";
// import Hamburger from "@/components/ui/hamburger";
// import Feedback from "@/components/ui/feedback";
// import PageNavigation from "@/components/ui/page-navigation";
// import Footer from "@/components/ui/footer";
// import SecondaryNav from "@/components/ui/secondary-nav";
// import HeaderBeta from "@/components/custom beta components/headerBeta";
// import HomeIcons from "@/components/custom beta components/homeIcons";
// import HomePageBeta from "@/components/custom beta components/homePageBeta";
// import TrandingTopics from "@/components/custom beta components/trandingTopics";
// import EventSection from "@/components/custom beta components/eventSection";
// import HeroBanter from "@/components/custom beta components/HeroBanter";
// import image from "@/public/images/to_sort/mapCJ.webp";
// import SectionBanter from "@/components/custom beta components/SectionBanter";
// import NewsMain from "@/components/custom beta components/NewsMain";
// import cancerImage from "@/public/images/imagesCJ/FACT Alliance_J-WAFS.png";
// import FeatureCard from "@/components/custom beta components/FeatureCard";
// import NewsSmall from "@/components/custom beta components/NewsSmall";
// import CardHorizontal from "@/components/CJ-components/components-CJ/basic components/CardHorizontal";
// import Link from "next/link";
// import Search from "@/components/ui/search";
// import { getData } from "@/functions/api/getData";
// import postMapper from "@/functions/transformers/postMapper";
// import PostCard from "@/components/custom beta components/PostCard";
// import MainContainer from "@/components/custom beta components/MainContainer";
// import ContentContainer from "@/components/custom beta components/ContentContainer";
// import { Suspense } from "react";
// import { FieldsPostRaw, NewsMainProps } from "@/app/interfaces";
// import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
// import postJson from "@/app/data/post.json";
// import {
//   PostCardDatePublished,
//   PostCardImageColumn,
//   PostCardProgrammeLabel,
//   PostCardProvider,
//   PostCardTextColumn,
//   PostCardTitle,
// } from "@/components/CJ-components/components-CJ/test components/CompoundPostCard";
// import PostsDisplay from "./posts-display";
// import { PostProvider } from "./post-context";
// import FilterComponent from "@/components/CJ-components/components-CJ/test components/FilterComponent";
// import { sources } from "next/dist/compiled/webpack/webpack";
// import FilterComponentForPosts from "@/components/CJ-components/components-CJ/test components/FilterComponentForPosts";
// import ContainerFixedWidth from "@/components/CJ-components/components-CJ/layout/ContainerFixedWidth";
// import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
// import { getDataInternalServer } from "@/functions/api/getDataInternalServer";
// import { all } from "cypress/types/bluebird";

// export async function generateStaticParams() {
//   return allPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export const metadata: Metadata = customMetaDataGenerator({
//   useRawTitle: true,
//   title: "News",
//   description:
//     "News announcements from Community Jameel",
//   ogType: "website",
//   ogImage: '/images/metadata/NEWS.webp',
//   twitterCard: "summary_large_image",
//   keywords: ["Community Jameel", "Jameel", "Community"],

// })

// export default async function AnnouncementsContent({
//   params,
// }: {
//   params: {
//     topic: string;
//     slug: string;
//   };
// }) {
//   const post = {
//     title: "Community  Jameel",
//     summary:
//       "A deep dive into how async/await works in JavaScript, with examples and best practices.",
//     topic: {
//       name: "Home",
//       slug: "javascript",
//     },
//     prev: {
//       name: "Promises in JavaScript",
//       slug: "promises-in-javascript",
//     },
//     next: {
//       name: "JavaScript Event Loop",
//       slug: "javascript-event-loop",
//     },
//   };
//   const heroProps = {
//     backgroundImageUrl: image.src,
//     overlayColor: "bg-gray-400/80",
//     subTitle: "media",
//     title: "Announcements",
//   };

//   if (!post) notFound();
//   {
//     /*Data fetching* */
//   }
//   const categoryId = getIdByDisplayName("Categories");


//   const programesRaw = await getDataInternalServer("programmes")
//   const eventsRaw = await getDataInternalServer("events")
//   const peopleRaw = await getDataInternalServer("people")
//   const categoriesRaw = await getDataInternalServer("categories")
//   const allnews = await getDataInternalServer("posts")

//   const filteredItems =  allnews.items.filter((item) => !item.isDraft);

//   const posts = filteredItems.map((item ) =>

//     postMapper(
//       item,
//       categoriesRaw.items,
//       eventsRaw.items,
//       programesRaw.items,
//       peopleRaw.items
//     )
//   );

//   interface RelatedCollection {
//     id: string;
//     name: string;
//   }
//   const programmesForFilter: RelatedCollection[] = programesRaw.items.map(
//     (item) => ({
//       id: item.id || "",
//       name: item.fieldData.shortname || "",
//     })
//   );
//   const peopleForFilter: RelatedCollection[] = peopleRaw.items.map((item) => ({
//     id: item.id || "",
//     name: item.fieldData.name || "",
//   }));

//   return (
//     <>
//       <div className="py-0">
//         <h1 className="header-page pb-8">
//           News
//         </h1>
      
//       </div>

//       <PostProvider
//         programmes={programmesForFilter}
//         people={peopleForFilter}
//         postsClean={posts}
//       >
//         <ContainerFixedWidth>
//           <div className=" relative">
//             <FilterComponentForPosts />
//           </div>

//           <PostsDisplay />
//         </ContainerFixedWidth>
//       </PostProvider>
//     </>
//   );
// }                   

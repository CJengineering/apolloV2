import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

import image from "@/public/images/to_sort/mapCJ.webp";

import { getData } from "@/functions/api/getData";
import postMapper from "@/functions/transformers/postMapper";

import { getIdByDisplayName } from "@/functions/utils/findCollectionId";

import FilterComponentForPosts from "@/components/CJ-components/components-CJ/test components/FilterComponentForPosts";
import ContainerFixedWidth from "@/components/CJ-components/components-CJ/layout/ContainerFixedWidth";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import { MultimediaProvider } from "./multimedia-context";
import MultimediaDisplay from "./multimedia-display";
import multimediaMapper from "@/functions/transformers/multimediaMapper";
import FilterComponentForMultimedia from "@/components/CJ-components/components-CJ/test components/FilterComponentsForMltimedia";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = customMetaDataGenerator({
  title: "News",
  description:
    "Community Jameel supports a community of scientists, humanitarians, technologists and creatives. Working together through centres, funds, scholarships and projects, we are advancing science to help communities thrive in a rapidly changing world.",
  ogType: "website",
  ogImage: 'https://uploads-ssl.webflow.com/612cdb8a4fac760705621df5/61e6a124e31b0c9e6d00c791_TERMS_OF_USE.jpg',
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
  const multimediaId = getIdByDisplayName("Multimedia");
  const sourcesId = getIdByDisplayName("Sources");

  const rawPosts = await getData("61ee828a15a3183262bde542");
  const programesRaw = await getData("61ee828a15a3183d2abde540");
  const eventsRaw = await getData("6225fe8b1f52b40001a99d66");
  const peopleRaw = await getData("62271a6df4ceb0027d91e6c4");
  const sourcesRaw = await getData(sourcesId);
  const categoriesRaw = await getData(categoryId);
  rawPosts.items.filter((item) => !item.isDraft);
const multimediaRaw = await getData(multimediaId);
multimediaRaw.items.filter((item) => !item.isDraft);

const multimediaClean = multimediaRaw.items.map(item => multimediaMapper(item,programesRaw.items,eventsRaw.items,sourcesRaw.items,peopleRaw.items)); 

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

  return (
    <>
      <div className="py-0">
        <h1 className="header-page pb-8 pt-20 lg:pb-10 lg:pt-10 lg:text-left">
        Multimedia
        </h1>
      </div>

      <MultimediaProvider
        programmes={programmesForFilter}
        people={peopleForFilter}
        multimediasClean={multimediaClean }
      >
        <ContainerFixedWidth>
          <div className=" relative">
            <FilterComponentForMultimedia />
          </div>

          <MultimediaDisplay />
        </ContainerFixedWidth>
      </MultimediaProvider>
    </>
  );
}

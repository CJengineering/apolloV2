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
  const rowsD = await fetchAll("posts");
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

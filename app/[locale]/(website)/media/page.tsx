import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";

import { getData } from "@/functions/api/getData";

import newsMapper from "@/functions/transformers/newsMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import FilterComponent from "@/components/CJ-components/components-CJ/test components/FilterComponent";
import { NewsProvider } from "./news-contect";
import { NewsDisplay } from "./news-display";
import ContainerFixedWidth from "@/components/CJ-components/components-CJ/layout/ContainerFixedWidth";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Media",
  description:
    "Community Jameel supports a community of scientists, humanitarians, technologists and creatives. Working together through centres, funds, scholarships and projects, we are advancing science to help communities thrive in a rapidly changing world.",
  ogType: "website",
  ogImage: "/images/metadata/MEDIA.webp",
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community"],
});

export default async function NewsContent({
  params,
}: {
  params: {
    topic: string;
    slug: string;
    locale: string;
  };
}) {
  {
    /** DATA FETCHING  */
  }

  //Get Names
  //
  // const dataFetches = ids.map((id) => getData(getIdByDisplayName(id)));
  // const [programmeAll, peopleAll, sourcesAll, tagsAll, eventAll, newsAll] =
  //   await Promise.all(dataFetches);
  const ids = ["Programmes", "People", "Sources", "Tags", "Events", "News"];
    const results = [];
for (const id of ids) {
  const data = await getData(getIdByDisplayName(id));
  results.push(data);
}

const [programmeAll, peopleAll, sourcesAll, tagsAll, eventAll, newsAll] = results;

  // Data fetching

  let rawNewsArray = newsAll.items;
  rawNewsArray = rawNewsArray.filter((item) => item.isDraft === false);

  const newsArrayCleaned = rawNewsArray.map((item) =>
    newsMapper(
      item,
      programmeAll.items,
      peopleAll.items,
      sourcesAll.items,
      tagsAll.items,
      eventAll.items
    )
  );

  interface RelatedCollection {
    id: string;
    name: string;
  }
  const programmesForFilter: RelatedCollection[] = programmeAll.items.map(
    (item) => ({
      id: item.id || "",
      name: item.fieldData.shortname || "",
    })
  );
  const sourcesForFilter: RelatedCollection[] = sourcesAll.items.map(
    (item) => ({
      id: item.id || "",
      name: item.fieldData.name || "",
    })
  );

  return (
    <>
      <div>
        <h1 className="header-page pb-8">Media</h1>
      </div>

      <NewsProvider
        programmes={programmesForFilter}
        sources={sourcesForFilter}
        newsArrayCleaned={newsArrayCleaned}
      >
        <ContainerFixedWidth>
          <FilterComponent></FilterComponent>
          <NewsDisplay locale={params.locale} />
        </ContainerFixedWidth>
      </NewsProvider>
    </>
  );
}

import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import FilterComponent from "@/components/CJ-components/components-CJ/test components/FilterComponent";
import ContainerFixedWidth from "@/components/CJ-components/components-CJ/layout/ContainerFixedWidth";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import { getDataInternalServer } from "@/functions/api/getDataInternalServer";
import { NewsProvider } from "../../(website)/media/news-contect";
import { NewsDisplay } from "../../(website)/media/news-display";
import { fetchAllNews } from "@/functions/api/fetchAllNews";
import { NewsCardFields, NewsCleanedFields } from "@/app/interfaces";

function mapToNewsCardFields(row: any): NewsCardFields {
  return {
    slug: row.slug || "",
    thumbnail: {
      url: row.thumbnailUrl || "",
      alt: row.thumbnailAltText || "Default Alt Text", // Fallback alt text
    },
    thumbnailAltText: row.thumbnailAltText || "",
    sources: {
      name: row.sourcesName || "",
      arabicName: row.sourcesArabicName || "",
      shortname: undefined, // This field is not present in the SQL query
      slug: row.sourcesSlug || "",
      url: row.sourcesUrl || "",
    },
    arabicTitle: row.arabicTitle || "",
    name: row.name || "",
    datePublished: row.datePublished || "",
    datePublishedArabic: row.datePublishedArabic || "",
    programme: {
      name: row.programmeName || "",
      arabicName: row.programmeArabicName || "",
      shortname: row.programmeShortname || "",
      slug: row.programmeSlug || "",
      url: row.programmeUrl || "",
    },
  };
}
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
  const ids = ["programmes", "people", "sources", "tags", "events", "news"];
  const dataFetches = ids.map((id) => getDataInternalServer(id));
  const [programmeAll, peopleAll, sourcesAll, tagsAll, eventAll, newsAll] =
    await Promise.all(dataFetches);

  // Data fetching

  let rawNewsArray = newsAll.items;
  rawNewsArray = rawNewsArray.filter((item) => item.isDraft === false);

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
  const rowsD = await fetchAllNews("newsV3");

  const news: NewsCardFields[] = rowsD.map(mapToNewsCardFields);
  return (
    <>
      <div>
        <h1 className="header-page pb-8">Media</h1>
      </div>

      <NewsProvider
        programmes={programmesForFilter}
        sources={sourcesForFilter}
        newsArrayCleaned={news}
      >
        <ContainerFixedWidth>
          <FilterComponent></FilterComponent>
          <NewsDisplay locale={params.locale} />
        </ContainerFixedWidth>
      </NewsProvider>
    </>
  );
}

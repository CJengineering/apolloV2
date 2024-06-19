import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

import SectionBanter from "@/components/custom beta components/SectionBanter";
import NewsSmall from "@/components/custom beta components/NewsSmall";
import NewsRightContent from "@/components/custom beta components/NewsRightContent";
import Loading from "@/components/custom beta components/Loading";
import MainContainer from "@/components/custom beta components/MainContainer";
import ContentContainer from "@/components/custom beta components/ContentContainer";

import { getData } from "@/functions/api/getData";
import mapItemToNewsMainProps from "@/functions/transformers/newsTransformer";
import mapItemNews from "@/functions/transformers/newsSingleTransformer";
import filterNewsItems from "@/functions/filters/filterRelatedPersonAndProgramme";
import BreadCrumb from "@/components/custom beta components/BreadCrumb";

export default async function NewsPage({
  params,
}: {
  params: {
    topic: string;
    slug: string;
    locale: string;
  };
}) {
  const title = "Sample Article Title";

  // Data fetching
  const dataWeb = await getData("61ee828a15a3185c99bde543");
  const sourcesAll = await getData("61ee828a15a3183f55bde545");
  const peopleAll = await getData("62271a6df4ceb0027d91e6c4");
  const programmeAll = await getData("61ee828a15a3183d2abde540");

  const rawNewsArray = dataWeb.items;
  const rawNews = rawNewsArray.find(
    (item) => item.fieldData.slug === params.slug
  );

  const newsItem = mapItemNews(
    rawNews,
    sourcesAll.items,
    programmeAll.items,
    peopleAll.items
  );

  const filteredNewsItems = filterNewsItems(
    rawNewsArray,
    rawNews.fieldData.programme,
    rawNews.fieldData.people,
    rawNews.id
  );

  const relatedNews = filteredNewsItems.map((item) =>
    mapItemToNewsMainProps(item, sourcesAll.items, programmeAll.items)
  );

  if (!newsItem) notFound();

  return (
    <MainContainer isSideBar={false}>
      <ContentContainer>
        <div>
          <Suspense fallback={<Loading />}>
            <Link
              href="/news"
              className="hover:text-gray-200 transition duration-150 ease-in-out"
            >
              {/* <span className="mr-2 text-xl">&lsaquo;</span> */}
              {/* <span className="uppercase">back to news</span> */}
            </Link>
            <img
              src={newsItem.imageUrl}
              alt={title}
              className="w-full h-auto mb-6"
            />

            <SectionBanter
              title={
                params.locale === "ar" ? newsItem.arabicTitle : newsItem.title
              }
            >
              <div>
                <NewsRightContent
                  source={newsItem.source}
                  datePublished={newsItem.datePublished}
                  relatedProgrammes={newsItem.relatedProgrammes}
                  relatedPeople={newsItem.relatedPeople}
                />
                <div>
                  <article className="mx-auto leading-7 text-black dark:text-white prose prose-xl serif font-normal dark:prose-invert">
                    <div
                      dangerouslySetInnerHTML={{ __html: newsItem.richText1 }}
                    ></div>
                    {newsItem.richText2 && (
                      <>
                        <h3 className="text-2xl">Excerpt</h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: newsItem.richText2,
                          }}
                        ></div>
                      </>
                    )}
                  </article>
                </div>
              </div>
            </SectionBanter>
            <div>
              <h2 className="costa font-bold text-3xl">Related news</h2>
            </div>
            <div className="grid md:grid-cols-2">
              {relatedNews.map((article) => (
                <NewsSmall key={article.title} content={article} />
              ))}
            </div>
          </Suspense>
        </div>
      </ContentContainer>
    </MainContainer>
  );
}

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
import Accordion from "@/components/mdx/accordion";
import newsMapper from "@/functions/transformers/newsMapper";
import { get } from "http";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { findRelatedNews } from "@/functions/findFunctions/findRelatedNewsFromNews";

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

  //Get Names

  const progremmeId = getIdByDisplayName("Programmes");
  const peopleId = getIdByDisplayName("People");
  const sourcesId = getIdByDisplayName("Sources");
  const tagsId = getIdByDisplayName("Tags");
  const eventsId = getIdByDisplayName("Events");
  const newsId = getIdByDisplayName("News");

  // Data fetching
  const dataWeb = await getData(newsId);
  const sourcesAll = await getData(sourcesId);
  const peopleAll = await getData(peopleId);
  const programmeAll = await getData(progremmeId);
  const eventAll = await getData(eventsId);
  const tagsAll = await getData(tagsId);

  const rawNewsArray = dataWeb.items;
  const rawSingleNews = rawNewsArray.find(
    (item) => item.fieldData.slug === params.slug
  );
  const relatedNews = findRelatedNews(rawSingleNews, rawNewsArray);
  const newsItem = newsMapper(
    rawSingleNews,
    programmeAll.items,
    peopleAll.items,
    sourcesAll.items,
    tagsAll.items,
    eventAll.items
  );
  const relatedNewsClean = relatedNews.map((item) =>newsMapper(item, programmeAll.items, peopleAll.items, sourcesAll.items, tagsAll.items, eventAll.items));

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
              src={newsItem.heroImage.url}
              alt={title}
              className="w-full h-auto mb-6"
            />

            <SectionBanter
              title={
                params.locale === "ar" ? newsItem.arabicTitle : newsItem.name
              }
            >
              <div>
                <NewsRightContent
                  source={newsItem.sources.name}
                  datePublished={newsItem.datePublished}
                  relatedProgrammes={newsItem.programmeS}
                  relatedPeople={newsItem.people}
                />
                <div>
                  <article className="mx-auto leading-7 text-black dark:text-white prose prose-xl serif font-normal dark:prose-invert">
                    <div
                      dangerouslySetInnerHTML={{ __html: newsItem.excerpt }}
                    ></div>
                    {newsItem.excerpt && (
                      <>
                        <h3 className="text-2xl">Excerpt</h3>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: newsItem.excerpt
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
              {relatedNewsClean .map((article) => (
                <NewsSmall key={article.name} content={article} />
              ))}
            </div>
          </Suspense>
        </div> . 
      </ContentContainer>
    </MainContainer>
  );
}

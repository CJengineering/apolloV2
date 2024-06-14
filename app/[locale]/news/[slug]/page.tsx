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
              <span className="mr-2 text-xl">&lsaquo;</span>
              <span className="uppercase">back to news</span>
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
                   <NewsRightContent
          source={newsItem.source}
          datePublished={newsItem.datePublished}
          relatedProgrammes={newsItem.relatedProgrammes}
          relatedPeople={newsItem.relatedPeople}
        />
              <article className="prose w-full text-slate-600 dark:text-slate-400 max-w-none prose-p:leading-normal prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:font-medium prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-code:text-slate-800 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 dark:prose-code:text-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-headings:scroll-mt-24">
                <div
                  dangerouslySetInnerHTML={{ __html: newsItem.richText1 }}
                ></div>
                {newsItem.richText2 && (
                  <>
                    <h3>Excerpt</h3>

                    <div
                      dangerouslySetInnerHTML={{ __html: newsItem.richText2 }}
                    ></div>
                  </>
                )}
              </article>
            </SectionBanter>
            <SectionBanter title="Related news">
              <div className="grid md:grid-cols-3">
                {relatedNews.map((article) => (
                  <NewsSmall key={article.title} content={article} />
                ))}
              </div>
            </SectionBanter>
          </Suspense>
        </div>
 
      </ContentContainer>
    </MainContainer>
  );
}

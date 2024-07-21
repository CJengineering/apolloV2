import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

import NewsRightContent from "@/components/custom beta components/NewsRightContent";
import Loading from "@/components/custom beta components/Loading";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import { getData } from "@/functions/api/getData";
import newsMapper from "@/functions/transformers/newsMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { findRelatedNews } from "@/functions/findFunctions/findRelatedNewsFromNews";
import NewsCard from "@/components/custom beta components/NewsCard";

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

  // Get Names
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
  const relatedNewsClean = relatedNews.map((item) =>
    newsMapper(
      item,
      programmeAll.items,
      peopleAll.items,
      sourcesAll.items,
      tagsAll.items,
      eventAll.items
    )
  );

const orderedRelatedNewsClean = relatedNewsClean.sort((a, b) => { const dateA = new Date(a.datePublished).getTime(); const dateB = new Date(b.datePublished).getTime(); return dateB - dateA; });

  if (!newsItem) notFound();

  return (
    <ContentContainer width="full" desktopWidth="medium">
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

          <div className="w-full">
            <h1 className="serif text-2xl md:text-6xl font-medium leading-tight" title={params.locale === "ar" ? newsItem.arabicTitle : newsItem.name}>
              {params.locale === "ar" ? newsItem.arabicTitle : newsItem.name}
            </h1>
            <div className="mb-6 flex items-center space-x-2 mt-6">
        <div className="mono uppercase text-sm font-normal">{newsItem.sources.name}</div>
        <span>•</span>
        <div className="mono uppercase text-sm font-normal">{newsItem.datePublished}</div>
      </div>
            <div className="md:hidden w-full md:w-1/3 mt-0 md:mt-0">
              <NewsRightContent
                source={newsItem.sources.name}
                datePublished={newsItem.datePublished}
                relatedProgrammes={newsItem.programmeS}
                relatedPeople={newsItem.people}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 pr-6">
              <article className="leading-7 text-black dark:text-white prose prose-xl serif font-normal dark:prose-invert prose-p:mx-0 prose-p:px-0">
                <div
                  dangerouslySetInnerHTML={{ __html: newsItem.summary }}
                ></div>
                {newsItem.excerpt && (
                  <>
                    <h3 className="serif font-medium text-2xl md:text-3xl mb-6">Excerpt</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: newsItem.excerpt,
                      }}
                    ></div>
                  </>
                )}
              </article>
            </div>
            <div className="hidden md:block md:w-1/3 mt-0 md:mt-0">
              <NewsRightContent
                source={newsItem.sources.name}
                datePublished={newsItem.datePublished}
                relatedProgrammes={newsItem.programmeS}
                relatedPeople={newsItem.people}
              />
            </div>
          </div>

          {relatedNewsClean.length > 0 && (
            <>
              <div className="w-full h-px bg-slate-200 mb-12 mt-6"></div>
              <h2 className="serif font-medium text-2xl md:text-3xl mb-6">Related news</h2>
            </>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relatedNewsClean.map((item) => (
              <NewsCard key={item.slug} content={item} locale={params.locale} />
            ))}
          </div>
        </Suspense>
      </div>
    </ContentContainer>
  );
}

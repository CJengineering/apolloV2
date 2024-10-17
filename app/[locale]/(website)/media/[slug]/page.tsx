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
import { Metadata, ResolvingMetadata } from "next";
import { Item, NewsRawFields } from "@/app/interfaces";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
type Props = {
  params: { slug : string, locale: string };

}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug= params.slug
  const locale = params.locale;

 
  const newsId = getIdByDisplayName("News");
  const productTest = await getData(newsId);
  const teamMembersRaw = productTest.items;
  const memberRaw :Item<NewsRawFields>[] = teamMembersRaw.filter(
    (item) => item.fieldData.slug === slug
  );
  const seoTitleArabic = memberRaw[0].fieldData["arabic-title"] ? memberRaw[0].fieldData["arabic-title"] : '';
  const seoTitleEnglish = memberRaw[0].fieldData.name ? memberRaw[0].fieldData.name : '';
  const descriptionArabic = memberRaw[0].fieldData["summary-arabic"] ? memberRaw[0].fieldData["summary-arabic"] : '';
  const descriptionEnglish = memberRaw[0].fieldData.summary ? memberRaw[0].fieldData.summary : '';
  const name = locale === 'ar'? seoTitleArabic : seoTitleEnglish;
  const description = locale=== 'ar'? descriptionArabic : descriptionEnglish;
  // optionally access and extend (rather than replace) parent metadata
  
 
  return customMetaDataGenerator({
    useRawTitle: true,
      title: name || '',
      description: description,
      ogImage: memberRaw[0].fieldData["hero-image"]?.url || '',
    })
 
  
}

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
    <>
      <div>
        <Suspense fallback={<Loading />}>
          <Link
            href="/news"
            className="hover:text-gray-200 transition duration-150 ease-in-out"
          >
            {/* <span className="mr-2 text-xl">&lsaquo;</span> */}
            {/* <span className="uppercase">back to news</span> */}
          </Link>
          

          <div className="w-full">
          <div className="lg:w-2/3">
          {/* <div><p className="sans-serif text-3xl font-bold pb-1">{newsItem.sources.name}</p></div> */}
            <h1 className="header-article leading-none pb-3 pt-20 lg:pb-3 lg:pt-10 lg:text-left">
              {newsItem.name}
            </h1>
          </div>
            <div className="flex items-start">
            <div><p className="sans-serif text-base font-normal">{newsItem.datePublished}</p></div>
        <div className="flex mb-6 mt-2 space-x-3">
          
        </div>
      </div>
            
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 pr-6">
              <article className="leading-7 text-black dark:text-white prose prose-xl  font-normal dark:prose-invert prose-p:mx-0 sans-serif prose-p:px-0">
                <div
                  dangerouslySetInnerHTML={{ __html: newsItem.summary }}
                ></div>
                {newsItem.excerpt && (
                  <>
                    <h3 className="sans-serif font-bold text-2xl md:text-3xl mb-6">Excerpt</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: newsItem.excerpt,
                      }}
                    ></div>
                  </>
                )}
              </article>
              
              <div className="md:block md:w-1/3 mt-0 md:mt-0">
              <NewsRightContent
                source={newsItem.sources.name}
                datePublished={newsItem.datePublished}
                relatedProgrammes={newsItem.programmeS}
                relatedPeople={newsItem.people}
              />
            </div>
              {/* <div className="pb-2"><span className="mono text-sm font-normal uppercase bg-slate-100 px-1">{newsItem.programme.name}</span></div> */}
            </div>
          </div>

          {relatedNewsClean.length > 0 && (
            <>
              <div className="w-full h-px bg-slate-200 dark:bg-slate-700 mb-6 mt-4 lg:w-2/3"></div>
              <h2 className="header-section mb-6">Related </h2>
            </>
          )}
          <div className="grid grid-cols-1 sd:grid-cols-1 gap-6">
            {relatedNewsClean.map((item) => (
              <NewsCard key={item.slug} content={item} locale={params.locale} />
            ))}
          </div>
        </Suspense>
      </div>
    </>
  );
}

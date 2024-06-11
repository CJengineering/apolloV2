import { notFound } from "next/navigation";

import Hamburger from "@/components/ui/hamburger";

import Footer from "@/components/ui/footer";

import image from "@/public/images/mapCJ.webp";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import NewsMain, {
  NewsMainProps,
} from "@/components/custom beta components/NewsMain";
import cancerImage from "@/public/images/imagesCJ/FACT Alliance_J-WAFS.png";

import NewsSmall from "@/components/custom beta components/NewsSmall";

import Link from "next/link";
import { getData } from "@/functions/api/getData";
import mapItemToNewsMainProps from "@/functions/transformers/newsTransformer";


import mapItemNews from "@/functions/transformers/newsSingleTransformer";
import NewsRightContent from "@/components/custom beta components/NewsRightContent";
import filterItemsByPeopleAndProgrammes from "@/functions/filters/filterRelatedPersonAndProgramme";
import filterNewsItems from "@/functions/filters/filterRelatedPersonAndProgramme";
import { Suspense } from "react";
import Loading from "@/components/custom beta components/Loading";

const articleData: NewsMainProps = {
  tag: "Technology",
  title: "Apple to Turn IPhones Into Payment Terminals in Fintech Push",
  description:
    "Apple Inc is introducing a new feature that will allow businesses to accept credit card and digital payments with just a tap on their iPhones, bypassing hardware systems such as Block Inc's Square terminals.",
  authorName: "Mark Jack",
  date: "2021-12-16",
  readTime: "6 min",
  postLink: "post.html",
  categoryLink: "category.html",
  authorLink: "author.html",
  postImage: cancerImage.src,
  authorImage:
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
};

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
  const imageUrl = "https://via.placeholder.com/800x400"; // Replace with your image URL
  const richText1 =
    "<p>This is the first block of rich text. It can include <strong>bold</strong> text, <em>italic</em> text, and other HTML elements.</p>";
  const richText2 =
    "<p>This is the second block of rich text. It can also include various HTML elements like <a href='#'>links</a> and more.</p>";
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
  const array12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const exampleSource = "New York Times";
  const exampleDatePublished = "24 May 2024";
  const exampleRelatedProgrammes = [
    { name: "programme name", href: "/programme-link" },
  ];
  const exampleRelatedPeople = [
    { name: "person name", href: "/person-link" },
    { name: "person name", href: "/person-link" },
    { name: "person name", href: "/person-link" },
  ];

  {
    /** DATA FETCHING  */
  }

  const dataWeb = await getData("61ee828a15a3185c99bde543");
  const sourcesAll = await getData("61ee828a15a3183f55bde545");
  const peopleAll = await getData("62271a6df4ceb0027d91e6c4");
  const programmeAll = await getData("61ee828a15a3183d2abde540");
  const rawNewsArray = dataWeb.items;
  const newsArray = rawNewsArray.map((item) =>
    mapItemToNewsMainProps(item, sourcesAll.items, programmeAll.items)
  );

  const rawNews = rawNewsArray.find( (item) => item.fieldData.slug === params.slug)
  const filteredNewsItems = filterNewsItems(rawNewsArray, rawNews.fieldData.programme, rawNews.fieldData.people, rawNews.id);
  const relatedNews = filteredNewsItems.map((item) => mapItemToNewsMainProps(item, sourcesAll.items, programmeAll.items));
  const newsItem = mapItemNews(rawNews, sourcesAll.items, programmeAll.items, peopleAll.items)
  const test = newsItem

  if (!post) notFound();

  return (
    <>
    <Suspense ></Suspense>
      <div className="flex xl:space-x-12">
        <div className="min-w-0">
          <div className="md:hidden mt-4 flex items-center mb-4 ">
            <Hamburger />

            {/* Breadcrumbs */}
            <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
              <span className="text-slate-600 dark:text-slate-400">
                topic name
              </span>
              <svg
                className="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500"
                width="8"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
              </svg>
              <span className="text-slate-800 font-medium truncate dark:text-slate-200">
                post title
              </span>
            </div>
          </div>

          {/* Article content */}
          <div className="md:mt-10">
            <Link
              href="/news"
              className="hover:text-gray-200 transition duration-150 ease-in-out "
            >
              <span className="mr-2 text-xl">&lsaquo;</span>
              <span className="uppercase">back to news</span>
            </Link>
            <img src={newsItem.imageUrl} alt={title} className="w-full h-auto mb-6" />
          
            
            <SectionBanter title={ params.locale == 'ar' ? newsItem.arabicTitle : newsItem.title}>
              <article className="prose w-full text-slate-600 dark:text-slate-400 max-w-none prose-p:leading-normal prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-a:font-medium prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 dark:prose-strong:text-slate-100 prose-code:text-slate-800 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 dark:prose-code:text-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-headings:scroll-mt-24">
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: newsItem.richText1 }}
                ></div>
            
                {newsItem.richText2 && <>
                    <h3>Excerept</h3>
                    <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: newsItem.richText2 }}
                ></div>
                
                
                
                    
                </> }  
             
              </article>
            </SectionBanter>
            <SectionBanter title={"Related news"}>
              <div className="grid md:grid-cols-3">
                {relatedNews.map((article) => (
                  <NewsSmall key={article.title} content={article} />
                ))}
              </div>
            </SectionBanter>
          </div>
          <Footer />
        </div>
        <NewsRightContent
          source={newsItem.source}
          datePublished={newsItem.datePublished}
          relatedProgrammes={newsItem.relatedProgrammes}
          relatedPeople={newsItem.relatedPeople}
        />
      </div>
    </>
  );
}

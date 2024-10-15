import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx/mdx";
import TopicTitle from "@/components/ui/topic-title";
import Hamburger from "@/components/ui/hamburger";
import Feedback from "@/components/ui/feedback";
import PageNavigation from "@/components/ui/page-navigation";
import Footer from "@/components/ui/footer";
import SecondaryNav from "@/components/ui/secondary-nav";
import HeaderBeta from "@/components/custom beta components/headerBeta";
import HomeIcons from "@/components/custom beta components/homeIcons";
import HomePageBeta from "@/components/custom beta components/homePageBeta";
import TrandingTopics from "@/components/custom beta components/trandingTopics";
import EventSection from "@/components/custom beta components/eventSection";
import TabsCJ from "@/components/CJ-components/components-CJ/custom components/TabsCJ";
import MainContainer from "@/components/custom beta components/MainContainer";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import { rowDataExample } from "@/app/fake data/fakeProgrammes";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { getData } from "@/functions/api/getData";
import programmeMapper from "@/functions/transformers/programmeMapper";
import { mapProgrammeToRowData } from "@/functions/transformers/programmeCleanIntoRowTable";
import { mapProgrammeToCardProgramme } from "@/functions/transformers/porgrammeToCardProgramme";
import { Container } from "@/components/CJ-components/components-CJ/Container";
import test from "node:test";
import featureMapper from "@/functions/transformers/featureMapper";
import filterRelatedFeatures from "@/functions/filters/filterRelatedFeatures";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import ContainerFixedWidth from "@/components/CJ-components/components-CJ/layout/ContainerFixedWidth";
import { ArabicProvider } from "@/components/custom beta components/ArabicContext";
export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Our Community",
  description:
    "Community Jameel supports a community of scientists, humanitarians, technologists and creatives. Working together through centres, funds, scholarships and projects, we are advancing science to help communities thrive in a rapidly changing world.",
  ogType: "website",
  ogImage:
    "https://uploads-ssl.webflow.com/612cdb8a4fac760705621df5/61b37423f32e603212069d44_COMMUNITY_JAMEEL_PORTFOLIO_BANNER.png",
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community"],
});

export default async function SinglePost({
  params,
}: {
  params: {
    topic: string;
    slug: string;
    locale: string;
  };
}) {
  const post = {
    title: "Understanding Async/Await in JavaScript",
    summary:
      "A deep dive into how async/await works in JavaScript, with examples and best practices.",
    topic: {
      name: "JavaScript",
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

  if (!post) notFound();

  const programmeId = getIdByDisplayName("Programmes");
  const partnerId = getIdByDisplayName("Partners");
  const peopleId = getIdByDisplayName("People");
  const feautureId = getIdByDisplayName("Features");

  const rawProgrammes = await getData(programmeId);
  const rawPartners = await getData(partnerId);
  const rawPeople = await getData(peopleId);
  const rawFeatures = await getData(feautureId);
  const includeTypes = [
    "a1e61c0cc2923f64b29ca5da3e41e427",
    "730944f73272c28e4ae4052f7611ceff",
    "bb96b247f8c989b67ca5ada5b5cb10df",
  ];
  
  rawProgrammes.items = rawProgrammes.items.filter(
    (item) => includeTypes.includes(item.fieldData.type)
  );
  // rawProgrammes.items = rawProgrammes.items.filter(
  //   (item) => item.fieldData.type !== "bb96b247f8c989b67ca5ada5b5cb10df"
  // );


  // get rid of Comunitu jameel in the arrays
  const cleanedFeature = rawFeatures.items.map((item) =>
    featureMapper(item, rawProgrammes.items)
  );

  const cleanedProgrammes = rawProgrammes.items.map((item) =>
    programmeMapper(
      item,
      rawPeople.items,
      rawPartners.items,
      rawProgrammes.items
    )
  );

  const filterOnlyLabs = cleanedProgrammes.filter((item) => item.type == "Lab");
  const orderLabs = filterOnlyLabs.sort((a, b) => {
    const orderA = a.order ? Number(a.order) : Number.MAX_SAFE_INTEGER;
    const orderB = b.order ? Number(b.order) : Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  });

  const orderTable = cleanedProgrammes.sort((a, b) => {
    const orderA = a.order ? Number(a.order) : Number.MAX_SAFE_INTEGER;
    const orderB = b.order ? Number(b.order) : Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  });

  const cardData = orderLabs.map(mapProgrammeToCardProgramme);
  const dataForTable = orderTable.map((item) =>
    mapProgrammeToRowData(item, cleanedFeature)
  );
  

  return (
    <>
      <ArabicProvider locale={params.locale}>
        <div
          className={`flex justify-between items-center pb-10 pt-20 lg:pb-10 lg:pt-10 ${
            params.locale === "ar" ? "rtl" : ""
          }`}
        >
          <h1 className={`${params.locale === "ar" ? "sans-serif-ar header-page lg:text-left" : "header-page lg:text-left"}`}>
            {params.locale === "ar" ? "المجتمع" : "Community"}
          </h1>
          <LanguageChanger></LanguageChanger>
        </div>
        <div className="sm:w-full pb-12">
          <TabsCJ rowData={dataForTable} cardData={cardData} />
        </div>
      </ArabicProvider>
    </>
  );
}

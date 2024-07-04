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

export default async function SinglePost({
  params,
}: {
  params: {
    topic: string;
    slug: string;
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

  const cleanedFeature = rawFeatures.items.map((item)=>featureMapper(item, rawProgrammes.items))

  const cleanedProgrammes = rawProgrammes.items.map((item) =>
    programmeMapper(
      item,
      rawPeople.items,
      rawPartners.items,
      rawProgrammes.items
    )
  );
  
  const filterOnlyLabs = cleanedProgrammes.filter((item) => item.type == 'Lab'  );
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
  const dataForTable = orderTable.map((item)=>mapProgrammeToRowData(item, cleanedFeature));

  return (
    <MainContainer isSideBar={false}>
      <ContentContainer>
        <h1 className="costa font-bold text-5xl md:text-7xl py-12 md:py-24 text-center">
          Community 
        </h1> 
        <div className="w-min-full]">
          <TabsCJ rowData={dataForTable} cardData={cardData} />
        </div>
      </ContentContainer>
    </MainContainer>
  );
}

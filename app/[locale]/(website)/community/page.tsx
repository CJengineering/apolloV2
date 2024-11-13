import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TabsCJ from "@/components/CJ-components/components-CJ/custom components/TabsCJ";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { getData } from "@/functions/api/getData";
import programmeMapper from "@/functions/transformers/programmeMapper";
import { mapProgrammeToRowData } from "@/functions/transformers/programmeCleanIntoRowTable";
import { mapProgrammeToCardProgramme } from "@/functions/transformers/porgrammeToCardProgramme";
import featureMapper from "@/functions/transformers/featureMapper";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
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

export default async function CommunityPage({
  params,
}: {
  params: {
    topic: string;
    slug: string;
    locale: string;
  };
}) {
  // const programmeId = getIdByDisplayName("Programmes");
  // const partnerId = getIdByDisplayName("Partners");
  // const peopleId = getIdByDisplayName("People");
  // const feautureId = getIdByDisplayName("Features");

  // const rawProgrammes = await getData(programmeId);
  // const rawPartners = await getData(partnerId);
  // const rawPeople = await getData(peopleId);
  // const rawFeatures = await getData(feautureId);
  const collectionNames = ["Programmes", "Partners", "People", "Features"];
  const dataFetches = collectionNames.map((id) =>
    getData(getIdByDisplayName(id))
  );
  const [rawProgrammes, rawPartners, rawPeople, rawFeatures] =
    await Promise.all(dataFetches);
  const includeTypes = [
    "a1e61c0cc2923f64b29ca5da3e41e427",
    "730944f73272c28e4ae4052f7611ceff",
    "bb96b247f8c989b67ca5ada5b5cb10df",
  ];

  rawProgrammes.items = rawProgrammes.items.filter((item) =>
    includeTypes.includes(item.fieldData.type)
  );

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
          className={`flex justify-between items-center pb-10 ${
            params.locale === "ar" ? "rtl" : ""
          }`}
        >
          <h1
            className={`${
              params.locale === "ar"
                ? "sans-serif-ar header-page lg:text-left"
                : "header-page lg:text-left"
            }`}
          >
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

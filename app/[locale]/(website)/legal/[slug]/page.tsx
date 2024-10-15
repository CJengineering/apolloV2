import { Item, LegalRawFields } from "@/app/interfaces";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import { getData } from "@/functions/api/getData";
import legalMapper from "@/functions/transformers/legalMapper";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

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

 
  const eventId = getIdByDisplayName("Legals");
  const productTest = await getData(eventId);
  const teamMembersRaw = productTest.items;
  const memberRaw :Item<LegalRawFields>[] = teamMembersRaw.filter(
    (item) => item.fieldData.slug === slug
  );
  const seoTitleArabic = memberRaw[0].fieldData["name-arabic"]? memberRaw[0].fieldData["name-arabic"] : '';
  const seoTitleEnglish = memberRaw[0].fieldData.name ? memberRaw[0].fieldData.name : '';
  const descriptionArabic = memberRaw[0].fieldData["name-arabic"]? memberRaw[0].fieldData["name-arabic"] : '';
  const descriptionEnglish = memberRaw[0].fieldData.name ? memberRaw[0].fieldData.name : '';
  const name = locale === 'ar'? seoTitleArabic   : seoTitleEnglish;
  const description = locale=== 'ar'? descriptionArabic : descriptionEnglish;
  // optionally access and extend (rather than replace) parent metadata
  
 
  return customMetaDataGenerator({
      useRawTitle: true,
      title: name,
      description: description,
  
    })
 
  
}

export default async function LegalPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const legalId = getIdByDisplayName("Legals");
  const legalData = await getData(legalId);

  const singleLegalData = legalData.items.find(
    (item) => item.fieldData.slug === params.slug
  );


  const cleanSingleLegalData = legalMapper(singleLegalData);

  return (
    <>
      <div className="py-12 md:py-24 flex flex-col items-center justify-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-center text-4xl serif font-bold">
            {cleanSingleLegalData.name}
          </h1>
        </div>
      </div>
      <div className="flex justify-center te">
        <div
          className="w-full prose prose-lg dark:prose-dark serif font-semibold"
          dangerouslySetInnerHTML={{ __html: cleanSingleLegalData.body }}
        ></div>
      </div>
    </>
  );
}

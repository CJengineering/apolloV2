import ContentContainer from "@/components/custom beta components/ContentContainer";
import { getData } from "@/functions/api/getData";
import legalMapper from "@/functions/transformers/legalMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import React from "react";

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

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
    <ContentContainer width="lg">

      <h1> {cleanSingleLegalData.name}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: cleanSingleLegalData.body }}
      ></div>
      <h1>Legal</h1>
    </ContentContainer>
  );
}

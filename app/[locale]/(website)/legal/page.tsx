import { Container } from "@/components/CJ-components/components-CJ/Container";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import { getData } from "@/functions/api/getData";
import legalMapper from "@/functions/transformers/legalMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import Link from "next/link";
import React from "react";

export default async function page() {
  const getIdLegal = getIdByDisplayName("Legals");
  const getDatalegal = await getData(getIdLegal);

  const cleanLegalData = getDatalegal.items.map((item) => legalMapper(item));
  return (
    <ContentContainer >
      <h1>Legal</h1>
      <div>
        {cleanLegalData.map((item) => (
          <Link key={item.slug} href={`/legal/${item.slug}`}>
            {item.name}
          </Link>
        ))}
      </div>
    </ContentContainer>
  );
}

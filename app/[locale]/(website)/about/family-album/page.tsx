import MainContainer from "@/components/custom beta components/MainContainer";
import React from "react";
import ContentFamily from "./content-family";
import { getData } from "@/functions/api/getData";

import { Item, PhotoFieldsRaw } from "@/app/interfaces";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import photoMapper from "@/functions/transformers/photoRawToLightBox";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
import { Metadata } from "next";

export const metadata: Metadata = customMetaDataGenerator({
  title: "Jameel family album",
  useRawTitle: true,
  description:
    "A selection of archival photos of the Jameel family from across the history of Community Jameel",
  ogType: "website",
  ogImage:
    "https://uploads-ssl.webflow.com/612cdb8a4fac760705621df5/64beaaeea2bdc1d6a424413a_JH%20HERITAGE%20PROJECTS_OG.jpg",
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community"],
});
export default async function page() {
  const dataPhotos = await getData("64aed077835b06888cf9e4c0");
  const peopleCollectionID = getIdByDisplayName("People");
  const programmeCollectionID = getIdByDisplayName("Programmes");
  const programmesRawData = await getData(programmeCollectionID);
  const peopleRawData = await getData(peopleCollectionID);
  const dataPhotosRaw: Item<PhotoFieldsRaw>[] = dataPhotos.items;
  const photos = dataPhotosRaw.map((item) =>
    photoMapper(item, programmesRawData.items, peopleRawData.items)
  );

  return (
    <div>
      <ContentContainer width="full" desktopWidth="large">
        <h1 className="header-page pb-3 pt-12 lg:pb-12 lg:pt-7 text-left">
          Family album
        </h1>
        <ContentFamily images={photos} />
      </ContentContainer>
    </div>
  );
}

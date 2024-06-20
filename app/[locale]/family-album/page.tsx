import MainContainer from "@/components/custom beta components/MainContainer";
import React from "react";
import ContentFamily from "./content-family";
import { getData } from "@/functions/api/getData";


import { Item, PhotoFieldsRaw } from "@/app/interfaces";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import photoMapper from "@/functions/transformers/photoRawToLightBox";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";

export default async function page() {
  const dataPhotos = await getData("64aed077835b06888cf9e4c0");
  const peopleCollectionID = getIdByDisplayName("People");
  const programmeCollectionID = getIdByDisplayName("Programmes");
  const programmesRawData = await getData(programmeCollectionID);
  const peopleRawData = await getData(peopleCollectionID);
  const dataPhotosRaw: Item<PhotoFieldsRaw>[] = dataPhotos.items;
  const photos = dataPhotosRaw.map((item) => photoMapper(item, programmesRawData.items, peopleRawData.items));

  return (
    <div>
      <MainContainer isSideBar={false}>
        <ContentContainer>
          <h1>Familly album</h1>
          <ContentFamily images={photos} />
        </ContentContainer>
      </MainContainer>
    </div>
  );
}

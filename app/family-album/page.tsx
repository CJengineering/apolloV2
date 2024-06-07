import MainContainer from "@/components/custom beta components/MainContainer";
import React from "react";
import ContentFamily from "./content-family";
import { getData } from "@/functions/api/getData";
import { Item, PhotoFieldsRaw } from "../interfaces";
import photoMapper from "@/functions/transformers/photoMapper";

export default async function page() {
  const dataPhotos = await getData('64aed077835b06888cf9e4c0')
  const dataPhotosRaw: Item<PhotoFieldsRaw>[] = dataPhotos.items
  const photos = dataPhotosRaw.map((item) => photoMapper(item)) 

  return (
    <div>

      <MainContainer isSideBar={false}>
        <h1>Familly album</h1>
        <ContentFamily images = {photos}/>
      </MainContainer>
    </div>
  );
}

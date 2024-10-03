import ContentContainer from "@/components/custom beta components/ContentContainer";
import { getData } from "@/functions/api/getData";
import legalMapper from "@/functions/transformers/legalMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import Image from "next/image"; 
import ankurImage from '@/public/images/Ankur Background Webpage.jpg'
import React from "react";
import TrailerModalButton from "@/components/CJ-components/components-CJ/custom components/TrailerModalButton";
import { Metadata } from "next";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
export const metadata: Metadata = customMetaDataGenerator({
  useRawTitle: true,
  title: "Ankur",
  description:
    "Community Jameel hosts and collaborates on events across the globe. Check out what's on and look back at some of our past events.",
  ogType: "website",
  ogImage: 'https://uploads-ssl.webflow.com/612cdb8a4fac760705621df5/61e6f19f486905791dcc1b27_JAMEEL_FAMILY_ARCHIVE_PHOTO.jpg',
  twitterCard: "summary_large_image",
  keywords: ["Community Jameel", "Jameel", "Community"],

})

export default async function AnkurPage({
  params,
}: {
  params: { slug: string; locale: string };
}) {
 

  return (
    <>
        <Image src={ankurImage} alt="Ankur" />
          <div className="py-12 md:py-24 flex flex-col items-center justify-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-center text-4xl serif font-bold"><TrailerModalButton videoUrl={"https://www.youtube.com/embed/Mk12OIaap20?si=YbJNMEiuaeOBTtyL"} /></h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full prose prose-lg dark:prose-dark serif font-semibold"
    
        ><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque enim maiores nisi quibusdam incidunt quod nostrum eum quae assumenda ratione, eveniet animi, temporibus cupiditate rerum voluptates labore exercitationem dolores consequatur?</p></div>
      </div>
    </>
  );
}

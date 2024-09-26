import TrailerModalButton from "@/components/CJ-components/components-CJ/custom components/TrailerModalButton";
import ContentContainer from "@/components/custom beta components/ContentContainer";

import React from "react";

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  return (
    <>
      <div className="py-12 md:py-24 flex flex-col items-center justify-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-center text-4xl serif font-bold"><TrailerModalButton videoUrl={"https://www.youtube.com/embed/Mziv6XjvYT8?si=s44bYfOaDGZadoNs"} /></h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full prose prose-lg dark:prose-dark serif font-semibold">
          <p>
            The golden age of modern and surrealist art in Egypt has long past.
            But two collectors – husband and wife, Adel and May – have built a
            collection of paintings and sculpture out of their love and passion
            for the artists they once knew. Interviewed in-depth among the works
            in their beautiful Egyptian home, find yourself transported through
            an oil-paint portal to a bygone age of cafés, circuses and cabarets,
            in the Mediterranean melting-pot of Alexandria.
          </p>
          <p>
            Produced for the exhibition 'Monaco-Alexandria: the grand detour:
            World-capitals and cosmopolitan Surrealism', 17 December 2021 to 2
            May 2022, at the Nouveau Musée National de Monaco, curated by Morad
            Montazami and Madeleine de Colnet for Zamân Books & Curating, with
            the exhibition publication, and the public and education programme,
            with the participation of Community Jameel and the support of the
            Alexis and Anne-Marie Habib Foundation.
          </p>
        </div>
      </div>
    </>
  );
}

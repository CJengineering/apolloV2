import { NewsRawFields } from "@/app/interfaces";
import FiltredNews from "@/components/CJ-components/components-CJ/FiltredNews";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import MainContainer from "@/components/custom beta components/MainContainer";
import NewsSmall from "@/components/custom beta components/NewsSmall";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import { getData } from "@/functions/api/getData";
import filterNewsItemsByPerson from "@/functions/filters/fillterRelatedPersonNews";
import mapItemToNewsMainProps from "@/functions/transformers/newsTransformer";
import teamProfileMapper from "@/functions/transformers/teamProfileMapper";
import React from "react";


export default async function page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const data = await getData("61ee828a15a3182ecebde53f");
  const teamMembersRaw = data.items;
  const memberRaw = teamMembersRaw.filter(
    (item) => item.fieldData.slug === params.slug
  );
  const member = teamProfileMapper(memberRaw[0]);

  const dataNews = await getData("61ee828a15a3185c99bde543");
  const sourcesAll = await getData("61ee828a15a3183f55bde545");
  const programmeAll = await getData("61ee828a15a3183d2abde540");

  const rawNewsArray = dataNews.items;
  const personId= memberRaw[0].id;
  const filteredNewsItems = rawNewsArray.filter((item) => item.fieldData["related-team-members"]?.includes(personId));
  const test = filteredNewsItems[0]

  const relatedNews = filteredNewsItems.map((item) =>
    mapItemToNewsMainProps(item, sourcesAll.items, programmeAll.items)
  );

  return (
    <>
    <ContentContainer width="full" desktopWidth="small">
    <div className="py-12 flex flex-col items-center justify-center">
        <div className="w-full pb-2 md:w-1/2">
          <h1 className="text-center text-4xl serif font-bold">{member.name}</h1>
        </div>
        <div className="w-full md:w-1/3">
          <p className="text-center mono uppercase font-normal">{member.position}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-1/3">
          <img src={member.imageUrl} alt={member.altTextImage} className="w-full h-auto object-cover"/>
        </div>
      </div>
      <div className="flex justify-center pt-12">
        <div className="w-full md:w-2/3 prose dark:prose-dark serif font-semibold"
          dangerouslySetInnerHTML={{
            __html: member.paragraphDescription ? member.paragraphDescription : "",
          }}
        ></div>
      </div>
      </ContentContainer>
    </>
  );
}

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
 const searchnews = rawNewsArray.find((item) => item.id === '6239dc108fcdf9ef5357b933');
  const filteredNewsItems = filterNewsItemsByPerson(
    rawNewsArray,
  '6239d4dc4a568b84d2bfb1cb'
  );
  const relatedNews = filteredNewsItems.map((item) =>
    mapItemToNewsMainProps(item, sourcesAll.items, programmeAll.items)
  );

  return (
    <MainContainer isSideBar={false}>
      <h1>Page</h1>

      <div className="p-4 bg-white shadow rounded-lg">
        <img
          src={member.imageUrl}
          alt={member.altTextImage}
          className="w-48 h-48 object-cover rounded-md"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">{member.name}</h2>
          <ul className="text-gray-600 space-y-2">
            <li>
              <span className="font-semibold">Description:</span>{" "}
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: member.paragraphDescription
                    ? member.paragraphDescription
                    : "",
                }}
              ></div>
            </li>
            <li>
              <span className="font-semibold">Meta Description:</span>{" "}
              {member.metaDescription}
            </li>
            <li>
              <span className="font-semibold">Position:</span> {member.position}
            </li>
            <li>
              <span className="font-semibold">Order:</span> {member.order}
            </li>
            <li>
              <span className="font-semibold">Filter:</span> {member.filter}
            </li>
          </ul>
          <SectionBanter title={"Related news"}>
     
            <div className="grid md:grid-cols-3">
              {relatedNews.map((article) => (
                <NewsSmall key={article.title} content={article} />
              ))}
            </div>
          </SectionBanter>
        </div>
      </div>
    </MainContainer>
  );
}

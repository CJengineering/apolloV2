import MainContainer from "@/components/custom beta components/MainContainer";
import { getData } from "@/functions/api/getData";
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
  const memberRaw = teamMembersRaw.filter((item) => item.fieldData.slug === params.slug);
  const member = teamProfileMapper(memberRaw[0]);
  return (
    <MainContainer isSideBar={false}>
      <h1>Page</h1>
   
      <div className="p-4 bg-white shadow rounded-lg">
      <img src={member.imageUrl} alt={member.altTextImage} className="w-48 h-48 object-cover rounded-md" />
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">{member.name}</h2>
        <ul className="text-gray-600 space-y-2">
          <li><span className="font-semibold">Description:</span>     <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: member.paragraphDescription ? member.paragraphDescription : ""}}
                ></div></li>
          <li><span className="font-semibold">Meta Description:</span> {member.metaDescription}</li>
          <li><span className="font-semibold">Position:</span> {member.position}</li>
          <li><span className="font-semibold">Order:</span> {member.order}</li>
          <li><span className="font-semibold">Filter:</span> {member.filter}</li>
        </ul>
      </div>
    </div>
    </MainContainer>
  );
}

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
      <div className="p-4 bg-white shadow rounded-lg">
      <img src={member.imageUrl} alt={member.altTextImage} className="w-48 h-48 object-cover rounded-md" />
      <div className="mt-4">
        <h1 className="costa text-2xl font-bold mb-2">{member.name}</h1>
        <ul className="text-gray-600 space-y-2">
        <li className="mono uppercase font-normal">{member.position}</li>
          <li><div className="serif font-normal" dangerouslySetInnerHTML={{ __html: member.paragraphDescription ? member.paragraphDescription : ""}}
                ></div></li>
        </ul>
      </div>
    </div>
    </MainContainer>
  );
}

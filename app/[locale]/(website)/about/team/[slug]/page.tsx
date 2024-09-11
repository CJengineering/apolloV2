import { NewsRawFields } from "@/app/interfaces";
import FiltredNews from "@/components/CJ-components/components-CJ/FiltredNews";
import ContentContainer from "@/components/custom beta components/ContentContainer";
import LanguageChanger from "@/components/custom beta components/LanguageChanger";
import MainContainer from "@/components/custom beta components/MainContainer";
import NewsCard from "@/components/custom beta components/NewsCard";
import NewsSmall from "@/components/custom beta components/NewsSmall";
import SectionBanter from "@/components/custom beta components/SectionBanter";
import { getData } from "@/functions/api/getData";
import filterNewsItemsByPerson from "@/functions/filters/fillterRelatedPersonNews";
import newsMapper from "@/functions/transformers/newsMapper";
import mapItemToNewsMainProps from "@/functions/transformers/newsTransformer";
import teamProfileMapper from "@/functions/transformers/teamProfileMapper";
import { getIdByDisplayName } from "@/functions/utils/findCollectionId";
import { getDisplayName } from "next/dist/shared/lib/utils";
import React from "react";

export default async function page({
  params,
}: {
  params: {
    slug: string;
    locale: string;
  };
}) {
  const data = await getData("61ee828a15a3182ecebde53f");
  const teamMembersRaw = data.items;
  const memberRaw = teamMembersRaw.filter(
    (item) => item.fieldData.slug === params.slug
  );
  const member = teamProfileMapper(memberRaw[0]);
  const programmeId = getIdByDisplayName("Programmes");
  const eventId = getIdByDisplayName("Events");
  const tagId = getIdByDisplayName("Tags");
  const peopleId = getIdByDisplayName("People");
  const sourceId = getIdByDisplayName("Sources");

  const dataNews = await getData("61ee828a15a3185c99bde543");
  const sourcesAll = await getData("61ee828a15a3183f55bde545");
  const programmeAll = await getData("61ee828a15a3183d2abde540");
  const peopleAll = await getData(peopleId);
  const tagAll = await getData(tagId);
  const eventAll = await getData(eventId);

  const personId = memberRaw[0].id;
  const filteredNewsItems = dataNews.items.filter((item) =>
    item.fieldData["related-team-members"]?.includes(personId)
  );

  const relatedNews = filteredNewsItems.map((item) =>
    mapItemToNewsMainProps(item, sourcesAll.items, programmeAll.items)
  );

  const relatedNewsToTeamMember = filteredNewsItems.map((item) =>
    newsMapper(
      item,
      programmeAll.items,
      peopleAll.items,
      sourcesAll.items,
      tagAll.items,
      eventAll.items
    )
  );

  const memberName = params.locale === "ar" ? member.nameArabic : member.name;
  const memberPosition =
    params.locale === "ar" ? member.postionArabic : member.position;
  const memberBiography =
    params.locale === "ar"
      ? member.biographyArabic
      : member.paragraphDescription;

  return (
    <ContentContainer width="full" desktopWidth="small">
      <LanguageChanger></LanguageChanger>
      <div className={params.locale === "ar" ? "rtl" : ""}>
        <div className="pb-12 pt-12 flex flex-col items-center justify-center">
          <div className="w-full pb-2 md:w-1/2">
          <h1 className="sans-serif font-bold text-3xl md:text-4xl lg:text-6xl pt-12 text-center">
        {memberName}
      </h1>
          </div>
          <div className="w-full md:w-1/3">
            <p className="text-center sans-serif text-lg font-normal">
              {memberPosition}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full md:w-1/3">
            <img
              src={member.imageUrl}
              alt={member.altTextImage}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <div
            className="prose sans-serif prose-xl dark:prose-dark"
            dangerouslySetInnerHTML={{
              __html: memberBiography ? memberBiography : "",
            }}
          ></div>
        </div>
      </div>
      {relatedNewsToTeamMember.length > 0 && (
        <>
          <div className="flex flex-col py-6">
            <div className="w-full h-px bg-slate-200"></div> {/* Separation Bar */}
          </div>
          <div className="pb-6"><h2 className="sans-serif font-bold text-3xl">Related</h2></div>
          
        </>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {relatedNewsToTeamMember.map((item) => (
          <NewsCard key={item.slug} content={item} locale={params.locale} />
        ))}
      </div>
    </ContentContainer>
  );
}

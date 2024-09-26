import { FieldDataTeamProfile, Item, NewsRawFields } from "@/app/interfaces";
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
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { customMetaDataGenerator } from "@/functions/utils/customMetadataGenerator";
type Props = {
  params: { slug : string, locale: string };

}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug= params.slug
  const locale = params.locale;

 
 
  const productTest = await getData("61ee828a15a3182ecebde53f");
  const teamMembersRaw = productTest.items;
  const memberRaw :Item<FieldDataTeamProfile>[] = teamMembersRaw.filter(
    (item) => item.fieldData.slug === slug
  );
  const name = locale === 'ar'? memberRaw[0].fieldData["name-arabic"] : memberRaw[0].fieldData.name;
  const description = locale=== 'ar'? memberRaw[0].fieldData["meta-description-arabic"] : memberRaw[0].fieldData["meta-description"];
  // optionally access and extend (rather than replace) parent metadata
  
 
  return customMetaDataGenerator({
      title: name,
      description: description,
      ogImage: memberRaw[0].fieldData.photo.url,
    })
 
  
}

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

  const hiresPhoto = member.photoHiRes;
  const memberName = params.locale === "ar" ? member.nameArabic : member.name;
  const memberPosition =
    params.locale === "ar" ? member.postionArabic : member.position;
  const memberBiography =
    params.locale === "ar"
      ? member.biographyArabic
      : member.paragraphDescription;

  return (
    <>
      
      <div className={params.locale === "ar" ? "rtl" : ""}>
  
  
  <div className="pb-6 pt-16 lg:pt-10 flex flex-col">
  <div className="flex items-center gap-x-3 pb-3 lg:pb-6">
    <div><p className={`underline hover:text-blue-800 ${params.locale === "ar" ? "sans-serif-ar" : "sans-serif"}`}><a href="/about/team">{params.locale === "ar" ? "فريق" : "Team"}</a></p></div><div><p className={`${params.locale === "ar" ? "sans-serif-ar" : "sans-serif"}`}><ChevronRightIcon className="w-4 h-4 text-gray-500" /></p></div><div><p className={`sans-serif ${params.locale === "ar" ? "sans-serif-ar" : ""}`}>{memberName}</p></div></div>
    <div className="flex justify-between">
    <div className="w-full pb-2 lg:w-2/3">
      <h1 className={`header-page ${params.locale === "ar" ? "sans-serif-ar" : "sans-serif"}`}>{memberName}</h1>
      
    </div>
    <LanguageChanger></LanguageChanger>
    </div>
    <div className="w-full lg:w-1/3">
      <p className={`sans-serif text-lg font-normal ${params.locale === "ar" ? "sans-serif-ar" : ""}`}>{memberPosition}</p>
    </div>
  </div>

  {/* Flex container to align the image with text wrapping */}
  <div className="flex-col">
  <div className={`w-full lg:w-[330px] mr-6 mb-6 ${params.locale === "ar" ? "mr-0 lg:w-[330px] lg:mr-0" : ""}`}>
    <img
      src={member.imageUrl}
      alt={member.altTextImage}
      className="w-full h-auto object-cover"
    />
    <p className={`text-xs font-normal uppercase hover:underline hover:text-blue-900 cursor-pointer pt-1 ${params.locale === "ar" ? "sans-serif-ar" : "mono"}`}>
      <a href={hiresPhoto}>{params.locale === "ar" ? "تنزيل صورة عالية الدقة" : "Download high-resolution photograph"}</a>
    </p>
  </div>
  {/* Biography text with prose for rich text formatting */}
  <div className={`pl-0 prose prose-2xl dark:prose-dark ${params.locale === "ar" ? "sans-serif-ar" : "sans-serif"}`}>
    <div
      dangerouslySetInnerHTML={{
        __html: memberBiography ? memberBiography : "",
      }}
    ></div>
  </div>
</div>


</div>

      {relatedNewsToTeamMember.length > 0 && (
        <>
          <div className="flex flex-col pt-3 pb-6">
            <div className="w-full h-px bg-slate-200"></div> {/* Separation Bar */}
          </div>
          <div className="pb-6"><h2 className="header-section pb-3">Related content</h2></div>
          
        </>
      )}
      <div className="grid grid-cols-1 gap-3">
        {relatedNewsToTeamMember.map((item) => (
          <NewsCard key={item.slug} content={item} locale={params.locale} />
        ))}
      </div>
      </>
  );
}
